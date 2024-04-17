import { useEffect } from "react";
import L from "leaflet";
import { LegendProps } from "../customTypes/legendProps";
import { getLegentTypeClass } from "../helper/getLegendTypeClass";

function Legend({ map, remove, legend,  legendType}: LegendProps) {
  
  const legendControl = new L.Control({ position: "bottomright" });

  if (map && !remove) {
    legendControl.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.id = "Teste";
      const legendName: Array<string> = [];
      const legendColor: Array<string> = [];
      
      legend.forEach((leg) => {
        legendName.push(leg.name)
        legendColor.push(leg.color)
      })
      let labels = [];

      for (let i = 0; i < legendName.length; i++) {

        labels.push(
          '<div class="legendInforLine"><div class="'+getLegentTypeClass(legendType)+'" style="background-color:' + legendColor[i] + '"></div>' +
          legendName[i] + '</div>'
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };
    legendControl.addTo(map);
  }
  if (map && remove) {
    const element = document.getElementById("Teste");
    if (element) {
      L.DomUtil.remove(element);
    }
  }

  return null;
}

export default Legend;