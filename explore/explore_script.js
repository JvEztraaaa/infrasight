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
  { name: "Engineering Science Building (DIET)",coord: [14.200172, 120.879843],},
  { name: "Biological Sciences Building",coord: [14.200405318817777, 120.88250153479166],},
  { name: "Physical Science Building",coord: [14.200005821121971, 120.88290038246578],},
  { name: "Interdisciplinary Research Building",coord: [14.199717037479397, 120.88320898775572],},
  { name: "International House 1", coord: [14.2000044,120.88265] },
  { name: "College of Information and Technology (CEIT)",coord: [14.1994407,120.8806493],},
  { name: "University Library",coord: [14.199322573051465, 120.88234524368683],},
  { name: "Agricultural Science Building (CAFENR)",coord: [14.199086203513206, 120.88277033438736],},
  { name: "Crop Science Building", coord: [14.198955, 120.882381] },
  { name: "Animal Science Building",coord: [14.2027737,120.8820042],},
  { name: "Veterinary Medicine Classroom (CVMBS)",coord: [14.202646874698718, 120.88185012363537],},
  { name: "Veterinary Hospital",coord: [14.2028316,120.8815563],},
  { name: "Old CEMDS Building", coord: [14.1999226,120.8813103] },
  { name: "Human Kinetics Building (Gymnasium)", coord: [14.197187127184952, 120.88252487319905],},
  { name: "College of Education", coord: [14.19885,120.8802473],},
  { name: "Research Center Building", coord: [14.1995625,120.8826593]},
  { name: "International House 2", coord: [14.1968, 120.8821] },
  { name: "OSAS Building", coord: [14.197, 120.8824] },
  { name: "ITC Building", coord: [14.199508571067673, 120.88068601882696] },
  { name: "Languages & Humanities Building (CAS)", coord: [14.1976, 120.8829] },
  { name: "College of Criminal Justice (CCJ)", coord: [14.1979, 120.8831] },
  { name: "CEMDS Building", coord: [14.19909349775188, 120.88304345244829] },
  { name: "Graduate School & Open Learning College",coord: [14.1985, 120.8835],},
  { name: "Bahay ng Alumni", coord: [14.1970936,120.8828955] },
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
      <h3>${b.name}</h3>
      <p><a href="#" class="view-details-link">View Details</a></p>
    </div>
  `;

  L.marker(b.coord, { icon: customIcon })
    .addTo(map)
    .bindPopup(popupContent, { offset: [0, -10] });
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
