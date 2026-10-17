import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { img, projects } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Taderex Nigeria Limited" },
      { name: "description", content: "Completed renovations, finishing packages and interiors across Lekki, Ikeja, Victoria Island, Yaba and more." },
      { property: "og:title", content: "Taderex Projects — Work you can drive past" },
      { property: "og:description", content: "A selection of completed Lagos renovations and interiors." },
    ],
  }),
  component: Projects,
});

const tags = ["All", "Renovation", "Interior Design", "Fit-Out", "Finishing"];

function Projects() {
  const [tag, setTag] = useState("All");
  const list = tag === "All" ? projects : projects.filter((p) => p.tag === tag);
  return (
    <>
      <PageHero eyebrow="Projects" title="Work you can drive past and recognise." image={img.dining}
        text="A selection of completed renovations, finishing packages and interiors delivered for Nigerian homeowners, landlords and businesses." />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button key={t} onClick={() => setTag(t)} className={`border px-4 py-2 text-sm font-bold transition-colors ${tag === t ? "border-foreground bg-foreground text-background" : "hover:border-foreground"}`}>{t}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="group">
              <div className="relative overflow-hidden">
                <img src={p.image} alt={`${p.title} — ${p.place}`} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">{p.tag}</span>
              </div>
              <h2 className="mt-5 text-xl font-bold">{p.title}</h2>
              <p className="mt-1 flex justify-between text-sm text-muted-foreground"><span>{p.place}</span><span>{p.year}</span></p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Your building could be next on this page.">
        <Link to="/contact" className="btn-primary !bg-ink">Request a Quote</Link>
      </CtaBand>
    </>
  );
}
