import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AboutPage = () => (
  <Layout pageTitle="About us">
   <Seo title="About" keywords={['gatsby', 'application', 'react']} />
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla illo, odio nostrum cupiditate enim reiciendis odit voluptatum possimus optio est quibusdam perspiciatis assumenda et amet reprehenderit consequuntur quis impedit non a unde? Aliquid dolores ipsa iste? Vitae facilis quam iste.</p>
  </Layout>
)



export default AboutPage
