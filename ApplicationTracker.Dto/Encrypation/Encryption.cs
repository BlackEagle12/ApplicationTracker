using System.Security.Cryptography;

namespace ApplicationTracker.Dto;

public class Encryption
{
    private static RSA? EncryptionKey;
    private static ECDsa? SigningKey;

    private Encryption() { }


    public static RSA GetEncryptionKey(int rsaEncryptionKey)
    {
        if (EncryptionKey == null)
        {
            EncryptionKey = RSA.Create(rsaEncryptionKey);
        }

        return EncryptionKey;
    }

    public static ECDsa GetSigningKey(ECCurve curve)
    {
        if (SigningKey == null)
        {
            SigningKey = ECDsa.Create(curve);
        }

        return SigningKey;
    }

}