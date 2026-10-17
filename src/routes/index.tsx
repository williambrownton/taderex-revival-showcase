import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star, Ruler, HardHat, Sparkles, Receipt, Phone } from "lucide-react";
import { img, services, projects, TEL, PHONE } from "@/lib/site";
import { CtaBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taderex Nigeria Limited — Renovation & Interior Finishing in Lagos" },
      { name: "description", content: "Renovation, POP ceilings, interior design, office fit-out and façade works across Lagos and Nigeria. Book a free site visit." },
      { property: "og:title", content: "Taderex — Renovation with a finish you can feel" },
      { property: "og:description", content: "Homes and offices rebuilt, finished and styled across Nigeria." },
    ],
  }),
  component: Index,
});

const marquee = ["Renovation", "POP Ceilings", "Interior Design", "Office Fit-Out", "Screeding", "Marble & Tiling", "Façade Works", "Outsourcing"];
const why = [
  { icon: Ruler, t: "Measured design", d: "Every job starts with a survey, a drawing and a written scope." },
  { icon: HardHat, t: "Own site crew", d: "Directly supervised artisans — no disappearing subcontractors." },
  { icon: Sparkles, t: "Finish obsession", d: "Straight lines, sharp corners, clean grout. Every single time." },
  { icon: Receipt, t: "Fixed pricing", d: "A bill of quantities you approve before the first block moves." },
];
const steps = [
  { t: "Site visit", d: "We measure, photograph and listen to how you want the space to work." },
  { t: "Design & BOQ", d: "Concept boards plus a transparent bill of quantities and timeline." },
  { t: "Build", d: "Supervised execution with weekly photo reports straight to your phone." },
  { t: "Handover", d: "Deep clean, snag list cleared, and a workmanship guarantee." },
];

function Index() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
        <img src={img.hero} alt="Nigerian construction crew renovating a duplex in Lagos at golden hour" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 md:px-8">
          <p className="eyebrow animate-rise flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Yaba, Lagos · Serving all Nigeria</p>
          <h1 className="animate-rise mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-6xl md:text-8xl">
            Renovation with a finish you can feel.
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

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="eyebrow">Why Taderex</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Built like a contractor. Detailed like a designer.</h2>
        <div className="mt-16 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-6 text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">What we deliver</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">Pick a scope. We price it the same day.</h2>
            </div>
            <Link to="/services" className="btn-outline self-start">View Services</Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <article key={s.title} className="group flex flex-col bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.home} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 bg-ink px-3 py-1.5 text-xs font-bold text-ink-foreground">{s.price}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="eyebrow">Recent work</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">Nigerian spaces, finished properly.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[projects[0]!, projects[3]!, projects[1]!].map((p, i) => (
            <figure key={p.title} className={`group relative overflow-hidden ${i === 0 ? "md:row-span-2" : ""}`}>
              <img src={p.image} alt={`${p.tag} project in ${p.place}`} loading="lazy" className="h-full min-h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6 text-ink-foreground">
                <p className="font-display text-lg font-bold">{["Façade & exterior", "Kitchen remodel", "Living room design"][i]}</p>
                <p className="text-sm text-ink-muted">{["Lekki, Lagos", "Yaba, Lagos", "Ikeja GRA"][i]}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/projects" className="btn-outline mt-10">See all projects <ArrowRight className="h-4 w-4" /></Link>
      </section>

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
