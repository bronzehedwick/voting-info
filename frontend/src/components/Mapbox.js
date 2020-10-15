import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import {early,normal} from './Schedule'
import "./mapbox.css"

const Mapbox = props => {
  const mapContainer = useRef(null)
  const [overlay, setOverlay] = useState("Enter your address above to locate your polling sites!")
  const [schedule,setSchedule] = useState(null)
  const [evSchedule,setEVSchedule] = useState(null)
  const [content,setContent] = useState(null)
  const createPopup = (earlyBool, name, addr) => {
    let vote
    if (earlyBool) vote = "Early"
    else vote = "Normal"
    return `
    <h3>${vote} Voting Location</h3>
    <p>${name}<br/>${addr}</p>`
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
        if (props.voterData.name === "Error") {
          setOverlay("Address not found. Please try again.")
          setContent(null)
          return 
        }
        const earlyVotingPopup = new mapboxgl.Popup({}).setHTML(
          createPopup(
            true,
            props.voterData.ev_site_name,
            props.voterData.ev_site_address
          )
        )
        earlyVotingPopup.on('open',(e)=>{
          setContent(early)
          setEVSchedule(true)
        })
        earlyVotingPopup.on('close',(e)=>{
          setEVSchedule(false)
        })

        const normalVotingPopup = new mapboxgl.Popup({}).setHTML(
          createPopup(
            false,
            props.voterData.site_name,
            props.voterData.site_address
          )
        )
        normalVotingPopup.on('open',(e)=>{
          setContent(normal)
          setSchedule(true)
        })
        normalVotingPopup.on('close',(e)=>{
          setSchedule(false)
        })
        const evMarker = new mapboxgl.Marker()
          .setLngLat([
            props.voterData.ev_longitude,
            props.voterData.ev_latitude,
          ])
          .setPopup(earlyVotingPopup)
          .addTo(map)
          .togglePopup()
        const normalMarker = new mapboxgl.Marker()
          .setLngLat([props.voterData.longitude, props.voterData.latitude])
          .setPopup(normalVotingPopup)
          .addTo(map)
          map.flyTo({
            center:[props.voterData.ev_longitude,props.voterData.ev_latitude],zoom:13,
            essential:true
          })
      }
    })
  }, [props.voterData])

  return (
    <div className="mapbox-container">
      {!content && (
        <div class="map-overlay">
          <span>{overlay}</span>
        </div>
      )}
      <div ref={el => (mapContainer.current = el)} id="mapbox"/>
      {(schedule||evSchedule)&&<div class="schedule">{content}</div>}
    </div>
  )
}

export default Mapbox
