const fs = require('fs').promises;
const path = require('path');
const process = require('process');
import dayjs from 'dayjs';
import axios from 'axios';

export function SendMail(email) {
    const {to, from, subject, message} = email;
    const apiKey = process.env.GATSBY_APP_GOOGLE_API_KEY;

    // create google Message 
    

const SendMail = async () => {
    try {
        const response = await axios.get(`https://gmail.googleapis.com/upload/gmail/v1/users/pack248mi@gmail.com/messages/send`, {
        params: {
            key: `${apiKey}`,
            timeMin: (new Date()).toISOString(),
            maxResults: 10,
            showDeleted: false,
            singleEvents: true,
            orderBy: 'startTime',
        },
        });
        setEvents(response.data.items);
    } catch (error) {
        console.error('Error fetching events', error);
    }
    };
    fetchEvents();
}

export default SendMail;