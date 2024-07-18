using ApplicationTracker.Dto;
using ApplicationTracker.Dto.Models;

namespace ApplicationTracker.Service
{
    public interface ICommonService: IDisposable
    {
        Task<bool> SendEmail(EmailDto emailDto);
        Task<RefEnumTypeDto> GetRefEnumType(Enums.RefEnumType type);
        Task<RefEnumValueDto?> GetRefEnumValueById(int id);
        Task<RefEnumValueDto> AddRefEnumValue(RefEnumValue refEnumValue);
    }
}
