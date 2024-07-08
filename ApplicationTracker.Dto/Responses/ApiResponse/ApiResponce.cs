using System.Diagnostics.CodeAnalysis;
using System.Net;

namespace ApplicationTracker.Dto
{
    public class ApiResponce
    {
        [NotNull]
        public HttpStatusCode StatusCode { get; set; }
        public dynamic? Data { get; set; }

        public ApiResponce(HttpStatusCode httpStatusCode, dynamic? data = null)
        {
            Data = data;
            StatusCode = httpStatusCode;
        }
    }
}
