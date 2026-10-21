import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Phone } from "lucide-react";
import { img, WA, TEL, PHONE } from "@/lib/site";
import { detailedServices } from "@/lib/service-details";
import { Button } from "@/components/ui/button";
import { DimensionCard } from "@/components/DimensionCard";
import { PageHero, CtaBand } from "@/components/SiteChrome";
import { serviceGroups } from "@/lib/company";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Taderex Nigeria Limited" },
      { name: "description", content: "Renovation, interior design, premium finishing, office fit-out, façade works and project outsourcing in Lagos, with honest starting prices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Taderex Services — Renovation to moving day" },
      { property: "og:description", content: "Honest starting prices for Lagos renovation and finishing projects." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Renovation & Finishing Services" image={img.pop}
        text="Renovations, finishing and outsourcing services. High-end residential, corporate and industrial spaces, intentionally designed and expertly finished." />
      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
          {serviceGroups.map(group => <div key={group.title}><h2 className="text-2xl font-bold">{group.title}</h2><ul className="mt-6 space-y-3">{group.items.map(item => <li key={item.title}><Button asChild variant="link" className="h-auto justify-start whitespace-normal px-0 text-left"><Link to="/services/$slug" params={{ slug: item.slug }}><Check className="h-4 w-4 shrink-0" />{item.title}</Link></Button></li>)}</ul></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-24 md:space-y-28 md:px-8 md:py-32">
        {detailedServices.map((s, i) => (
          <article key={s.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <DimensionCard className="overflow-hidden rounded-lg"><div>
              <img src={s.image} alt={`${s.title} by Taderex Nigeria Limited`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div></DimensionCard>
            <div>
              <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">{s.title}</h2>
              <p className="mt-4 font-display text-2xl font-bold text-primary">{s.price} <span className="text-sm font-medium text-muted-foreground">{s.unit}</span></p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.items.map((it) => <li key={it} className="flex items-center gap-2 text-sm font-semibold"><Check className="h-4 w-4 text-primary" />{it}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="h-12"><Link to="/services/$slug" params={{ slug: s.slug }}>Explore service details</Link></Button>
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
