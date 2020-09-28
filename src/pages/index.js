import React from 'react'
import { Link } from 'gatsby'

import Address from '../components/Address'
import Mapbox from '../components/Mapbox'
import Layout from '../components/layout'
import SEO from '../components/seo'
import strings from '../util/strings'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{strings.test}</p>
    <Mapbox />
  </Layout>
)

export default IndexPage
