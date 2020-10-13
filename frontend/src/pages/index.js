import React, { useState } from "react"

import Ctas from "../components/ctas"
import DatesDeadlines from "../components/dates-deadlines"
import VotingPhones from "../components/voting-phones"
import Layout from "../components/layout"
import Mapbox from "../components/Mapbox"
import Polling from "../components/polling"
import SEO from "../components/seo"
import strings from "../util/strings"

const IndexPage = () => {
  const [voterData, setVoterData] = useState(null)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="two-up">
        <DatesDeadlines
          items={strings.datesDeadlines.items}
          headline={strings.datesDeadlines.headline}
        />
        <VotingPhones />
      </div>
      <Polling
        items={strings.polling.items}
        headline={strings.polling.headline}
        submit={strings.polling.submit}
        setVoterData={setVoterData}
      />
      <Mapbox voterData={voterData} />
      <Ctas items={strings.ctas} />
  </Layout>
)
}

export default IndexPage
