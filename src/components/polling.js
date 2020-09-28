import React from "react"
import PropTypes from "prop-types"

import "./polling.css"

const Polling = ({ headline, placeholder, submit }) => {
  return (
    <form className="polling" action="#">
      <label className="polling__headline" htmlFor="polling-search">
        {headline}
      </label>
      <input
        type="search"
        id="polling-search"
        className="polling__search"
        placeholder={placeholder}
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
