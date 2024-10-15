import React, { useEffect, useState } from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import axios from 'axios';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const DenCalendar = ({pageTitle}) => {
    const [events, setEvents] = useState([]);
    var calendarID = "";

    switch (pageTitle){
        case "Tiger":
            calendarID = process.env.GATSBY_APP_TIGER_CALENDAR_ID;
            break;
        case "Wolf":
            calendarID = process.env.GATSBY_APP_WOLF_CALENDAR_ID;
            break;
        case "Bear":
            calendarID = process.env.GATSBY_APP_BEAR_CALENDAR_ID;
            break;
        case "Webelos":
            calendarID = process.env.GATSBY_APP_WEBELOS_CALENDAR_ID;
            break;
        case "Arrow Of Light":
            calendarID = process.env.GATSBY_APP_AOL_CALENDAR_ID;
            break;
        case "Lion":
            calendarID = process.env.GATSBY_APP_LION_CALENDAR_ID;
            break;
        default:
            calendarID = process.env.GATSBY_APP_CALENDAR_ID;
            break;
    }

    const apiKey = process.env.GATSBY_APP_GOOGLE_API_KEY;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`https://content.googleapis.com/calendar/v3/calendars/${calendarID}/events`, {
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
        }, [apiKey,calendarID]);

    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold text-start"><FontAwesomeIcon icon={faCalendar} className='h-8 pr-4'/>Upcoming Events</h2>
            <ul className='list-none'>
            {events?.map((event) => (
                <li key={event.id}><span className='mr-4'>{ event.start.dateTime ? dayjs(event.start.dateTime).format("MM/DD/YYYY") : dayjs(event.start.date).format("MM/DD/YYYY") }</span><span className='mr-4'>{event.start.dateTime ? dayjs(event.start.dateTime).format("h:mm A") : "Multi-Day" }</span><span><a href={event.htmlLink} target='_blank' rel='noreferrer'>{ event.summary }</a></span></li>
            ))}
            </ul>
        </div>
    )
}

export default DenCalendar;



