//make a discord bot to clear a server's invites v14
const { Client, GatewayIntentBits } = require('discord.js');

//intents
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildInvites] });


client.on('ready', async () => {
    
    clearInvites();
    GetInvitesNumber();
   
});

async function clearInvites() {
    var guild = client.guilds.cache.get('1098887371015069696');
    
    //use a for loop to delete all invites and use await and async to wait for the invites to be deleted
    guild.invites.fetch().then(async invites => {
        for (const invite of invites.values()) {
            //if (invite.uses == 0 || invite.uses == 1 && invite.maxAge < 6 * 24 * 60 * 60 * 1000) {
                await invite.delete();
                console.log('deleted invite ' + invite.code + 'with ' + invite.uses + " uses")
            //}
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

    });
}

async function GetInvitesNumber(){
    //get the number of invites in the server
    var guild = client.guilds.cache.get('1098887371015069696');
    guild.invites.fetch().then(invites => {
        console.log(invites.size);
    }
    );
}


client.login('your-token');