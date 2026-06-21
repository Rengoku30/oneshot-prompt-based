const stats = [
  { value: "147", label: "Completed Projects", detail: "Since 2012" },
  { value: "38", label: "Awards & Honors", detail: "International" },
  { value: "14", label: "Years of Practice", detail: "Est. MMXII" },
  { value: "09", label: "Countries", detail: "Europe & Americas" },
];

const testimonials = [
  {
    quote:
      "Atelier Noir delivered a house of uncommon restraint. Every room breathes. Every detail is earned. Twelve years later, it still feels like the first day we moved in.",
    author: "Marguerite Laurent",
    role: "Private Client, Geneva",
  },
  {
    quote:
      "Working with Ines and Lukas is the closest I have come, in architecture, to working with an editor. They subtract where others add. The building is stronger for it.",
    author: "Henrik Sørensen",
    role: "Director, Moderna Museet",
  },
];

const works = [
  {
    year: "MMXXV",
    title: "Haus am See",
    location: "Zürich",
    type: "Residence",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
  },
  {
    year: "MMXXIV",
    title: "The Monograph Pavilion",
    location: "Basel",
    type: "Cultural",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
  },
  {
    year: "MMXXIV",
    title: "Galerie Weiss",
    location: "Berlin",
    type: "Commercial",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <>
      {/* Inverted Stats */}
      <section className="relative overflow-hidden border-b-[4px] border-black bg-black text-white">
        <div className="pointer-events-none absolute inset-0 texture-vertical-light opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="smallcaps mb-6 text-white/60">— In Figures</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Fourteen
                <br />
                <em className="italic">Years</em> of
                <br />
                Practice.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-white/70">
              A record measured not in volume, but in commissions we are proud
              to stand behind.
            </p>
          </div>

          <div className="grid gap-0 border-t-2 border-white md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`border-b-2 border-white p-8 md:p-10 ${
                  i < 3 ? "md:border-r-2" : ""
                }`}
              >
                <p className="font-display text-6xl font-bold leading-none md:text-7xl lg:text-8xl">
                  {stat.value}
                </p>
                <p className="mt-6 font-display text-xl italic">{stat.label}</p>
                <p className="smallcaps mt-3 text-white/60">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-b-[4px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="smallcaps mb-6 text-black">— Selected Work</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Recent
                <br />
                <em className="italic">Commissions</em>.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest underline hover:no-underline"
            >
              View all projects →
            </a>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {works.map((work) => (
              <a key={work.title} href="#" className="group block">
                <div className="relative overflow-hidden border-2 border-black transition-all duration-100 group-hover:border-[4px]">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <p className="smallcaps text-muted-foreground">{work.year}</p>
                  <p className="smallcaps text-muted-foreground">{work.type}</p>
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {work.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {work.location}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Editorial pull quotes */}
      <section className="relative border-b-[4px] border-black bg-muted">
        <div className="pointer-events-none absolute inset-0 texture-grid opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="mb-16">
            <p className="smallcaps mb-6 text-black">— Voices</p>
            <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
              What Our
              <br />
              <em className="italic">Clients</em> Say.
            </h2>
          </div>

          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="group relative border-t-2 border-black pt-10 transition-all duration-100 group-hover:border-t-[3px]"
              >
                <span className="absolute left-0 top-4 font-display text-9xl font-bold leading-none text-black opacity-[0.06] transition-opacity duration-100 group-hover:opacity-20">
                  "
                </span>
                <blockquote className="relative pl-4 md:pl-8">
                  <p className="font-display text-2xl font-normal leading-snug italic md:text-3xl lg:text-4xl">
                    {t.quote}
                  </p>
                  <figcaption className="mt-8 flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                    <span className="font-display text-xl font-bold">
                      — {t.author}
                    </span>
                    <span className="smallcaps text-muted-foreground">
                      {t.role}
                    </span>
                  </figcaption>
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
