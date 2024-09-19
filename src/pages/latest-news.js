import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import { AllNewsArticles } from '../hooks/use-markdown-remark';

const NewsPage = () => {

    return (
        <Layout pageTitle="News">
            <div className='m-6 w-full flex flex-row flex-wrap items-center gap-4'>
            {AllNewsArticles()?.map((article) => (
                <div key={article.id} className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className="rounded-t-lg"
                        src={article.frontmatter.imageurl.publicURL}
                        alt={article.frontmatter.title} />
                    </figure>
                    <div className="p-4 text-sm">
                        <h2 className="flex items-center gap-2 text-lg font-semibold">{article.frontmatter.title}</h2>
                        <p className="flex items-center gap-2 text-lg font-light">{dayjs(article.frontmatter.date).format("M/D/YYYY")}</p>
                        <p className='font-normal p-1 m-1 text-scoutWarmGray'>{article.excerpt}</p>
                        <div className="flex flex-wrap items-start gap-2 justify-end">
                        <Link to={article.fields.slug} className='rounded p-1 m-1 font-bold text-[#ffffff] bg-cubScoutBlue border-b-cubScoutPaleBlue'>Read More...</Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </Layout>
    )
};

export const Head = () => <title>Pack 248 - Pack News</title>;
export default NewsPage;