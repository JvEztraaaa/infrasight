// Fetch building data from JSON file
fetch('../json/infra_audit.json')
  .then(response => response.json())
  .then(data => {
    const params = new URLSearchParams(window.location.search);
    const buildingName = params.get('name');

    const building = data.find(b =>
      b.name.toLowerCase().trim() === buildingName?.toLowerCase().trim()
    );

    if (building) {
      document.getElementById('building-name').textContent = building.name;
      document.querySelectorAll('.overview-panel .item')[0].querySelector('.value').textContent = building.storey;
      document.querySelectorAll('.overview-panel .item')[1].querySelector('.value').textContent = building.type_of_bldg;
      document.querySelectorAll('.overview-panel .item')[2].querySelector('.value').textContent = building.design_occupancy;
      document.querySelectorAll('.overview-panel .item')[3].querySelector('.value').textContent = building.year_of_construction;
    }
  })
  .catch(error => console.error('Error loading building data:', error));
