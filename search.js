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

    const matches = buildingData.filter((building) =>
      building.name.toLowerCase().includes(query)
    );

    matches.forEach((match) => {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = match.name;
      div.addEventListener("click", () => {
        window.location.href = `overview/overview.html?name=${encodeURIComponent(match.name)}`;
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