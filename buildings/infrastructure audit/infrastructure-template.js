// Get building name from URL parameters
const params = new URLSearchParams(window.location.search);
const buildingName = params.get('name');

// Update back button to include building name
document.getElementById('backButton').onclick = function() {
  window.location.href = `../../overview/overview.html?name=${encodeURIComponent(buildingName)}`;
};

// Find building data for this building
const building = buildingData.find(
  b => b.name.toLowerCase().trim() === buildingName?.toLowerCase().trim()
);

if (building) {
  // Set background image based on selected building
  const backgroundImage = building.backgroundImage.replace('../buildings/', '../../');
  document.documentElement.style.setProperty('--background-image', `url('${backgroundImage}')`);

  // Get the audit data for this building
  const auditData = infrastructureData.find(
    b => b.name.toLowerCase().trim() === buildingName?.toLowerCase().trim()
  );

  if (auditData) {
    // Update RVS Score
    const rvsScore = auditData.audit_summary.rvs_score.split(' (')[0];
    const rvsDescription = auditData.audit_summary.rvs_score.split('(')[1].replace(')', '');
    document.querySelector('#rvs-container h1').textContent = rvsScore;
    document.querySelector('.rvs-descriptions').textContent = rvsDescription;

    // Update Location Vulnerability
    document.querySelector('.location-descriptions').textContent = auditData.audit_summary.location_vulnerability;

    // Update Conditions
    const conditionContainer = document.querySelector('#condition-container');
    // Clear existing condition descriptions
    const existingConditions = conditionContainer.querySelectorAll('.recommendations');
    existingConditions.forEach(condition => condition.remove());
    
    // Add new condition descriptions based on data
    auditData.audit_summary.conditions.forEach(condition => {
      const div = document.createElement('div');
      div.className = 'recommendations';
      div.innerHTML = `<p class="condition-descriptions">${condition}</p>`;
      conditionContainer.appendChild(div);
    });

    // Update Recommendations
    const recommendationContainer = document.querySelector('#recommendation-container');
    // Clear existing recommendations
    const existingRecommendations = recommendationContainer.querySelectorAll('.recommendations');
    existingRecommendations.forEach(recommendation => recommendation.remove());
    
    // Add new recommendations based on data
    auditData.audit_summary.recommendations.forEach(recommendation => {
      const div = document.createElement('div');
      div.className = 'recommendations';
      div.innerHTML = `<p class="descriptions">${recommendation}</p>`;
      recommendationContainer.appendChild(div);
    });

    // Load documentation photos
    const docContainer = document.querySelector('.documentation-container');
    // Clear existing content except the h1
    const h1 = docContainer.querySelector('h1');
    docContainer.innerHTML = '';
    docContainer.appendChild(h1);

    // Create a container for the images
    const docImgContainer = document.createElement('div');
    docImgContainer.className = 'doc-img';
    docContainer.appendChild(docImgContainer);

    // Get the list of images for this building
    const buildingImages = documentationPhotos[buildingName];
    if (buildingImages) {
      buildingImages.forEach(filename => {
        const img = document.createElement('img');
        // Use encodeURIComponent to handle spaces and special characters in paths
        img.src = `images/${encodeURIComponent(buildingName)}/${encodeURIComponent(filename)}`;
        img.alt = `Documentation photo for ${buildingName}`;
        img.onerror = function() {
          this.style.display = 'none';
        };
        docImgContainer.appendChild(img);
      });
    }
  }
} 