using System.Diagnostics.CodeAnalysis;

namespace ApplicationTracker.Dto;

public class LoginCredentialDto
{
    [NotNull]
    public string Email { get; set; }
    [NotNull]
    public string Password { get; set; }
}
