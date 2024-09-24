import * as React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);

const ResourcesPage = () => {
  return (
    <Layout pageTitle="Resources">
      <h1 className='text-3xl font-bold mx-6'>Resources for Parents and Leaders</h1>
      <div className='w-auto flex flex-rows gap-6 mx-6 my-6'>
        <div id='leftSide' className='w-1/2 flex flex-col'>
          <h2 className='text-2xl font-semibold m-6'>For Parents</h2>
          <ul className='mx-6 mb-6'>
            <li className='font-semibold text-scoutWarmGray'>General</li>
            <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
            <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/pdf/100-014_WEB.pdf' target='_blank' rel='noreferrer'>Cub Scout Parent's Guide</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scoutshop.org/blog/ultimate_resource_guide_for_new_scouting_parents.html' target='_blank' rel='noreferrer'>Ultimate Resource Guide for New Scouting Parents</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://scoutsmarts.com/support-child-cub-scouts/' target='_blank' rel='noreferrer'>Supporting Your Child In Cub Scouting: A Parent's Guide</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/cub-scout-uniform/' target='_blank' rel='noreferrer'>Uniform Insignia</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Guide to uniform patches and placement</span></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://boyslife.org/' target='_blank' rel='noreferrer'>Scout Life Magazine Website</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://scoutingmagazine.org/' target='_blank' rel='noreferrer'>Scouting Magazine Website</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'folder']}/> <a href='https://drive.google.com/drive/folders/1HUli1anmDRvYQ_p4HjDKg6pMhmmsZMWv?usp=drive_link' target='_blank' rel='noreferrer'>Pack 248 Parent Google Drive</a></li>
          </ul>
          <ul className='mx-6 mb-6'>
            <li className='font-semibold text-scoutWarmGray'>Membership</li>
            <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
            <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/pdf/524-501.pdf' target='_blank' rel='noreferrer'>Application - Adult</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Application form for Adult Leader</span></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/pdf/524-406.pdf' target='_blank' rel='noreferrer'>Application - Youth</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Application form for Cub Scouts</span></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://michiganscouting.org/trial-membership/' target='_blank' rel='noreferrer'>Cub Scout Trial Membership</a><br/><span className='text-scoutDarkGray ml-6 italic text-sm'>We have options that will allow you and your youth the ability to learn how amazing the Cub Scout program can be</span></li>
          </ul>
        </div>
        <div id='rightSide' className='w-1/2 flex flex-col'>
          <h2 className='text-2xl font-semibold m-6'>For Leaders</h2>
          <ul className='mx-6 mb-6'>
            <li className='font-semibold text-scoutWarmGray'>Scouting Safely</li>
            <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
            <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/pdf/19-127WB_Singles.pdf' target='_blank' rel='noreferrer'>First Aid Log</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Utilize this log for your unit activities to document health and first aid issues and the interventions provided.</span></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/healthsafety/pdf/680-027.pdf' target='_blank' rel='noreferrer'>SAFE Service Project Planning Checklist</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>For service projects, lean on this checklist to help develop a detailed plan and execute your endeavors.</span></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/health-and-safety/incident-report/' target='_blank' rel='noreferrer'>Incident Reporting FAQs</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/HealthSafety/pdf/680-685.pdf' target='_blank' rel='noreferrer'>Age Appropriate Guidelines</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>This chart indicates what activities your Cub Scouts are allowed to participate in.</span></li>
            </ul>
          <ul className='mx-6 mb-6'>
            <li className='font-semibold text-scoutWarmGray'>Den Info</li>
            <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
            <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/lion-resources/' target='_blank' rel='noreferrer'>Lion Resources</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/tiger-resources/' target='_blank' rel='noreferrer'>Tiger Resources</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/wolf-resources/' target='_blank' rel='noreferrer'>Wolf Resources</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/bear-resources/' target='_blank' rel='noreferrer'>Bear Resources</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/webelos-resources/' target='_blank' rel='noreferrer'>Webelos Resources</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/aol-den-leader-resources/' target='_blank' rel='noreferrer'>Arrow of Light Resources</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/programs/cub-scouts/den-meeting-resources/den-leader-tips-tricks-video-series/' target='_blank' rel='noreferrer'>Den Leader Tips and Tricks Videos</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://advancements.scouting.org/' target='_blank' rel='noreferrer'>Internet Advancement</a></li>
            <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'folder']}/> <a href='https://drive.google.com/drive/folders/1u5N-Nq0uvRWmyTqAHXmAxCHf4S0iPtfe?usp=drive_link' target='_blank' rel='noreferrer'>Pack 248 Leader Google Drive</a></li>
          </ul>
          <ul className='mx-6 mb-6'>
            <li className='font-semibold text-scoutWarmGray'>Training</li>
            <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
            <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://my.scouting.org/' target='_blank' rel='noreferrer'>Den Leader Position-Specific Training</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Before you conduct a den meeting, complete the online training for Den Leader</span></li>
          </ul>
        </div>
      </div>
      <div className='w-full mx-6 flex flex-col'>
        <h2 className='text-2xl font-semibold m-6'>For Both</h2>
        <ul className='mx-6 mb-6'>
          <li className='font-semibold text-scoutWarmGray'>Scouting Safely</li>
          <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
          <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/training/youth-protection/' target='_blank' rel='noreferrer'>Scouting's Barriers to Abuse/Youth Protection</a></li>
          <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/HealthSafety/pdf/680-001_AB.pdf' target='_blank' rel='noreferrer'>Medical A & B Forms</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Applies to ALL participants—in basic Scouting activities such as local tours and weekend camping trips less than 72 hours in duration.</span></li>
          <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/HealthSafety/pdf/680-001_ABC.pdf' target='_blank' rel='noreferrer'>Medical A, B & C Forms</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>A pre-participation physical is needed for: Long Term Camps, Wood Badge, Jamborees, Events 72 hours or more</span></li>
          <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://www.scouting.org/wp-content/uploads/2021/06/680-11421_SAFE.pdf' target='_blank' rel='noreferrer'>SAFE Checklist</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>To ensure the safety of participants, the Boy Scouts of America expects leaders to use the four points of SAFE when delivering the Scouting program</span></li>
          <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://www.scouting.org/health-and-safety/gss/' target='_blank' rel='noreferrer'>Guide to Safe Scouting (GTSS)</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>A cornerstone resource for everyone in Scouting, this guide offers information on the latest policies and procedures, serving as your go-to manual to help you plan and provide a safe Scouting program</span></li>
          <li className='text-cubScoutBlue'><FontAwesomeIcon icon={['fas', 'file']}/> <a href='https://filestore.scouting.org/filestore/HealthSafety/pdf/Scouter_Code_of_Conduct.pdf' target='_blank' rel='noreferrer'>Scouter Code of Conduct</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>For adults engaging in Scouting, this document serves as a standard, illustrating the behavior that nurtures a positive, supportive environment.</span></li>
          </ul>
        <ul className='mx-6 mb-6'>
            <li className='font-semibold text-scoutWarmGray'>Scout Management</li>
            <hr className='border-1 border-cubScoutDarkBlue fill-cubScoutDarkBlue'/>
            <li className='text-cubScoutBlue mt-2'><FontAwesomeIcon icon={['fas', 'globe']}/> <a href='https://scoutbook.scouting.org/' target='_blank' rel='noreferrer'>Scoutbook</a><br/><span className='text-sm text-scoutDarkGray italic ml-6'>Our Pack uses Scoutbook to handle and track all of our scout's advancement.</span></li>
            <li className='text-cubScoutBlue'>Scouting App<br/><span className='text-sm text-scoutDarkGray italic ml-6'>App is built just for Scouts and their parents and pulls existing advancement data straight from Scoutbook.<br/><FontAwesomeIcon className='ml-6 text-cubScoutBlue' icon={['fas', 'globe']}/> <a className='text-cubScoutBlue' href='https://play.google.com/store/apps/details?id=com.bsa.sbm&pli=1' target='_blank' rel='noreferrer'>Scouting - Apps on Google Play</a><br/><FontAwesomeIcon className='ml-6 text-cubScoutBlue' icon={['fas', 'globe']}/> <a  className='text-cubScoutBlue' href='https://apps.apple.com/us/app/scouting/id1218464473' target='_blank' rel='noreferrer'>Scouting on the App Store (Apple)</a></span></li>
          </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Pack Resources</title>
export default ResourcesPage