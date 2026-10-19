import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, Maximize2 } from "lucide-react";
import { img, projects } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/SiteChrome";
import { DimensionCard } from "@/components/DimensionCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Recent Renovations & Interior Projects — Taderex Nigeria Limited" },
    { name: "description", content: "Explore renovation, finishing, kitchens and interiors across Lagos, with a closer look at materials and craftsmanship." },
    { property: "og:title", content: "Taderex Projects — Nigerian spaces, finished properly" },
    { property: "og:description", content: "Explore the details of our renovation and interior portfolio." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Projects,
});
const tags = ["All", "Renovation", "Interior Design", "Fit-Out", "Finishing"];
const scope: Record<string, string[]> = {
  Renovation: ["Surface preparation & structural coordination", "Exterior or interior finish specification", "Final alignment & snag inspection"],
  "Interior Design": ["Room layout & material palette", "Lighting, furniture & styling", "Coordinated installation details"],
  "Fit-Out": ["Workspace layout & service coordination", "Partitions, joinery & lighting", "Installation & handover checks"],
  Finishing: ["Material selection & setting-out", "Surface, edge & junction detailing", "Careful installation & final finish"],
};
function Projects() {
  const [tag, setTag] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const list = tag === "All" ? projects : projects.filter(p => p.tag === tag);
  return <><PageHero eyebrow="Recent work" title="Nigerian spaces, finished properly." image={img.dining} text="Explore renovations, finishing packages and interiors across Lagos. A closer look at the spaces, materials and craftsmanship that define the Taderex approach." />
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Selected spaces</p><h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Craftsmanship, up close.</h2></div><p className="text-sm text-muted-foreground">{list.length} spaces · {tag}</p></div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Project category">{tags.map(t => <Button key={t} variant={tag === t ? "default" : "outline"} onClick={() => setTag(t)} aria-pressed={tag === t}>{t}</Button>)}</div>
      <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{list.map(p => <DimensionCard key={p.title}><article className="group"><div className="relative overflow-hidden rounded-lg"><img src={p.image} alt={`${p.title} — ${p.place}`} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="gallery-glass absolute left-4 top-4 rounded-sm px-3 py-1.5 text-xs font-bold text-ink-foreground">{p.tag}</span><Button variant="ghost" size="icon" className="gallery-glass absolute bottom-4 right-4 text-ink-foreground hover:bg-ink/80 hover:text-ink-foreground" title="View project photograph" aria-label={`View ${p.title}`} onClick={() => setSelected(p)}><Maximize2 /></Button></div><h2 className="mt-5 text-xl font-bold">{p.title}</h2><p className="mt-2 flex justify-between gap-3 text-sm text-muted-foreground"><span>{p.place}</span><span>{p.year}</span></p><Button variant="link" className="mt-3 px-0" onClick={() => setSelected(p)}>View details <ArrowUpRight /></Button></article></DimensionCard>)}</div>
    </section>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-h-[90svh] max-w-5xl overflow-y-auto p-0">{selected && <><img src={selected.image} alt={selected.title} className="max-h-[50svh] w-full object-cover" /><div className="p-6 md:p-8"><p className="eyebrow mb-3">{selected.tag} · {selected.year}</p><DialogTitle className="text-2xl">{selected.title}</DialogTitle><DialogDescription className="mt-3">{selected.place}</DialogDescription><h3 className="mt-6 font-bold">Detail considerations for this type of work</h3><ul className="mt-4 space-y-3">{scope[selected.tag]?.map(item => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><Button asChild className="mt-7"><Link to="/contact">Discuss a similar project <ArrowUpRight /></Link></Button></div></>}</DialogContent></Dialog>
    <section className="bg-secondary py-16"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 md:flex-row md:items-center md:px-8"><div><p className="eyebrow">Looking for kitchen ideas?</p><h2 className="mt-3 text-3xl font-bold">Explore the luxury kitchen collection.</h2></div><Button asChild variant="outline" className="h-12"><Link to="/kitchens">Kitchen inspiration <ArrowUpRight /></Link></Button></div></section>
    <CtaBand title="Your building could be next on this page."><Button asChild className="h-12 bg-ink hover:bg-ink/90"><Link to="/contact">Request a Quote</Link></Button></CtaBand>
  </>;
}
