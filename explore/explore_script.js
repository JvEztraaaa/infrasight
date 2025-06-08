const map = L.map('map', {
  center: [14.19876, 120.88149],
  zoom: 18,
  scrollWheelZoom: true
});

// Satellite tile layer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri & contributors'
}).addTo(map);

// Building markers
const buildings = [
  {name:'Engineering Science Building (DIET)', coord:[14.200041966261358, 120.87986319819585]},
  {name:'Biological Sciences Building', coord:[14.200405318817777, 120.88250153479166]},
  {name:'Physical Science Building', coord:[14.200005821121971, 120.88290038246578]},
  {name:'Interdisciplinary Research Building', coord:[14.199717037479397, 120.88320898775572]},
  {name:'International House 1', coord:[14.1983,120.8817]},
  {name:'College of Information and Technology (CEIT)', coord:[14.199326552749044, 120.88066992557255]},
  {name:'University Library', coord:[14.199322573051465, 120.88234524368683]},
  {name:'Agricultural Science Building (CAFENR)', coord:[14.199086203513206, 120.88277033438736]},
  {name:'Crop Science Building', coord:[14.1977,120.8824]},
  {name:'Animal Science Building', coord:[14.202795569586902, 120.88205936288706]},
  {name:'Veterinary Medicine Classroom (CVMBS)', coord:[14.202646874698718, 120.88185012363537]},
  {name:'Veterinary Hospital', coord:[14.202867510965532, 120.88152770023797]},
  {name:'Old CEMDS Building', coord:[14.1974,120.8812]},
  {name:'Human Kinetics Building (Gymnasium)', coord:[14.197187127184952, 120.88252487319905]},
  {name:'College of Education Research Center Building', coord:[14.199342270872908, 120.88025113731037]},
  {name:'International House 2', coord:[14.1968,120.8821]},
  {name:'OSAS Building', coord:[14.1970,120.8824]},
  {name:'ITC Building', coord:[14.199508571067673, 120.88068601882696]},
  {name:'Languages & Humanities Building (CAS)', coord:[14.1976,120.8829]},
  {name:'College of Criminal Justice (CCJ)', coord:[14.1979,120.8831]},
  {name:'CEMDS Building', coord:[14.19909349775188, 120.88304345244829]},
  {name:'Graduate School & Open Learning College', coord:[14.1985,120.8835]},
  {name:'Bahay ng Alumni', coord:[14.1988,120.8837]}
];

// Add custom markers with label under icon
buildings.forEach(b => {
  const iconHtml = `
    <div class="marker-label-container">
      <img src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png" width="20" height="30" />
      <div class="custom-label">${b.name}</div>
    </div>
  `;

  const customIcon = L.divIcon({
    html: iconHtml,
    className: 'custom-div-icon',
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

  L.marker(b.coord, { icon: customIcon }).addTo(map);
});
