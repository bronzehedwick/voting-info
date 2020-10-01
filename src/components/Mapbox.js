import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import "./mapbox.css"

const Mapbox = (props) => {
  const mapContainer = useRef(null)

const createPopup=(earlyBool,name,addr)=>{
  let vote
  if(earlyBool) vote ='Early'
  else vote='Normal'
  return `<h3>${vote} Voting Location</h3><p>${name}<br/>${addr}</p>`
}
  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.9235, 40.7644],
      zoom: 12.3,
    })
    map.scrollZoom.disable()
    map.on('load',()=>{
    if(!props.voterData){
            new mapboxgl.Popup({offset:-25})
              .setLngLat([-73.9235, 40.7644])
              .setHTML('<h3>Enter Address Above to View Your Polling Place!</h3>')
              .addTo(map)
            map.addSource('nyc',
              {
                type:'geojson',
                data:'https://data.cityofnewyork.us/resource/7t3b-ywvw.geojson'
              }
            )
            map.addLayer(
              {
                'id': 'nyc-fill',
                'type': 'fill',
                'source': 'nyc',
                'layout': {},
                'paint': {
                  'fill-color': '#000',
                  'fill-opacity': 0.5
                }
              }
            )
        }else{
          const earlyVotingPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(createPopup(true,props.voterData.ev_site_name,props.voterData.ev_site_address))
          const normalVotingPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(createPopup(false,props.voterData.site_name,props.voterData.site_address))
          new mapboxgl.Marker()
            .setLngLat([props.voterData.ev_longitude, props.voterData.ev_latitude])
            .setPopup(earlyVotingPopup)
            .addTo(map)
          new mapboxgl.Marker()
            .setLngLat([props.voterData.longitude, props.voterData.latitude])
            .setPopup(normalVotingPopup)
            .addTo(map)
        }
      })
  }, [props.voterData])

  return <div ref={el => (mapContainer.current = el)} id="mapbox" />
}

export default Mapbox
