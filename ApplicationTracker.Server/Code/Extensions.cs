using System.Text;
using ApplicationTracker.Data.Context;
using ApplicationTracker.Mapper;
using ApplicationTracker.Repo;
using ApplicationTracker.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using ApplicationTracker.Dto;

namespace ApplicationTracker.Server
{
    public static class Extensions
    {
        public static void InjectContextDependencies(this IServiceCollection service, string connectinString)
        {
            service.AddDbContext<ApplicationTrackerDBContext>(options => options.UseSqlServer(connectinString));
        }

        public static void InjectSwaggerGen(this IServiceCollection service)
        {
            service.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ApplicationTracker.Server.Swagger", Version = "v1" });
                //support Auth from swagger
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    In = ParameterLocation.Header,
                    Description = "Please Enter a Valid Token",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type=ReferenceType.SecurityScheme,
                                Id="Bearer"
                            }
                        },
                        new string[]{}
                    }
                });
            });
        }
        public static void InjectDenendecies(this IServiceCollection service)
        {
            service.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            service.AddScoped<IUserService, UserService>();
            service.AddScoped<IAuthService, AuthService>();
            service.AddScoped<ICommonService, CommonService>();
            service.AddScoped<ITemplateService, TemplateService>();

            service.AddSingleton<UserMapper>();
            service.AddSingleton<AuthMapper>();
            service.AddSingleton<RefEnumTypeMapper>();
            service.AddSingleton<RefEnumValueMapper>();
            service.AddSingleton<UserSettingsMapper>();
            service.AddSingleton<EmailTemplateMapper>();
            service.AddScoped<AuthorizationFilter>();
        }

        public static void InjectJWTAuthentication(this IServiceCollection service, AppSettings appSettings)
        {
            var encryptionKey = Encryption.GetEncryptionKey(appSettings.RSAEncryptionKey);

            service.AddAuthentication("jwt")
                .AddJwtBearer("jwt", jwtOptions =>
                {
                    jwtOptions.Audience = "api1";
                    jwtOptions.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        ValidateLifetime = true,
                        LifetimeValidator = LifetimeValidator,
                        TokenDecryptionKey = new RsaSecurityKey(encryptionKey)
                    };
                });
        }

        private static bool LifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken securityToken, TokenValidationParameters validationParameters)
        {
            return expires != null && expires > DateTime.Now;
        }
    }
}
