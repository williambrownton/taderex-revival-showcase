import hero from "@/assets/hero-site.jpg";
import living from "@/assets/interior-living.jpg";
import craft from "@/assets/craft-finishing.jpg";
import office from "@/assets/office-fitout.jpg";
import facade from "@/assets/exterior-facade.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import team from "@/assets/team.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining.jpg";
import pop from "@/assets/pop-ceiling.jpg";

export const img = { hero, living, craft, office, facade, kitchen, bathroom, team, bedroom, dining, pop };

export const PHONE = "+234 803 869 4133";
export const TEL = "tel:+2348038694133";
export const WA = "https://wa.me/2348038694133";
export const EMAIL = "hello@taderex.ng";
export const MAP = "https://maps.app.goo.gl/PNboN1a8S6VZtfWk7";

export const services = [
  { title: "Full Property Renovation", price: "From ₦2.5M", unit: "per project", image: craft, home: living,
    text: "Tired buildings taken back to structure and rebuilt to a standard you can feel underfoot — walls, ceilings, floors, wiring and plumbing.",
    items: ["Structural repairs", "Screeding & plastering", "Electrical & plumbing", "Snag-free handover"] },
  { title: "Interior Design & Styling", price: "From ₦850K", unit: "per space", image: living, home: craft,
    text: "Concept, mood, material board and full furnishing — designed around how Nigerian families and teams actually live and work.",
    items: ["3D concept boards", "Furniture sourcing", "Lighting design", "Styling & install"] },
  { title: "Premium Finishing", price: "From ₦1.2M", unit: "per floor", image: kitchen, home: office,
    text: "POP ceilings, wall panelling, screeding, tiling and painting executed by craftsmen who obsess over the last two millimetres.",
    items: ["POP & cornices", "Wall panelling", "Tiling & marble", "Texture & painting"] },
  { title: "Office Fit-Out", price: "From ₦3.5M", unit: "per suite", image: office, home: office,
    text: "Workspaces built around teams — partitions, acoustics, cabling and joinery delivered on a schedule your business can plan around.",
    items: ["Space planning", "Glass partitions", "Data & power", "Bespoke joinery"] },
  { title: "Exterior & Façade Works", price: "From ₦1.8M", unit: "per building", image: facade, home: facade,
    text: "Façade cladding, stone work, screeding and weather-ready paint systems built for Lagos sun and harmattan dust.",
    items: ["Stone cladding", "Waterproofing", "External painting", "Compound works"] },
  { title: "Project Outsourcing", price: "Custom", unit: "retainer", image: bathroom, home: bathroom,
    text: "Vetted trades, supervision and procurement handled end-to-end for developers, facility managers and diaspora owners.",
    items: ["Vetted artisans", "Procurement", "Site supervision", "Weekly reporting"] },
];

export const projects = [
  { title: "Duplex façade & full renovation", place: "Lekki Phase 1, Lagos", year: "2025", tag: "Renovation", image: facade },
  { title: "Family living room design", place: "Ikeja GRA, Lagos", year: "2025", tag: "Interior Design", image: living },
  { title: "Two-floor office fit-out", place: "Victoria Island, Lagos", year: "2024", tag: "Fit-Out", image: office },
  { title: "Walnut & brass kitchen remodel", place: "Yaba, Lagos", year: "2024", tag: "Finishing", image: kitchen },
  { title: "Marble guest bathroom", place: "Surulere, Lagos", year: "2024", tag: "Finishing", image: bathroom },
  { title: "Screeding & wall preparation", place: "Ikorodu, Lagos", year: "2023", tag: "Renovation", image: craft },
  { title: "Master suite with cove-lit POP", place: "Magodo, Lagos", year: "2025", tag: "Interior Design", image: bedroom },
  { title: "Marble dining & staircase", place: "Ajah, Lagos", year: "2024", tag: "Finishing", image: dining },
  { title: "Decorative cornice installation", place: "Gbagada, Lagos", year: "2023", tag: "Finishing", image: pop },
];
