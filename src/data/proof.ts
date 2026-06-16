// Real proof only — never fabricate. Fill these arrays with actual client
// content and the placeholder slots on the Home and Growth pages are replaced
// automatically. Leave an array empty and its tasteful placeholder shows.

export interface ClientLogo {
  name: string;
  /** Imported image or a path under /public, e.g. "/clients/calloway.png". */
  src: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  /** e.g. "Calloway Roofing, Tupelo, MS" */
  business: string;
}

export interface CaseStudy {
  /** Headline result, e.g. "38 jobs booked in 60 days". */
  result: string;
  /** What happened, in plain owner language. */
  body: string;
  business: string;
}

// EXAMPLE (delete the comment and uncomment once you have a real logo file):
// import callowayLogo from "@/assets/clients/calloway.png";
// export const clientLogos: ClientLogo[] = [
//   { name: "Calloway Roofing", src: callowayLogo },
// ];
export const clientLogos: ClientLogo[] = [];

// EXAMPLE:
// export const testimonials: Testimonial[] = [
//   { quote: "First month they booked jobs I'd written off.", name: "Wes Calloway", business: "Calloway Roofing, Tupelo, MS" },
// ];
export const testimonials: Testimonial[] = [];

// EXAMPLE:
// export const caseStudies: CaseStudy[] = [
//   { result: "38 jobs booked in 60 days", body: "We turned on the lead system and ...", business: "Calloway Roofing, Tupelo, MS" },
// ];
export const caseStudies: CaseStudy[] = [];
