import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const TagsPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      
      <h1>
        Tags page
      </h1>
      
    </div>
  </Layout>
)


export const Head = () => <Seo title="Tags" />

export default TagsPage 