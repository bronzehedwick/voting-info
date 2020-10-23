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
      <br />
      <div className="two-up">
        <section className="tips">
          <h2 className="tips__headline">Early Voting Schedule</h2>
          <ul className="tips__list">
            <li className="tips__item">Saturday October 24, 2020 10 AM to 4 PM</li>
            <li className="tips__item">Sunday October 25, 2020 10 AM to 4 PM</li>
            <li className="tips__item">Monday October 26, 2020 7 AM to 3 PM</li>
            <li className="tips__item">Tuesday October 27, 2020 12 PM to 8 PM</li>
            <li className="tips__item">Wednesday October 28, 2020 12 PM to 8 PM</li>
          </ul>
          <h2 className="tips__headline">Normal Voting Schedule</h2>
          <ul className="tips__list">
            <li className="tips__item">Tuesday November 3, 2020 6 AM to 9 PM</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
