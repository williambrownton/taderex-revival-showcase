import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, CalendarCheck, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, TEL, WA, EMAIL, MAP } from "@/lib/site";
import logoAsset from "@/assets/taderex-logo.png.asset.json";
import { company } from "@/lib/company";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/kitchens", label: "Kitchens" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" aria-label="Taderex home" className="block shrink-0">
      <img src={logoAsset.url} alt="Taderex — chrome lettering with golden emblem" className="h-auto w-36 object-contain sm:w-44" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-ink-foreground transition-colors ${scrolled || open ? "bg-ink/95 backdrop-blur" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground" activeProps={{ className: "text-sm text-ink-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={TEL} className="btn-ghost-light !py-2.5 !px-4"><Phone className="h-4 w-4" />Call Now</a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5">Book Now</Link>
        </div>
        <Button variant="ghost" size="icon" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground lg:hidden">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-ink-foreground/10 px-5 pb-6 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-ink-foreground/10 py-4 font-display text-lg">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">Book Now</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-20 text-ink-foreground md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {company.name} — renovations, finishing and outsourcing services for residential and corporate environments. Over 12 years of proven excellence.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-ink-muted">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-ink-foreground">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Reach us</p>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li><a href={TEL} className="flex gap-2 hover:text-ink-foreground"><Phone className="h-4 w-4 shrink-0" />{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex gap-2 hover:text-ink-foreground"><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a></li>
            <li><a href={MAP} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-ink-foreground"><MapPin className="h-4 w-4 shrink-0" />Lagos, Nigeria</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0" />Mon – Sat, 9:00 AM – 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-ink-foreground/10 px-5 pt-6 text-xs text-ink-muted md:px-8">
        © {new Date().getFullYear()} Taderex Nigeria Limited. All rights reserved.
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <>
      <a href={WA} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-primary-foreground shadow-xl md:flex">
        <MessageCircle className="h-5 w-5" />Chat on WhatsApp
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink-foreground/10 bg-ink text-xs font-bold text-ink-foreground md:hidden">
        <a href={TEL} className="flex flex-col items-center gap-1 py-3"><Phone className="h-4 w-4" />Call Now</a>
        <a href={WA} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 bg-whatsapp py-3"><MessageCircle className="h-4 w-4" />WhatsApp</a>
        <Link to="/contact" className="flex flex-col items-center gap-1 bg-primary py-3 text-primary-foreground"><CalendarCheck className="h-4 w-4" />Book Now</Link>
      </div>
    </>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img src={image} alt="" className="image-drift absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-28 md:pt-48">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-4 max-w-4xl text-4xl font-extrabold leading-[1.02] md:text-7xl">{title}</h1>
        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, children }: { title: string; text?: string; children: React.ReactNode }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
          {text && <p className="mt-4 text-primary-foreground/85">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">{children}</div>
      </div>
    </section>
  );
}
