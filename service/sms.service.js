const twilio = require('twilio');

const { TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID, TWILIO_AUTH_TOKEN } = require('../config/config');

// const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendSms = async (message, phone) => {
  try {
    // console.log(`SMS start sending ~ number: ${phone}`)
    //
    // const smsResp = await client.messages.create({
    //   body: message,
    //   to: phone,
    //   messagingServiceSid: TWILIO_SERVICE_SID,
    // });
    //
    // console.log(`SMS resp ~ status: ${smsResp.status}`)
  } catch (e) {
    console.error(`SMS service: ${e.message}`);
  }
};

module.exports = {
  sendSms,
};
