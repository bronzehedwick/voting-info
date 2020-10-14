import React, { useState } from "react"

import Ctas from "../components/ctas"
import DatesDeadlines from "../components/dates-deadlines"
import Layout from "../components/layout"
import Mapbox from "../components/Mapbox"
import Polling from "../components/polling"
import SEO from "../components/seo"
import Tips from "../components/tips"
import VotingPhones from "../components/voting-phones"
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
        <Tips headline={strings.tips.headline} items={strings.tips.items} />
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
