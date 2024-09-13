import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
//import CreateEvent from './addtocalendar';
//import AddToCalendar from 'react-add-to-calendar';

const UpcomingEvents = ({pageTitle}) => {
    const [events, setEvents] = useState([]);
    const calendarID = 'pack248mi@gmail.com';//process.env.REACT_APP_CALENDAR_ID
    const apiKey = 'AIzaSyBdFOlcZwF8lmll4J2MP2tz3noHx1QSaPI';//process.env.REACT_APP_GOOGLE_API_KEY
    //const token = 'ya29.a0AcM612xtI4wL2kVFkslXkS-AHqVqC4SueE--hU6AKy83RmkJTannbNiHUbOBDgVzOuyxaWpDb4lii0U1ExHUEkSS2eLqx-_Y1JBbqxU7UUKKCrKIFn3n8akQ5alR0B_Zf4sEl9_phx4m_EJATsfnek7tWo566FPnaSqmriUHaCgYKAVUSARISFQHGX2Miylw_SxmovvScqAk0v6mw7g0175';
    const clientId = '74126064444-dtsimjjd8eh19p0kgvajhk9lfjd8h183.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                apiKey: `${apiKey}`,
                clientId: `${clientId}`,
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                scope: 'https://www.googleapis.com/auth/calendar.readonly',
            }).then(() => {
                gapi.client.calendar.events.list({
                calendarId: `${calendarID}`,
                timeMin: (new Date()).toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: 'startTime',
                }).then(response => {
                const events = response.result.items;
                console.log(events);
                setEvents(events);
                });
            });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    return (
        <section className=" py-4 h-auto w-full">
            <section className="container flex flex-col items-center w-full max-w-3xl px-8 mx-auto sm:px-0">
                <h2 className="mb-4 text-2xl font-semibold text-start"><FontAwesomeIcon icon={faCalendar} className='h-8 pr-4'/>Upcoming Events</h2>
                <ul className="flex flex-col w-full space-y-4">
                    {events?.map((event) => (
                        <li key={event.id} className="p-4 bg-white rounded-lg">
                            <div className="flex items-center flex-1 mb-4 select-none sm:mb-0">
                                <div className="bg-[#ECEFF8] rounded-xl p-4 text-center mr-4">
                                    <p className="text-xs font-medium">{ dayjs(event.start.dateTime).format("MM/DD/YYYY") }</p>
                                    <p className="text-2xl font-semibold">{ dayjs(event.start.dateTime).format("h:mm A") }</p>
                                </div>
                                <div className="flex-1 hidden sm:block">
                                    <h1 className="mb-2 font-semibold"> { event.summary } </h1>
                                    <p className="text-sm">{event.description}</p>
                                </div>
                                <div className="flex flex-row justify-center items-center hover:bg-gray-900 rounded-xl px-4 py-2.5 group">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-5 h-5 mr-1 strokeCurrent group-hover:stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                    </svg> */}
                                    {/* <AddToCalendar event={CreateEvent(event)} /> */}
                                    {/* <a href=$'https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates={ event.start.datetime.replace("-","").replace(":","") }%2F{ event.end.datetime.replace(":","").replace("-","") }&stz={ event.start.timeZone }&etz={ event.end.timeZone }&details={ event.description }&location={ event.location }&text={ event.summary }' target='_blank' rel='noreferrer'> */}
                                        {/* <p className="text-xs font-medium text-gray-800 group-hover:text-white"> Add to calender</p> */}
                                    {/* </a> */}
                                </div>
                            </div>
                            <div className="flex-1 pl-1 sm:hidden">
                                <h1 className="mb-2 font-semibold"> {event.summary} </h1>
                                <p className="text-sm">{ event.description }</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}

export default UpcomingEvents;