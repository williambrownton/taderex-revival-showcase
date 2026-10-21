import { describe, expect, it } from "vitest";
import { company, serviceGroups } from "@/lib/company";
import { detailedServices } from "@/lib/service-details";
import { EMAIL, TEL, WA } from "@/lib/site";

describe("Supplied company requirements", () => {
  it("uses the supplied contact email", () => expect(EMAIL).toBe("tade.rexnigltd@yahoo.com"));
  it("retains the supplied telephone number", () => expect(TEL).toBe("tel:+2348038694133"));
  it("sends WhatsApp enquiries to the supplied number", () => expect(WA).toBe("https://wa.me/2348038694133"));
  it("records twelve years of experience", () => expect(company.experienceYears).toBe(12));
  it.each(serviceGroups.flatMap(group => group.items))("provides a quoted service for $title", item => {
    expect(detailedServices.find(service => service.slug === item.slug)).toBeDefined();
  });
});