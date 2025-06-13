<!DOCTYPE html>
<?php
// Load and decode the JSON data
$jsonData = file_get_contents('../../json/fire_safety.json');
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
    <title>Fire Safety Inspection - <?php echo htmlspecialchars($buildingData['name']); ?></title>
    <link rel="stylesheet" href="../fire safety/css/fireSafety-template.css" />
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
          <img src="../../others/images/fire.png" alt="">
          <h1>Fire Safety Inspection - <?php echo htmlspecialchars($buildingData['name']); ?></h1>
        </div>
        
        <div class="description-container">
          <table>
            <tr>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">SPRINKLER</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['sprinkler'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="sprinkler status" />
                </div>
              </td>
              <td></td>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">FIRE <br />EXTINGUISHER</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['fire_extinguisher'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="fire extinguisher status" />
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">FIRE HOSE<br />CABINET</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['fire_hose_cabinet'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="fire hose cabinet status" />
                </div>
              </td>
              <td></td>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">EMERGENCY <br />LIGHT</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['emergency_light'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="emergency light status" />
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">SMOKE<br />DETECTOR</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['smoke_detector'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="smoke detector status" />
                </div>
              </td>
              <td></td>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">FIRE ALARM</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['fire_alarm'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="fire alarm status" />
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="inspection-container">
                  <p class="inspection-name">EVACUATION <br />PLAN</p>
                  <img class="image-container" src="../../others/images/<?php echo $buildingData['evacuation_plan'] === 'yes' ? 'check.png' : 'wrong.png'; ?>" alt="evacuation plan status" />
                </div>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
    
        <div class="description-container" id="recommendation-container">
          <h1>RECOMMENDATION</h1>
          <?php foreach ($buildingData['recommendations'] as $recommendation): ?>
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