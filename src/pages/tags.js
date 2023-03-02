import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const TagsPage = () => (
  <Layout pageTitle="All topics">
   <Seo title="Tags" keywords={['gatsby', 'application', 'react']} /> 
  </Layout>
)



export default TagsPage 