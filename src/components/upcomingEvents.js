import React, { useEffect, useState } from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import axios from 'axios';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const UpcomingEvents = ({pageTitle}) => {
    const [events, setEvents] = useState([]);
    const calendarID = process.env.GATSBY_APP_CALENDAR_ID;
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
        <section className="w-full h-auto py-4 ">
            <section className="container flex flex-col items-center w-full px-8 mx-auto max-w-max sm:px-0">
                <h2 className="mb-4 text-2xl font-semibold text-start"><FontAwesomeIcon icon={faCalendar} className='h-8 pr-4'/>Upcoming Events</h2>
                <ul className="flex flex-col w-full space-y-4">
                    {events?.map((event) => (
                        <li key={event.id} className="justify-center p-4 bg-white rounded-lg ">
                            <div className="flex items-center flex-1 w-auto mb-4 select-none sm:mb-0">
                                <div className="flex flex-col w-auto p-4 mr-4 text-center border-2 bg-cubScoutBlue rounded-xl md:w-1/4 w-min-1/4 w-max-1/4 border-cubScoutGold">
                                    <p className="w-full text-xs font-medium text-cubScoutGold">{ event.start.dateTime ? dayjs(event.start.dateTime).format("MM/DD/YYYY") : dayjs(event.start.date).format("MM/DD/YYYY") }</p>
                                    <p className="w-full text-2xl font-semibold text-cubScoutGold">{event.start.dateTime ? dayjs(event.start.dateTime).format("h:mm A") : "Multi-Day" }</p>
                                </div>
                                <div className="flex-1 hidden sm:block">
                                    <h1 className="mb-2 text-xl font-semibold"> <a href={event.htmlLink} target='_blank' rel='noreferrer'>{ event.summary }</a> </h1>
                                    <h2 className="mb-2 text-lg font-light">{ event.location }</h2>
                                </div>
                                <div className="flex flex-row justify-center items-center hover:bg-gray-900 rounded-xl py-2 md:px-4 md:py-2.5">
                                    <AddToCalendarButton
                                        name={event.summary}
                                        options={['Apple','Google','iCal','Microsoft365','MicrosoftTeams','Outlook.com','Yahoo']}
                                        location={event.location}
                                        description={event.description}
                                        startDate={event.start.dateTime ? dayjs(event.start.dateTime).format("YYYY-MM-DD") : dayjs(event.start.date).format("YYYY-MM-DD") }
                                        endDate={ event.end.dateTime ? dayjs(event.end.dateTime).format("YYYY-MM-DD") :  dayjs(event.end.date).format("YYYY-MM-DD")}
                                        startTime={ event.start.dateTime ? dayjs(event.start.dateTime).format("HH:mm") : "08:00" }
                                        endTime={ event.end.dateTime ? dayjs(event.end.dateTime).format("HH:mm") : "17:00" }
                                        timeZone={ event.start.timeZone ? event.start.timeZone : 'America/Detroit' }
                                        uid={ event.iCalUID }
                                        sequence={event.sequence}
                                        status={ event.status}
                                        organizer={'Pack 248|' + event.organizer.email}
                                        availability='busy'
                                        buttonStyle='round'
                                        listStyle='overlay'
                                        size='8|6|4'
                                        lightMode='bodyScheme'
                                        ></AddToCalendarButton>
                                </div>
                            </div>
                            <div className="flex-1 w-auto pl-1 md:hidden md:w-min-3/4 md:w-max-3/4">
                                <h1 className="mb-2 text-lg font-semibold"> <a href={event.htmlLink} target='_blank' rel='noreferrer'>{ event.summary }</a> </h1>
                                <h2 className="mb-2 text-sm font-light">{ event.location }</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}

export default UpcomingEvents;