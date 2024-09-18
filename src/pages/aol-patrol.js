import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';


const AOLPage = () => {
  const [content, setContent] = useState('');
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch('../dens/aol-patrol.md')
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
        const { content, data } = matter(text);
        setContent(content);
        setData(data);
      });
  }, []);

  return (
    <Layout pageTitle="AOL">
    <div className='w-full h-full m-auto flex text-scoutWarmGray '>
      <div className='prose prose-base max-w-none m-6 w-4/5'>
        <h1 className='prose-h1'>{data.title}</h1>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-aolKhaki'>Den Leader: <span className='font-lg text-scoutDarkGray'>{data.denleader}</span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-aolKhaki'>Assistant Den Leader: <span className='font-lg text-scoutDarkGray'>{data.assistantdenleader}</span></h2>
          </div>
        </div>
        <ReactMarkdown>{content}</ReactMarkdown>
        <p>Content correct as of {data.date}</p>
      </div>
      <div className='prose prose-base rounded-lg text-center m-6 bg-aolKhaki'>
        <img src='../images/ranks/aol/aol_infographic.png' className='rounded-lg w-80' alt='Arrow of Light Rank At a Glance' />
      </div>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Arrow of Light Patrol</title>
export default AOLPage;