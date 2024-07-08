using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationTracker.Dto
{
    public class EmailConfigurations
    {
        public string? Host { get; set; }
        public string? DisplayName { get; set; }
        public int Port { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public bool EnableSSL { get; set; }
    }
}
