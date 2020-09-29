import React, { useEffect } from "react"
import PropTypes from "prop-types"

import "./polling.css"

const Polling = ({ headline, placeholder, submit }) => {



// fetch("https://findmypollsite.vote.nyc/api/pollsiteinfo?latitude=40.76907531192422&longitude=undefined&county=Queens&streetnumber=25-32&streetname=35%20Street&postalcode=11103&districtkey=019/36", {
//   "credentials": "omit",
// "headers": {
//     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0",
//     "Accept": "*/*",
//     "Accept-Language": "en-US,en;q=0.5",
//     "X-Requested-With": "XMLHttpRequest",
//     "Pragma": "no-cache",
//     "Cache-Control": "no-cache",
//     'Access-Control-Allow-Origin':'localhost:8000',
//     'Access-Control-Allow-Headers':'*',
//   },
//       Cookie: {
//         __cfduid:'dbe6065e5d0ee90bc2137c35f2295fb681600803115',
//         ARRAffinity:'f79bb40022f9ba878fb58b672d42eb47c309b1cecb8be6ce64315d15c163796e',
//       },
// "referrer": "https://findmypollsite.vote.nyc/",
// "method": "GET",
// "mode": "no-cors"




  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("https://findmypollsite.vote.nyc/api/pollsiteinfo?latitude=40.76907531192422&longitude=undefined&county=Queens&streetnumber=25-32&streetname=35%20Street&postalcode=11103&districtkey=019/36", {
      "credentials": "omit",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0",
          "Accept": "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "X-Requested-With": "XMLHttpRequest",
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
          'Access-Control-Allow-Origin':'localhost:8000',
      },
      "referrer": "https://findmypollsite.vote.nyc/",
      "method": "GET",
      "mode": "cors"
  }).then(r=>r.json()).then(data=>console.log(data));
  }
  return (
    <form className="polling" action="#" onSubmit={handleSubmit}>
      <label className="polling__headline" htmlFor="polling-search">
        {headline}
      </label>
      <input
        type="search"
        id="polling-streetNumber"
        className="polling__search"
        placeholder={'Street Number'}
      />
      <input
        type="search"
        id="polling-streetName"
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
