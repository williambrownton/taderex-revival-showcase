import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { img, services, PHONE, TEL, WA, EMAIL, MAP } from "@/lib/site";
import { PageHero } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Site Visit — Taderex Nigeria Limited" },
      { name: "description", content: "Request a quote or book a free site visit in Lagos. Call +234 803 869 4133 or chat on WhatsApp." },
      { property: "og:title", content: "Book a free site visit — Taderex" },
      { property: "og:description", content: "Send your brief straight to our WhatsApp or call the office." },
    ],
  }),
  component: Contact,
});

const field = "w-full border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

function Contact() {
  const [f, setF] = useState({ name: "", phone: "", service: services[0]!.title, location: "", date: "", details: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const body = `Hello Taderex, I would like to book a site visit.\n\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nLocation: ${f.location}\nPreferred date: ${f.date}\n\nDetails: ${f.details}`;
  const submit = (e: React.FormEvent) => { e.preventDefault(); window.open(`${WA}?text=${encodeURIComponent(body)}`, "_blank"); };
  const cards = [
    { icon: Phone, t: "Call Now", d: PHONE, href: TEL },
    { icon: MessageCircle, t: "Chat on WhatsApp", d: "Fastest reply, 9am – 5pm", href: WA },
    { icon: Mail, t: "Email", d: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, t: "Office", d: "Tejuosho, Yaba, Lagos 101241, Lagos, Nigeria", href: MAP },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Book now. We answer the phone." image={img.office}
        text="Site visits across Lagos are free. Fill the brief below and it goes straight to our WhatsApp, or simply call the office." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <form onSubmit={submit} className="border bg-card p-6 md:p-10">
          <h2 className="text-3xl font-extrabold">Request a Quote</h2>
          <p className="mt-2 text-sm text-muted-foreground">Takes under a minute. We reply the same working day.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">Full name<input required maxLength={100} value={f.name} onChange={set("name")} className={`${field} mt-2`} /></label>
            <label className="text-sm font-semibold">Phone number<input required type="tel" maxLength={20} value={f.phone} onChange={set("phone")} className={`${field} mt-2`} /></label>
            <label className="text-sm font-semibold">Service needed
              <select value={f.service} onChange={set("service")} className={`${field} mt-2`}>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
            </label>
            <label className="text-sm font-semibold">Property location<input maxLength={150} value={f.location} onChange={set("location")} className={`${field} mt-2`} /></label>
            <label className="text-sm font-semibold sm:col-span-2">Preferred visit date<input type="date" value={f.date} onChange={set("date")} className={`${field} mt-2`} /></label>
            <label className="text-sm font-semibold sm:col-span-2">Project details<textarea rows={5} maxLength={1000} value={f.details} onChange={set("details")} className={`${field} mt-2`} /></label>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-primary">Book Now via WhatsApp</button>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`} className="text-sm font-bold underline underline-offset-4">Send by email</a>
          </div>
        </form>
        <div className="space-y-4">
          {cards.map(({ icon: Icon, t, d, href }) => (
            <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex gap-4 border bg-card p-6 transition-colors hover:border-primary">
              <Icon className="h-6 w-6 shrink-0 text-primary" />
              <span><span className="block font-display font-bold">{t}</span><span className="text-sm text-muted-foreground">{d}</span></span>
            </a>
          ))}
          <div className="flex gap-4 bg-ink p-6 text-ink-foreground">
            <Clock className="h-6 w-6 shrink-0 text-primary" />
            <span><span className="block font-display font-bold">Opening hours</span><span className="text-sm text-ink-muted">Monday – Saturday, 9:00 AM – 5:00 PM</span></span>
          </div>
        </div>
      </section>
    </>
  );
}
