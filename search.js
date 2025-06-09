const searchData = [];

// Determine the correct path to buildings.json based on the current page's URL
let buildingsJsonPath = 'data/buildings.json';
// Check if the current URL contains '/buildings/' (or any other subdirectory where search.js might be loaded from)
if (window.location.pathname.includes('/buildings/')) {
    buildingsJsonPath = '../data/buildings.json';
}

fetch(buildingsJsonPath)
  .then(response => {
    if (!response.ok) {
      // Throw an error if the HTTP status is not successful (e.g., 404, 500)
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(buildings => {
    buildings.forEach(building => {
      building.audits.forEach(audit => {
        searchData.push({
          name: `${building.name} | ${audit.type}`,
          buildingId: building.id,
          auditType: audit.type
        });
      });
    });
  })
  .catch(error => console.error('Error loading building data:', error));

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-box input");
  const container = document.querySelector(".search-box");

  const resultBox = document.createElement("div");
  resultBox.classList.add("search-results");
  container.appendChild(resultBox);

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    resultBox.innerHTML = "";

    if (query === "") {
      resultBox.style.display = "none";
      return;
    }

    const matches = searchData.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    matches.forEach((match) => {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = match.name;
      div.addEventListener("click", () => {
        // Construct the URL for the new building_detail.html
        const url = `buildings/building_detail.html?id=${match.buildingId}&type=${encodeURIComponent(match.auditType)}`;
        window.location.href = url;
      });
      resultBox.appendChild(div);
    });

    resultBox.style.display = matches.length > 0 ? "block" : "none";
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      resultBox.style.display = "none";
    }
  });
});
