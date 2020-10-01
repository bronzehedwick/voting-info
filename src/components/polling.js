import React, { useEffect } from "react"
import PropTypes from "prop-types"

import "./polling.css"

const Polling = (props,{ headline, placeholder, submit }) => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    const streetNumber = e.target.streetNumber.value
    const streetName = e.target.streetName.value

    fetch(`https://astoria-tech-voting-info-backend-master.dev.shipyard.host/api/v1/pollsite/${streetNumber}/${streetName}`)
    .then(r=>r.json())
    .then(data=>props.setVoterData(data));
  }
  return (
    <form className="polling" action="#" onSubmit={handleSubmit}>
      <label className="polling__headline" htmlFor="polling-search">
        {headline}
      </label>
      <input
        type="search"
        id="streetNumber"
        className="polling__search"
        placeholder={'Street Number'}
      />
      <input
        type="search"
        id="streetName"
        className="polling__search"
        placeholder={'Street Name'}
      />
      <input type="submit" className="polling__submit" value={submit} />
    </form>
  )
}

Polling.propTypes = {
  headline: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submit: PropTypes.string.isRequired,
}

export default Polling
