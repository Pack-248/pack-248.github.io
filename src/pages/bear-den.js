import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';


const BearPage = () => {
  const [content, setContent] = useState('');
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch('../dens/bear-den.md')
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
        const { content, data } = matter(text);
        setContent(content);
        setData(data);
      });
  }, []);

  return (
    <Layout pageTitle="Bear">
    <div className='w-full h-full m-auto flex text-scoutWarmGray '>
      <div className='prose prose-base max-w-none m-6'>
        <h1 className='prose-h1'>{data.title}</h1>
        <div className='flex'>
          <div>
            <h2 className='m-auto text-bearBlue'>Den Leader: <span className='font-lg text-scoutDarkGray'>{data.denleader}</span></h2>
          </div>
          <div>
            <h2 className='m-auto ml-6 text-bearBlue'>Assistant Den Leader:  <span className='font-lg text-scoutDarkGray'>{data.assistantdenleader}</span></h2>
          </div>
        </div>
        <ReactMarkdown>{content}</ReactMarkdown>
        <p>Content correct as of {data.date}</p>
      </div>
      <div className='prose prose-base rounded-lg text-center w-96 m-6 bg-bearBlue'>
        <img src='../images/misc/Bear_Infographic.png' className='rounded-lg w-96' alt='Bear Rank At a Glance' />
      </div>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Bear Den</title>
export default BearPage;