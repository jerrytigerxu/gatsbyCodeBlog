import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input, CardText } from 'reactstrap'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid} ) => {

    const data = useStaticQuery(graphql`
        query sidebarQuery {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC}
                limit: 3
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 300) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }

                    }
                }
            }
        }
    `)


  return (
    <div>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid} />
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
                    <CardText>{author.bio}</CardText>
                    <div className="author-social-links text-center">
                        <ul>
                            <li><a href={author.facebook} target="_blank" rel="noopener noreferrer" className="facebook"></a></li>
                            <li><a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter"></a></li>
                            <li><a href={author.instagram} target="_blank" rel="noopener noreferrer" className="instagram"></a></li>
                            <li><a href={author.google} target="_blank" rel="noopener noreferrer" className="google"></a></li>
                            <li><a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin"></a></li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        )}
     <Card>
        <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
                Newsletter
            </CardTitle>
            <Form className="text-center">
                <FormGroup>
                    <Input type="email" name="email" placeholder="Your email address..."/>
                </FormGroup>
                <button className="btn btn-outline-success text-uppercase">
                    Subscribe
                </button>
            </Form>
        </CardBody>    
    </Card> 

    <Card>
        <CardBody>
            <CardTitle className="text-center text-uppercase">
                Advertisement
            </CardTitle>
            <img src="https://via.placeholder.com/320x200" alt="advert" style={{ width: "100%"}} />
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
                Recent Posts
            </CardTitle>
            
            <div>
                {data.allMarkdownRemark.edges.map(({node}) => (
                <Card key={node.id}>
                    <Link to={`/${node.fields.slug}/`}>
                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                    </Link>
                    <CardBody>
                        <CardTitle>
                            <Link to={`/${node.fields.slug}/`}>
                                {node.frontmatter.title}
                            </Link>
                        </CardTitle>
                    </CardBody>

                </Card>
            ))}
            </div>
        
        </CardBody>
    </Card>
    </div>
  )
}




export default Sidebar
