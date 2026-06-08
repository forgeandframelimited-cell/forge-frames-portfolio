const portfolioData = {
  toc: [
    { num: "01", name: "About Forge & Frames", page: "About" },
    { num: "02", name: "Vision & Mission", page: "Vision" },
    { num: "03", name: "Design Philosophy", page: "Philosophy" },
    { num: "04", name: "Services & Expertise", page: "Services" },
    { num: "05", name: "Architectural Projects", page: "Arch" },
    { num: "06", name: "Residential Projects", page: "Residential" },
    { num: "07", name: "Interior Design Projects", page: "Interior" },
    { num: "08", name: "Construction Projects", page: "Construction" },
    { num: "09", name: "Ongoing & Other Projects", page: "Ongoing" },
    { num: "10", name: "Enock House Projects", page: "Enock" },
    { num: "11", name: "Contact & Collaboration", page: "Contact" }
  ],
  stats: [
    { num: "15", sup: "+", label: "Projects Delivered" },
    { num: "4", label: "Core Disciplines" },
    { num: "100", sup: "%", label: "Client-Focused" }
  ],
  vision_mission: [
    {
      title: "Vision",
      content: "To become a leading architectural and construction brand recognized for creating timeless, innovative, and functional spaces that inspire modern living, reflect excellence, and deliver lasting value through exceptional design and craftsmanship."
    },
    {
      title: "Mission",
      content: "At Forge & Frames Limited, our mission is to transform ideas into remarkable structures through innovative architectural solutions, premium construction standards, strategic project management, and client-focused service."
    }
  ],
  pillars: [
    { num: "01", title: "Context-Driven Design", description: "Every structure responds to its site, culture, and climate — rooted in place, reaching toward possibility." },
    { num: "02", title: "Technical Excellence", description: "Structural integrity and engineering precision underpin every aesthetic decision we make." },
    { num: "03", title: "Client Collaboration", description: "Our clients are co-creators. We listen, interpret, and translate their vision into built reality." },
    { num: "04", title: "Sustainable Thinking", description: "Environmentally conscious methods and modern building technologies shape how we build for the future." }
  ],
  services: [
    { num: "01", title: "Architectural Design", description: "Concept development, schematic design, technical drawings, and full architectural documentation." },
    { num: "02", title: "Structural Planning", description: "Structural analysis, engineering coordination, and full structural documentation." },
    { num: "03", title: "Construction Management", description: "End-to-end project management from procurement to completion." },
    { num: "04", title: "Interior Design", description: "Spatial planning, material selection, and full interior fit-out." },
    { num: "05", title: "Renovation & Remodelling", description: "Transforming existing structures with design-led renovation strategies." },
    { num: "06", title: "Consultancy", description: "Design review, feasibility studies, and expert consultancy services." }
  ],
  process: [
    { num: "01", title: "Discovery & Brief", description: "Understanding client goals, site conditions, and budget parameters." },
    { num: "02", title: "Concept Design", description: "Developing initial design concepts and aesthetic direction." },
    { num: "03", title: "Design Development", description: "Refining the concept into detailed technical drawings." },
    { num: "04", title: "Construction", description: "On-site execution with rigorous quality control." },
    { num: "05", title: "Handover", description: "Final inspections, snagging, and full project documentation." }
  ],
  projects: [
    {
      chapter: "ARCHITECTURE",
      num: "05",
      title: "Architectural Projects",
      subtitle: "Concept · Presentation · Residential Design",
      projects: [
        {
          id: "05.1",
          title: "White House",
          type: "Presentation",
          typology: "Residential",
          location: "Not Defined",
          inspiration: "Brazilian Arch Styles",
          description: "To captivate the eye of clients, opening room for contemporary designs, experimenting with new and beautiful façade styles."
        },
        {
          id: "05.2",
          title: "Fashion House",
          type: "Commercial / Mixed-Use",
          status: "Design Stage",
          location: "Lagos, Nigeria",
          category: "Architectural Design",
          description: "A commercially driven design exploration for a fashion retail and creative hub."
        },
        {
          id: "05.3",
          title: "Residential Duplex with Rooftop",
          typology: "Residential Duplex",
          features: "Rooftop Terrace",
          location: "Lagos, Nigeria",
          category: "Residential Design",
          description: "A contemporary duplex design incorporating an activated rooftop terrace."
        }
      ]
    },
    {
      chapter: "RESIDENTIAL",
      num: "06",
      title: "Residential Projects",
      subtitle: "Tony Villa · Ile Ayo · Bespoke Residential Design",
      projects: [
        {
          id: "06.1",
          title: "Tony Villa",
          typology: "Private Villa",
          status: "Completed / Design",
          location: "Lagos, Nigeria",
          client: "Private",
          description: "A bespoke private villa combining bold contemporary massing with warm material choices."
        },
        {
          id: "06.2",
          title: "Ile Ayo",
          typology: "Residential",
          status: "Completed / Design",
          location: "Lagos, Nigeria",
          meaning: "House of Joy",
          description: "Ile Ayo — a joyful, light-filled home that embodies its name."
        }
      ]
    },
    {
      chapter: "INTERIOR",
      num: "07",
      title: "Interior Design Projects",
      subtitle: "Residential Interiors · KOYO · Office Remodelling",
      projects: [
        {
          id: "07.1",
          title: "Residential Interior — Premium Apartment",
          type: "Residential Interior",
          scope: "Full Fit-Out",
          location: "Lagos",
          category: "Interior Design",
          description: "A premium residential interior combining refined material palettes and bespoke joinery."
        },
        {
          id: "07.2",
          title: "KOYO: 2-Bedroom Apartment",
          projectName: "KOYO",
          scope: "2-Bedroom Fit-Out",
          location: "Lagos",
          category: "Interior Decoration",
          description: "Interior decoration achieving a cohesive, contemporary feel within a compact footprint."
        }
      ]
    },
    {
      chapter: "CONSTRUCTION",
      num: "08",
      title: "Construction Projects",
      subtitle: "KOYO Estate · Pencity · Semi-Detached Mini Estate",
      projects: [
        {
          id: "08.1",
          title: "KOYO — Construction Transformation",
          projectName: "KOYO",
          scope: "Full Construction",
          documentation: "Before / After",
          completion: "2030 Target",
          description: "Complete structural transformation demonstrating complex, multi-phase construction programmes."
        },
        {
          id: "08.2",
          title: "Pencity Estate",
          type: "Estate Development",
          scope: "Multi-Unit",
          location: "Lagos, Nigeria",
          category: "Construction",
          description: "Multi-unit residential development showcasing capacity to coordinate complex estate construction."
        }
      ]
    }
  ],
  contact: [
    { icon: "✆", label: "Phone", value: "081-046-08-828" },
    { icon: "✉", label: "Email", value: "forgeandframelimited@gmail.com" },
    { icon: "⌖", label: "Address", value: "Lagos, Nigeria" },
    { icon: "⬡", label: "Web", value: "www.forgeandframeslimited.com" }
  ],
  tags: [
    "Architecture", "Structural Design", "Interior Design", "Construction Mgmt",
    "Project Management", "Estate Development", "Commercial Fit-Out", "Renovation",
    "Consultancy", "Office Remodelling"
  ]
};