const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const createOAuth2Client = () => {
  return new OAuth2(
    'YOUR_CLIENT_ID',
    'YOUR_CLIENT_SECRET',
    'YOUR_REDIRECT_URI'
  );
};

const getAccessToken = async (oauth2Client) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.send'],
  });

  console.log('Authorize this app by visiting this url:', authUrl);
  // After user authorizes, they will get a code to enter here
  const { tokens } = await oauth2Client.getToken('AUTHORIZATION_CODE');
  oauth2Client.setCredentials(tokens);
};

const sendEmail = async (oauth2Client, email) => {
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  const raw = Buffer.from(email).toString('base64');
  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: raw,
    },
  });
  console.log('Email sent:', res.data);
};

module.exports = { createOAuth2Client, getAccessToken, sendEmail };
