import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import EmailLink from '../components/emaillink'

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "Arrow of Light Patrol" } }) {
          frontmatter {
            name
            denleader
            denleaderemail
            assistantdenleader
            assistantdenleaderemail
            date
          }
          html
        }
  }`;

const pageTitle = "Arrow Of Light";
const pathToInfographic = "../images/ranks/aol/aol_infographic.png";

const AOLPage = ({ data }) => {

  const { markdownRemark } = data;
  return (
    <Layout pageTitle={pageTitle}>
      <div className='w-full h-full m-auto flex text-scoutWarmGray '>
      <div className='prose prose-base max-w-none m-6 w-4/5'>
        <h1 className='prose-h1'>{markdownRemark.frontmatter.name}</h1>
        <div className='flex'>
          <div>
              <h2 className='m-auto text-aolKhaki'>Den Leader: <span className='font-lg text-scoutDarkGray' ><EmailLink personName={markdownRemark.frontmatter.denleader} personEmail={markdownRemark.frontmatter.denleaderemail}/></span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-aolKhaki'>Assistant Den Leader: <span className='font-lg text-scoutDarkGray'><EmailLink personName={markdownRemark.frontmatter.assistantdenleader} personEmail={markdownRemark.frontmatter.assistantdenleaderemail}/></span></h2>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <p>Content correct as of {markdownRemark.frontmatter.date}</p>
      </div>
      <div className='prose prose-base rounded-lg text-center m-6 bg-aolKhaki'>
        <img src={pathToInfographic} className='rounded-lg w-80' alt={pageTitle + ' Rank At a Glance'} />
      </div>
    </div>
    </Layout>
  )
};

export const Head = () => <title>Pack 248 - {pageTitle} Patrol</title>;
export default AOLPage;