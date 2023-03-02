/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'
import Sidebar from './Sidebar'

import '../styles/index.scss'
import { Row, Col } from 'reactstrap'

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <>
      <link rel="stylesheet" href="https://kit.fontawesome.com/1f3404650a.css" crossOrigin="anonymous"></link>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4"><Sidebar author={postAuthor} authorFluid={authorImageFluid}/></Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

export default Layout
