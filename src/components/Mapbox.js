import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const styles = {
  width: '50vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute',
}

const Mapbox = () => {
  const mapContainer = useRef(null)
  const locations = [
    {
      name: 'Helen Marshall Cultural Center at Queens Borough Hall',
      address: '120-55 Queens Boulevard 11424',
      lat: 40.70655,
      long: -73.828147,
    },
    {
      name: 'Creedmoor Hospital',
      address: '79-25 Winchester Boulevard 11427',
      lat: 40.741396127531,
      long: -73.733135933198,
    },
    {
      name: 'York College - Academic Core Building',
      address: '94-20 Guy R Brewer Boulevard 11451',
      lat: 40.7026310379527,
      long: -73.795743140005,
    },
    {
      name: 'Resorts World Casino New York City',
      address: '110-00 Rockaway Boulevard 11420',
      lat: 40.6729699299013,
      long: -73.8332341583232,
    },
    {
      name: 'Rockaway YMCA',
      address: '207 Beach 73rd Street 11692',
      lat: 40.589375,
      long: -73.801025,
    },
    {
      name: 'Queens Public Library at Jackson Heights',
      address: '35-51 81st Street 11372',
      lat: 40.749756,
      long: -73.88525,
    },
    {
      name: 'Rego Center Community Room',
      address: '61-00 97th Street 11374',
      lat: 40.73421,
      long: -73.86258,
    },
    {
      name: 'Queens College',
      address: '65-30 Kissena Boulevard 11367',
      lat: 40.73708,
      long: -73.81471,
    },
    {
      name: "The Boys' Club of New York - Abbe Clubhouse",
      address: '133-01 41st Road 11355',
      lat: 40.756428,
      long: -73.83347,
    },
    {
      name: 'Korean Community Services',
      address: '203-05 32nd Avenue 11361',
      lat: 40.77051,
      long: -73.78665,
    },
    {
      name: 'LaGuardia Community College',
      address: '31-10 Thomson Avenue 11101',
      lat: 40.74494,
      long: -73.93537,
    },
    {
      name: 'First Baptist Church of East Elmhurst',
      address: '100-10 Astoria Boulevard 11369',
      lat: 40.761967,
      long: -73.86928,
    },
    {
      name: 'Board of Elections - Queens Voting Machine Facility Annex',
      address: '66-26 Metropolitan Ave 11379',
      lat: 40.712685,
      long: -73.90057,
    },
    {
      name: 'Holy Trinity Parish Church',
      address: '222-05 116th Avenue 11411',
      lat: 40.696262,
      long: -73.73748,
    },
    {
      name: 'Museum of the Moving Image',
      address: '36-01 35th Avenue 11106',
      lat: 40.75625,
      long: -73.92445,
    },
    {
      name: 'Queensborough Elks Lodge No. 878',
      address: '82-20 Queens Boulevard 11373',
      lat: 40.737564,
      long: -73.88158,
    },
    {
      name: 'Variety Boys & Girls Club of Queens',
      address: '21-12 30th Road 11102',
      lat: 40.769016,
      long: -73.92841,
    },
    {
      name: 'Rochdale Village Community Center',
      address: '169-65 137th Avenue 11434',
      lat: 40.672554,
      long: -73.77114,
    },
  ]

  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.9235, 40.7644],
      zoom: 12,
    })
    locations.forEach(loc => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${loc.name} - ${loc.address}`
      )
      new mapboxgl.Marker()
        .setLngLat([loc.long, loc.lat])
        .setPopup(popup)
        .addTo(map)
    })
  }, [locations])

  return (
    <div ref={el => (mapContainer.current = el)} id="mapbox" style={styles} />
  )
}

export default Mapbox
