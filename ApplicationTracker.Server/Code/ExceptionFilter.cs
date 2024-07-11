using System.Net;
using ApplicationTracker.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace ApplicationTracker.Server;

public class ExceptionFilter : IActionFilter, IOrderedFilter
{
    public int Order => int.MaxValue - 10;

    public void OnActionExecuted(ActionExecutedContext context)
    {

        if (context.Exception is ApiException handledException)
        {
            context.Result =
                new ObjectResult(new ApiResponce(
                        handledException.StatusCode,
                        handledException.ErrorMessage
                    ))
                {
                    StatusCode = (int)handledException.StatusCode,
                };

            context.ExceptionHandled = true;
        }

        if ((context.Exception is Exception ex) && !(context.Exception is ApiException))
        {
            context.Result =
                new ObjectResult(new ApiException(
                        HttpStatusCode.InternalServerError,
                        ex.Message
                    ))
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                };

            context.ExceptionHandled = true;
        }
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
    }
}
