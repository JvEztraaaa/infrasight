const map = L.map("map", {
  center: [14.19876, 120.88149],
  zoom: 18,
  scrollWheelZoom: true,
  zoomControl: false, // Disable default to relocate
});

// Re-add zoom control to top-right
L.control
  .zoom({
    position: "topright",
  })
  .addTo(map);

// Satellite tile layer (Realistic imagery)
L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles © Esri & contributors",
  }
).addTo(map);

// Building markers
const buildings = [
  { name: "Engineering Science Building",coord: [14.200172, 120.879843], vulnerability: "Vulnerable to Earthquake"},
  { name: "Biological Sciences Building",coord: [14.200328825442938, 120.88229104718752], vulnerability: "Vulnerable to Earthquake"},
  { name: "Physical Science Building",coord: [14.200203796849538, 120.88177327318505], vulnerability: "Vulnerable to Earthquake"},
  { name: "Interdisciplinary Research Building",coord: [14.199717037479397, 120.88320898775572], vulnerability: "Vulnerable to Earthquake"},
  { name: "International House 1", coord: [14.2000044,120.88265] , vulnerability: "Vulnerable to Earthquake"},
  { name: "College of Information and Technology (CEIT)",coord: [14.1994407,120.8806493], vulnerability: "Vulnerable to Earthquake"},
  { name: "University Library",coord: [14.199322573051465, 120.88234524368683], vulnerability: "Vulnerable to Earthquake"},
  { name: "Agricultural Science Building (CAFENR)",coord: [14.199086203513206, 120.88277033438736], vulnerability: "Vulnerable to Earthquake"},
  { name: "Crop Science Building", coord: [14.198955, 120.882381] , vulnerability: "Vulnerable to Earthquake"},
  { name: "Animal Science Building",coord: [14.2027737,120.8820042],},
  { name: "Veterinary Medicine Classroom (CVMBS)",coord: [14.202646874698718, 120.88185012363537], vulnerability: "Vulnerable to Earthquake"},
  { name: "Veterinary Hospital",coord: [14.2028316,120.8815563], vulnerability: "Vulnerable to Earthquake"},
  { name: "Old CEMDS Building", coord: [14.1999226,120.8813103] , vulnerability: "Vulnerable to Earthquake"},
  { name: "Human Kinetics Building (Gymnasium)", coord: [14.197187127184952, 120.88252487319905], vulnerability: "Vulnerable to Earthquake"},
  { name: "College of Education", coord: [14.19885,120.8802473], vulnerability: "Vulnerable to Earthquake"},
  { name: "Research Center Building", coord: [14.1995625,120.8826593] , vulnerability: "Vulnerable to Earthquake"},
  { name: "International House 2", coord: [14.196283789630321, 120.88173484448568] , vulnerability: "Vulnerable to Earthquake"},
  { name: "OSAS Building", coord: [14.197748639728024, 120.88225718573518] , vulnerability: "Vulnerable to Earthquake"},
  { name: "ITC Building", coord: [14.199508571067673, 120.88068601882696] , vulnerability: "Not Vulnerable to Earthquake"},
  { name: "Languages & Humanities Building (CAS)", coord: [14.199861806520786, 120.88191931200625] , vulnerability: "Not Vulnerable to Earthquake"},
  { name: "College of Criminal Justice (CCJ)", coord: [14.198011485004697, 120.87985640168077] , vulnerability: "Not Vulnerable to Earthquake"},
  { name: "CEMDS Building", coord: [14.19909349775188, 120.88304345244829] , vulnerability: "Not Vulnerable to Earthquake"},
  { name: "Graduate School & Open Learning College",coord: [14.199206767636133, 120.88161950359493] , vulnerability: "Not Vulnerable to Earthquake"},
  { name: "Bahay ng Alumni", coord: [14.1970936,120.8828955] , vulnerability: "Vulnerable to Earthquake"},
  { name: "NCRDEC Building (Coffee Center)", coord: [14.197426818139062, 120.88373924828659] , vulnerability: "Vulnerable to Earthquake"},
  { name: "Engineering Building", coord: [14.199988010497304, 120.88041897040587] , vulnerability: "Not Vulnerable to Earthquake"}
];

// Custom markers with labels under icons
buildings.forEach((b) => {
  const iconHtml = `
    <div class="marker-label-container">
      <img src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png" width="20" height="30" />
      <div class="custom-label">${b.name}</div>
    </div>
  `;

  const customIcon = L.divIcon({
    html: iconHtml,
    className: "custom-div-icon",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });

  const popupContent = `
    <div class="popup-box">
      <h2>${b.name}</h2>
      <div class="vulnerability">${b.vulnerability}</div>
      <p><a href="../overview/overview.html?name=${encodeURIComponent(b.name)}" class="view-details-link">View Details</a></p>
    </div>
  `;

  const marker = L.marker(b.coord, { icon: customIcon })
    .addTo(map)
    .bindPopup(popupContent, { offset: [0, -10] });

  marker.on('click', function(e) {
    document.querySelectorAll('.custom-div-icon').forEach(el => {
      el.classList.remove('selected');
    });
    
    const iconElement = e.target.getElement();
    if (iconElement) {
      iconElement.classList.add('selected');
    }
  });
});

// Toggle label
const ToggleLabelsControl = L.Control.extend({
  options: { position: "topright" },

  onAdd: function () {
    const container = L.DomUtil.create("div", "leaflet-bar leaflet-control");

    const button = L.DomUtil.create("div", "custom-toggle-btn", container);
    button.innerHTML = "🙉";
    button.title = "Toggle Labels";

    // Prevent map from dragging when clicking the button
    L.DomEvent.disableClickPropagation(container);

    let labelsVisible = true;
    button.onclick = function (e) {
      e.preventDefault();
      labelsVisible = !labelsVisible;

      document.querySelectorAll(".custom-label").forEach((el) => {
        el.style.display = labelsVisible ? "block" : "none";
      });

      button.innerHTML = labelsVisible ? "🙉" : "🙈";
      button.title = labelsVisible ? "Hide Labels" : "Show Labels";
    };

    return container;
  },
});

map.addControl(new ToggleLabelsControl());
