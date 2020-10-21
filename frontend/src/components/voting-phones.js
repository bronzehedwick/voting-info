import React from "react"

import "./voting-phones.css"

const VotingPhones = () => (
  <section className="voting-phones">
    <h2 className="voting-phones__headline">Voting Information Helplines</h2>
    <p className="voting-phones__text">
      All resources are nonpartisan, and here to help with any issues.
    </p>
    <ul className="voting-phones__list">
      <li className="voting-phones__item">
        <span className="voting-phones__label">English</span>
        <span> — </span>
        <a href="tel:+18666878683">866-OUR-VOTE</a>
      </li>
      <li className="voting-phones__item">
        <span className="voting-phones__label">Spanish/English</span>
        <span> — </span>
        <a href="tel:+18888398682">888-VE-Y-VOTA</a>
      </li>
      <li className="voting-phones__item">
        <span className="voting-phones__label">Arabic/English</span>
        <span> — </span>
        <a href="tel:+18449255287">844-YALLA-US</a>
      </li>
      <li className="voting-phones__item">
        <span className="voting-phones__label">Asian Languages/English</span>
        <span> — </span>
        <a href="tel:+18882748683">888-API-VOTE</a>
      </li>
    </ul>
  </section>
)

export default VotingPhones
