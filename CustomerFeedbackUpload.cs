using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.Storage;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AlexWill
{
    public static class CustomerFeedbackUpload
    {
        [FunctionName("CustomerFeedbackUpload")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = "customerfeedback/{id}")] string body,
            [Blob("customer-feedback/{id}", FileAccess.Write)] out string feedbackBlob, ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            feedbackBlob = body;
            return (ActionResult)new OkObjectResult($"Success");
        }
    }
}
