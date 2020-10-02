import PropTypes from "prop-types"
import React from "react"

import "./dates-deadlines.css"

const DatesDeadlines = ({ items, headline }) => (
  <section className="dates-deadlines">
    <h2 className="dates-deadlines__headline">{headline}</h2>
    <ul className="dates-deadlines__list">
      {items.map(item => (
        <li className="dates-deadlines__item">
          <time dateTime={item.datetime}>{item.date}</time> —{" "}
          <span className="dates-deadlines__text">{item.text}</span>
        </li>
      ))}
    </ul>
  </section>
)

DatesDeadlines.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  headline: PropTypes.string.isRequired,
}

export default DatesDeadlines
