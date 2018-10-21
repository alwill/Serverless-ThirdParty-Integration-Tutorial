using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AlexWill
{
    public static class SignalRConnection
    {
        [FunctionName("SignalRConnection")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            ILogger log, [SignalRConnectionInfo(HubName = "customerfeedback")] SignalRConnectionInfo connectionInfo)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            return connectionInfo == null ?
                new NotFoundObjectResult("No signalR connection could be found") :
                (ActionResult)new OkObjectResult(connectionInfo);
        }
    }
}
