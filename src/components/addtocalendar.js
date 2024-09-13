function CreateEvent(event)  {
    console.log(event);
    const addToCalendarEvent = {
        title: event.summary,
        description: event.description,
        location: event.location,
        startTime: event.start.dateTime,
        endTime: event.end.dateTime
    }
    console.log(addToCalendarEvent);

    return addToCalendarEvent;
}

export default CreateEvent;