import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import EmailLink from '../components/emaillink';

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "Bear Den" } }) {
          frontmatter {
            name
            pagetitle
            denleader
            denleaderemail
            assistantdenleader
            assistantdenleaderemail
            infographicimageurl {
              publicURL
            }
          }
          html
        }
  }`

const BearPage = ({data}) => {

  const { markdownRemark } = data;
  const pageTitle = markdownRemark.frontmatter.pagetitle;
  const pathToInfographic = markdownRemark.frontmatter.infographicimageurl.publicURL;
  return (
    <Layout pageTitle={pageTitle}>
    <div className='flex w-full h-full m-auto text-scoutWarmGray '>
      <div className='w-4/5 m-6 prose prose-base max-w-none'>
        <h1 className='prose-h1'>{markdownRemark.frontmatter.name}</h1>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-bearBlue'>Den Leader: <span className='font-lg text-scoutDarkGray'><EmailLink personName={markdownRemark.frontmatter.denleader} personEmail={markdownRemark.frontmatter.denleaderemail}/></span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-bearBlue'>Assistant Den Leader: <span className='font-lg text-scoutDarkGray'><EmailLink personName={markdownRemark.frontmatter.assistantdenleader} personEmail={markdownRemark.frontmatter.assistantdenleaderemail}/></span></h2>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <p>Content correct as of {markdownRemark.frontmatter.date}</p>
      </div>
      <div className='hidden md:block md:rounded-lg md:text-center md:m-6 md:prose md:prose-base md:bg-bearBlue'>
        <img src={pathToInfographic} className='rounded-lg w-80' alt={ pageTitle + ' Rank At a Glance'} />
      </div>
    </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data;
  const pageTitle = markdownRemark.frontmatter.pagetitle;
  return (
    <title>Pack 248 - {pageTitle} Den</title>
  )
}
export default BearPage;