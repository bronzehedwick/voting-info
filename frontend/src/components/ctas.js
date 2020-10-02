import React from "react"
import PropTypes from "prop-types"

import "./ctas.css"

const Ctas = ({ items }) => {
  return (
    <div className="ctas">
      {items.map(cta => (
        <a href={cta.href} key={cta.text} className={`cta ${cta.classes}`}>
          {cta.text}
        </a>
      ))}
    </div>
  )
}

Ctas.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Ctas
