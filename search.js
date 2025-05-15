const searchData = [
  {
    name: "Biological Science Bldg. | Infrastructure Audit",
    url: "buildings/infrastructure audit/Biological Sciences.html",
  },
  {
    name: "Biological Science Bldg. | Fire Safety Inspection",
    url: "buildings/fire safety/Biological Sciences.html",
  },
  {
    name: "CAS | Infrastructure Audit",
    url: "buildings/infrastructure audit/Languages.html",
  },
  {
    name: "CAS | Fire Safety Inspection",
    url: "buildings/fire safety/Languages.html",
  },
  {
    name: "CCJ | Infrastructure Audit",
    url: "buildings/infrastructure audit/CCJ.html",
  },
  {
    name: "CCJ | Fire Safety Inspection",
    url: "buildings/fire safety/CCJ.html",
  },
  {
    name: "CEIT | Fire Safety Inspection",
    url: "buildings/fire safety/CEIT.html",
  },
  {
    name: "DIET | Infrastructure Audit",
    url: "buildings/infrastructure audit/DIET.html",
  },
  {
    name: "DIET | Fire Safety Inspection",
    url: "buildings/fire safety/DIET.html",
  },
  {
    name: "International House 1 | Infrastructure Audit",
    url: "buildings/infrastructure audit/International House.html",
  },
  {
    name: "International House 1 | Fire Safety Inspection",
    url: "buildings/fire safety/International House.html",
  },
  {
    name: "ITC Bldg. | Infrastructure Audit",
    url: "buildings/infrastructure audit/ITC Building.html",
  },
  {
    name: "ITC Bldg. | Fire Safety Inspection",
    url: "buildings/fire safety/ITC Building.html",
  },
  {
    name: "Physical Science Bldg | Infrastructure Audit",
    url: "buildings/infrastructure audit/Physical Science.html",
  },
  {
    name: "Physical Science Bldg | Fire Safety Inspection",
    url: "buildings/fire safety/Physical Science.html",
  },
  {
    name: "Interdisciplinary Research Bldg | Infrastructure Audit",
    url: "buildings/infrastructure audit/Research.html",
  },
  {
    name: "Interdisciplinary Research Bldg | Fire Safety Inspection",
    url: "buildings/fire safety/Research.html",
  },
  {
    name: "University Library | Fire Safety Inspection",
    url: "buildings/fire safety/University Library.html",
  },
];

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
        const basePath = location.pathname.includes("/buildings/")
          ? "../../"
          : "./";
        window.location.href = basePath + match.url;
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
