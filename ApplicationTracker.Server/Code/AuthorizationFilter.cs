using System.Net;
using System.Security.Cryptography;
using ApplicationTracker.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace ApplicationTracker.Server;

public class AuthorizationFilter : Attribute, IAsyncActionFilter
{
    private readonly AppSettings _appSettings;
    public AuthorizationFilter(IOptions<AppSettings> appSettings)
    {
        _appSettings = appSettings.Value;
    }

    public async Task OnActionExecutionAsync(
        ActionExecutingContext context, ActionExecutionDelegate next)
    {

        var httpContext = context.HttpContext;
        var handler = new JsonWebTokenHandler();

        if (httpContext.Request.Headers.TryGetValue("Authorization", out var authorizationHeaderValues))
        {
            var authorizationHeader = authorizationHeaderValues.FirstOrDefault();

            if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
            {
                var token = authorizationHeader.Substring("Bearer ".Length).Trim();

                var encryptionKey = Encryption.GetEncryptionKey(_appSettings.RSAEncryptionKey);
                var signingKey = Encryption.GetSigningKey(ECCurve.NamedCurves.nistP256);

                var privateEncryptionKey = new RsaSecurityKey(encryptionKey) { KeyId = _appSettings.EncryptionKid };
                var publicSigningKey = new ECDsaSecurityKey(ECDsa.Create(signingKey.ExportParameters(false))) { KeyId = _appSettings.SigningKid };
                TokenValidationResult result = await handler.ValidateTokenAsync(
                        token,
                        new TokenValidationParameters
                        {
                            ValidAudience = "api1",
                            ValidIssuer = "https://idp.example.com",
                            // public key for signing
                            IssuerSigningKey = publicSigningKey,

                            // private key for encryption
                            TokenDecryptionKey = privateEncryptionKey
                        });

                if (result.IsValid)
                {
                    await next();
                }
                else
                {
                    context.Result = new UnauthorizedObjectResult(new ApiException(HttpStatusCode.Unauthorized, "Invalid Token"));
                }
            }
            else
            {
                context.Result = new UnauthorizedObjectResult(new ApiException(HttpStatusCode.Unauthorized, "Bearer token not found"));
            }
        }
        else
        {
            context.Result = new UnauthorizedObjectResult(new ApiException(HttpStatusCode.Unauthorized, "Authorization header not found"));
        }
    }
}