// fireSafety-features.js
const fireSafetyData = [
  {
    name: "University Library",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "yes",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Provide fire hose cabinets",
      "Install smoke detectors in all floor levels",
      "Provide evacuation plan"
    ]
  },
  {
    name: "College of Information and Technology (CEIT)",
    sprinkler: "not required",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install fire hose cabinets",
      "Install smoke detectors"
    ]
  },
  {
    name: "Engineering Building",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "yes",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Update the evacuation plan"
    ]
  },
  {
    name: "ITC Building",
    sprinkler: "none",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install fire hose cabinets",
      "Install smoke detectors",
      "Update evacuation plan",
      "Provide working fire alarms"
    ]
  },
  {
    name: "Languages & Humanities Building (CAS)",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Provide fire hoses"
    ]
  },
  {
    name: "Biological Sciences Building",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Update evacuation plan"
    ]
  },
  {
    name: "Physical Science Building",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Provide fire hoses"
    ]
  },
  {
    name: "Interdisciplinary Research Building",
    sprinkler: "yes",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install smoke detectors",
      "Provide evacuation plan"
    ]
  },
  {
    name: "International House 1",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors"
    ]
  },
  {
    name: "College of Criminal Justice (CCJ)",
    sprinkler: "yes",
    fire_hose_cabinet: "yes",
    smoke_detector: "yes",
    fire_alarm: "yes",
    emergency_light: "none",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install emergency lights"
    ]
  },
  {
    name: "Engineering Science Building",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Provide evacuation plan"
    ]
  },
  {
    name: "Human Kinetics Building (Gymnasium)",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Provide a new fire hose cabinet",
      "Provide evacuation plan"
    ]
  },
  {
    name: "CEMDS Building",
    sprinkler: "yes",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install smoke detectors"
    ]
  },
  {
    name: "Graduate School & Open Learning College",
    sprinkler: "not required",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors"
    ]
  },
  {
    name: "Veterinary Medicine Classroom (CVMBS)",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors"
    ]
  },
  {
    name: "Veterinary Hospital",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors"
    ]
  },
  {
    name: "Agricultural Science Building (CAFENR)",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Provide evacuation plan"
    ]
  },
  {
    name: "Crop Science Building",
    sprinkler: "none",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "none",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Install fire hose cabinet",
      "Install fire alarms",
      "Provide evacuation plan"
    ]
  },
  {
    name: "College of Education",
    sprinkler: "not required",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "none",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install fire hose cabinet",
      "Install smoke detectors",
      "Install emergency lights"
    ]
  },
  {
    name: "Old CEMDS Building",
    sprinkler: "none",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Install fire hose cabinet"
    ]
  },
  {
    name: "Animal Science Building",
    sprinkler: "none",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Install fire hose cabinet",
      "Provide evacuation plan"
    ]
  },
  {
    name: "Research Center Building",
    sprinkler: "not required",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "none",
    emergency_light: "none",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install smoke detectors",
      "Install fire hose cabinet",
      "Install fire alarm",
      "Install emergency lights",
      "Provide evacuation plan"
    ]
  },
  {
    name: "International House 2",
    sprinkler: "none",
    fire_hose_cabinet: "yes",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Provide evacuation plan"
    ]
  },
  {
    name: "Bahay ng Alumni",
    sprinkler: "none",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "none",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Install fire hose cabinet",
      "Install fire alarm",
      "Provide evacuation plan"
    ]
  },
  {
    name: "NCRDEC Building (Coffee Center)",
    sprinkler: "not required",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "none",
    emergency_light: "none",
    fire_extinguisher: "yes",
    evacuation_plan: "none",
    recommendations: [
      "Install smoke detectors",
      "Install fire hose cabinet",
      "Install fire alarm",
      "Install emergency light",
      "Provide evacuation plan"
    ]
  },
  {
    name: "OSAS Building",
    sprinkler: "none",
    fire_hose_cabinet: "none",
    smoke_detector: "none",
    fire_alarm: "yes",
    emergency_light: "yes",
    fire_extinguisher: "yes",
    evacuation_plan: "yes",
    recommendations: [
      "Install sprinkler system",
      "Install smoke detectors",
      "Install fire hose cabinet",
      "Provide more fire extinguisher",
      "Provide evacuation plan"
    ]
  }
]; 