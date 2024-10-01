import React from 'react'
import Layout from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from "gatsby"
import EmailLink from '../components/emaillink'

library.add(fab);
library.add(fas);

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Pack 248" } }) {
          frontmatter {
            title
            location
            cubmaster
            cubmasteremail
            assistantcubmaster
            assistantcubmasteremail
            date
            committeechair
            committeechairemail
            charteredorgrep
            charteredorgrepemail
            treasurer
            treasureremail
            recruiting
            recruitingemail
            communications
            communicationsemail
            advancement
            advancementemail
            membership
            membershipemail
            chiefpontiac
            chiefpontiacemail
          }
          html
        }
  }`

const PackPage = ({data}) => {

  const { markdownRemark } = data;

  return (
    <Layout pageTitle="Pack">
    <div className='flex w-full h-full m-auto text-scoutWarmGray '>
      <div className='w-4/5 m-6 prose prose-base max-w-none'>
      <a className='no-underline' href='mailto:pack248mi@gmail.com'><h1 className='prose-h1'>{markdownRemark.frontmatter.title} - {markdownRemark.frontmatter.location}</h1></a>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-cubScoutBlue'>Cubmaster: <span className='font-lg text-scoutDarkGray'><EmailLink className='no-underline text-scoutDarkGray' personName={markdownRemark.frontmatter.cubmaster} personEmail={markdownRemark.frontmatter.cubmasteremail}/></span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-cubScoutBlue'>Assistant Cubmaster: <span className='font-lg text-scoutDarkGray'><EmailLink className='no-underline text-scoutDarkGray' personName={markdownRemark.frontmatter.assistantcubmaster} personEmail={markdownRemark.frontmatter.assistantcubmasteremail}/></span></h2>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <div className='md:hidden'>
          <h3 className='ml-6 text-2xl text-cubScoutPaleBlue'>Dens</h3>
          <ul className='grid grid-cols-2'>
            <li className='list-none'><a className='no-underline text-lionYellow' href='/lion-den'>Lion</a></li>
            <li className='list-none'><a className='no-underline text-tigerOrange' href='/tiger-den'>Tiger</a></li>
            <li className='list-none'><a className='no-underline text-wolfRed' href='/wolf-den'>Wolf</a></li>
            <li className='list-none'><a className='no-underline text-bearBlue' href='/bear-den'>Bear</a></li>
            <li className='list-none'><a className='no-underline text-webelosGreen' href='/webelos-patrol'>Webelos Patrol</a></li>
            <li className='list-none'><a className='no-underline text-aolKhaki' href='/aol-patrol'>Arrow of Light Patrol</a></li>
          </ul>
          <div class='grid grid-cols-2 mt-4'>
            <span>Committee Chair:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.committeechair} personEmail={markdownRemark.frontmatter.committeechairemail}/></span>
            <span>Charted Org Rep:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.charteredorgrep} personEmail={markdownRemark.frontmatter.charteredorgrepemail}/></span>
            <span>Cubmaster:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.cubmaster} personEmail={markdownRemark.frontmatter.cubmasteremail}/></span>
            <span>Assistant Cubmaster:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.assistantcubmaster} personEmail={markdownRemark.frontmatter.assistantcubmasteremail}/></span>
            <span>Communications:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.communications} personEmail={markdownRemark.frontmatter.communicationsemail}/></span>
            <span>Treasurers:</span><span className='ml-4 no-underline font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.treasurer} personEmail={markdownRemark.frontmatter.treasureremail}/></span>
            <span>Advancement:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.advancement} personEmail={markdownRemark.frontmatter.advancementemail}/></span>
            <span>Membership:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.membership} personEmail={markdownRemark.frontmatter.membershipemail}/></span>
            <span>Chief Pontiac Trail:</span><span className='ml-4 t font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.chiefpontiac} personEmail={markdownRemark.frontmatter.chiefpontiacemail}/></span>
            <span>Recruiting:</span><span className='ml-4 font-extralight'><EmailLink className='no-underline font-extralight' personName={markdownRemark.frontmatter.recruiting} personEmail={markdownRemark.frontmatter.recruitingemail}/></span>
          </div>
          <div className='grid grid-cols-1 grid-rows-3 mt-4'>
            <span className='font-bold list-none '><FontAwesomeIcon icon={['fas', 'envelope']}/><span className='ml-4 font-extralight'><a href="mailto:pack248mi@gmail.com" target="_blank" rel="noreferrer" className='no-underline font-extralight'>pack248mi@gmail.com</a></span></span>
            <span className='font-bold list-none '><FontAwesomeIcon icon={['fab', 'facebook']}/><span className='ml-4 font-extralight'><a href="https://www.facebook.com/groups/Eriepack248/" target="_blank" rel="noreferrer" className='no-underline font-extralight'>EriePack248</a></span></span>
            <span className='font-bold list-none '><FontAwesomeIcon icon={['fas', 'globe']}/><span className='ml-4 font-extralight'><a href="https://pack248.org" target="_blank" rel="noreferrer"  className='no-underline font-extralight'>Website</a></span></span>
          </div>
        </div>
        <p>Content correct as of {markdownRemark.frontmatter.date}</p>
      </div>
      <div className='hidden md:block md:rounded-lg md:m-6 md:bg-cubScoutBlue'>
        <img src="../images/logo/Pack 248 Logo-gh-dark.png" className='mt-6 rounded-lg w-80' alt={ markdownRemark.frontmatter.title + ' Logo'} />
        <h3 className='ml-6 text-2xl text-cubScoutPaleBlue'>Dens</h3>
        <ul className='mb-6 ml-6'>
          <li className='list-none'><a className='no-underline text-lionYellow' href='/lion-den'>Lion</a></li>
          <li className='list-none'><a className='no-underline text-tigerOrange' href='/tiger-den'>Tiger</a></li>
          <li className='list-none'><a className='no-underline text-wolfRed' href='/wolf-den'>Wolf</a></li>
          <li className='list-none'><a className='no-underline text-bearBlue' href='/bear-den'>Bear</a></li>
          <li className='list-none'><a className='no-underline text-webelosGreen' href='/webelos-patrol'>Webelos Patrol</a></li>
          <li className='list-none'><a className='no-underline text-aolKhaki' href='/aol-patrol'>Arrow of Light Patrol</a></li>
        </ul>
        <h3 className='ml-6 text-2xl text-cubScoutPaleBlue'>Leadership</h3>
        <ul className='mb-6 ml-6'>
          <li className='font-bold list-none text-scoutTan'>Committee Chair: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.committeechair} personEmail={markdownRemark.frontmatter.committeechairemail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Charted Org Rep: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.charteredorgrep} personEmail={markdownRemark.frontmatter.charteredorgrepemail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Cubmaster: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.cubmaster} personEmail={markdownRemark.frontmatter.cubmasteremail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Assistant Cubmaster: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.assistantcubmaster} personEmail={markdownRemark.frontmatter.assistantcubmasteremail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Communications: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.communications} personEmail={markdownRemark.frontmatter.communicationsemail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Treasurers: <br/><span className='ml-4 no-underline text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.treasurer} personEmail={markdownRemark.frontmatter.treasureremail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Advancement: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.advancement} personEmail={markdownRemark.frontmatter.advancementemail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Membership: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.membership} personEmail={markdownRemark.frontmatter.membershipemail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Chief Pontiac Trail: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.chiefpontiac} personEmail={markdownRemark.frontmatter.chiefpontiacemail}/></span></li>
          <li className='font-bold list-none text-scoutTan'>Recruiting: <br/><span className='ml-4 text-scoutLightTan font-extralight'><EmailLink className='no-underline text-scoutLightTan font-extralight' personName={markdownRemark.frontmatter.recruiting} personEmail={markdownRemark.frontmatter.recruitingemail}/></span></li>
        </ul>
        <h3 className='ml-6 text-2xl text-cubScoutPaleBlue'>Contact</h3>
        <ul className='mb-6 ml-6'>
        <li className='font-bold list-none text-scoutTan'><FontAwesomeIcon icon={['fas', 'envelope']}/><span className='ml-4 text-scoutLightTan font-extralight'><a href="mailto:pack248mi@gmail.com" target="_blank" rel="noreferrer" className='no-underline text-scoutLightTan font-extralight'>pack248mi@gmail.com</a></span></li>
        <li className='font-bold list-none text-scoutTan'><FontAwesomeIcon icon={['fab', 'facebook']}/><span className='ml-4 text-scoutLightTan font-extralight'><a href="https://www.facebook.com/groups/Eriepack248/" target="_blank" rel="noreferrer" className='no-underline text-scoutLightTan font-extralight'>EriePack248</a></span></li>
        <li className='font-bold list-none text-scoutTan'><FontAwesomeIcon icon={['fas', 'globe']}/><span className='ml-4 text-scoutLightTan font-extralight'><a href="https://pack248.org" target="_blank" rel="noreferrer"  className='no-underline text-scoutLightTan font-extralight'>Website</a></span></li>
        <li className='flex list-none text-scoutTan font-extralight'>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='h-8 w-8 -ml-[7px] mr-2 fill-scoutTan' viewBox="0 0 612 792">
          <g>
            <path d="M246.82,384.82c-8.61-20.66-23.04-35.37-43.99-43.44c-11.26-4.34-22.85-7.18-35-6.56c-14.13,0.72-26.44,5.37-34.65,17.74              c-3.87,5.83-5.68,12.4-6.46,19.3c-0.74,6.55-0.46,13.04,0.91,19.48c1.77,8.26,6.25,14.94,12.17,20.78c0.51,0.5,0.99,1.02,1.46,1.55              c0.07,0.08,0.06,0.24,0.16,0.68c-0.58,0-1.12,0.1-1.61-0.01c-20.14-4.71-39.05-12.12-54.68-26.13              c-13.76-12.33-23.42-27.31-27.8-45.44c-3.36-13.91-2.74-27.68,1.39-41.34c3.04-10.05,6.88-19.77,12.66-28.6              c7.98-12.19,18.93-21.15,31.58-28.08c15.44-8.46,32.17-11.57,49.6-10.55c19.39,1.13,36.9,7.74,52.64,19.17              c14.49,10.52,25.87,23.91,36.1,38.4c1.93,2.74,3.83,5.51,6.04,8.13c-1.1-2.83-2.13-5.7-3.31-8.5              c-5.13-12.14-10.49-24.19-15.42-36.42c-5.33-13.24-8.98-26.97-10.3-41.23c-1.31-14.25,0.37-28.26,3.9-42.07              c6.17-24.14,16.47-46.57,28.27-68.38c9.25-17.11,19.09-33.92,27-51.71c4.61-10.37,8.62-21.01,12.9-31.53              c0.28-0.7,0.59-1.39,0.87-2.06c2.3,0.48,3.1,2.24,3.94,3.9c4.59,8.98,9.07,18.01,13.74,26.94c11.8,22.63,23.63,45.24,35.55,67.81              c9.51,18,17.27,36.66,22.05,56.51c4.88,20.26,4.45,40.45-0.31,60.67c-4.11,17.44-10.89,33.91-18,50.27              c-1.44,3.32-2.86,6.65-4.07,10.12c2.09-2.86,4.13-5.75,6.27-8.57c10.44-13.72,22.2-26.12,36.61-35.77              c14.6-9.78,30.64-15.34,48.24-16.27c20.38-1.08,39.32,3.43,56.29,14.93c17.55,11.9,29.38,28.29,35.52,48.48              c9.17,30.15,3.75,57.77-16.06,82.33c-8.38,10.38-19.16,17.83-31.08,23.66c-10.67,5.22-21.93,8.71-33.53,11.14              c-0.36,0.07-0.73,0.08-1.61,0.17c1.08-1.32,1.84-2.34,2.68-3.27c6.67-7.31,11.66-15.62,13.13-25.48              c2.5-16.75-1.62-31.5-14.91-42.77c-6.08-5.16-13.51-7.51-21.37-8.38c-15.13-1.68-29.38,1.69-43.18,7.64              c-9.05,3.9-17.31,9-24.32,15.98c-7.83,7.79-13.22,17.13-17.26,27.59c2.24-0.45,3.26,0.93,4.08,2.49              c5.95,11.2,6.38,26.54-5.07,36.79c-0.43,0.38-0.81,1.24-0.68,1.75c1.56,6.36,3.48,12.59,7.13,18.12c5.7,8.66,12.75,10.51,22.01,7.9              c10.52-2.96,15.95-10.49,16.26-21.43c0.22-8-1.43-15.66-3.6-23.26c-0.13-0.47-0.23-0.95,0.05-1.74c1.45,1.31,2.96,2.55,4.33,3.94              c5.48,5.58,11.01,11.12,15.21,17.8c7.74,12.3,9.52,25.43,5.66,39.4c-2.57,9.3-7.27,17.28-14.78,23.38              c-9.38,7.62-20.25,9.51-31.96,7.71c-8.98-1.38-17.32-4.61-25.3-8.88c-1.02-0.55-2.06-1.05-3.64-1.86c1.37,3.16,2.49,5.83,3.68,8.48c3.49,7.79,7.12,15.51,12.25,22.4c2.21,2.96,4.82,5.35,8.44,6.52c2.07,0.67,2.35,2.37,0.35,3.36c-2.13,1.06-4.59,1.67-6.97,1.95              c-10.17,1.21-19.61-1.36-28.59-5.99c-0.4-0.21-0.81-0.39-1.23-0.56c-0.11-0.05-0.25-0.02-0.66-0.05c-0.15,1.43-0.34,2.88-0.45,4.33              c-0.59,7.87-3.39,15.1-6.7,22.13c-3.72,7.89-7.53,15.74-11.47,23.52c-1.26,2.5-3.02,4.74-4.78,7.44c-0.74-0.94-1.16-1.39-1.5-1.9              c-8.13-12.28-14.84-25.3-20.13-39.04c-1.9-4.94-2.37-10.17-2.75-15.4c-0.04-0.51-0.08-1.02-0.15-1.8              c-2.28,1.02-4.41,2.03-6.58,2.94c-6.17,2.59-12.47,4.72-19.29,4.4c-4.31-0.2-8.38-1.31-12.65-3.63c1.71-1.69,3.21-3.22,4.76-4.69              c2.62-2.49,5.32-4.91,7.91-7.44c5.1-5,8.07-11.31,10.84-17.75c0.99-2.29,2-4.56,3.2-7.28c-0.95,0.51-1.5,0.79-2.03,1.1              c-7.35,4.3-15.1,7.52-23.53,9.13c-21.1,4.04-42.01-7.86-48.63-28.29c-5.79-17.87-3.01-34.37,9.66-48.68              c4.46-5.03,9.25-9.77,13.89-14.63c0.3-0.31,0.66-0.56,1.45-0.69c-0.26,1.19-0.46,2.39-0.78,3.56c-1.96,7.26-3.54,14.58-3.18,22.17              c0.2,4.18,1.12,8.18,3.37,11.79c3.66,5.85,9.38,8.38,15.81,9.41c9.04,1.44,15.11-1.72,19.92-10.04c3.06-5.3,4.9-11.08,6.22-17.02              c0.13-0.59-0.39-1.53-0.89-2.03c-5.24-5.31-8.95-11.38-9.43-19.02c-0.47-7.48,1.84-14.13,6.34-20.05              C245.43,385.79,246.14,385.39,246.82,384.82z M293.29,28.88c-0.5,0.88-0.77,1.3-0.99,1.75c-2.39,5.02-4.86,10-7.13,15.07              c-2.58,5.77-4.8,11.71-7.53,17.41c-2.56,5.36-5.57,10.5-8.41,15.73c-10.35,19.08-21.31,37.85-30.16,57.72              c-7.81,17.52-14.41,35.41-16.59,54.65c-1.18,10.35-1.01,20.66,0.69,30.92c1.9,11.52,5.42,22.58,9.77,33.39              c9.53,23.65,19.19,47.25,28.61,70.94c3.6,9.05,7.34,18.12,9.82,27.5c3.05,11.51,4.86,23.35,7.15,35.05              c0.27,1.38,0.63,2.28,2.25,2.28c8.34,0,16.67-0.01,25.01,0.09c1.78,0.02,2.26-0.76,2.54-2.35c1.18-6.61,2.23-13.25,3.81-19.77              c5.06-20.89,12.87-40.84,21.29-60.56c6.79-15.91,13.82-31.73,20.31-47.76c6.17-15.24,10.66-30.98,12.17-47.47              c1.5-16.38-0.25-32.39-5.11-48.07c-5.28-17.06-13.13-32.99-21.41-48.74c-13.6-25.86-27.18-51.73-40.76-77.6              C296.89,35.82,295.2,32.56,293.29,28.88z M457.28,406.95c4.4-1.46,8.86-2.74,13.17-4.4c18.2-7,32.99-18.4,43.8-34.72              c7.7-11.63,12.35-24.41,13.33-38.36c0.9-12.91-1.33-25.39-6.27-37.34c-8.72-21.08-22.67-37.38-43.87-46.67              c-17.45-7.64-35.68-9.23-54.3-5.57c-19.78,3.89-36.53,13.71-51.06,27.38c-17.18,16.16-30.01,35.48-40.06,56.7c-8.92,18.84-15.2,38.54-18.79,59.09c-0.43,2.43-0.67,4.9-1.02,7.48c0.81,0,1.21,0.06,1.58-0.01c6.68-1.14,13.36-2.28,20.02-3.5              c0.48-0.09,1.01-0.74,1.23-1.26c0.86-2.01,1.58-4.09,2.41-6.11c5.05-12.28,12.61-22.64,23.28-30.66              c11.12-8.36,23.64-13.72,37.05-17.07c10.66-2.67,21.43-3.51,32.25-1.1c13.26,2.96,23.5,10.2,29.98,22.27              c6.48,12.07,7.19,24.81,3.32,37.78C461.73,396.22,459.41,401.35,457.28,406.95z M129.59,407.03c-0.1-0.58-0.09-0.71-0.15-0.82              c-0.36-0.76-0.73-1.52-1.09-2.27c-5.45-11.28-8.68-22.91-6.08-35.61c3.02-14.77,10.23-26.41,24.19-33.1              c10.57-5.06,21.79-5.72,33.19-4.3c10.2,1.28,19.88,4.46,29.19,8.77c13.13,6.08,24.51,14.34,32.86,26.38              c3.93,5.67,6.91,11.81,9.27,18.27c0.44,1.2,0.77,2.37,2.39,2.67c5.14,0.95,10.25,2.06,15.39,3.03c1.72,0.32,3.49,0.39,5.29,0.58              c0-1.25,0.07-2.1-0.01-2.93c-1.05-10.18-3.03-20.18-5.9-29.99c-5.99-20.47-14.57-39.78-26.14-57.72 c-10.75-16.65-23.4-31.55-39.81-42.96c-21.6-15.02-45.37-21.09-71.5-17.02c-18.07,2.82-33.7,10.49-46.2,24.01 c-14.51,15.69-22.6,34.33-24.4,55.55c-1.04,12.3,1.33,24.19,6.26,35.53c5.57,12.8,13.71,23.67,24.57,32.45 c10.56,8.54,22.14,15.19,35.33,18.78C127.27,406.62,128.33,406.77,129.59,407.03z M292.85,573.38c0.36-0.46,0.56-0.63,0.67-0.85 c4.82-10,9.92-19.87,14.35-30.04c3.35-7.68,6.1-15.69,4.5-24.41c-0.1-0.54,0.56-1.48,1.12-1.81c0.44-0.26,1.3,0.02,1.9,0.26 c0.45,0.18,0.81,0.63,1.16,1c8.22,8.62,18.78,8.5,29.93,8.18c-0.67-0.84-1.01-1.28-1.37-1.7c-5.52-6.37-11.11-12.78-13.89-20.86 c-3.97-11.53-9.56-22.14-16.39-32.19c-3.06-4.49-5.64-9.3-6.1-14.91c-0.43-5.28-0.8-10.57-1.25-15.85 c-0.18-2.09-0.52-4.16-0.77-6.15c-8.73,0-17.14-0.02-25.54,0.06c-0.48,0-1.31,0.81-1.37,1.32c-0.74,5.83-1.9,11.67-1.87,17.51 c0.03,7.61-2.45,14.11-6.37,20.37c-4.04,6.46-7.99,12.99-11.64,19.67c-2.25,4.12-3.74,8.65-5.84,12.86 c-3.34,6.7-8.75,11.8-13.75,17.2c-0.57,0.62-1.06,1.31-1.76,2.18c5.22,0.7,10.04,0.76,14.85-0.18c5.98-1.17,11.09-4.1,15.89-7.72 c0.76-0.57,1.96-0.57,2.95-0.83c0.23,0.95,0.61,1.9,0.67,2.86c0.2,3.47-0.08,7.01,0.51,10.4c1.72,9.77,5.9,18.68,10.48,27.38 C286.75,562.55,289.8,567.86,292.85,573.38z M387.31,419.17c0.14,1.61,0.25,2.89,0.37,4.16c0.04,0.38,0.14,0.76,0.17,1.15 c0.85,8.87-0.41,17.08-6.68,24.05c-9.19,10.22-23.74,11.78-34.58,3.4c-5.57-4.3-8.47-10.32-10.27-16.94 c-0.69-2.52-1.23-5.08-1.86-7.73c-1.72,0.52-3.24,1.05-4.8,1.44c-5.38,1.34-10.77,2.63-16.17,3.92c-0.96,0.23-1.63,0.46-1.52,1.74 c0.87,9.81,2.45,19.46,6.11,28.69c3.3,8.31,8.05,15.61,14.98,21.34c8.63,7.13,18.71,10.21,29.78,10.32 c7.14,0.07,14.04-1.16,20.43-4.47c9.42-4.89,14.99-12.82,17.59-22.95c3.11-12.13,2.6-23.96-3.4-35.2 C394.92,427.27,391.54,423.07,387.31,419.17z M199.86,421c-0.5,0.39-0.72,0.52-0.89,0.7c-1.02,1.08-2.08,2.13-3.05,3.25 c-11.51,13.39-15.34,28.42-9.46,45.4c2.78,8.03,7.45,14.7,14.81,19.28c8.38,5.22,17.56,6.8,27.27,6.24 c16.26-0.94,28.48-8.49,36.54-22.58c6.86-12.01,9.78-25.17,10.78-38.84c0.09-1.3-0.69-1.3-1.52-1.47c-4.1-0.87-8.21-1.7-12.3-2.65 c-2.81-0.65-5.57-1.48-8.28-2.21c-1.1,4.02-1.93,7.87-3.2,11.58c-4.71,13.77-16.01,20.92-29.62,18.53 c-10.66-1.87-18.81-8.84-21.04-20.29C198.81,432.39,199.06,426.89,199.86,421z"/>
            <path d="M293.67,40.66c1.81,3.47,3.42,6.53,5.02,9.6c7.65,14.68,15.29,29.37,22.95,44.05c10.53,20.18,21.77,40.02,29.99,61.33 c5.99,15.53,9.62,31.56,9.42,48.28c-0.16,13.41-2.58,26.49-6.48,39.31c-4.97,16.31-11.85,31.88-18.59,47.5 c-5.87,13.6-11.8,27.19-17.2,40.98c-3.46,8.84-6.35,17.94-8.86,27.09c-2.48,9.03-4.19,18.26-6.17,27.42 c-0.28,1.28-0.85,1.74-2.09,1.73c-5.43-0.03-10.86-0.06-16.29-0.02c-1.49,0.01-1.8-0.76-1.97-2.02 c-1.55-11.49-3.73-22.87-7.34-33.9c-2.39-7.31-5.15-14.5-7.78-21.73c-3.74-10.27-7.24-20.64-11.32-30.77 c-5.75-14.28-12-28.35-17.92-42.56c-5.34-12.82-9.59-25.95-11.09-39.87c-1.56-14.4-0.14-28.54,3.32-42.53 c4.04-16.36,10.3-31.9,18.01-46.81c9.27-17.93,19.18-35.52,28.45-53.45c5.34-10.33,9.95-21.04,14.89-31.58 C292.86,42.17,293.16,41.63,293.67,40.66z"/>
            <path d="M466.89,399.17c0.74-3.23,1.44-5.9,1.96-8.59c2.4-12.47,2.09-24.78-3.19-36.52c-7.44-16.52-20.73-25.54-38.25-28.56 c-14.11-2.43-27.8-0.01-41.2,4.55c-14.28,4.86-27.15,12.04-37.83,22.85c-7.89,7.98-13.78,17.27-17.64,27.79 c-0.72,1.95-1.65,2.94-3.72,3.22c-3.11,0.42-6.18,1.11-9.65,1.76c0.46-2.43,0.79-4.45,1.22-6.44 c4.41-20.37,11.06-39.97,20.38-58.64c8.84-17.71,19.67-34.05,33.96-47.87c14.38-13.9,30.9-24.07,50.81-27.84 c19.08-3.61,37.64-1.91,55.24,6.71c12.6,6.18,22.12,15.79,29.5,27.62c6.12,9.8,10.51,20.3,12.69,31.68 c3.17,16.53,0.39,32.17-7.22,47.02c-9.02,17.59-22.95,30.05-40.71,38.41C471.28,397.24,469.3,398.09,466.89,399.17z"/>
            <path d="M269.53,385.18c-4.1-0.81-7.91-1.48-11.65-2.39c-0.64-0.15-1.2-1.26-1.51-2.04c-3.55-8.77-8.33-16.79-14.57-23.91 c-8.98-10.26-19.9-17.83-32.44-23.05c-14.38-5.98-29.33-9.44-44.99-8.29c-25.09,1.85-43.23,17.9-47.03,43.39 c-1.41,9.5-0.51,18.82,2.09,28.02c0.12,0.43,0.24,0.87,0.33,1.31c0.02,0.11-0.06,0.24-0.16,0.57c-0.88-0.34-1.77-0.64-2.62-1.02 c-15.71-7.05-29.24-16.86-38.81-31.42c-9.27-14.09-14.41-29.49-13.2-46.55c1.15-16.22,7.2-30.71,16.45-43.94 c7.87-11.26,17.82-20.06,30.48-25.64c8.19-3.61,16.79-5.56,25.66-6.35c15.15-1.36,29.81,0.73,43.86,6.61 c14.19,5.93,26.27,14.89,36.8,26c17.45,18.41,30.29,39.71,39.4,63.32c5.47,14.16,9.28,28.76,11.78,43.72 C269.48,383.91,269.47,384.29,269.53,385.18z"/>
            <path d="M334.33,520.44c-0.55,0.1-0.87,0.25-1.14,0.2c-4.94-1-9.7-2.42-13.12-6.48c-2.05-2.43-4.56-3.3-7.62-2.54 c-3.01,0.74-4.52,2.87-5,5.78c-0.24,1.46-0.48,3-0.26,4.43c0.89,5.83-0.79,11.22-2.93,16.41c-3.33,8.06-7.07,15.96-10.64,23.92 c-0.13,0.28-0.33,0.54-0.7,1.14c-0.76-1.37-1.45-2.48-2.02-3.66c-3.45-7.16-7.06-14.25-10.23-21.54c-2.12-4.86-2.03-10.2-2.2-15.46 c-0.08-2.54-0.37-5.21-1.29-7.54c-1.59-4.03-6.17-5.13-9.64-2.5c-3.57,2.71-7.12,5.39-11.53,6.61c-1.54,0.43-3.07,0.89-5.12,1.49 c0.51-0.87,0.69-1.32,0.99-1.66c4.94-5.62,8.01-12.24,11.06-19.01c3.02-6.69,6.99-12.95,10.64-19.34c1.6-2.81,3.43-5.48,5.13-8.23 c3.23-5.25,3.84-11.18,4.42-17.12c0.46-4.69,0.99-9.38,1.42-14.08c0.14-1.51,0.7-2.1,2.31-2.06c4.45,0.11,8.91,0.09,13.36,0.01 c1.48-0.03,1.82,0.58,1.95,1.92c0.57,5.85,1.14,11.7,1.92,17.53c0.85,6.33,3.39,12.05,7.05,17.26c5.82,8.3,10.57,17.07,13.89,26.74 c1.91,5.55,5.38,10.56,8.16,15.82C333.52,519.09,333.89,519.68,334.33,520.44z"/>
            <path d="M393.81,434.42c0.98,3.05,2.19,6.02,2.87,9.11c2.94,13.3,0.98,25.6-8.09,36.2c-3.71,4.33-8.45,7.23-14.01,8.58 c-7.69,1.86-15.46,2.33-23.23,0.44c-10.01-2.44-17.48-8.39-22.99-16.93c-5.82-9.01-8.77-19.08-10.67-29.52 c-0.17-0.95-0.33-1.91-0.46-2.87c-0.49-3.4-0.47-3.36,2.96-4.15c3.2-0.74,6.37-1.59,9.69-2.42c0.82,2.41,1.52,4.75,2.4,7.02 c2.97,7.66,7.3,14.26,14.67,18.42c8.98,5.06,18.21,4.86,27.41,0.86c9.89-4.3,15.75-12.03,18.25-22.43 c0.16-0.69,0.38-1.36,0.58-2.04C393.19,434.64,393.28,434.63,393.81,434.42z"/>
            <path d="M194.09,434.91c0.26,1.03,0.46,1.69,0.59,2.35c3.25,16.26,18.14,27.52,34.58,25.82c10.9-1.12,18.75-7.02,23.61-16.71 c1.87-3.73,3.12-7.78,4.48-11.74c0.45-1.32,0.84-1.79,2.27-1.4c3.18,0.87,6.39,1.61,9.6,2.31c1.15,0.25,1.68,0.7,1.51,1.96 c-1.57,11.74-4.19,23.17-10.22,33.53c-8.96,15.41-22.14,21.6-40.5,19.9c-19.17-1.77-30.29-17.56-30.98-34.26 c-0.29-7.06,1.2-13.74,4.1-20.14C193.34,436.09,193.63,435.68,194.09,434.91z"/>
          </g>
        </svg><a href="https://beascout.scouting.org/list/?zip=48038&program%5B%5D=pack&unitID=233029" target="_blank" rel="noreferrer"  className='no-underline text-scoutLightTan font-extralight'>Be A Scout</a></li>
        </ul>
      </div>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Pack Information</title>
export default PackPage;