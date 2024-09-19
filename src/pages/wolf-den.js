import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "Wolf Den" } }) {
          frontmatter {
            name
            denleader
            assistantdenleader
            date
          }
          html
        }
  }`

  const pageTitle = "Wolf";
  const pathToInfographic = "../images/ranks/wolf/wolf_infographic.png";

const WolfPage = ({data}) => {
  const { markdownRemark } = data;

  return (
    <Layout pageTitle={pageTitle}>
    <div className='w-full h-full m-auto flex text-scoutWarmGray '>
        <div className='prose prose-base max-w-none m-6 w-4/5'>
        <h1 className='prose-h1'>{markdownRemark.frontmatter.name}</h1>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-wolfRed'>Den Leader: <span className='font-lg text-scoutDarkGray'>{markdownRemark.frontmatter.denleader}</span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-wolfRed'>Assistant Den Leader: <span className='font-lg text-scoutDarkGray'>{markdownRemark.frontmatter.assistantdenleader}</span></h2>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <p>Content correct as of {markdownRemark.frontmatter.date}</p> 
      </div>
      <div className='prose prose-base rounded-lg text-center m-6 bg-wolfRed'>
        <img src={pathToInfographic} className='rounded-lg w-80' alt={pageTitle + ' Rank At a Glance'} />
      </div>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - {pageTitle} Den</title>
export default WolfPage;