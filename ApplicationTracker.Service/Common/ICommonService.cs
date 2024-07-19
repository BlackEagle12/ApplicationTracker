using ApplicationTracker.Dto;
using ApplicationTracker.Data.Models;

namespace ApplicationTracker.Service
{
    public interface ICommonService : IDisposable
    {
        Task<bool> SendEmail(EmailDto emailDto);
        Task<RefEnumType> GetRefEnumType(Enums.RefEnumType type);
        Task<RefEnumValue?> GetRefEnumValueById(int id);
        Task<RefEnumValue> AddRefEnumValue(Enums.RefEnumType type, string value, string description);
        Task<RefEnumValue> UpdateRefEnumValue(RefEnumValue refEnumValue);
    }
}
