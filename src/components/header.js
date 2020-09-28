import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <svg
      className="vote-icon"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.02 71.93v3.185h6.021V71.93h-6.02zm6.021 3.185v2.835h6.032v-2.835h-6.032zm6.032 2.835v3.186h6.02V77.95h-6.02zm6.02 3.186v2.834h2.835v-2.834h-2.835zm2.835 2.834v3.198h6.02V83.97h-6.02zm6.02 3.198v2.834h6.021v-2.834H32.95zm6.021 2.834v2.835h6.032v-2.835H38.97zM12.052 47.836v3.186h6.01v-3.186h-6.01zm6.01 3.186v2.834h6.031v-2.834h-6.031zm6.031 2.834v3.186h6.021v-3.186h-6.02zm6.021 3.186v2.835h6.02v-2.835h-6.019zm6.02 2.835v3.197h6.032v-3.209h-6.02l-.011.012zm6.032 3.197v2.835h5.67v-2.835h-5.67zm50.67-20.907V45h-5.668v2.835h-6.032v3.186h-6.02v2.834h-6.021v3.186h-6.032v2.835h-6.01v3.197h-6.031v2.835h-3.186v26.928H45v3.174h8.855v-3.174h6.02v-2.835h6.033v-2.834h6.009V83.97h3.197v-2.834h6.02V77.95h6.033v-2.835h5.669V71.93h3.174V42.166h-3.174zm-90.001 0v29.75H6.02v-24.07h6.02v-2.835h-6.01v-2.834H2.836v-.011z" />
      <path d="M69.094 30.114v2.835h6.02v-2.835h-6.02zm6.02 2.835v3.186h6.021V32.96h-6.02v-.011zm6.021 3.186v2.834h6.032v-2.834h-6.032zm6.032 2.834v3.197h5.67v-3.185h-5.67v-.012zM30.114 26.93v3.185h6.02v-3.186H30.114zm0 3.185h-6.02v2.835h6.02v-2.835zm-6.02 2.835h-6.021v3.186h6.02v-3.186zm-6.021 3.186H12.04v2.834h6.032v-2.834zm-6.032 2.834H6.03v3.197h6.01V38.97zm45.001-20.896v2.834h-3.186v3.186H51.02v2.835h-3.186v-2.835h-2.834v6.021h2.834v2.835h3.186v-2.835h2.835v-3.186h3.186v-2.835h2.834v-6.02h-2.834zM47.835 2.835V6.02h9.207V2.835h-9.207z" />
      <path d="M38.98 0v24.093h-2.834v2.835h2.835v6.02h-2.835v3.187h-3.197v2.834h3.186v3.197h6.032v2.835h5.669v2.835h6.02v3.186h6.02v2.834h6.033v-2.834h3.174v-3.186H65.91V30.114h3.174v-3.186H65.91V6.021H57.03v2.834h6.032v38.992H57.03v-2.835h-6.01v-2.834h-6.02v-3.186h-2.834V2.835h5.669V0h-8.867.012z" />
    </svg>
    <h1 className="site-headline">Astorians' Voting Guide 2020</h1>
    <div className="language-selector">
      <button
        id="language-button"
        className="language-selector__button"
        aria-haspopup="true"
        aria-owns="language-selector"
        aria-label="Current language is English. Choose your preferred language."
      >
        English
      </button>
      <ul
        id="language-menu"
        role="menu"
        aria-expanded="false"
        className="language-selector__menu"
      >
        <li role="menuitem" lang="en">
          <a href="#" title="English">
            English
          </a>
        </li>
        <li role="menuitem" lang="es">
          <a href="#" title="Spanish">
            Español
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
