import { Project, Discipline, Article, ClientPartner } from '../types';

export const ARCHIO_IMAGES = {
  hero1: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Hm4wHJfrm0vNIb0oiFUT5qXAIcExt3G6OIDP0NJ2zBcE797U6Q3T3oLRYo1P9FP7I_lfBS6IZEl3rZG_6xGyoDEYJe31uZL-1pxwdkC9Jh_Xs9ECmzulD6Sd3-MYQKPZyPZ1jxz6bKN1pTeRJvGwFz8G8O3vSayfc5IoO45eAFDL4f9rqCLRBpuOfiC973hHdkF1wNabcK03pTJBVg46HiM2WTTQipHZ_f_DyEbUfId_U5tyOxpO",
  facadeWood: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYB06HyUF0glzfk0dbNNpcPY7Oc7jNbzVLuUQmKrq6EOW9SN6BanrE3dqPyt5T7uFXifNoyRpmX_1wd9WePhU2i79oubxGliY5GdbnQZQXYK0eDKsgKV44VP0x6Q17_rXnqap5gBIoEPTMgX7bo0RVgb-pq_4APecGwsEWRuQzisuTrjG_AxFB1y1N2QiuvbXudhR-HnLa2Fnt17PoWCdtUB1wW-V9NR4X3kR45WtFHCts5bdI5YYj",
  fantasticInterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBnYzXBxzCkraUAehdfwlKa5SsfZ_GY--XaFt0VbXj8C1nuKa9Rpj2xufE52KiT018GsLID9BHqf-dYtJeWcjbFoZhnJ605GgHRlS3tuUa_BwwJu9GzaUcIeYrv8qHoERLPs5JFTpymYCwpcBuUozKaXRvXkj9_QsMQBAbeMS_LYRFnu4EUfacZ9kOH6AkViwTefxsv36Fv_knC7fFS9O5-tfl3oiDccof2hD70wIWJjXjHEaJROye",
  mendellaExterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8shKb-KmV8F1Zo86DTJKFf1_FJeHcTuPOwhu926WUw5xfPOIUmL9Xo8UbrCwPyho8175RrrnuQozpVNPfQyhn8ey4jqN1JQ2OF2wm_DPQ3oYa7mVoYihCAdXDuckTCySY-_5Y-XD1cdTfyBTSczFkTKtRRRkr-XdiiTWO8TjWiW9tznPZdClADzTIxTMT2J8IqcZiN2UAo8jrNceSggWJP26fsUqvNfBfYGNGR-0aq23GaUhF-rBZ",
  scottVillaDu: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHb31nw2z6EMIUXo6cVnpG0Q-hQVmdUUSCt4TKqrQIBogoF6f8azBrpoCZnNccBpCEkCTql7m6a9OUX1FQCnJDvQ-L0lWd9s-dLMGPk1cVp1zoiGs6F9ya5F8GriHeim2SDRZ6ntWJ0ATavEbGO4AM-GDbbYemx8IAxNeW8oHYdaWgb3GNnbLeV36AuOJtfrDXVaWkkx_VJH__eiEFMr2R0GOBXbWJNXTHlL98bQUNkp2LJFdlpGdb",
  journalRedStructure: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgg86-NECV2B54t-_3RKHsyAxnPenStTUOhM6Bi2CVTQGLjFWvN1_36Bkw9j9AB_m0cg2KiNqpZijFvK1EY0jcRtyc4xlgheAcvKIrJY3T3iisQanhPCY4b1YPov6FpEwUT5Rof91rFSwRCM32v2s-qopzRJA3EcSpH0oYM3JNOwsyFb-JDzKI6oft6N191EQTsziNY_QKY7i9pZ8XKzEQTFa7PBKXB5YWjpeHf-BO3vB0JIV2_fjo",
  journalTower: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr2RMzSrOPsreLh-hDmwQO28HEgxCwJlLZ-edRHm6E-iVJry0fcRNtrzrmSGGI1qPP9P7AseZamTbxPIPjKtGslMc2UdVhQmEROEPyhlkdVo5nz5wc0HeU5eVVYORcoXbC0AqgH7ao4UEdomK6BTLaAsGHtdUTaqw4Tn34LoW_wsxvrCvb2nlxtwTdz6i9hkncZAWWDJ9cVND-eR2aCgyZYVvz0Hg-vgS1HFdTZ06e05sVDTKCaOtR",
};

