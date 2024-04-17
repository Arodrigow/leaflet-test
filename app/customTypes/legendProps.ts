import { LegendData } from "./legendData"

export type LegendProps = {
    map: L.Map | null
    remove: boolean,
    legend: LegendData
    legendType: string,
  }