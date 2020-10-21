import React from "react"
import PropTypes from "prop-types"

import "./tips.css"

const Tips = ({ headline, items }) => {
  return (
    <section className="tips">
      <h2 className="tips__headline">{headline}</h2>
      <ul className="tips__list">
        {items.map(tip => (
          <li key={tip} className="tips__item">
            {tip}
          </li>
        ))}
      </ul>
    </section>
  )
}

Tips.propTypes = {
  headline: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tips
