import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import { AllNewsArticles } from '../hooks/use-markdown-remark';

const NewsPage = () => {

    return (
        <Layout pageTitle="News">
            <div className='flex flex-row flex-wrap justify-center w-full gap-4 mx-auto'>
            {AllNewsArticles()?.map((article) => {
                if (dayjs(article.frontmatter.date) <= Date.now()) {
                    return (
                        <div key={article.id} className="shadow-xl card card-compact w-96 sm:w-64 md:w-80">
                            <figure>
                                <img className="rounded-t-lg"
                                src={article.frontmatter.imageurl.publicURL}
                                alt={article.frontmatter.title} />
                            </figure>
                            <div className="p-4 text-sm">
                                <h2 className="flex items-center gap-2 text-lg font-semibold">{article.frontmatter.title}</h2>
                                <p className="flex items-center gap-2 text-lg font-light">{dayjs(article.frontmatter.date).format("M/D/YYYY")}</p>
                                <p className='p-1 m-1 font-normal text-scoutWarmGray'>{article.excerpt}</p>
                                <div className="flex flex-wrap items-start justify-end gap-2">
                                <Link to={article.fields.slug} className='rounded p-1 m-1 font-bold text-[#ffffff] bg-cubScoutBlue border-b-cubScoutPaleBlue'>Read More...</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null;
            })}
            </div>
        </Layout>
    )
};

export const Head = () => <title>Pack 248 - Pack News</title>;
export default NewsPage;