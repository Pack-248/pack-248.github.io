import * as React from 'react'
import Layout from '../components/layout'

const CalendarPage = () => {
  return (
    <Layout pageTitle="Calendar">
      <iframe title='Pack 248 Calendar' src="https://calendar.google.com/calendar/embed?height=768&wkst=1&ctz=America%2FDetroit&bgcolor=%23ffffff&showCalendars=0&showPrint=0&showTitle=0&src=cGFjazI0OG1pQGdtYWlsLmNvbQ&src=YTAyZjM5MDYwYTAxOTY0OGUzYzQzNjE4YjRhMTdjMDU0YWMxZjIxYTIyYjIzZTZjNDU5OTI4ZGMxMDUzZWZjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237CB342&color=%2333B679&color=%230B8043" className='border border-scoutPaleGray m-auto my-6 h-[700px] w-11/12'></iframe>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Pack Calendar</title>
export default CalendarPage