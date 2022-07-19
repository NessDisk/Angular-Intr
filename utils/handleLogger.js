const {IncomingWebhook} = require("@slack/webhook")
const webHook = new IncomingWebhook(process.env.slack_webhook);

const loggerStream = {
    write: message => {
        webHook.send({
            text:message
                })
      
    },
};

module.exports = loggerStream