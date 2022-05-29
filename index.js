// *************************************//
// Hakathon Slact Bot for Iknite space  //
// *************************************//

// Steps
// **************

// 1) Start by creating a slack Api account
// 2) Create a bot
// 3) Create a seprate testing channel on slack
// 4) Add the bot to the testing channel

const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(
  "xoxb-3164401680611-3591394895410-tNNkjzyDkpmcWCyJDnIkCo2i",
  {
    logLevel: LogLevel.DEBUG,
  }
);

const SlackBot = require("slackbots");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

// Post a message to a channel your app is in using ID and message text
async function publishMessage(text) {
  try {
    const result = await client.chat.postMessage({
      token: "xoxb-3164401680611-3591394895410-tNNkjzyDkpmcWCyJDnIkCo2i",
      channel: "C03HD4BM490",
      text: text,
    });

    // Print result, which includes information about the message (like TS)
    console.log("successfully");
  } catch (error) {
    console.error(error);
    console.log("unsuccessfully");
  }
}

//chande the console dot log calls to the appropriate function calls to send the respectice messages
function checkEvents() {
  setTimeout(function () {
    var currentDateTime = new Date();
    // console.log("The current date time is as follows:");
    console.log("" + currentDateTime);
    // var resultInSeconds=currentDateTime.getTime() / 1000;
    let timearray = ("" + currentDateTime).match(/[0-9]+/g);
    console.log(timearray);
    if (timearray[0] == 30 && timearray[2] == 8 && timearray[3] >= 30) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    //Remindals for stand up//____________________________________________________________
    if (
      /Sat/.test("" + currentDateTime) &&
      timearray[2] == 8 &&
      timearray[3] >= 30
    ) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    if (
      /Fri/.test("" + currentDateTime) &&
      timearray[2] == 8 &&
      timearray[3] >= 30
    ) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    if (
      /Mon/.test("" + currentDateTime) &&
      timearray[2] == 8 &&
      timearray[3] >= 30
    ) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    if (
      /Tue/.test("" + currentDateTime) &&
      timearray[2] == 8 &&
      timearray[3] >= 30
    ) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    if (
      /Wed/.test("" + currentDateTime) &&
      timearray[2] == 8 &&
      timearray[3] >= 30
    ) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    if (
      /Thur/.test("" + currentDateTime) &&
      timearray[2] == 8 &&
      timearray[3] >= 30
    ) {
      // console.log("stand up starts in a bit")
      publishMessage("stand up starts in a bit");
    }
    //_______________________________________________________________________________________
    //Remindals for Hackathon//____________________________________________________________
    if (
      /Sat/.test("" + currentDateTime) &&
      timearray[2] == 11 &&
      timearray[3] >= 0 &&
      timearray[3] <= 30
    ) {
      // console.log("Hackathon starts in a bit")
      publishMessage("Hackathon starts Now");
    }
    //______________________________________________________________________________________
    //Remindals for Presentataion//____________________________________________________________
    if (
      /Sat/.test("" + currentDateTime) &&
      timearray[2] == 9 &&
      timearray[3] >= 0 &&
      timearray[3] <= 30
    ) {
      // console.log("Presentation starts in a bit")
      publishMessage("Prentation starts in a bit");
    }
    //______________________________________________________________________________________
    //Remindals for Pitch Friday//____________________________________________________________
    if (
      /Fri/.test("" + currentDateTime) &&
      timearray[2] == 9 &&
      timearray[3] >= 30
    ) {
      // console.log("Pitch friday starts in a bit")
      publishMessage("Pitch starts in a bit");
    }
    //______________________________________________________________________________________
    //Remindals for Operation meeting//____________________________________________________________
    if (
      /Mon/.test("" + currentDateTime) &&
      timearray[2] == 16 &&
      timearray[3] >= 30
    ) {
      // console.log("Pitch friday starts Now")
      publishMessage("Operation meeting starts in a bit");
    }
    //______________________________________________________________________________________
    checkEvents();
  }, 10000);
}
checkEvents();
