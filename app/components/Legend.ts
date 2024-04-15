import { useEffect } from "react";
import L from "leaflet";

function Legend({ map, remove }: any) {
  const legend = new L.Control({ position: "bottomright" });
  const legendHTML = 
  "<h4>This is the legend</h4>" +
  "<b>Lorem ipsum dolor sit amet consectetur adipiscing</b>";

  if (map && !remove) {
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.id = "Teste";
      div.innerHTML = legendHTML;
      return div;
    };
    legend.addTo(map);
  }
  if (map && remove) {
    const element = document.getElementById("Teste");
    if(element){
      L.DomUtil.remove(element);
    }   
  }

  return null;
}

export default Legend;