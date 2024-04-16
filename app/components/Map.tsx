'use client'
// src/components/Map.tsx
import { MapContainer, TileLayer, LayersControl, GeoJSON, LayerGroup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import  L, {Map, PathOptions, latLng } from "leaflet"
import { BHSB, Hidrografia_BHSB, MataAtlantica, Solos } from "@/public/data/ShapefileData"
import Legend from "./Legend"
import { useState } from "react"

export default function MyMap(props: any) {

  const position = latLng([-17.899075, -41.511312]);
  const fillBHSB: PathOptions = { color: 'red', fillOpacity: 0.8 }
  const [map, setMap] = useState<Map | null>(null);
  

  return <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} ref={setMap}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Legend map={map} bBHSB={bBHSB}></Legend> */}
    <LayersControl  position="topright" collapsed={false}>
      <LayerGroup></LayerGroup>
      <LayersControl.Overlay checked name="Contorno - BH São Benedito">
        <GeoJSON data={BHSB} pathOptions={fillBHSB}  eventHandlers={{
              add: (e) => {
                const remove = false;
                Legend({map, remove})
              },
              remove: (e) => {
                const remove = true;
                Legend({map, remove})
              }
            }}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hidrogranfia ">
        <GeoJSON data={Hidrografia_BHSB} eventHandlers={{
              add: (e) => {
                const remove = false;
                Legend({map, remove})
              },
              remove: (e) => {
                const remove = true;
                Legend({map, remove})
              }
            }}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Solos">
        <GeoJSON data={Solos} eventHandlers={{
              add: (e) => {
                const remove = false;
                Legend({map, remove})
              },
              remove: (e) => {
                const remove = true;
                Legend({map, remove})
              }
            }}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Mata Atlântica">
        <GeoJSON data={MataAtlantica} eventHandlers={{
              add: (e) => {
                const remove = false;
                Legend({map, remove})
              },
              remove: (e) => {
                const remove = true;
                Legend({map, remove})
              }
            }}></GeoJSON>
      </LayersControl.Overlay>
    </LayersControl>

  </MapContainer>
}