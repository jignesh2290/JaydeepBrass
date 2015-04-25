using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Mohindra.Startup))]
namespace Mohindra
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
