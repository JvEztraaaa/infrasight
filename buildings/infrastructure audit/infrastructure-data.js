const infrastructureData = [
  {
    "name": "Engineering Science Building",
    "year_of_construction": 2007,
    "type_of_bldg": "Concrete Frame",
    "storey": 4,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.50 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repair broken and damaged ceilings on 4th floor",
        "Replace heat insulation sheet at 4th floor",
        "Fix leakage on faucets found on 2nd floor",
        "Clean and repair bathrooms on all floors",
        "Secure loose outlets and replace broken outlet covers"
      ]
    }
  },
  {
    "name": "Engineering Building",
    "year_of_construction": 1998,
    "type_of_bldg": "Concrete Frame",
    "storey": 3,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.50 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of Minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Conduct a detailed structural evaluation led by qualified engineer/s to assess the severity of the cracks and the overall load-bearing capacity of the building",
        "Immediate repairs should be made to ceiling holes, and concrete slab spalling",
        "The uneven stair step should be corrected to prevent tripping hazards",
        "Repair and replacement of broken electrical outlets"
      ]
    }
  },
  {
    "name": "ITC Building",
    "year_of_construction": 2003,
    "type_of_bldg": "Concrete Frame",
    "storey": 5,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "2.30 (Not Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No observed locational vulnerability",
      "conditions": [
        "Presence of Minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Replace all severely damaged tiles—especially around critical access points like elevators and staircases",
        "Let a structural engineer address and further evaluate the bending of wall and minor column-to-truss separation at 5th floor of ITC Building",
        "Replace multiple broken window glass found at various floor levels of the building"
      ]
    }
  },
  {
    "name": "College of Information and Technology (CEIT)",
    "year_of_construction": 2006,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No observed locational vulnerability",
      "conditions": [
        "Presence of some severe structural defects",
        "Presence of localized non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repair severe damage on wall at 2nd floor",
        "Seal minor cracks found on walls, columns and beam",
        "Repair spalling found on cantilever slabs and exterior beam",
        "Clean up hanging and exposed wirings beside the building premise",
        "Allow engineers to conduct a further structural inspection of the building"
      ]
    }
  },
 {
    "name": "Languages & Humanities Building (CAS)",
    "year_of_construction": 2002,
    "type_of_bldg": "Concrete Frame",
    "storey": 3,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "2.30 (Not Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No observed locational vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Seal multiple cracks located along the edges of doors and windows, observed in several rooms",
        "Polish corroded windows",
        "Repair and/or replace damaged doors and electrical fixtures (e.g. outlets and switches)",
        "Allow engineers to conduct a further structural inspection of the building to address the presence of multiple cracks"
      ]
    }
  },
  {
    "name": "Biological Sciences Building",
    "year_of_construction": 1997,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of some interrelated non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "Presence of localized ecological concern found"
      ],
      "recommendations": [
        "Undergo an in-depth assessment by professional engineers and/or plumbers to evaluate the extent of internal damage on ceilings",
        "Prioritize necessary retrofitting or renovation of ceilings and severely damaged soffits",
        "Replace and repair cracked tiles, door handles, electrical outlets and light fixture",
        "Improve the drainage system to eliminate the buildup of dirty stagnant water beside the building"
      ]
    }
  },
  {
    "name": "Physical Science Building",
    "year_of_construction": 1992,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "0.50 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Redesign of fire exit staircase to address uneven steps, and improper design of handrails",
        "Replacement of damaged wooden handrails of main stairs",
        "Investigate the plumbing system to address possible leakage",
        "Renovate discolored ceilings and replace aging electrical fixtures"
      ]
    }
  },
  {
    "name": "Agricultural Science Building (CAFENR)",
    "year_of_construction": 2008,
    "type_of_bldg": "Concrete Frame",
    "storey": 3,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.60 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Conduct an assessment on the plumbing system and address the leakage in pipes",
        "Repair or replace damaged wooden doors",
        "Repair displaced and cracked tiles",
        "Repair damaged electrical outlets and replace missing outlets",
        "Replace heat insulation panel at the ground floor ceiling"
      ]
    }
  },
  {
    "name": "Crop Science Building",
    "year_of_construction": 1994,
    "type_of_bldg": "Concrete Frame",
    "storey": 3,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "0.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of some severe structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Consult an engineer to conduct further structural assessment of the building",
        "Immediately address the structural defects observed",
        "Consider a possible rehabilitation of the building"
      ]
    }
  },
  {
    "name": "Animal Science Building",
    "year_of_construction": 1994,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "No adverse defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Consider widening of stair tread",
        "Repair plastering of exterior walls",
        "Conduct periodic assessment and maintenance of the building"
      ]
    }
  },
{
    "name": "Veterinary Medicine Classroom (CVMBS)",
    "year_of_construction": 2004,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Conduct periodic assessment and maintenance of the building",
        "Repair broken soffit boards",
        "Repatch wall plastering",
        "Repair loose electrical outlet"
      ]
    }
  },
  {
    "name": "Veterinary Hospital",
    "year_of_construction": 2003,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Specialized Facilities",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "Presence of minor ecological concerns found"
      ],
      "recommendations": [
        "Address the presence of algae build up at the entrance of the building",
        "Install electrical fixtures (e.g. light switch, outlets) on reserved electrical setups",
        "Address uneven step rise on stairs"
      ]
    }
  },
  {
    "name": "CEMDS Building",
    "year_of_construction": 2016,
    "type_of_bldg": "Concrete Frame",
    "storey": 5,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "2.30 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of some severe structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Conduct further structural assessment of the building",
        "Repatch concrete to cover multiple spalling on overhang slabs and roof slabs",
        "Repair separation on roof slab",
        "Repair spalling on columns"
      ]
    }
  },
  {
    "name": "Old CEMDS Building",
    "year_of_construction": 1986,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "0.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Replace windows with broken glass and windows that cannot be securely fastened",
        "Repatch concrete spalling on slab",
        "Conduct periodic assessment and maintenance of the building"
      ]
    }
  },
  {
    "name": "Human Kinetics Building (Gymnasium)",
    "year_of_construction": 2006,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Specialized Facilities",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of multiple severe structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Consult a structural engineer to conduct further structural evaluation of the building",
        "Address the severe spalling of multiple columns",
        "Remove rust from steel truss"
      ]
    }
  },
  {
    "name": "College of Education",
    "year_of_construction": 1993,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repair aging light switches",
        "Replace broken window and repair windows that cannot be securely fastened",
        "Conduct periodic assessment and maintenance of the building"
      ]
    }
  },
  {
    "name": "College of Criminal Justice (CCJ)",
    "year_of_construction": 2018,
    "type_of_bldg": "Concrete Frame",
    "storey": 4,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "2.30 (Not Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No observed Locational Vulnerability",
      "conditions": [
        "Presence of some severe structural defects",
        "Presence of minor non-structural defects",
        "Presence of localized defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Plumbing systems should be investigated and repaired to eliminate hidden leaks",
        "Install booster pumps to ensure reliable water supply on the 3rd and 4th floors",
        "Make electrical upgrades to address the shortage of outlets and prevent overload hazards",
        "Seal multiple cracks found on columns and walls",
        "Conduct a detailed structural assessment to determine the necessary improvements to be undertaken"
      ]
    }
  },
  {
    "name": "Research Center Building",
    "year_of_construction": 1986,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Specialized Facilities",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repatch spalling on exterior walls",
        "Repair and replace aging and broken soffits as well as fascia board",
        "Investigate for possible leaking in plumbing system and repair the discolored ceiling",
        "Conduct an assessment of the site surrounding due to presence of slab separation"
      ]
    }
  },
  {
    "name": "Interdisciplinary Research Building",
    "year_of_construction": 2016,
    "type_of_bldg": "Concrete Frame",
    "storey": 7,
    "design_occupancy": "Specialized Facilities",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Seal multiple minor cracks found on various structural elements such as walls, columns, and elevator walls",
        "Have an engineer conduct further investigation on the cracks found as it may indicate underlying stress or material fatigue that could worsen during seismic activity",
        "Clean up exposed electrical wirings"
      ]
    }
  },
  {
    "name": "Graduate School & Open Learning College",
    "year_of_construction": 2020,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "2.30 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Conduct periodic assessment and maintenance of the building",
        "Repair broken window handle"
      ]
    }
  },
  {
    "name": "University Library",
    "year_of_construction": 2004,
    "type_of_bldg": "Concrete Frame",
    "storey": 6,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.20 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repair multiple spalling on emergency exit stairs",
        "Repair cracks on room partitions at 6th floor",
        "Continue tiling works for the whole 6th floor",
        "Repair several tile cracks on main stairs"
      ]
    }
  },
  {
    "name": "NCRDEC Building (Coffee Center)",
    "year_of_construction": 2009,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Specialized Facilities",
    "audit_summary": {
      "rvs_score": "1.50 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repair unfastened door at director’s office",
        "Replace deteriorating wood at roofing system",
        "Conduct periodic assessment and maintenance of the building"
      ]
    }
  },
  {
    "name": "International House 1",
    "year_of_construction": 2008,
    "type_of_bldg": "Concrete Frame",
    "storey": 4,
    "design_occupancy": "Mixed-Use Buildings",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Seal minor cracks observed on walls",
        "Repair spalling found on concrete ceiling slabs",
        "Investigate possible leakage on plumbing systems due to warping of ceiling on ground floor",
        "Repair warping ceilings and paint unpainted wooden ceilings",
        "Fix loose electrical outlets and broken light switch",
        "Repair damaged soffit boards and gutter"
      ]
    }
  },
  {
    "name": "International House 2",
    "year_of_construction": 2009,
    "type_of_bldg": "Concrete Frame",
    "storey": 4,
    "design_occupancy": "Mixed-Use Buildings",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Repair broken light fixtures",
        "Replace missing glass and glass cracks on windows",
        "Clean up exposed wire and repair broken electrical cover"
      ]
    }
  },
  {
    "name": "Bahay ng Alumni",
    "year_of_construction": 2023,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Academic and Office",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of minor structural defects",
        "Presence of minor non-structural defects",
        "No adverse defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Seal crack on column and wall",
        "Conduct periodic assessment and maintenance of the building"
      ]
    }
  },
  {
    "name": "OSAS Building",
    "year_of_construction": 2006,
    "type_of_bldg": "Concrete Frame",
    "storey": 2,
    "design_occupancy": "Mixed-Use Buildings",
    "audit_summary": {
      "rvs_score": "1.90 (Vulnerable to Potential Seismic Hazards)",
      "location_vulnerability": "No Observed Locational Vulnerability",
      "conditions": [
        "Presence of some severe structural defects",
        "Presence of localized non-structural defects",
        "Presence of minor defects on Ancillary/Auxiliary Equipment and Facilities",
        "No adverse defects on Environment"
      ],
      "recommendations": [
        "Conduct further structural assessment on the building",
        "Seal cracks on walls and columns",
        "Fix breakage of electrical outlets and install covers",
        "Address the presence of discoloration on ceiling for possible leakage"
      ]
    }
  }
];