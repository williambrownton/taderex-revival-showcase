import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Phone } from "lucide-react";
import { img, services, WA, TEL, PHONE } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Taderex Nigeria Limited" },
      { name: "description", content: "Renovation, interior design, premium finishing, office fit-out, façade works and project outsourcing in Lagos, with honest starting prices." },
      { property: "og:title", content: "Taderex Services — Renovation to moving day" },
      { property: "og:description", content: "Honest starting prices for Lagos renovation and finishing projects." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything between bare blockwork and moving day." image={img.pop}
        text="Prices below are honest starting points for Lagos projects. Send us the drawings or a few photos and you get a firm bill of quantities." />
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-24 md:space-y-28 md:px-8 md:py-32">
        {services.map((s, i) => (
          <article key={s.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className={`overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
              <img src={s.image} alt={`${s.title} by Taderex Nigeria Limited`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">{s.title}</h2>
              <p className="mt-4 font-display text-2xl font-bold text-primary">{s.price} <span className="text-sm font-medium text-muted-foreground">{s.unit}</span></p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.items.map((it) => <li key={it} className="flex items-center gap-2 text-sm font-semibold"><Check className="h-4 w-4 text-primary" />{it}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Request a Quote</Link>
                <a href={WA} target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <CtaBand title="Not sure which scope fits your building?" text="Call us and describe the space. We will tell you honestly whether it is a refresh, a finish or a full renovation.">
        <a href={TEL} className="btn-primary !bg-ink"><Phone className="h-4 w-4" />Call Now — {PHONE}</a>
      </CtaBand>
    </>
  );
}
