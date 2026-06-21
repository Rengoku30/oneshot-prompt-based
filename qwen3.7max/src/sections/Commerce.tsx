import { Check } from "lucide-react";

const tiers = [
  {
    name: "Consultation",
    price: "4,800",
    unit: "per engagement",
    description:
      "A focused editorial review of your existing space, brief, or collection. One meeting, one document.",
    features: [
      "One half-day studio session",
      "Written editorial brief",
      "Material and spatial recommendations",
      "Follow-up correspondence",
    ],
    highlighted: false,
  },
  {
    name: "Commission",
    price: "38,000",
    unit: "starting from",
    description:
      "Full architectural or interior commission for residences and small cultural projects.",
    features: [
      "Concept and schematic design",
      "Design development & documentation",
      "Material palette curation",
      "On-site supervision",
      "Two rounds of revisions",
      "Photographic record",
    ],
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "12,500",
    unit: "per quarter",
    description:
      "Ongoing curatorial and design advisory for collectors, institutions, and luxury brands.",
    features: [
      "Priority studio access",
      "Quarterly editorial review",
      "Acquisitions advisory",
      "Event and publication support",
    ],
    highlighted: false,
  },
];

const journal = [
  {
    category: "Essay",
    date: "2026.03.14",
    title: "The Case for Monochrome in Domestic Architecture",
    excerpt:
      "On why the absence of color in a home is not a negation, but an invitation for the eye to rest.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop",
  },
  {
    category: "Notebook",
    date: "2026.02.28",
    title: "Against the Gradient",
    excerpt:
      "A short meditation on the tyranny of the soft transition, and what is lost between A and B.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
  },
  {
    category: "Interview",
    date: "2026.02.05",
    title: "Ines Hartmann on the Editor's Eye",
    excerpt:
      "A conversation with our founding principal about architecture as a form of editorial practice.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop",
  },
];

export default function Commerce() {
  return (
    <>
      {/* Pricing */}
      <section className="relative border-b-[4px] border-black bg-white">
        <div className="pointer-events-none absolute inset-0 texture-diagonal opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="smallcaps mb-6 text-black">— Engagements</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Three
                <br />
                <em className="italic">Forms</em> of
                <br />
                Practice.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Fixed, transparent terms. No percentage of construction cost.
              Every engagement is priced before work begins.
            </p>
          </div>

          <div className="grid gap-0 border-t-2 border-black md:grid-cols-3">
            {tiers.map((tier, i) => (
              <article
                key={tier.name}
                className={`group relative border-b-2 border-black transition-colors duration-100 ${
                  tier.highlighted
                    ? "border-x-2 bg-black text-white md:-my-16 md:px-10 md:py-20"
                    : "md:border-r-2 md:px-10 md:py-10"
                } ${i < 2 ? "md:border-r-2" : ""} ${
                  tier.highlighted
                    ? "hover:bg-white hover:text-black"
                    : "hover:bg-black hover:text-white"
                } p-10`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-8 bg-white px-4 py-1 font-mono text-xs uppercase tracking-widest text-black md:left-10">
                    ◆ Most Commissioned
                  </div>
                )}

                <p className="smallcaps mb-8">
                  — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-4xl font-bold tracking-tight">
                  {tier.name}
                </h3>

                <div className="mt-8 flex items-baseline gap-2 border-b-2 border-current pb-8">
                  <span className="font-display text-6xl font-bold">
                    {tier.price}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display text-lg">CHF</span>
                    <span className="smallcaps mt-1 opacity-60">
                      {tier.unit}
                    </span>
                  </div>
                </div>

                <p
                  className={`mt-8 text-base leading-relaxed ${
                    tier.highlighted ? "text-white/80" : "text-muted-foreground"
                  } group-hover:text-current`}
                >
                  {tier.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={18}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0"
                      />
                      <span className="text-base">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn mt-10 inline-flex items-center gap-3 border-2 px-8 py-4 font-display text-sm font-medium uppercase tracking-widest transition-colors duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3 ${
                    tier.highlighted
                      ? "border-white bg-white text-black hover:bg-transparent hover:text-white"
                      : "border-black bg-transparent text-black hover:bg-black hover:text-white"
                  } group-hover:invert`}
                >
                  Inquire →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journal / Blog */}
      <section id="journal" className="border-b-[4px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="smallcaps mb-6 text-black">— Journal</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Recent
                <br />
                <em className="italic">Essays</em>.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest underline hover:no-underline"
            >
              All entries →
            </a>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {journal.map((post) => (
              <a key={post.title} href="#" className="group block">
                <div className="relative overflow-hidden border-2 border-black transition-all duration-100 group-hover:border-[4px]">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="aspect-[4/3] w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <p className="smallcaps text-black">{post.category}</p>
                  <p className="font-mono text-xs tracking-widest text-muted-foreground">
                    {post.date}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest underline">
                  Read essay →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
