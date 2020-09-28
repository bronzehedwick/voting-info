import React, { useState } from 'react'

const Address = props => {
  const [address, setAddress] = useState({
    streetNumber: '',
    streetName: '',
    zip: '',
  })

  const handleChange = e => {
    switch (e.target.name) {
      case 'streetNumber':
        setAddress({ ...address, streetNumber: e.target.value })
        break
      case 'streetName':
        setAddress({ ...address, streetName: e.target.value })
        break
      case 'zip':
        setAddress({ ...address, zip: e.target.value })
        break
      default:
        break
    }
    setAddress(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const data = await fetch(
      `https://findmypollsite.vote.nyc/api/pollsiteinfo?latitude=undefined&longitude=undefined&county=Queens&streetnumber=${address.streetNumber}&streetname=${address.streetName}&postalcode=undefined&districtkey=undefined`,
      {
        credentials: 'include',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0',
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.5',
          'X-Requested-With': 'XMLHttpRequest',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
        referrer: 'https://findmypollsite.vote.nyc/',
        method: 'GET',
        mode: 'no-cors',
      }
    )
    console.log(data.body)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="streetNumber"
        value={address.streetNumber}
        placeholder="Street Number"
      />
      <input
        onChange={handleChange}
        type="text"
        name="streetName"
        value={address.streetName}
        placeholder="Street Name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="zip"
        value={address.zip}
        placeholder="Zip Code"
      />
      <input type="submit" />
    </form>
  )
}

export default Address
