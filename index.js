// *************************************//
// Hakathon Slact Bot for Iknite space  //
// *************************************//


// Steps
// **************

// 1) Start by creating a slack Api account
// 2) Create a bot
// 3) Create a seprate testing channel on slack
// 4) Add the bot to the testing channel
// 5) 


const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient("xoxb-3164401680611-3591394895410-XJkzJZS5963Mkl8BTO6M3HKe", {
  logLevel: LogLevel.DEBUG
});

const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()




// Post a message to a channel your app is in using ID and message text
async function publishMessage(id, text) {
    try {
      const result = await client.chat.postMessage({
        token: "xoxb-3164401680611-3591394895410-XJkzJZS5963Mkl8BTO6M3HKe",
        channel: id,
        text: text
      });
        console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  }
  
  // publishMessage("C03HD4BM490"," working test:tada:");


function remind(dateAndTime,message){

}