using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTracker.Service
{
    public interface IAuthService
    {
        Task<int> SendOtpToUser(string email);
    }
}
