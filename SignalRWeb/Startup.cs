using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalRWeb.Startup))]
namespace SignalRWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }
    }
}