export const HERO_SLIDES = [
  {
    issue: "PRACTICE • 2026 ISSUE",
    tagline: "WITH THE TOUCH OF ARCHIO.",
    highlightWord: "TOUCH",
    description: "Delivering built-to-last construction logistics and self-delivered preliminary solutions for structural autonomy.",
    monographId: "dispatch-042",
    imageUrl: ARCHIO_IMAGES.hero1,
    coordinates: "51.9244° N, 4.4777° E",
  },
  {
    issue: "FOUNDATION • 2026 ISSUE",
    tagline: "MONOLITHIC VOLUMES & RAW TRUTH.",
    highlightWord: "VOLUMES",
    description: "Form-giving through honesty of material. Cast concrete aggregate without cosmetic sheathings.",
    monographId: "dispatch-urban",
    imageUrl: ARCHIO_IMAGES.fantasticInterior,
    coordinates: "52.5200° N, 13.4050° E",
  },
  {
    issue: "PARAMETRIC • 2026 ISSUE",
    tagline: "LOGISTICAL FLUIDITY OF SHELLS.",
    highlightWord: "FLUIDITY",
    description: "Continuous curvature post-tensioned spans engineered for seismic resilience and natural solar shading.",
    monographId: "dispatch-042",
    imageUrl: ARCHIO_IMAGES.facadeWood,
    coordinates: "34.6937° N, 135.5023° E",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "fantastic-interior",
    title: "FANTASTIC INTERIOR",
    category: "HOTEL • ROTTERDAM",
    location: "Rotterdam, Netherlands",
    year: 2026,
    area: "14,800 m²",
    imageUrl: ARCHIO_IMAGES.fantasticInterior,
    series: "SERIES 2026",
    structuralType: "Post-Tensioned Parametric Slabs & Cast In-Situ Concrete",
    concreteGrade: "C45/55 Self-Compacting Aggr.",
    summary: "Monolithic public atrium and spiral stairway envelope carving light from a central skylight eye.",
    description: "The Rotterdam Hotel project centers on an monumental sculptural staircase carved from raw exposed concrete. Designed to act as both a continuous structural truss and an acoustic dampener, the double-curving ramps connect five levels of public programming.",
    features: [
      "Acoustically tuned geometry dampening ambient foyer resonance",
      "Integrated perimeter radiant heating embedded directly in cast risers",
      "Zero expansion seams across 34-meter unsupported ribbon span",
      "Natural zenithal skylight shaft illuminating aggregate grain"
    ],
    specs: [
      { label: "Clear Span", value: "34.2 m" },
      { label: "Concrete Volume", value: "1,420 m³" },
      { label: "Seismic Coefficient", value: "0.28 g" },
      { label: "Acoustic Decay", value: "0.85 sec" }
    ]
  },
  {
    id: "mendella-exterior",
    title: "MENDELLA EXTERIOR",
    category: "HALL // 02",
    hallNumber: "HALL // 02",
    location: "Geneva, Switzerland",
    year: 2025,
    area: "8,950 m²",
    imageUrl: ARCHIO_IMAGES.mendellaExterior,
    series: "SERIES 2025",
    structuralType: "Precast Modular Brutalist Colonnade",
    concreteGrade: "C50/60 Basalt Core",
    summary: "Rhythmic load-bearing exterior colonnade functioning as passive solar shading and structural frame.",
    description: "Commissioned as an institutional headquarters, Mendella Hall implements an assertive precast facade that completely eliminates interior load-bearing columns, giving 100% floorplan flexibility.",
    features: [
      "Deep recessed window embrasures cutting summer solar heat gain by 64%",
      "Basalt-aggregate blasted surface weathering evenly under alpine rain",
      "Full column-free floor plates across all 6 administrative tiers",
      "Underground thermal mass labyrinth pre-tempering ventilation air"
    ],
    specs: [
      { label: "Structural Grid", value: "12.0 × 18.0 m" },
      { label: "Embodied Carbon", value: "210 kg CO₂e/m²" },
      { label: "Facade Depth", value: "850 mm" },
      { label: "Glazing U-Value", value: "0.62 W/m²K" }
    ]
  },
  {
    id: "scott-villa-du",
    title: "SCOTT VILLA DU",
    category: "RESIDENCE // 03",
    hallNumber: "RESIDENCE // 03",
    location: "Sonoma Valley, USA",
    year: 2025,
    area: "1,240 m²",
    imageUrl: ARCHIO_IMAGES.scottVillaDu,
    series: "SERIES 2025",
    structuralType: "Cantilevered Board-Formed Concrete & Weathered Steel",
    concreteGrade: "C35/45 Local Quartz",
    summary: "Terraced hillside residential compound balancing panoramic glazing with fortress-like privacy walls.",
    description: "Set into an undulating hillside, Scott Villa Du steps downward in three cantilevered monolithic volumes. The building uses board-formed concrete walls that reflect the linear texture of surrounding oak groves.",
    features: [
      "14-meter cantilevered living terrace floating above native meadow",
      "Non-combustible exterior shell with Class A wildfire envelope rating",
      "Geothermal earth tube loop maintaining passive 21°C year-round",
      "Custom blackened stainless steel pivot portals with magnetic airtight seals"
    ],
    specs: [
      { label: "Cantilever Reach", value: "14.4 m" },
      { label: "Thermal Mass Wall", value: "400 mm" },
      { label: "Solar Autonomy", value: "94%" },
      { label: "Rainwater Harvesting", value: "48,000 L" }
    ]
  },
  {
    id: "wood-facade-pavilion",
    title: "OSAKA KINETIC SHELL",
    category: "CULTURAL • OSAKA",
    location: "Osaka, Japan",
    year: 2026,
    area: "6,200 m²",
    imageUrl: ARCHIO_IMAGES.facadeWood,
    series: "SERIES 2026",
    structuralType: "Parametric Glulam Ribbed Facade & Steel Tieback",
    concreteGrade: "C40/50 Post-Tensioned Base",
    summary: "Fluid parametric wooden ribbon facade engineered for natural wind channeling and pedestrian shade.",
    description: "An innovative hybrid of computational joinery and heavy timber craftsmanship, the Osaka shell uses 640 unique steam-bent cedar fins to cradle an exhibition hall in natural ventilation.",
    features: [
      "CNC-milled Japanese Hinoki cedar sourced from sustainable forestry",
      "Aerodynamic fin inclination calibrated with computational fluid dynamics",
      "Ductile moment-resisting timber joints with internal steel dowels",
      "Integrated diffused twilight LED lumens recessed in fin undersides"
    ],
    specs: [
      { label: "Fins Total", value: "640 units" },
      { label: "Timber Volume", value: "890 m³" },
      { label: "Wind Load Rating", value: "65 m/s" },
      { label: "Carbon Sequestration", value: "-680 tons" }
    ]
  },
  {
    id: "berlin-cantilever",
    title: "BERLIN LOGISTICS FORUM",
    category: "RESEARCH // 05",
    hallNumber: "HALL // 05",
    location: "Berlin, Germany",
    year: 2026,
    area: "11,500 m²",
    imageUrl: ARCHIO_IMAGES.journalTower,
    series: "SERIES 2026",
    structuralType: "Faceted Structural Steel Diagrid & Triple Low-E Glass",
    concreteGrade: "C55/67 High-Strength Base",
    summary: "Hyper-efficient faceted high-rise core with external bracing that cuts interior mass by 32%.",
    description: "A bold geometric tower whose faceted skin distributes lateral wind forces directly to the foundation, allowing soaring double-height laboratory voids without obstructive cross-bracing.",
    features: [
      "Parametric diagrid eliminating 32% steel tonnage compared to moment frames",
      "Triple-glazed argon cavities with ceramic frit patterns for solar control",
      "Vertical atrium inducing passive thermal stack effect ventilation",
      "Roof-integrated rain attenuation basin with drought-tolerant flora"
    ],
    specs: [
      { label: "Building Height", value: "86.0 m" },
      { label: "Core Footprint", value: "18.0 × 18.0 m" },
      { label: "Facade Area", value: "14,200 m²" },
      { label: "LEED Certification", value: "Platinum (94 pts)" }
    ]
  }
];

