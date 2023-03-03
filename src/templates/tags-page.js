import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext;
  return (
    <Layout pageTitle="App tags">
        <Seo title="All tags" keywords={['tags', 'topics']} />
        <ul>
            {tags.map(tag => (
                <li key={tag} style={{ marginBottom: '10px'}}>
                    <Button color="primary" href={`/tags/${slugify(tag)}`}>
                        {tag} <Badge bg="light">{tagPostCounts[tag]}</Badge>
                    </Button>
                </li>
            ))}
        </ul>

    </Layout>
  )
}

export default tagsPage
