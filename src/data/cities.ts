// Cities within roughly 45 miles of New Albany, MS (straight-line).
// Used to generate local marketing landing pages at /marketing/:slug.

export interface City {
  slug: string;
  name: string;
  county: string;
  miles: number; // approximate straight-line distance from New Albany, MS
  blurb: string; // short, city-specific context
}

export const cities: City[] = [
  {
    slug: "new-albany-ms",
    name: "New Albany",
    county: "Union County",
    miles: 0,
    blurb:
      "Our home base in Union County and the birthplace of author William Faulkner, with a walkable downtown full of independent businesses.",
  },
  {
    slug: "oxford-ms",
    name: "Oxford",
    county: "Lafayette County",
    miles: 25,
    blurb:
      "Home of the University of Mississippi and a busy Square where local shops, clinics, and restaurants compete hard for attention.",
  },
  {
    slug: "tupelo-ms",
    name: "Tupelo",
    county: "Lee County",
    miles: 22,
    blurb:
      "The birthplace of Elvis Presley and the largest commercial hub in Northeast Mississippi, with a deep base of service businesses.",
  },
  {
    slug: "pontotoc-ms",
    name: "Pontotoc",
    county: "Pontotoc County",
    miles: 17,
    blurb: "A growing county seat with a strong core of family-owned and trades businesses.",
  },
  {
    slug: "ripley-ms",
    name: "Ripley",
    county: "Tippah County",
    miles: 17,
    blurb: "Known across the region for the historic First Monday Trade Days.",
  },
  {
    slug: "booneville-ms",
    name: "Booneville",
    county: "Prentiss County",
    miles: 24,
    blurb: "The Prentiss County seat and home to Northeast Mississippi Community College.",
  },
  {
    slug: "corinth-ms",
    name: "Corinth",
    county: "Alcorn County",
    miles: 41,
    blurb: "A historic city near the Tennessee line with a revitalized downtown and deep Civil War roots.",
  },
  {
    slug: "holly-springs-ms",
    name: "Holly Springs",
    county: "Marshall County",
    miles: 30,
    blurb: "A historic Marshall County town known for its antebellum architecture and small-business core.",
  },
  {
    slug: "water-valley-ms",
    name: "Water Valley",
    county: "Yalobusha County",
    miles: 38,
    blurb: "A Yalobusha County town with a revitalized Main Street of independent shops and makers.",
  },
  {
    slug: "houston-ms",
    name: "Houston",
    county: "Chickasaw County",
    miles: 41,
    blurb: "The Chickasaw County seat at the heart of the Tombigbee region.",
  },
  {
    slug: "okolona-ms",
    name: "Okolona",
    county: "Chickasaw County",
    miles: 36,
    blurb: "A Chickasaw County community with a historic downtown commercial district.",
  },
  {
    slug: "saltillo-ms",
    name: "Saltillo",
    county: "Lee County",
    miles: 17,
    blurb: "A fast-growing Lee County suburb just north of Tupelo.",
  },
  {
    slug: "baldwyn-ms",
    name: "Baldwyn",
    county: "Lee County",
    miles: 18,
    blurb: "A Lee County town near the Brices Cross Roads battlefield.",
  },
  {
    slug: "fulton-ms",
    name: "Fulton",
    county: "Itawamba County",
    miles: 32,
    blurb: "The Itawamba County seat along the Tennessee-Tombigbee Waterway.",
  },
  {
    slug: "bruce-ms",
    name: "Bruce",
    county: "Calhoun County",
    miles: 37,
    blurb: "A Calhoun County town with a long timber and furniture heritage.",
  },
  {
    slug: "amory-ms",
    name: "Amory",
    county: "Monroe County",
    miles: 43,
    blurb: "A Monroe County railroad town on the Tennessee-Tombigbee Waterway.",
  },
];

export const getCity = (slug?: string): City | undefined =>
  cities.find((c) => c.slug === slug);

// Other cities to surface for internal linking on a given city page.
export const nearbyCities = (slug: string, count = 6): City[] =>
  cities.filter((c) => c.slug !== slug).slice(0, count);
