import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowUpRight, MessageCircle } from "lucide-react";
import { detailedServices, deliverySteps } from "@/lib/service-details";
import { WA } from "@/lib/site";
import { PageHero, CtaBand } from "@/components/SiteChrome";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => { const service = detailedServices.find(s => s.slug === params.slug); if (!service) throw notFound(); return service; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} — Taderex Nigeria Limited` : "Service unavailable — Taderex" },
    { name: "description", content: loaderData?.text ?? "Explore Taderex renovation and finishing services." },
    { property: "og:title", content: loaderData ? `${loaderData.title} — Taderex` : "Service unavailable — Taderex" },
    { property: "og:description", content: loaderData?.text ?? "Explore our services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
  ] }), component: ServiceDetail,
});
function ServiceDetail() {
  const service = Route.useLoaderData();
  return <><PageHero eyebrow={`Services / ${service.number}`} title={service.title} text={service.text} image={service.image} />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-28"><div><Button asChild variant="link" className="mb-6 px-0"><Link to="/services">← All services</Link></Button><p className="eyebrow">The scope, in detail</p><h2 className="mt-4 text-3xl font-extrabold md:text-5xl">From first measurement<br />to the final finish.</h2><ul className="mt-8 grid gap-5 sm:grid-cols-2">{service.items.map(item => <li key={item} className="flex gap-3 border-t pt-5"><Check className="h-5 w-5 shrink-0 text-primary" /><span className="font-semibold">{item}</span></li>)}</ul><p className="mt-8 leading-relaxed text-muted-foreground">Your final scope is tailored after we review the property, dimensions and finish selections. Existing conditions, access, materials and the extent of the work inform the quotation.</p></div><aside className="self-start border-l-2 border-primary pl-8"><p className="eyebrow">Project quotation</p><p className="mt-4 font-display text-3xl font-bold text-primary">{service.price}</p><p className="mt-2 text-sm text-muted-foreground">{service.unit}</p><p className="mt-6 text-sm leading-relaxed text-muted-foreground">Send your location, approximate dimensions, photos or drawings, preferred finishes and intended timeline.</p><Button asChild className="mt-7 h-12"><Link to="/contact">Request a Quote <ArrowUpRight /></Link></Button><Button asChild variant="outline" className="mt-3 h-12"><a href={`${WA}?text=${encodeURIComponent(`Hello Taderex, I would like to discuss ${service.title}.`)}`} target="_blank" rel="noreferrer"><MessageCircle /> Discuss this service</a></Button></aside></section>
    <section className="bg-secondary py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><p className="eyebrow">A coordinated delivery</p><h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Clear at every stage.</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{deliverySteps.map((step,i) => <div key={step.title} className="border-t pt-6"><span className="font-display text-3xl text-primary">0{i+1}</span><h3 className="mt-4 text-xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></div>)}</div></div></section>
    {service.slug === "bespoke-kitchens" && <section className="mx-auto max-w-7xl px-5 py-16 md:px-8"><Button asChild variant="outline" className="h-12"><Link to="/kitchens">Explore kitchen inspiration <ArrowUpRight /></Link></Button></section>}
    <CtaBand title="Let’s define your project." text="A considered scope is the first step towards a properly finished space."><Button asChild className="h-12 bg-ink hover:bg-ink/90"><Link to="/contact">Book a site visit</Link></Button></CtaBand>
  </>;
}
