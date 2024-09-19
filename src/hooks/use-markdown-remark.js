import { graphql, useStaticQuery } from "gatsby"

export const AllNewsArticles = () => {
    const { allMarkdownRemark } = useStaticQuery( graphql
        `
            query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "News"}}},
                sort: { frontmatter: { date: DESC } }) {
                nodes {
                    id
                    html
                    frontmatter {
                        title
                        author
                        date
                        imageurl {
                            publicURL
                        }
                        type
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
        `
    )
    return allMarkdownRemark.nodes;
}

