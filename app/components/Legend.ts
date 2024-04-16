import { useEffect } from "react";
import L from "leaflet";

function Legend({ map, remove }: any) {
  const getColor = (d: number) => {
    return d > 1000
      ? "#800026"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 10
      ? "#FED976"
      : "#FFEDA0";
  };

  const legend = new L.Control({ position: "bottomright" });
  const legendHTML = 
  "<h4>This is the legend</h4>" +
  "<b>Lorem ipsum dolor sit amet consectetur adipiscing</b>";

  if (map && !remove) {
    legend.onAdd = () => {const div = L.DomUtil.create("div", "info legend");
    div.id = "Teste"
    const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
    let labels = [];
    let from;
    let to;

    for (let i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];

      labels.push(  
          '<div class="legendInforLine"><div class="legendSquare" style="background-color:'+getColor(from+1)+'"></div>' +
          from +
          (to ? "&ndash;" + to : "+")+'</div>'
      );
    }

    div.innerHTML = labels.join("<br>");
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