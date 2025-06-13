// Get building name from URL parameters
const params = new URLSearchParams(window.location.search);
const buildingName = params.get('name');

// Update back button to include building name
document.getElementById('backButton').onclick = function() {
  window.location.href = `../../overview/overview.html?name=${encodeURIComponent(buildingName)}`;
};

// Set background image based on selected building
const building = buildingData.find(b =>
  b.name.toLowerCase().trim() === buildingName?.toLowerCase().trim()
);

if (building) {
  const container = document.querySelector('.container');
  if (container) {
    // Adjust the path for the accessibility template's location
    const backgroundImage = building.backgroundImage.replace('../buildings/', '../../buildings/');
    container.style.backgroundImage = `url('${backgroundImage}')`;
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
      // Use the building name as the folder (spaces and case preserved)
      img.src = `images/${building.name}/${filename}`;
      img.alt = `${building.name} - Documentation Photo`;

      img.onerror = function() {
        this.style.display = 'none';
      };

      imgDiv.appendChild(img);
      docContainer.appendChild(imgDiv);
    });
  }

  // Load accessibility features and recommendations
  const accessInfo = accessibilityData.find(
    b => b.name.toLowerCase().trim() === building.name.toLowerCase().trim()
  );

  // Accessibility Features
  const featuresContainer = document.querySelectorAll('.description-container')[0];
  if (featuresContainer) {
    // Clear existing content
    featuresContainer.innerHTML = '<h1>ACCESSIBILITY FEATURES</h1>';
    
    const featuresList = accessInfo?.accessibility_features || [];
    featuresList.forEach(feature => {
      const featureDiv = document.createElement('div');
      featureDiv.className = 'recommendations';
      featureDiv.innerHTML = `<p class="descriptions">${feature}</p>`;
      featuresContainer.appendChild(featureDiv);
    });
  }

  // Recommendations
  const recommendationsContainer = document.querySelectorAll('.description-container')[1];
  if (recommendationsContainer) {
    // Clear existing content
    recommendationsContainer.innerHTML = '<h1>RECOMMENDATIONS</h1>';
    
    const recList = accessInfo?.recommendation || [];
    recList.forEach(rec => {
      const recDiv = document.createElement('div');
      recDiv.className = 'recommendations';
      recDiv.innerHTML = `<p class="descriptions">${rec}</p>`;
      recommendationsContainer.appendChild(recDiv);
    });
  }
} 