import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oops, something went wrong...">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className="btn btn-primary text-uppercase" to={'/'}>Go home</Link>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
