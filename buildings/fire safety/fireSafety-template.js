// Get building name from URL parameters
const params = new URLSearchParams(window.location.search);
const buildingName = params.get('name');

// Update back button to include building name
document.getElementById('backButton').onclick = function() {
  window.location.href = `../../overview/overview.html?name=${encodeURIComponent(buildingName)}`;
};

// Helper function to normalize building names for comparison
function normalizeBuildingName(name) {
  return name.toLowerCase().trim().replace(/[()]/g, '');
}

// Find fire safety data for this building
const fireData = fireSafetyData.find(
  b => normalizeBuildingName(b.name) === normalizeBuildingName(buildingName)
);

// Helper to get icon path
function getIcon(value) {
  if (value === 'yes') return '../../others/images/check.png';
  if (value === 'none') return '../../others/images/wrong.png';
  if (value === 'not required') return '../../others/images/wrong.png';
  return '../../others/images/wrong.png';
}

if (fireData) {
  // Set icons for each fire safety feature
  document.getElementById('sprinkler-img').src = getIcon(fireData.sprinkler);
  document.getElementById('fire-hose-cabinet-img').src = getIcon(fireData.fire_hose_cabinet);
  document.getElementById('smoke-detector-img').src = getIcon(fireData.smoke_detector);
  document.getElementById('fire-alarm-img').src = getIcon(fireData.fire_alarm);
  document.getElementById('emergency-light-img').src = getIcon(fireData.emergency_light);
  document.getElementById('fire-extinguisher-img').src = getIcon(fireData.fire_extinguisher);
  document.getElementById('evacuation-plan-img').src = getIcon(fireData.evacuation_plan);

  // Recommendations
  const recContainer = document.getElementById('recommendation-container');
  if (recContainer) {
    let html = '<h1>RECOMMENDATION</h1>';
    (fireData.recommendations || []).forEach(rec => {
      html += `<div class="recommendations"><p class="descriptions">${rec}</p></div>`;
    });
    recContainer.innerHTML = html;
  }

  // Documentation photos
  const docContainer = document.querySelector('.documentation-container');
  if (docContainer) {
    // Clear existing photos
    const docImages = docContainer.querySelectorAll('.doc-img');
    docImages.forEach(img => img.remove());
    
    // Add new photos
    const photos = documentationPhotos[fireData.name] || [];
    photos.forEach(filename => {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'doc-img';
      const img = document.createElement('img');
      img.src = `images/${fireData.name}/${filename}`;
      img.alt = `${fireData.name} - Documentation Photo`;
      img.onerror = function() { this.style.display = 'none'; };
      imgDiv.appendChild(img);
      docContainer.appendChild(imgDiv);
    });
  }
}

// Set background image based on selected building
const building = buildingData.find(b =>
  normalizeBuildingName(b.name) === normalizeBuildingName(buildingName)
);

if (building) {
  const container = document.querySelector('.container');
  if (container) {
    // Adjust the path for the fire safety template's location
    const backgroundImage = building.backgroundImage.replace('../buildings/', '../../');
    container.style.setProperty('--background-image', `url('${backgroundImage}')`);
  }

  // Load documentation photos
  const docContainer = document.querySelector('.documentation-container');
  if (docContainer) {
    // Clear existing photos
    const docImages = docContainer.querySelectorAll('.doc-img');
    docImages.forEach(img => img.remove());

    // Get the photo filenames for this building
    const photos = documentationPhotos[building.name] || [];
    photos.forEach(filename => {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'doc-img';

      const img = document.createElement('img');
      // Use the correct path for fire safety documentation photos
      img.src = `images/${building.name}/${filename}`;
      img.alt = `${building.name} - Documentation Photo`;

      img.onerror = function() {
        this.style.display = 'none';
      };

      imgDiv.appendChild(img);
      docContainer.appendChild(imgDiv);
    });
  }
} 