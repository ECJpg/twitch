
const tmi = require('tmi.js');
const initTime = require('index.js');

let fileData = '';

const client = new tmi.Client({
    channels: [ 'ray__c' ]
});

 let message = [];
 let messagesCount = 1;
 let timeSpentOnElement = TimeMe.getTimeOnElementInSeconds('index');

client.connect();

client.on('connected', () => {
    console.log("connected2");
});

client.on('message', (channel, tags, message, self) => {
    // if (messagesCount > 15) {
        // client.disconnect();
    // }

    // console.log("channel");
    // console.log(channel);
    // console.log("tags");
    // console.log(tags); 
    // console.log("message");
    // console.log(message);
    // console.log("self");
    // console.log(self);
    const serverInfo = () => {
        console.log();
        return 
    }

    const MessageElement = () => {
        `"username": tags['display-name'],
        "message": message`,
        "quebecNumber: adsfs"
    };
    message.push(...messagescount, new messageCount());
    messageCount++;
 
    TimeMe.callWhenUserLeaves(function(){
        console.log("The user is not currently viewing the page!");
    }, 5);

    // Executes every time a user returns
    TimeMe.callWhenUserReturns(function(){
        console.log("The user has come back!");
    });

    TimeRanges.fileData(__dirname, );

    TimeMe.initialize({
        currentPageName: "my-home-page", // current page
        idleTimeoutInSeconds: 30, // seconds 
        websocketOptions: { // optional
            websocketHost: "ws://your_host:your_port",
            appId: "insert-your-made-up-app-id"
        }
    });

    // ********
    // writeToHtml(callback, )
    // messages(tags['display-name'], `${object}`, quebecNumber);
    // ********

    function fetchData(callback, object, quebecNumber) {
        // code to fetch data from a server
        let data = new Object(1000);
        // invoke the callback function with the fetched data as an argument
        callback(data);
      }
      
      // define a callback function to process the fetched data
      function processData(data) {
        // code to process the data
        console.log(data);
      }
      
      // pass the processData function as a callback to the fetchData function
      fetchData(processData);

// try {
function messages(username, message, messageCount) {
    const messages = {
        "username":`${tags['display-name']}`,
        "message": `${message}`,
        "messageToCompare": `${username}${message}${messageCount}`
    } 
}}, 144)
