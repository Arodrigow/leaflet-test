'use client'
import { MapContainer, TileLayer, LayersControl, GeoJSON, LayerGroup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L, { Map, PathOptions, latLng } from "leaflet"
import Legend from "./Legend"
import { useState } from "react"
import {BHSB,Hidrografia_BHSB,MataAtlantica,Solos} from '@/public/data/layerData'

export default function MyMap(props: any) {

  const position = latLng([-17.899075, -41.511312]);
  const fillBHSB: PathOptions = { color: '#de2d26', fillOpacity: 0 }
  const fillHidrografia: PathOptions = {color: '#2b8cbe'}
  const fillSolos:PathOptions = {color: '#8c510a', fillOpacity: 1}
  const [map, setMap] = useState<Map | null>(null);


  return <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} ref={setMap}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LayersControl position="topright" collapsed={false}>
      <LayersControl.Overlay checked name="Contorno - BH São Benedito">
        <GeoJSON data={BHSB.shape} pathOptions={fillBHSB} eventHandlers={{
          add: (e) => {
            Legend({ map, remove: false, legend: BHSB.legend, legendType: BHSB.legendType })
          },
          remove: (e) => {
            Legend({ map, remove: true, legend: BHSB.legend, legendType: BHSB.legendType })
          }
        }}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Hidrogranfia ">
        <GeoJSON data={Hidrografia_BHSB.shape} pathOptions={fillHidrografia} eventHandlers={{
          add: (e) => {
            Legend({ map, remove: false, legend: Hidrografia_BHSB.legend, legendType: Hidrografia_BHSB.legendType })
          },
          remove: (e) => {
            Legend({ map, remove: true, legend: Hidrografia_BHSB.legend, legendType: Hidrografia_BHSB.legendType })
          }
        }}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Solos">
        <GeoJSON data={Solos.shape} pathOptions={fillSolos} eventHandlers={{
          add: (e) => {
            Legend({ map, remove:false, legend: Solos.legend, legendType: Solos.legendType })
          },
          remove: (e) => {
            Legend({ map, remove:true, legend: Solos.legend, legendType: Solos.legendType })
          }
        }}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Mata Atlântica">
        <GeoJSON data={MataAtlantica.shape} eventHandlers={{
          add: (e) => {
            Legend({ map, remove:false, legend: MataAtlantica.legend, legendType: MataAtlantica.legendType })
          },
          remove: (e) => {
            Legend({ map, remove:true, legend: MataAtlantica.legend, legendType: MataAtlantica.legendType })
          }
        }}
          style={(feature) => {
            return {
              fillColor: feature!.properties.fillColor,
              fillOpacity: feature!.properties.fillOpacity,
              opacity: feature!.properties.opacity
            }
          }}></GeoJSON>
      </LayersControl.Overlay>
    </LayersControl>

  </MapContainer>
}