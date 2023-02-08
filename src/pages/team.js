import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const TeamPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      
      <h1>
        Team Page
      </h1>
      
    </div>
  </Layout>
)


export const Head = () => <Seo title="Team" />

export default TeamPage
