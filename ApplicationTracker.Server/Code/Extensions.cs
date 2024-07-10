using System.Text;
using ApplicationTracker.Data.Context;
using ApplicationTracker.Mapper;
using ApplicationTracker.Repo;
using ApplicationTracker.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace ApplicationTracker.Server
{
    public static class Extensions
    {
        public static void InjectContextDependencies(this IServiceCollection service, string connectinString)
        {
            service.AddDbContext<ApplicationTrackerDBContext>(options => options.UseSqlServer(connectinString));
        }

        public static void InjectDenendecies(this IServiceCollection service)
        {
            service.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            service.AddScoped<IUserService, UserService>();
            service.AddScoped<IAuthService, AuthService>();

            service.AddSingleton<UserMapper>();
            service.AddSingleton<AuthMapper>();
        }

        public static IServiceCollection AddJWTAuthentication(this IServiceCollection service, string? EncryptionKey)
        {
            byte[] signingKey = Encoding.UTF8.GetBytes(EncryptionKey);

            service.AddAuthentication(authOptions =>
                {
                    authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(jwtOptions =>
                {
                    jwtOptions.SaveToken = true;
                    jwtOptions.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(signingKey),
                        ValidateLifetime = true,
                        LifetimeValidator = LifetimeValidator
                    };
                });

            return service;
        }

        private static bool LifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken securityToken, TokenValidationParameters validationParameters)
        {
            return expires != null && expires > DateTime.Now;
        }
    }
}
