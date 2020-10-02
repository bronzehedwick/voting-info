import React from "react"
import PropTypes from "prop-types"

import "./ballot-info.css"

const BallotInfo = ({ headline }) => {
  return (
    <div className="ballot-info">
      <h2 className="ballot-info__headline">{headline}</h2>
      <div className="ballot-info__body"></div>
    </div>
  )
}

BallotInfo.propTypes = {
  headline: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submit: PropTypes.string.isRequired,
}

export default BallotInfo
