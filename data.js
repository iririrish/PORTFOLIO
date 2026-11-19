/* ALL PORTFOLIO CONTENT LIVES HERE. Edit text, add image paths, add links.
   Empty ("") fields show "To be added". Do not add confidential company data. */
const PORTFOLIO = {
  contact: { email: "your.email@example.com", linkedin: "", github: "" }, // add real values
  about: [
    "I am an Aerospace Engineering student in the Philippines with a growing focus on aerodynamics, manufacturing, CAD and engineering design.",
    "I like turning technical problems into working solutions, whether that is a drag model for a nanosatellite, a Python tool for aircraft performance, or a tooling assembly in SolidWorks. I keep learning by building, testing and revising."
  ],
  facts: [["Program","Aerospace Engineering"],["Location","Philippines"],["Interests","Aerodynamics · CAD · Manufacturing"],["Training","Lufthansa Technik Philippines (OJT)"]],
  skills: {
    "CAD & Engineering Design": ["SolidWorks","AutoCAD","Onshape","EasyEDA"],
    "Simulation & Analysis": ["ANSYS","SolidWorks Flow Simulation"],
    "Programming & Development": ["Python","PyQt","JavaScript","HTML and CSS"],
    "Technical Tools": ["Microsoft Excel","Google Sheets","Google Apps Script","Matplotlib","Cura","3D Printing"]
  },
  // images: ["assets/images/name.webp", ...]  link: "https://..."  pdf: "assets/pdf/file.pdf"
  projects: [
    {title:"Conical Drag Sail for Nanosatellite Applications",cat:"Aerospace",
     overview:"Design of a Conical Drag Sail on Nanosatellite Applications for Enhanced Deorbiting.",
     objective:"Enhanced deorbiting of nanosatellites through a drag-augmentation device.",
     contribution:"",tools:["Aerodynamics","Drag modeling"],details:"Focus: aerodynamics and drag modeling. Add diagrams, simulations and results here once finalized.",images:[],link:"",pdf:""},
    {title:"AeroX – Aircraft Performance Analyzer",cat:"Software",
     overview:"Python-based aircraft performance analysis application.",objective:"",
     contribution:"Developed the user interface using PyQt and led a five-person team.",tools:["Python","PyQt"],details:"Add interface screenshots and analysis outputs.",images:[],link:"",pdf:""},
    {title:"Quiz to Google Form Generator",cat:"Software",
     overview:"A Google Forms-based reviewer and assessment workflow, with a website that generates Google Forms quizzes from pasted questions.",objective:"",
     contribution:"",tools:["JavaScript","Google Apps Script","Google Forms"],details:"Add screenshots and a short explanation of the automation.",images:[],link:"",pdf:""},
    {title:"AC/DC Project",cat:"Electronics",
     overview:"PCB design and schematic development.",objective:"",contribution:"",tools:["EasyEDA"],details:"Add the PCB layout and circuit schematic images.",images:[],link:"",pdf:""},
    {title:"DataSaster",cat:"Software",overview:"",objective:"",contribution:"",tools:[],details:"",images:[],link:"",pdf:""},
    {title:"CJUTHINK",cat:"Software",overview:"A quizmaker — a personal project made for friends.",objective:"",contribution:"",tools:[],details:"",images:[],link:"",pdf:""}
  ],
  // CAD C.1 — Lufthansa Technik Philippines OJT. Only sanitized/approved images.
  cadOjt: [
    {title:"Maintenance Platform Equipment – Pressure Bulkhead Access Assembly",tasks:["Developed SolidWorks components and assemblies","Worked on the Pressure Bulkhead Access structure","Completed the assembly by incorporating the required access panel","Prepared models and technical documentation for turnover"]},
    {title:"Dolly TR / FEC / TRANSCOWL Assembly",tasks:["Developed the Lower Half Assembly consisting of 33 individual parts","Worked on the Attachment Assembly, including component development and completion","Created and organized SolidWorks part and assembly files","Prepared engineering documentation and completed the turnover"]},
    {title:"Retaining Ring Installer – Redesign and 3D Printing",tasks:["Redesign, CAD modeling, measurements and revisions","3D printing of the revised tool"],note:"Add original/revised models and fabrication photos."},
    {title:"Pylon Bearing Spanner"},{title:"Fan Cowl Sling Bolt"},{title:"Vertical Stabilizer Support Tools"},{title:"Fitting Template Casing"},
    {title:"Rod Alignment Tool – Left, Center, Right",note:"Three configurations (Left, Center, Right) — add images to compare."},
    {title:"Immobilizer"},{title:"Tension Cutter – Pilot and Shaft",note:"Pilot and Shaft are related components of one project."},{title:"MFTF Rig Tool"}
  ],
  cadOther: [
    {title:"Casing for Electronics Component",tasks:["CAD modeling and enclosure design"],note:"Add final model, dimensions and internal arrangement."},
    {title:"Modified 3-Axis Gimbal",tasks:["Modified gimbal design"],note:"Add assembly views, component details and screenshots."},
    {title:"Modified L1011",tasks:["Modified L1011 CAD assignment"],note:"Add original vs modified comparison, drawings and design notes."}
  ],
  experience: {org:"Lufthansa Technik Philippines",role:"On-the-Job Training",period:"",
    tasks:["Aircraft maintenance tooling","SolidWorks modeling and technical drawings","Tool and equipment design/modification","Assembly modeling and component documentation","Engineering task cards and technical documentation"]},
  achievements: [
    {t:"Water Rocket Launching Competition",r:"Champion",y:"2025–2026"},
    {t:"Edible Car Making Competition",r:"2nd Place",y:"2025–2026"},
    {t:"Water Rocket Launching Competition",r:"2nd Place",y:"2024–2025"}
  ],
  leadership: [
    {org:"AEROESS – Aerospace Engineering Student Organization",roles:[["Assistant Treasurer","2025–2026"],["Auditor","2026–2027"]]},
    {org:"Papagayo – The Red Spartan Pride Council Alangilan",roles:[["Auditor","2026–2027"]]}
  ],
  certs: [
    {t:"40-hour Basic Occupational Safety and Health (BOSH SO2)"},{t:"Flight Planning and Dispatch"},{t:"PhilSA PINAS Batangas"},
    {t:"HugNayan 2.0"},{t:"PSSARC"},{t:"TESDA Basic CNC Lathe Programming"}   // add pdf:"assets/pdf/x.pdf"
  ]
};
