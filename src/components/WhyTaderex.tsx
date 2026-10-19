import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Ruler, HardHat, Sparkles, Receipt, Plus, Minus, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DimensionCard } from "@/components/DimensionCard";

const principles = [
  { icon: Ruler, title: "Measured design", text: "Every job starts with a survey, a drawing and a written scope.", detail: "Room proportions, circulation and material junctions are considered together, so the finished space works as beautifully as it looks.", items: ["Site dimensions & condition survey", "Layouts & material coordination", "An agreed scope before execution"] },
  { icon: HardHat, title: "Own site crew", text: "Directly supervised artisans — no disappearing subcontractors.", detail: "A coordinated team keeps each trade connected to the next: structure, services, surfaces and installation all follow the same plan.", items: ["Direct site supervision", "Coordinated trade sequencing", "Documented progress updates"] },
  { icon: Sparkles, title: "Finish obsession", text: "Straight lines, sharp corners, clean grout. Every single time.", detail: "From cabinet reveals to ceiling edges, the smallest junctions make the biggest difference. Final inspections focus on the details you live with every day.", items: ["Precise alignment & clean edges", "Careful material transitions", "Snag inspection before handover"] },
  { icon: Receipt, title: "Fixed pricing", text: "A bill of quantities you approve before the first block moves.", detail: "The agreed quotation defines the work and materials. Any requested change is reviewed and priced before it becomes part of your project.", items: ["Itemised bill of quantities", "Clear inclusions & exclusions", "Changes agreed before execution"] },
];
export function WhyTaderex() {
  const [open, setOpen] = useState<number | null>(null);
  return <section className="why-section bg-ink py-24 text-ink-foreground md:py-32">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="eyebrow">Why Taderex</p><h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Built like a contractor.<br /><span className="text-ink-muted">Detailed like a designer.</span></h2></div><Button asChild variant="outline" className="h-12 border-ink-muted bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"><Link to="/services">View Services <ArrowUpRight /></Link></Button></div>
      <div className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, text, detail, items }, i) => <DimensionCard key={title} className="principle-glass rounded-lg p-7">
          <div className="flex items-start justify-between"><div className="dimensional-icon"><Icon className="h-7 w-7" /></div><span className="font-display text-xs text-ink-muted">0{i + 1}</span></div>
          <h3 className="mt-9 text-xl font-bold">{title}</h3><p className="mt-4 min-h-20 text-sm leading-relaxed text-ink-muted">{text}</p>
          <Button variant="ghost" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`principle-${i}`} className="mt-5 w-full justify-between border-t border-ink-foreground/15 px-0 pt-5 text-ink-foreground hover:bg-transparent hover:text-primary">{open === i ? "Less detail" : "The details"}{open === i ? <Minus /> : <Plus />}</Button>
          {open === i && <div id={`principle-${i}`} className="mt-5 animate-rise border-t border-ink-foreground/15 pt-5"><p className="text-sm leading-relaxed text-ink-muted">{detail}</p><ul className="mt-5 space-y-3">{items.map(item => <li key={item} className="flex gap-2 text-xs leading-relaxed"><Check className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div>}
        </DimensionCard>)}
      </div>
    </div>
  </section>;
}
