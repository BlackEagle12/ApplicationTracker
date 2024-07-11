namespace ApplicationTracker.Dto;

public class AppSettings
{
    public int RSAEncryptionKey { get; set; }
    public string? EncryptionKid { get; set; }
    public string? SigningKid { get; set; }
    public string[] ClientList { get; set; }
}
