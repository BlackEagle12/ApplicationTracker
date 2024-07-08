using ApplicationTracker.Dto;

namespace ApplicationTracker.Service
{
    internal interface IBaseService: IDisposable
    {
        Task<bool> SendEmail(EmailDto emailDto);
    }
}
