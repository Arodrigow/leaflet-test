'use client'
// src/components/Map.tsx
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Map, latLng } from "leaflet"
import { BHSB, Hidrografia_BHSB, MataAtlantica, Solos } from "@/public/data/ShapefileData"
import Legend from "./Legend"
import { useState } from "react"

export default function MyMap(props: any) {

  const position = latLng([-17.899075, -41.511312]);
  const fillBHSB = { color: 'red' }
  const [map, setMap] = useState<Map | null>(null);

  return <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} ref={setMap}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Legend map={map}></Legend>
    <LayersControl  position="topright" collapsed={false}>
      <LayersControl.Overlay checked name="Contorno - BH São Benedito">
        <GeoJSON data={BHSB} pathOptions={fillBHSB}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Hidrogranfia ">
        <GeoJSON data={Hidrografia_BHSB}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Solos">
        <GeoJSON data={Solos}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Mata Atlântica">
        <GeoJSON data={MataAtlantica}></GeoJSON>
      </LayersControl.Overlay>
    </LayersControl>

  </MapContainer>
}