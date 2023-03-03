import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Post from '../components/Post'
import PaginationLinks from "../components/PaginationLinks"


const IndexPage = () => {


  const postsPerPage = 2;
  

  const data = useStaticQuery(graphql`
      query ProjectsQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}
          limit:2
          ) {
          totalCount
          edges {
            node {
              id 
              frontmatter {
                title
                date(formatString: "MMM Do YYYY")
                author
                tags
                image {
                  childImageSharp {
                    fluid(maxWidth: 1000){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt
            }
          }
      }
    }
  `)


  return (
    <Layout pageTitle="CodeBlog">
      <div className={styles.textCenter}>
        
        <div> 
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
          ))}
          <PaginationLinks currentPage={1} numberOfPages={Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)}/>
        </div>
      </div>
    </Layout>
  )
}



const indexQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id 
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 1000){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
  }
}
`


export const Head = () => <Seo title="Home" />


export default IndexPage
