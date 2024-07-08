using System.Diagnostics.CodeAnalysis;
using System.Net;

namespace ApplicationTracker.Dto
{
    public class ApiException : Exception
    {
        [NotNull]
        public HttpStatusCode StatusCode { get; set; }
        public string ErrorMessage { get; set; }
        public ApiException(HttpStatusCode httpStatusCode, string errorMessage)
        {
            ErrorMessage = errorMessage;
            StatusCode = httpStatusCode;
        }
    }
}
