import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "Bear Den" } }) {
          frontmatter {
            name
            denleader
            assistantdenleader
            date
          }
          html
        }
  }`
const pageTitle = "Bear";
const pathToInfographic = "../images/ranks/bear/bear_infographic.png";

const BearPage = ({data}) => {

  const { markdownRemark } = data;
  return (
    <Layout pageTitle={pageTitle}>
    <div className='w-full h-full m-auto flex text-scoutWarmGray '>
      <div className='prose prose-base max-w-none m-6 w-4/5'>
      <h1 className='text-4xl font-bold'>{pageTitle}</h1>
        <h1 className='prose-h1'>{markdownRemark.frontmatter.title}</h1>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-bearBlue'>Den Leader: <span className='font-lg text-scoutDarkGray'>{markdownRemark.frontmatter.denleader}</span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-bearBlue'>Assistant Den Leader: <span className='font-lg text-scoutDarkGray'>{markdownRemark.frontmatter.assistantdenleader}</span></h2>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <p>Content correct as of {markdownRemark.frontmatter.date}</p>
      </div>
      <div className='prose prose-base rounded-lg text-center m-6 bg-bearBlue'>
        <img src={pathToInfographic} className='rounded-lg w-80' alt={ pageTitle + ' Rank At a Glance'} />
      </div>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - {pageTitle} Den</title>
export default BearPage;