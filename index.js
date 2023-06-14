const { Client } = require{"discord.js"};
const { Client } = new Client({intents: [131071]});

Client.config = require("./config.json");

client.login(client.config.token).then(() => {
    console.log(`Cliente ${client.user.username}`)
}) 