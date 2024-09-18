import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "Lion Den" } }) {
          frontmatter {
            name
            denleader
            assistantdenleader
            date
          }
          html
        }
  }`


const LionPage = ({data}) => {
  const { markdownRemark } = data;

  return (
    <Layout pageTitle="Lion">
    <div className='w-full h-full m-auto flex text-scoutWarmGray '>
      <div className='prose prose-base max-w-none m-6 w-4/5'>
        <h1 className='prose-h1'>{markdownRemark.frontmatter.title}</h1>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-lionYellow'>Den Leader: <span className='font-lg text-scoutDarkGray'>{markdownRemark.frontmatter.denleader}</span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-lionYellow'>Assistant Den Leader: <span className='font-lg text-scoutDarkGray'>{markdownRemark.frontmatter.assistantdenleader}</span></h2>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <p>Content correct as of {markdownRemark.frontmatter.date}</p> 
      </div>
      <div className='prose prose-base rounded-lg text-center m-6 bg-lionYellow'>
        <img src='../images/ranks/lion/lion_infographic.png' className='rounded-lg w-80' alt='Lion Rank At a Glance' />
      </div>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Lion Den</title>
export default LionPage;