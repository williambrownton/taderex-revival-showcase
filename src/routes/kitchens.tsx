import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/SiteChrome";
import { KitchenGallery } from "@/components/KitchenGallery";
import { kitchens } from "@/lib/kitchens";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/kitchens")({
  head: () => ({ meta: [
    { title: "Luxury Kitchen Inspiration & Bespoke Cabinetry — Taderex" },
    { name: "description", content: "Explore marble islands, bespoke cabinetry, natural wood and elegant kitchen design references for your Taderex renovation." },
    { property: "og:title", content: "The Taderex Kitchen Collection" },
    { property: "og:description", content: "Luxury kitchen inspiration, beautiful materials and considered layouts." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Kitchens,
});
function Kitchens() { return <><PageHero eyebrow="Kitchen inspiration" title="The Taderex Kitchen Collection" text="Beautiful cabinetry. Expressive stone. Spaces that bring everyone together. Explore the possibilities for your next kitchen." image={kitchens[0]?.image ?? ""} /><KitchenGallery /><CtaBand title="A kitchen designed around your life." text="Share your dimensions, preferred materials and the way you use your kitchen. Let’s develop a scope that fits your space."><Button asChild className="h-12 bg-ink hover:bg-ink/90"><Link to="/contact">Request a kitchen consultation</Link></Button></CtaBand></>; }
