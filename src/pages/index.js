<<<<<<< HEAD
import React from 'react'
import { Link } from 'gatsby'

import Address from '../components/Address'
import Mapbox from '../components/Mapbox'
import Layout from '../components/layout'
import SEO from '../components/seo'
import strings from '../util/strings'
=======
import React from "react"

import BallotInfo from "../components/ballot-info"
import Ctas from "../components/ctas"
import DatesDeadlines from "../components/dates-deadlines"
import GridBox from "../components/grid-box"
import Layout from "../components/layout"
import Mapbox from "../components/Mapbox"
import Polling from "../components/polling"
import SEO from "../components/seo"
import Tips from "../components/tips"
import strings from "../util/strings"
>>>>>>> 2fd74b964efa868e5ad92773b403c9524aad54e0

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DatesDeadlines
      items={strings.datesDeadlines.items}
      headline={strings.datesDeadlines.headline}
    />
    <GridBox>
      <Polling
        placeholder={strings.polling.placeholder}
        headline={strings.polling.headline}
        submit={strings.polling.submit}
      />
      <Mapbox />
      <BallotInfo headline={strings.ballotInfo.headline} />
      <Ctas items={strings.ctas} />
    </GridBox>
    <Tips headline={strings.tips.headline} items={strings.tips.items} />
  </Layout>
)

export default IndexPage
