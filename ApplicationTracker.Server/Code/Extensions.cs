using ApplicationTracker.Data.Context;
using ApplicationTracker.Repo;
using ApplicationTracker.Service;
using Microsoft.EntityFrameworkCore;

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
        }
    }
}
