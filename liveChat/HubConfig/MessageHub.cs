using liveChat.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace liveChat.HubConfig
{
    public class MessageHub:Hub
    {
        public async Task BroadcastMessage(MessageModel message) =>
            await Clients.All.SendAsync("message", message);
        
    }
}
