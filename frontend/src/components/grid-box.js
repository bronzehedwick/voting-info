import React from "react"
import PropTypes from "prop-types"

import "./grid-box.css"

const GridBox = ({ children }) => {
  return <section className="grid-box">{children}</section>
}

GridBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridBox
