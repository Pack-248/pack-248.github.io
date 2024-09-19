import { graphql } from 'gatsby';
import React from 'react';
import Layout from './layout';
import dayjs from 'dayjs';

export const query = graphql
    `
    query PostsByID($id: String!) {
        markdownRemark(
            id: { eq: $id }
        ){
            html
            frontmatter {
                title
                author
                date
                imageurl {
                    publicURL
                }
            }
        }
    }`;

export default ({ data }) => {
    const { frontmatter, html } = data.markdownRemark
    return (
        <Layout pageTitle={frontmatter.title}>
            <div className='prose prose-base m-6 max-w-none'>
                <div id='background' className='bg-cover bg-center h-96 rounded-lg'  style={{backgroundImage: `url(${frontmatter.imageurl.publicURL})`,}}>
                    <div className='h-full flex flex-col justify-center items-center'>
                        <h1 className=' text-scoutLightTan'>{frontmatter.title}</h1>
                        <h3 className='-mt-4 text-scoutLightTan'>{dayjs(frontmatter.date).format("M/D/YYYY")}</h3>
                    </div>
                </div>
                <hr className='fill-scoutRed border-1 border-scoutRed text-scoutRed'/>
                <div className="-mt-2 text-scoutWarmGray" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
};