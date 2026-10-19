import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Star, Phone } from "lucide-react";
import { img, projects, TEL, PHONE } from "@/lib/site";
import { WhyTaderex } from "@/components/WhyTaderex";
import { KitchenGallery } from "@/components/KitchenGallery";
import { DimensionCard } from "@/components/DimensionCard";
import { Button } from "@/components/ui/button";
import { detailedServices } from "@/lib/service-details";
import { CtaBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taderex Nigeria Limited — Renovation & Interior Finishing in Lagos" },
      { name: "description", content: "Renovation, POP ceilings, interior design, office fit-out and façade works across Lagos and Nigeria. Book a free site visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Taderex — Renovation with a finish you can feel" },
      { property: "og:description", content: "Homes and offices rebuilt, finished and styled across Nigeria." },
    ],
  }),
  component: Index,
});

const marquee = ["Renovation", "POP Ceilings", "Interior Design", "Office Fit-Out", "Screeding", "Marble & Tiling", "Façade Works", "Outsourcing"];
const steps = [
  { t: "Site visit", d: "We measure, photograph and listen to how you want the space to work." },
  { t: "Design & BOQ", d: "Concept boards plus a transparent bill of quantities and timeline." },
  { t: "Build", d: "Supervised execution with weekly photo reports straight to your phone." },
  { t: "Handover", d: "Deep clean, snag list cleared, and a workmanship guarantee." },
];

function Index() {
  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-ink text-ink-foreground">
        <img src={img.hero} alt="Nigerian construction crew renovating a duplex in Lagos at golden hour" className="image-drift absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 md:px-8">
          <p className="eyebrow animate-rise flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Yaba, Lagos · Serving all Nigeria</p>
          <h1 className="animate-rise mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-6xl md:text-8xl">
            Taderex Renovation<br /><span className="text-ink-muted">& Interior Finishing.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Taderex Nigeria Limited rebuilds, finishes and styles homes and offices across Nigeria — from bare structure to the last coat of paint.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="btn-ghost-light">View Services</Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-ink-muted">
            <span className="flex text-star">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
            5.0 rating on Google Business
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y bg-secondary py-5">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10">{m}<span className="text-primary">/</span></span>
          ))}
        </div>
      </div>

      <WhyTaderex />

      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">What we deliver</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">From full renovation<br />to exquisite detail.</h2>
            </div>
            <Button asChild variant="outline" className="h-12 self-start"><Link to="/services">View all services <ArrowUpRight /></Link></Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detailedServices.filter((_, i) => [0, 1, 2, 6, 7, 8].includes(i)).map((s) => (
              <DimensionCard key={s.title}><article className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.home} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 bg-ink px-3 py-1.5 text-xs font-bold text-ink-foreground">{s.price}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <Button asChild variant="link" className="mt-6 justify-start px-0"><Link to="/services/$slug" params={{ slug: s.slug }}>Explore the details <ArrowUpRight /></Link></Button>
                </div>
              </article></DimensionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Recent work</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Nigerian spaces,<br /><span className="text-primary">finished properly.</span></h2><p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">From a striking façade to the intimacy of a family living room — explore the materials, craftsmanship and finishing details that bring a space together.</p></div><Button asChild variant="outline" className="h-12"><Link to="/projects">Explore recent work <ArrowUpRight /></Link></Button></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.filter((_, i) => [0, 1, 3, 6].includes(i)).map((p, i) => <DimensionCard key={p.title}><Link to="/projects" className="group relative block overflow-hidden rounded-lg"><img src={p.image} alt={`${p.title} — ${p.place}`} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`} /><div className="photo-shade absolute inset-0" /><div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground md:p-8"><span className="gallery-glass inline-block rounded-sm px-3 py-1 text-xs">{p.tag}</span><h3 className="mt-4 text-2xl font-bold md:text-3xl">{p.title}</h3><div className="mt-3 flex items-center justify-between text-sm text-ink-muted"><span>{p.place}</span><ArrowUpRight className="h-5 w-5 text-ink-foreground" /></div></div></Link></DimensionCard>)}
          </div>
        </div>
      </section>

      <KitchenGallery preview />

      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow">How it runs</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">Four steps from first call to keys.</h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} className="border-t border-ink-foreground/15 pt-6">
                <span className="font-display text-5xl font-extrabold text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Book a free site visit anywhere in Lagos this week." text="Tell us the space, the budget range and the deadline. You get a written scope and price — no obligation.">
        <Link to="/contact" className="btn-primary !bg-ink">Book Now</Link>
        <a href={TEL} className="btn-ghost-light"><Phone className="h-4 w-4" />Call {PHONE}</a>
      </CtaBand>
    </>
  );
}
