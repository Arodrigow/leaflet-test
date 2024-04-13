'use client'
// src/components/Map.tsx
import { MapContainer, TileLayer, GeoJSON} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { latLng } from "leaflet"
import { GeoJsonObject, } from "geojson"

export default function MyMap(props: any) {

  const position = latLng([-17.899075, -41.511312]);
  const geo = {
    "type": "FeatureCollection",
    "name": "BH São Benedito.kmz",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "Name": "BH São Benedito" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -41.498363726178198, -17.869979437443298 ], [ -41.498366591413301, -17.870639996339399 ], [ -41.499035819701803, -17.870775539224599 ], [ -41.499606302211099, -17.870799092947401 ], [ -41.500425914314199, -17.871068498308698 ], [ -41.501134120066403, -17.871196394572699 ], [ -41.501824783529301, -17.871471944445702 ], [ -41.502309425850399, -17.8719836419173 ], [ -41.502474908585299, -17.8726418059276 ], [ -41.502718765043298, -17.873575139714099 ], [ -41.502661902128601, -17.874154989929998 ], [ -41.502099550095402, -17.874402469086501 ], [ -41.501972598715, -17.8745532661131 ], [ -41.501862953642799, -17.874886620708001 ], [ -41.501753672639303, -17.8753885382494 ], [ -41.501675209439803, -17.875647886267998 ], [ -41.5008571080322, -17.875737208321599 ], [ -41.500613723371302, -17.875842474826701 ], [ -41.5005960635226, -17.876121749589199 ], [ -41.500615617845597, -17.876731741596601 ], [ -41.500265680439099, -17.876949012363902 ], [ -41.4998982960091, -17.877136256608001 ], [ -41.499436246082801, -17.877385401180099 ], [ -41.498904811535603, -17.877854180950202 ], [ -41.498578024471399, -17.878047076015001 ], [ -41.499389237397402, -17.8789406340752 ], [ -41.500031845560002, -17.8794052628066 ], [ -41.500428897447001, -17.879762837585801 ], [ -41.5009200968003, -17.8802028369605 ], [ -41.5012309987587, -17.880346341623301 ], [ -41.501799172041302, -17.880493876214899 ], [ -41.502254235780399, -17.880582550051098 ], [ -41.502856352323597, -17.880778048673299 ], [ -41.503375888433297, -17.880895715663598 ], [ -41.5041011692024, -17.880518240963401 ], [ -41.5046390987984, -17.8805416444206 ], [ -41.5053938600797, -17.880806118986701 ], [ -41.505968931676598, -17.880898485706702 ], [ -41.507156793480597, -17.880957864880902 ], [ -41.507977623335101, -17.881230825436099 ], [ -41.508243301597098, -17.8818482390332 ], [ -41.508490507679902, -17.883001399042602 ], [ -41.508719029559799, -17.8833093371071 ], [ -41.509371856727, -17.883362376467101 ], [ -41.509826560943203, -17.883425830979501 ], [ -41.510597320231298, -17.883376698710801 ], [ -41.511333265770098, -17.883516036732601 ], [ -41.511921726519603, -17.884151466232598 ], [ -41.512127894336302, -17.884827462313201 ], [ -41.512635811261198, -17.886357596527802 ], [ -41.513064988396899, -17.887093134212201 ], [ -41.513726012849901, -17.887397307136698 ], [ -41.515438361215999, -17.887774605261299 ], [ -41.516011794371401, -17.8880908922457 ], [ -41.516934943972501, -17.888651240268899 ], [ -41.517853331651899, -17.889482108541799 ], [ -41.519280340232498, -17.890840971289801 ], [ -41.519879796660902, -17.892200398670798 ], [ -41.520151642814596, -17.893163067048 ], [ -41.519908601469403, -17.8941210511361 ], [ -41.5180927791844, -17.895020913651202 ], [ -41.518968585316699, -17.896307917024298 ], [ -41.519509342396297, -17.898140684464799 ], [ -41.520874104074103, -17.8992721311892 ], [ -41.521697498644599, -17.899472107529501 ], [ -41.523023824048899, -17.8993504228742 ], [ -41.5255111094353, -17.899364626927799 ], [ -41.526555021243702, -17.898304054005401 ], [ -41.526951580224299, -17.897638036216001 ], [ -41.527870797219599, -17.897240717898999 ], [ -41.5295880060931, -17.897151055502398 ], [ -41.530593241024498, -17.8964962740808 ], [ -41.531114062529703, -17.896012520767002 ], [ -41.531896164586698, -17.8963347972118 ], [ -41.532518012966598, -17.897001656092101 ], [ -41.532151511106797, -17.898105727561202 ], [ -41.5330720723856, -17.899061184809501 ], [ -41.535809779450098, -17.899466245454299 ], [ -41.537494953281403, -17.900109018508299 ], [ -41.538267425406303, -17.901052506304399 ], [ -41.5384645387091, -17.9017808716332 ], [ -41.538696679160701, -17.902314169919801 ], [ -41.539923414343001, -17.9027311406556 ], [ -41.541611429740897, -17.902965972174201 ], [ -41.5420368596278, -17.903790588299 ], [ -41.542967178625503, -17.904325064631301 ], [ -41.5429488149381, -17.905624442052201 ], [ -41.544599486377898, -17.9063315314006 ], [ -41.545605830922199, -17.9074177186295 ], [ -41.546003992793999, -17.907936377161199 ], [ -41.545902376727902, -17.9093457806086 ], [ -41.545369486287498, -17.910606176782998 ], [ -41.545220112191402, -17.9122231173261 ], [ -41.545353342993003, -17.914297195040501 ], [ -41.545907659473798, -17.916251174166 ], [ -41.544694245371502, -17.9176486361537 ], [ -41.5416785618849, -17.917652423425299 ], [ -41.539942906251802, -17.918300285029702 ], [ -41.539548102891203, -17.9198912681527 ], [ -41.539858692169503, -17.921303252555202 ], [ -41.540893452463997, -17.922313243672502 ], [ -41.542621689893501, -17.922726401202802 ], [ -41.544166052600197, -17.923547695400401 ], [ -41.545573484234801, -17.924673271639701 ], [ -41.547415426161898, -17.925397748796598 ], [ -41.549756519501898, -17.9255158971736 ], [ -41.551728694066703, -17.925705591004601 ], [ -41.5531555917727, -17.926037451673 ], [ -41.554709713373697, -17.926456067532499 ], [ -41.555736125277797, -17.92714203581 ], [ -41.556979791041201, -17.927072248047601 ], [ -41.5583202048971, -17.9281811989351 ], [ -41.559231215277499, -17.9294409345536 ], [ -41.558855943361699, -17.9305373492274 ], [ -41.557900725966199, -17.931751943437501 ], [ -41.557055771031202, -17.932932896160899 ], [ -41.555980205161397, -17.934040167834901 ], [ -41.555511789829602, -17.935354968018899 ], [ -41.555309459128999, -17.935941188224401 ], [ -41.5548637175607, -17.936228716653702 ], [ -41.553235098807903, -17.936352489397301 ], [ -41.5516326434498, -17.935843060860201 ], [ -41.550359004380098, -17.934995686973799 ], [ -41.549393475881999, -17.934354800251 ], [ -41.548162500773003, -17.934328098944501 ], [ -41.546418059014101, -17.9337581400274 ], [ -41.545228781894401, -17.933349136421501 ], [ -41.543904546358597, -17.932477722786501 ], [ -41.542345360344498, -17.932235729788498 ], [ -41.540597456236398, -17.9320498727784 ], [ -41.539332586468703, -17.931888771700301 ], [ -41.538181072620503, -17.930924978591399 ], [ -41.536844117692603, -17.9306713630492 ], [ -41.534869637461497, -17.930419610213999 ], [ -41.533209703575501, -17.930155259594901 ], [ -41.531616453428903, -17.930195262999199 ], [ -41.529472344036002, -17.9300513897978 ], [ -41.528167370029401, -17.930018068131499 ], [ -41.526920169239098, -17.929909848756299 ], [ -41.526333124002598, -17.929213244024201 ], [ -41.525388082528302, -17.927779629932001 ], [ -41.523176438846903, -17.927516290106499 ], [ -41.5221883246696, -17.925771186373801 ], [ -41.521696220666499, -17.9244477783026 ], [ -41.521755948168398, -17.922675997347302 ], [ -41.519862391912802, -17.922661970696399 ], [ -41.518925376148502, -17.9240077686093 ], [ -41.517548694648198, -17.92472343863 ], [ -41.516753037589098, -17.924428957070798 ], [ -41.5153702373755, -17.9222938774634 ], [ -41.515375202052397, -17.922229360063 ], [ -41.513432436885502, -17.917109723122099 ], [ -41.510472559761602, -17.916780207378501 ], [ -41.508871609917698, -17.916763321006002 ], [ -41.507377792896001, -17.915783056297499 ], [ -41.506560307289199, -17.915161535460101 ], [ -41.506411240479999, -17.914419815394002 ], [ -41.507817815766202, -17.912420968636699 ], [ -41.507656986616603, -17.9107758444997 ], [ -41.5062249327082, -17.909294292480801 ], [ -41.504939478969099, -17.907728891290699 ], [ -41.5031183973719, -17.9081440439057 ], [ -41.5023179533082, -17.908655314098599 ], [ -41.5010096686906, -17.910562651101401 ], [ -41.499279822769701, -17.910702569158801 ], [ -41.497902422626701, -17.910791355684601 ], [ -41.494380652374602, -17.9114948395674 ], [ -41.493669390117098, -17.910212527999899 ], [ -41.495012541700198, -17.907752265480401 ], [ -41.494422057373598, -17.906700290421199 ], [ -41.491334830088803, -17.905457076798001 ], [ -41.488903020591302, -17.905211091005501 ], [ -41.486817457152497, -17.903485322624 ], [ -41.484028045319903, -17.902681818647501 ], [ -41.4819122650322, -17.902455988102901 ], [ -41.4814940745703, -17.900546601171602 ], [ -41.481067818457099, -17.898243472213 ], [ -41.478975938509699, -17.896632772365901 ], [ -41.479187434156998, -17.8945339420594 ], [ -41.480398204165397, -17.893489957876501 ], [ -41.481176229183902, -17.893046945404901 ], [ -41.482164210451501, -17.893079711098999 ], [ -41.482640122772501, -17.892413524223201 ], [ -41.482691156600303, -17.892360932244301 ], [ -41.482759306645299, -17.8922923088905 ], [ -41.4835858609231, -17.891204971607799 ], [ -41.483590154802002, -17.891147411952499 ], [ -41.483725876168599, -17.8909151229584 ], [ -41.483865295588899, -17.890657578310702 ], [ -41.484483983829101, -17.8894867954169 ], [ -41.484547731352102, -17.889365531502101 ], [ -41.484784338189797, -17.888573055911799 ], [ -41.485694164209498, -17.887301666067199 ], [ -41.486840133791098, -17.8861542338474 ], [ -41.487295041238099, -17.884577541404401 ], [ -41.488305660906001, -17.882906557759402 ], [ -41.489399365317603, -17.881720397183301 ], [ -41.490087181252299, -17.8806254655942 ], [ -41.491119509494197, -17.878947621948399 ], [ -41.491926975163501, -17.877835871547401 ], [ -41.492002741287102, -17.8777458266146 ], [ -41.493643075383098, -17.876660429640499 ], [ -41.494185629232099, -17.8754601409724 ], [ -41.494583971389702, -17.874389142922301 ], [ -41.494612612043298, -17.8732015192939 ], [ -41.494619132367497, -17.873130182538802 ], [ -41.495276100147997, -17.871278218066699 ], [ -41.496483982420003, -17.870628311738798 ], [ -41.497964260468898, -17.8697781151218 ], [ -41.498363726178198, -17.869979437443298 ] ] ] } }
    ]
    }
  
  return <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{height: "100%", width: "100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GeoJSON data={geo}></GeoJSON>
  </MapContainer>
}