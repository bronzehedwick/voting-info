import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import "./mapbox.css"

const Mapbox = props => {
  const mapContainer = useRef(null)
  // const distance=(x1,x2,y1,y2)=>{
  //   return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
  // }
  // const getZoom=(distance)=>{
  //   return 15-distance*130
  // }
  const createPopup = (earlyBool, name, addr) => {
    let vote
    if (earlyBool) vote = "Early"
    else vote = "Normal"
    return `<h3>${vote} Voting Location</h3><p>${name}<br/>${addr}</p>`
  }
  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.9235, 40.7644],
      zoom: 12.1,
    })
    map.scrollZoom.disable()
    map.on("load", () => {
      if (props.voterData) {
        const earlyVotingPopup = new mapboxgl.Popup({}).setHTML(
          createPopup(
            true,
            props.voterData.ev_site_name,
            props.voterData.ev_site_address
          )
        )
        const normalVotingPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          createPopup(
            false,
            props.voterData.site_name,
            props.voterData.site_address
          )
        )
        const evMarker = new mapboxgl.Marker()
          .setLngLat([
            props.voterData.ev_longitude,
            props.voterData.ev_latitude,
          ])
          .setPopup(earlyVotingPopup)
          .addTo(map)
        const normalMarker = new mapboxgl.Marker()
          .setLngLat([props.voterData.longitude, props.voterData.latitude])
          .setPopup(normalVotingPopup)
          .addTo(map)
          map.flyTo({
            center:[props.voterData.ev_longitude,props.voterData.ev_latitude],
            essential:true
          })
      }
    })
  }, [props.voterData])

  return (
    <div className="mapbox-container">
      {props.voterData === null && (
        <div class="map-overlay">
          <span>Enter your address above to locate your polling sites!</span>
        </div>
      )}
      <div ref={el => (mapContainer.current = el)} id="mapbox" />
    </div>
  )
}

export default Mapbox
