import React, { useEffect } from "react"
import PropTypes from "prop-types"

import "./polling.css"

const Polling = props => {
  const handleSubmit = e => {
    e.preventDefault()
    const streetNumber = e.target.streetNumber.value
    const streetName = e.target.streetName.value

    fetch(
      `https://astoria-tech-voting-info-backend-master.dev.shipyard.host/api/v1/pollsite/${streetNumber}/${streetName}`
    )
      .then(r => r.json())
      .then(data => props.setVoterData(data))
  }

  return (
    <div className="polling">
      <h2 className="polling__headline">{props.headline}</h2>
      <form className="polling__form" action="#" onSubmit={handleSubmit}>
        <label>
          <div>{props.items[0].label}</div>
          <input
            type="search"
            id="streetNumber"
            className="polling__search"
            placeholder={props.items[0].placeholder}
          />
        </label>
        <label>
          <div>{props.items[1].label}</div>
          <input
            type="search"
            id="streetName"
            className="polling__search"
            placeholder={props.items[1].placeholder}
          />
        </label>
        <input type="submit" className="polling__submit" value={props.submit} />
      </form>
    </div>
  )
}

Polling.propTypes = {
  headline: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  submit: PropTypes.string.isRequired,
}

export default Polling
