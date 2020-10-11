import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import "./mapbox.css"

const Mapbox = props => {
  const mapContainer = useRef(null)
  const [schedule,setSchedule] = useState(false)
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
        const earlyVotingPopup = new mapboxgl.Popup({}).setHTML(
          createPopup(
            true,
            props.voterData.ev_site_name,
            props.voterData.ev_site_address
          )
        )
        earlyVotingPopup.on('open',(e)=>{
          setSchedule(true)
        })
        earlyVotingPopup.on('close',(e)=>{
          setSchedule(false)
        })

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
      {props.voterData === null && (
        <div class="map-overlay">
          <span>Enter your address above to locate your polling sites!</span>
        </div>
      )}
      <div ref={el => (mapContainer.current = el)} id="mapbox"/>
      {schedule&&<div class="evSchedule">        
      <h3>Early Voting Schedule</h3>
        <table>
          <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Hours</th>
          </tr>
          <tr>
              <td>Saturday</td>
              <td>October 24, 2020</td>
              <td>10 AM to 4 PM</td>
          </tr>
          <tr>
              <td>Sunday</td>
              <td>October 25, 2020</td>
              <td>10 AM to 4 PM</td>
          </tr>
          <tr>
              <td>Monday</td>
              <td>October 26, 2020</td>
              <td>7 AM to 3 PM</td>
          </tr>
          <tr>
              <td>Tuesday</td>
              <td>October 27, 2020</td>
              <td>12 PM to 8 PM</td>
          </tr>
          <tr>
              <td>Wednesday</td>
              <td>October 28, 2020</td>
              <td>12 PM to 8 PM</td>
          </tr>
          <tr>
              <td>Thursday</td>
              <td>October 29, 2020</td>
              <td>10 AM to 6 PM</td>
          </tr>
          <tr>
              <td>Friday</td>
              <td>October 30, 2020</td>
              <td>7 AM to 3 PM</td>
          </tr>
          <tr>
              <td>Saturday</td>
              <td>October 31, 2020</td>
              <td>10 AM to 4 PM</td>
          </tr>
          <tr>
              <td>Sunday</td>
              <td>November 1, 2020</td>
              <td>10 AM to 4 PM</td>
          </tr>
        </table>
      </div>}
    </div>
  )
}

export default Mapbox
