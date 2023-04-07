const PubNub = require('pubnub');

const credentials = {
    publishKey: 'pub-c-2af9b9d7-5808-4634-bc1f-980ccebc6567',
    subscribeKey: 'sub-c-98cf8b3c-6854-46ad-86ab-dd4dab2182c3',
    secretKey: 'sec-c-N2VmM2E3MzMtNGRiYy00NGM5LTk4MjktNzEyMDJkMDU2OWEy'
};

const CHANNELS = {
    TEST: 'TEST'
};

class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

        this.pubnub.addListener(this.listener());
    }

    listener() {
        return {
        
            message: messageObject => {
                const { channel, message } = messageObject;
                
                console.log(`Message received. Channel: ${channel}. Message: ${message}`);

            }
        };
        
    }

    publish({ channel, message }) {
        this.pubnub.publish({ channel, message });
    }
}


module.exports = PubSub;