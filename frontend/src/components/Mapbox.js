import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import "./mapbox.css"

const Mapbox = props => {
  const mapContainer = useRef(null)
  // const getNeSw=(coord1,coord2)=>{
  //   const rectangle = [
  //     coord1,
  //     coord2,
  //     [coord1[0],coord2[1]],
  //     [coord1[1],coord2[0]]
  //   ]
  //   let ne = coord1
  //   let sw = coord1
  //   let x,y
  //   rectangle.forEach(coord=>{
  //     if(y>ne[1]&&x>ne[0]) {
  //       x = parseFloat(coord[0])+.01
  //       y = parseFloat(coord[1])+.01
  //       ne = [x,y]
  //     }else if(y<sw[1]&&x<sw[0]){
  //       x = parseFloat(coord[0])-.01
  //       y = parseFloat(coord[1])-.01
  //       sw = [x,y]
  //     }
  //   })
  //   return [ne,sw]
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
      <div ref={el => (mapContainer.current = el)} id="mapbox" />
    </div>
  )
}

export default Mapbox