export const DISCIPLINES_DATA: Discipline[] = [
  {
    id: "architecture",
    number: "01",
    title: "ARCHITECTURE",
    tagline: "Full-scale structural systems, civic spatial frameworks, and precision-engineered residential developments.",
    description: "Our architectural practice operates on the premise that structural engineering and spatial emotion are inseparable. We do not apply decorative skins; rather, the skeleton of the building is the architecture.",
    active: true,
    metrics: [
      { label: "Built Footprint", value: "480,000 m²" },
      { label: "Seismic Design Tier", value: "Eurocode 8 / Category 4" },
      { label: "Average Span", value: "28.5 m column-free" }
    ],
    deliverables: [
      "Structural autonomy calculation and load path modeling",
      "Formwork engineering and high-performance concrete mix design",
      "Full construction logistics and self-delivered preliminary documentation",
      "Regulatory zoning filings, environmental approvals, and peer review"
    ],
    materials: [
      "Self-compacting aggregate concrete (C45/55)",
      "High-tensile post-tensioning steel tendons",
      "Board-formed textured architectural concrete",
      "Monolithic basalt & limestone masonry"
    ]
  },
  {
    id: "interior",
    number: "02",
    title: "INTERIOR",
    tagline: "Acoustic balance, material honesty, custom joinery, and monolithic interior architectural volumes.",
    description: "We craft interior spaces that continue the raw integrity of the exterior envelope. Acoustic clarity, honest material interfaces, and custom-engineered functional furniture define our interior commissions.",
    active: false,
    metrics: [
      { label: "Acoustic Target", value: "RT60 ≤ 0.65s" },
      { label: "Custom Joinery", value: "100% In-house specs" },
      { label: "VOC Emission", value: "Zero (Class A+)" }
    ],
    deliverables: [
      "Spatial choreography and monolithic circulation cores",
      "Acoustic tuning through micro-perforated wood & fibrous baffles",
      "Integrated recessed architectural lighting datum lines",
      "Bespoke solid timber, blackened steel, and cast terrazzo millwork"
    ],
    materials: [
      "Charred Japanese Shou Sugi Ban cedar",
      "Blackened cold-rolled plate steel (6mm)",
      "Monolithic honed travertine slab surfaces",
      "Acoustic felt acoustic panels made from recycled ocean fleece"
    ]
  },
  {
    id: "plannings",
    number: "03",
    title: "PLANNINGS",
    tagline: "Urban master planning, zoning optimization, environmental analysis, and strategic site masteries.",
    description: "Urban planning at ARCHIO bridges macro environmental forces and micro human rituals. We model pedestrian flow, prevailing wind vectors, and solar transit to design resilient civic districts.",
    active: false,
    metrics: [
      { label: "Master Planned Land", value: "1,200+ Hectares" },
      { label: "Carbon Reduction", value: "Avg. -45% district target" },
      { label: "Pedestrian Priority", value: "85% car-free zones" }
    ],
    deliverables: [
      "Computational fluid dynamic wind envelope modeling",
      "Solar rights and seasonal shadow envelope analysis",
      "Multi-modal transit integration and micro-mobility arteries",
      "Stormwater bioswale networks and flood-resilience grading"
    ],
    materials: [
      "Permeable interlocking concrete pavers",
      "Native drought-tolerant riparian plantings",
      "Recycled crushed aggregate roadway sub-bases",
      "Photovoltaic pavement and kinetic energy harvesting tiles"
    ]
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "dispatch-042",
    dispatchNumber: "DISPATCH #042",
    category: "DISPATCH #042",
    date: "JULY 10, 2026",
    title: "WE WANT TO HIRE SOMEONE FOR JOB",
    summary: "A call for structural autonomy artisans: why ARCHIO looks beyond standard CAD technicians toward architects who think in steel tension and concrete aggregate.",
    imageUrl: ARCHIO_IMAGES.journalRedStructure,
    author: "K. Van Der Meer, Lead Partner",
    readTime: "4 min read",
    tags: ["STUDIO MANIFESTO", "PRACTICE", "CAREERS"],
    fullText: [
      "In contemporary commercial practice, architecture is too often reduced to cosmetic cladding wrapped around repetitive steel frames. At ARCHIO, we reject the separation of form and structure.",
      "We are opening inquiries for structural designers, computational logisticians, and site engineers who understand that every millimeter of formwork matters. The ideal candidate does not merely render pretty perspectives; they understand shear walls, rebar congested cages, and concrete curing hydration temperatures.",
      "If you believe that honesty of material is the only real luxury in the built environment, our studio invites you to review our current monographs and submit your structural portfolio."
    ]
  },
  {
    id: "dispatch-urban",
    dispatchNumber: "URBAN REPORT",
    category: "URBAN REPORT",
    date: "JUNE 18, 2026",
    title: "COPS KILL BULL ATTACKING OWN",
    summary: "An editorial analysis of urban edge tension, agricultural containment failures, and how spatial perimeter architecture governs unexpected biological collisions.",
    imageUrl: ARCHIO_IMAGES.journalTower,
    author: "M. Rostova, Urban Theorist",
    readTime: "6 min read",
    tags: ["URBAN ESSAY", "CIVIC CRITIQUE", "SECURITY"],
    fullText: [
      "When a 700-kilogram bovine escaped into the concrete arterial ring of Rotterdam last week, it highlighted the sheer fragility of our supposed separation between pastoral hinterland and hyper-engineered metropolis.",
      "The incident, which ended tragically when municipal security was forced to intervene, is fundamentally an architectural failure of perimeter definition. Modern master plans have replaced physical, legible boundary thresholds with invisible legal easements and flimsy chain-link fences.",
      "At ARCHIO, we argue for the return of the monolithic ha-ha wall, the stone perimeter ditch, and legible urban edges that protect both human civic spaces and the livestock corridors that sustain them."
    ]
  },
  {
    id: "dispatch-material",
    dispatchNumber: "RESEARCH #018",
    category: "MATERIAL SCIENCE",
    date: "MAY 22, 2026",
    title: "THE POETRY OF RAW FORMWORK",
    summary: "How unfinished Douglas fir planks leave their grain etched into hydraulic cement for centuries.",
    imageUrl: ARCHIO_IMAGES.facadeWood,
    author: "S. Tanaka, Material Specialist",
    readTime: "5 min read",
    tags: ["CONCRETE", "TEXTURE", "FORMWORK"],
    fullText: [
      "Concrete is liquid stone waiting for an instruction. The rough sawn timber boards we choose to contain it become its permanent face. When daylight rakes across a properly cured board-formed wall, you are seeing the ghost of the tree fossilized into limestone.",
      "In our Scott Villa Du commission, we used unplaned Douglas fir boards with knots and heavy grain lines, charred slightly with a torch to raise the winter rings. The resulting concrete surface has an almost woven textile presence that defies the stereotype of cold brutalism."
    ]
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { id: "graphic-studio", name: "GRAPHIC", sub: "STUDIO", type: "Visual Identity" },
  { id: "unique", name: "UNIQUE", sub: "★★★", accent: "★★★", type: "Curated Craft" },
  { id: "arch-2026", name: "ARCH", sub: "2026", accent: "2026", type: "Biennale Partner" },
  { id: "special-build", name: "SPECIAL", sub: "BUILD", type: "Civil Engineering" },
  { id: "vanguard-eng", name: "VANGUARD", sub: "STRUCT", type: "Seismic Consultants" },
  { id: "nordic-concrete", name: "NORDIC", sub: "AGGR", type: "Material Supply" },
  { id: "tokyo-timber", name: "KINETIC", sub: "SHELL", type: "Glulam Specialists" },
  { id: "swiss-façade", name: "ALPINE", sub: "PRECAST", type: "Facade Systems" },
];

export const SPECIFICATIONS_DATA = {
  standard: "VOICEBOX / ARCHIO SPEC 2026.04",
  seismicStandard: "Eurocode 8 / Class IV Essential Facilities",
  fireResistance: "REI 240 (4 Hours Unprotected Structural Integrity)",
  embodiedCarbonCap: "220 kg CO₂e / m² (35% below European Benchmark)",
  acoustics: "ISO 3382-1 Compliant Concert-Grade Decibel Diffusion",
  concreteTolerances: "DIN 18202 Table 3, Row 7 (Highest Flatness Rating)",
  sustainability: "Net-Positive Structural Longevity 150+ Year Minimum Design Life",
  matrices: [
    { component: "Primary Columns", material: "Self-Compacting C50/60 Basalt Core", tolerance: "±2.0 mm", reinforcement: "FeB500 High-Yield Steel" },
    { component: "Cantilevered Decks", material: "Post-Tensioned Slabs w/ Bonded Tendons", tolerance: "±3.0 mm", reinforcement: "Low-Relaxation 7-Wire Strands" },
    { component: "Exterior Curtain Wall", material: "Triple Low-E Cavity with Krypton Fill", tolerance: "±1.5 mm", reinforcement: "Anodized Aerospace Aluminum" },
    { component: "Acoustic Lining", material: "Micro-Perforated Douglas Fir (1.5mm holes)", tolerance: "±0.5 mm", reinforcement: "Recycled Basalt Mineral Wool Core" },
    { component: "Foundation Caissons", material: "Sulfate-Resistant Marine Concrete C40/50", tolerance: "±10.0 mm", reinforcement: "Epoxy-Coated Rebar Cage" }
  ]
};
