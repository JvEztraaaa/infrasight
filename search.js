document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const container = document.querySelector(".search-box");
  const resultBox = document.getElementById("searchResults");
  resultBox.style.display = "none";

  // 🔧 Auto-detect the correct relative path to overview.html
  const currentPath = window.location.pathname;
  let overviewPath = "";

  if (
    currentPath.includes("/overview/") ||
    currentPath.includes("/others/") ||
    currentPath.includes("/explore/")
  ) {
    overviewPath = "../overview/overview.html";
  } else if (
    currentPath.includes("/buildings/accessibility/") ||
    currentPath.includes("/buildings/fire%20safety/") ||
    currentPath.includes("/buildings/infrastructure%20audit/")
  ) {
    overviewPath = "../../overview/overview.html";
  } else {
    overviewPath = "./overview/overview.html";
  }

  // 🏢 Building data
  const buildingData = [
    {
      name: "Engineering Science Building",
      year: 1998,
      type: "Concrete Frame",
      storeys: 3,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Engineering Science (ES).JPG",
    },
    {
      name: "Biological Sciences Building",
      year: 1997,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Biological Sciences.JPG",
    },
    {
      name: "Physical Science Building",
      year: 1992,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Physical Science.JPG",
    },
    {
      name: "Interdisciplinary Research Building",
      year: 2016,
      type: "Concrete Frame",
      storeys: 7,
      occupancy: "Specialized Facilities",
      backgroundImage: "/buildings/building-photos/Interdisciplinary Research Building.JPG",
    },
    {
      name: "International House 1",
      year: 2008,
      type: "Concrete Frame",
      storeys: 4,
      occupancy: "Mixed-Use Buildings",
      backgroundImage: "/buildings/building-photos/International House 1.JPG",
    },
    {
      name: "College of Information and Technology (CEIT)",
      year: 2006,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/College of Engineering and Information Technology.JPG",
    },
    {
      name: "University Library",
      year: 2004,
      type: "Concrete Frame",
      storeys: 6,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/University Library.jpg",
    },
    {
      name: "Agricultural Science Building (CAFENR)",
      year: 2008,
      type: "Concrete Frame",
      storeys: 3,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Agricultural Science (CAFENR).JPG",
    },
    {
      name: "Crop Science Building",
      year: 1994,
      type: "Concrete Frame",
      storeys: 3,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Crop Science.JPG",
    },
    {
      name: "Animal Science Building",
      year: 1994,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Animal Science.JPG",
    },
    {
      name: "Veterinary Medicine Classroom (CVMBS)",
      year: 2004,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Veterinary Medicine Classroom (CVMBS).JPG",
    },
    {
      name: "Veterinary Hospital",
      year: 2003,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Specialized Facilities",
      backgroundImage: "/buildings/building-photos/Veterinary Hospital.JPG",
    },
    {
      name: "Old CEMDS Building",
      year: 1986,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Old CEMDS.JPG",
    },
    {
      name: "Human Kinetics Building (Gymnasium)",
      year: 2006,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Specialized Facilities",
      backgroundImage: "/buildings/building-photos/Human Kinetics Building (Gymnasium).JPG",
    },
    {
      name: "College of Education",
      year: 1993,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/College of Education.JPG",
    },
    {
      name: "Research Center Building",
      year: 1986,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Specialized Facilities",
      backgroundImage: "/buildings/building-photos/Research Center.JPG",
    },
    {
      name: "International House 2",
      year: 2009,
      type: "Concrete Frame",
      storeys: 4,
      occupancy: "Mixed-Use Buildings",
      backgroundImage: "/buildings/building-photos/International House 2.JPG",
    },
    {
      name: "OSAS Building",
      year: 2006,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Mixed-Use Buildings",
      backgroundImage: "/buildings/building-photos/Office of the Student Affairs and Services (OSAS).JPG",
    },
    {
      name: "ITC Building",
      year: 2003,
      type: "Concrete Frame",
      storeys: 5,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/ITC Building.JPG",
    },
    {
      name: "Languages & Humanities Building (CAS)",
      year: 2002,
      type: "Concrete Frame",
      storeys: 3,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Languages and Humanities Building (CAS).JPG",
    },
    {
      name: "College of Criminal Justice (CCJ)",
      year: 2018,
      type: "Concrete Frame",
      storeys: 4,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/College of Criminal Justice.JPG",
    },
    {
      name: "CEMDS Building",
      year: 2016,
      type: "Concrete Frame",
      storeys: 5,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/New CEMDS.JPG",
    },
    {
      name: "Graduate School & Open Learning College",
      year: 2020,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Graduate School and Open Learning College.JPG",
    },
    {
      name: "Bahay ng Alumni",
      year: 2023,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Bahay ng Alumni.JPG",
    },
    {
      name: "Engineering Building",
      year: 2007,
      type: "Concrete Frame",
      storeys: 4,
      occupancy: "Academic and Office",
      backgroundImage: "/buildings/building-photos/Engineering Building (DIET).JPG",
    },
    {
      name: "NCRDEC Building (Coffee Center)",
      year: 2009,
      type: "Concrete Frame",
      storeys: 2,
      occupancy: "Specialized Facilities",
      backgroundImage: "/buildings/building-photos/NCRDEC (Coffee Center).JPG",
    },
  ];

  // Helper to get N random buildings
  function getRandomBuildings(data, count = 5) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // 📌 Show random buildings when input is focused
  input.addEventListener("focus", () => {
    const randomBuildings = getRandomBuildings(buildingData, 5);
    resultBox.innerHTML = "";

    randomBuildings.forEach((building) => {
      const item = document.createElement("div");
      item.classList.add("result-item");
      item.textContent = building.name;
      item.addEventListener("click", () => {
        window.location.href = `${overviewPath}?name=${encodeURIComponent(building.name)}`;
      });
      resultBox.appendChild(item);
    });

    resultBox.style.display = "block";
  });

  // 🔍 Live search while typing
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    resultBox.innerHTML = "";

    if (!query) {
      resultBox.style.display = "none";
      return;
    }

    const matches = buildingData
      .map((b) => b.name)
      .filter((name) => name.toLowerCase().includes(query));

    matches.forEach((name) => {
      const item = document.createElement("div");
      item.classList.add("result-item");
      item.textContent = name;
      item.addEventListener("click", () => {
        window.location.href = `${overviewPath}?name=${encodeURIComponent(name)}`;
      });
      resultBox.appendChild(item);
    });

    resultBox.style.display = matches.length ? "block" : "none";
  });

  // Hide result box when clicking outside
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      resultBox.style.display = "none";
    }
  });

  // Hide result box on Escape key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      resultBox.style.display = "none";
      input.blur();
    }
  });
});
