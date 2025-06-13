<!DOCTYPE html>
<?php
// Load and decode the JSON data
$jsonData = file_get_contents('../../json/infra_audit.json');
$buildings = json_decode($jsonData, true);

// Get building name from URL parameter
$buildingName = isset($_GET['name']) ? $_GET['name'] : '';

// Find the matching building data
$buildingData = null;
foreach ($buildings as $building) {
    if ($building['name'] === $buildingName) {
        $buildingData = $building;
        break;
    }
}

// If no building found, redirect to overview
if (!$buildingData) {
    header('Location: ../../overview/overview.html');
    exit;
}
?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infrastructure Audit - <?php echo htmlspecialchars($buildingData['name']); ?></title>
    <link rel="stylesheet" href="../infrastructure audit/css/infrastructure-template.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  </head>
  <body>
    <header>
      <div class="navbar">
        <div class="search-box">
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            autocomplete="off"/>
          <span class="search-icon">🔍</span>
          <div id="searchResults" class="search-results"></div>
        </div>
        <nav class="nav-links">
          <a href="../../index.html">Home</a>
          <a href="../../others/about.html">About</a>
          <a href="../../others/contact.html">Contact</a>
        </nav>
      </div>
    </header>

    <div class="container">
      <div class="layer1">
        <div class="back-panel">
          <button class="back-btn" onclick="window.location.href='../../overview/overview.html?name=<?php echo urlencode($buildingData['name']); ?>'">Back to General</button>
        </div>
        <div class="header-container">
          <img src="../../others/images/building.png" alt="">
          <h1>Infrastructure Audit - <?php echo htmlspecialchars($buildingData['name']); ?></h1>
        </div>

        <div class="rvs-container" id="rvs-container">
          <h1><?php echo htmlspecialchars(explode(' ', $buildingData['audit_summary']['rvs_score'])[0]); ?></h1>
          <h2>RVS Score</h2>
          <div class="vulnerability">
            <p class="rvs-descriptions"><?php echo htmlspecialchars($buildingData['audit_summary']['rvs_score']); ?></p>
          </div>
        </div>
        
        <div class="location-container" id="location-container">
          <h1>VULNERABILITY OF BUILDING LOCATION</h1>
          <div class="vulnerability">
            <p class="location-descriptions"><?php echo htmlspecialchars($buildingData['audit_summary']['location_vulnerability']); ?></p>
          </div>
        </div>

        <div class="condition-container" id="condition-container">
          <h1>PHYSICAL OVER-ALL CONDITIONS</h1>
          <?php foreach ($buildingData['audit_summary']['conditions'] as $condition): ?>
          <div class="recommendations">
            <p class="condition-descriptions"><?php echo htmlspecialchars($condition); ?></p>
          </div>
          <?php endforeach; ?>
        </div>
    
        <div class="description-container" id="recommendation-container">
          <h1>RECOMMENDATION</h1>
          <?php foreach ($buildingData['audit_summary']['recommendations'] as $recommendation): ?>
          <div class="recommendations">
            <p class="descriptions"><?php echo htmlspecialchars($recommendation); ?></p>
          </div>
          <?php endforeach; ?>
        </div>
    
        <div class="documentation-container">
          <h1>DOCUMENTATION PHOTOS</h1>
          <!-- Note: You'll need to implement a system to store and display actual building photos -->
          <div class="doc-img"><img src="University Library.jpg" alt="docu" /></div>
          <div class="doc-img"><img src="University Library.jpg" alt="docu" /></div>
          <div class="doc-img"><img src="University Library.jpg" alt="docu" /></div>
          <div class="doc-img"><img src="University Library.jpg" alt="docu" /></div>
          <div class="doc-img"><img src="University Library.jpg" alt="docu" /></div>
          <div class="doc-img"><img src="University Library.jpg" alt="docu" /></div>
        </div>
      </div>
    </div>
  </body>
</html> 