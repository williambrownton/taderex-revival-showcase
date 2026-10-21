import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Camera, Users, Award } from "lucide-react";
import { img } from "@/lib/site";
import { DimensionCard } from "@/components/DimensionCard";
import { PageHero, CtaBand } from "@/components/SiteChrome";
import { company, approach, coreValues } from "@/lib/company";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Taderex Nigeria Limited — Lagos Renovation Contractor" },
      { name: "description", content: "Taderex Interior & Exterior Design: over 12 years of high-end renovations, refined finishing and professional outsourcing for residential and corporate spaces in Lagos, Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "About Taderex Nigeria Limited" },
      { property: "og:description", content: "A Lagos renovation contractor with a designer's eye for detail." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Users, t: "Supervised crews", d: "Our own artisans, led on site by a Taderex supervisor every working day." },
  { icon: Camera, t: "Weekly photo reports", d: "Progress photos sent to your phone — ideal for diaspora owners." },
  { icon: ShieldCheck, t: "Workmanship guarantee", d: "Every handover includes a cleared snag list and a written guarantee." },
  { icon: Award, t: "5.0 on Google", d: "Rated five stars by homeowners and businesses across Lagos." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us · Over 12 years of proven excellence" title={company.name} image={img.team}
        text="Renovations | Finishing | Outsourcing Services. Residential & Corporate Space Transformation." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <img src={img.craft} alt="Taderex artisan finishing a wall" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Excellence is not a promise – it is our Culture.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We don’t just improve spaces. We elevate experiences. With over 12 years of proven excellence, we specialize in high-end renovations, refined finishing, and professional outsourcing services for residential and corporate environments.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We believe exceptional spaces are not accidental — they are intentionally designed, expertly crafted, and flawlessly finished.
          </p>
          <Link to="/projects" className="btn-outline mt-8">See our work</Link>
        </div>
      </section>
      <section className="bg-ink py-20 text-ink-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8"><div><p className="eyebrow">Our vision</p><h2 className="mt-4 text-3xl font-bold">Excellence. Innovation. Integrity.</h2><p className="mt-6 leading-relaxed text-ink-muted">{company.vision}</p></div><div><p className="eyebrow">Our mission</p><h2 className="mt-4 text-3xl font-bold">Refined spaces. Lasting quality.</h2><p className="mt-6 leading-relaxed text-ink-muted">{company.mission}</p></div></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8"><div><p className="eyebrow">Our approach</p><h2 className="mt-4 text-3xl font-bold">Intentional at every stage.</h2><ul className="mt-8 space-y-4">{approach.map(item => <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></div><div><p className="eyebrow">Our core values</p><h2 className="mt-4 text-3xl font-bold">What we stand for.</h2><ol className="mt-8 space-y-4">{coreValues.map((value,i) => <li key={value} className="flex gap-4 border-b pb-4 font-semibold"><span className="text-primary">0{i+1}</span>{value}</li>)}</ol></div></section>
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {values.map(({ icon: Icon, t, d }) => (
            <DimensionCard key={t} className="rounded-lg border bg-card p-8">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </DimensionCard>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 md:grid-cols-3 md:px-8">
        {[img.bedroom, img.kitchen, img.pop].map((src, i) => (
          <img key={i} src={src} alt="Taderex finished interior" loading="lazy" className="aspect-square w-full object-cover" />
        ))}
      </section>
      <CtaBand title="Let's walk your space together." text="Free site visits across Lagos, Monday to Saturday.">
        <Link to="/contact" className="btn-primary !bg-ink">Book Now</Link>
      </CtaBand>
    </>
  );
}
