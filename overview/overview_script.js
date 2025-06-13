const params = new URLSearchParams(window.location.search);
const buildingName = params.get('name');

const building = buildingData.find(b =>
  b.name.toLowerCase().trim() === buildingName?.toLowerCase().trim()
);

if (building) {
  document.getElementById('building-name').textContent = building.name;
  document.querySelectorAll('.overview-panel .item')[0].querySelector('.value').textContent = building.storeys;
  document.querySelectorAll('.overview-panel .item')[1].querySelector('.value').textContent = building.type;
  document.querySelectorAll('.overview-panel .item')[2].querySelector('.value').textContent = building.occupancy;
  document.querySelectorAll('.overview-panel .item')[3].querySelector('.value').textContent = building.year;

  const container = document.querySelector('.container');
  if (container) {
    container.style.backgroundImage = `url('${building.backgroundImage}')`;
  }
}

// Add click handler for accessibility card
document.getElementById('accessibilityCard').onclick = function() {
  const params = new URLSearchParams(window.location.search);
  const buildingName = params.get('name');
  window.location.href = `../../buildings/accessibility/accessibility-template.html?name=${encodeURIComponent(buildingName)}`;
};
