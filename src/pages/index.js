import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      
      <h1>
        Home Page
      </h1>
      <StaticQuery query={indexQuery} render={data => {
        return (
          <div> 
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
              />
            ))}
          </div>
        )
      }}/>
      
    </div>
  </Layout>
)


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
            path
          }
          excerpt
        }
      }
  }
}
`


export const Head = () => <Seo title="Home" />


export default IndexPage
