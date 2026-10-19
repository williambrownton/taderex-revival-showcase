import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Camera, Users, Award } from "lucide-react";
import { img } from "@/lib/site";
import { DimensionCard } from "@/components/DimensionCard";
import { PageHero, CtaBand } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Taderex Nigeria Limited — Lagos Renovation Contractor" },
      { name: "description", content: "Meet the Yaba-based team behind Taderex: supervised crews, fixed pricing and a workmanship guarantee on every handover." },
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
      <PageHero eyebrow="About us" title="A Lagos contractor with a designer's eye." image={img.team}
        text="From our office in Tejuosho, Yaba, we renovate, finish and style homes and workplaces across Nigeria." />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <img src={img.craft} alt="Taderex artisan finishing a wall" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">We sweat the last two millimetres.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Taderex Nigeria Limited was built on a simple idea: a renovation should feel finished. Straight lines, sharp corners and clean grout aren't extras — they're the job.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every project begins with a survey, a drawing and a written scope, followed by a bill of quantities you approve before work starts. No surprises, no disappearing subcontractors.
          </p>
          <Link to="/projects" className="btn-outline mt-8">See our work</Link>
        </div>
      </section>
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
