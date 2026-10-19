import { useRef, type ReactNode, type PointerEvent } from "react";

export function DimensionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty("--tilt-x", `${-(event.clientY - box.top - box.height / 2) / box.height * 7}deg`);
    ref.current?.style.setProperty("--tilt-y", `${(event.clientX - box.left - box.width / 2) / box.width * 7}deg`);
  };
  const reset = () => { ref.current?.style.setProperty("--tilt-x", "0deg"); ref.current?.style.setProperty("--tilt-y", "0deg"); };
  return <div className="dimension-stage" onPointerMove={move} onPointerLeave={reset}><div ref={ref} className={`dimension-card ${className}`}>{children}</div></div>;
}
