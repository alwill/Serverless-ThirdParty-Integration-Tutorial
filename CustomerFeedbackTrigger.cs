using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

namespace AlexWill
{
    public static class CustomerFeedbackTrigger
    {
        [FunctionName("CustomerFeedbackTrigger")]
        public static async Task Run([BlobTrigger("customer-feedback/{name}")]string customerFeedBack, string name, ILogger log,
        [SignalR(HubName = "customerfeedback")] IAsyncCollector<SignalRMessage> signalRMessages)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {customerFeedBack.Length} Bytes");
            var customerFeedBackJson = JsonConvert.DeserializeObject<JObject>(customerFeedBack);

            await signalRMessages.AddAsync(new SignalRMessage
            {
                Target = "feedback",
                Arguments = new object[] { customerFeedBack }
            });
        }
    }
}
