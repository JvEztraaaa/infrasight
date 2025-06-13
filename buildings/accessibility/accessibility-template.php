<!DOCTYPE html>
<?php
// Load and decode the JSON data
$jsonData = file_get_contents('../../json/accessibility_assessment.json');
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
    <title>Accessibility Assessment - <?php echo htmlspecialchars($buildingData['name']); ?></title>
    <link rel="stylesheet" href="../accessibility/css/accessibility-template.css" />
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
          <img class="icon" src="../../others/images/access.png" />
          <h1>Accessibility Assessment - <?php echo htmlspecialchars($buildingData['name']); ?></h1>
        </div>

        <div class="description-container" id="recommendation-container">
          <h1>ACCESSIBILITY FEATURES</h1>
          <?php foreach ($buildingData['accessibility_features'] as $feature): ?>
          <div class="recommendations">
            <p class="descriptions"><?php echo htmlspecialchars($feature); ?></p>
          </div>
          <?php endforeach; ?>
        </div>

        <div class="description-container" id="recommendation-container">
          <h1>RECOMMENDATIONS</h1>
          <?php foreach ($buildingData['recommendation'] as $recommendation): ?>
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