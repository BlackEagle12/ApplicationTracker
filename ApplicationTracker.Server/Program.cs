using ApplicationTracker.Dto;
using ApplicationTracker.Server;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.

builder.Services.AddControllers(options =>
{
    options.Filters.Add<ExceptionFilter>();
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

IConfigurationSection appSettingsSection = builder.Configuration.GetSection("AppSettings");
builder.Services.Configure<AppSettings>(appSettingsSection);
var appSettings = appSettingsSection.Get<AppSettings>();

var emailConfigurationSection = builder.Configuration.GetSection("EmailConfigurations");
builder.Services.Configure<EmailConfigurations>(emailConfigurationSection);



builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins(appSettings!.ClientList)
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

builder.Services.InjectSwaggerGen();
builder.Services.InjectDenendecies();
builder.Services.InjectContextDependencies(builder.Configuration.GetConnectionString("Dev")!);

builder.Services.InjectJWTAuthentication(appSettings!);


var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
