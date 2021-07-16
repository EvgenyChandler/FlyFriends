/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import {
  GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow,
} from 'react-google-maps'
import { useSelector } from 'react-redux'
import { useSearchFriendContext } from '../../context/searchFriendContext'
import mapStyle from './mapStyle'

function Map() {
  const card = useSelector((state) => state.card)
  const [selected, setSelected] = useState(null)
  const {
    inputUserCity, inputFriendCity,
  } = useSearchFriendContext()
  return (
    <GoogleMap
      // defaultZoom={3}
      zoom={3}
      // defaultCenter={{ lat: 61.524010, lng: 105.318756 }}
      center={card[0]
        ? { lat: Number(card[0]?.coordinates?.lat), lng: Number(card[0]?.coordinates?.lon) }
        : { lat: 61.524010, lng: 105.318756 }}
      defaultOptions={{
        styles: mapStyle,
        streetViewControl: false,
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <Marker
        position={{
          lat: Number(card[0]?.coordinates?.lat),
          lng: Number(card[0]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          inputUserCity.trim().toLowerCase() === card[0]?.name.trim().toLowerCase()
            ? '/airplane-silhouette_icon-icons.com_73099.png'
            : '/airplane-silhouette_icon-icons_com_73099.WTp13.png',
          null,
          null,
          null,
          new window.google.maps.Size(35, 35),
        )}
        onClick={() => setSelected(card[0])}
      />
      <Marker
        position={{
          lat: Number(card[1]?.coordinates?.lat),
          lng: Number(card[1]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          inputFriendCity.trim().toLowerCase() === card[1]?.name.trim().toLowerCase()
            ? '/airplane-silhouette_icon-icons_com_73099.WTp13.png'
            : '/airplane-silhouette_icon-icons.com_73099.png',
          null,
          null,
          null,
          new window.google.maps.Size(35, 35),
        )}
        onClick={() => setSelected(card[1])}
      />
      <Marker
        position={{
          lat: Number(card[2]?.coordinates?.lat),
          lng: Number(card[2]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[2])}
      />
      <Marker
        position={{
          lat: Number(card[3]?.coordinates?.lat),
          lng: Number(card[3]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[3])}
      />
      <Marker
        position={{
          lat: Number(card[4]?.coordinates?.lat),
          lng: Number(card[4]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[4])}
      />
      <Marker
        position={{
          lat: Number(card[5]?.coordinates?.lat),
          lng: Number(card[5]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[5])}
      />
      <Marker
        position={{
          lat: Number(card[6]?.coordinates?.lat),
          lng: Number(card[6]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[6])}
      />
      <Marker
        position={{
          lat: Number(card[7]?.coordinates?.lat),
          lng: Number(card[7]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[7])}
      />
      <Marker
        position={{
          lat: Number(card[8]?.coordinates?.lat),
          lng: Number(card[8]?.coordinates?.lon),
        }}
        icon={new window.google.maps.MarkerImage(
          '/pin_gps_location_find_map_search_icon-icons.com_59982.png',
          null,
          null,
          null,
          new window.google.maps.Size(28, 32),
        )}
        onClick={() => setSelected(card[8])}
      />
      {selected
        ? (
          <InfoWindow
            position={{
              lat: Number(selected?.coordinates?.lat),
              lng: Number(selected?.coordinates?.lon),
            }}
            onCloseClick={() => setSelected(null)}
          >
            <div>{selected.name}</div>
          </InfoWindow>
        ) : null}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
