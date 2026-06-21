import { Compass, Layers, Eye, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Compass,
    number: "01",
    title: "Architecture",
    description:
      "Residential, cultural, and commercial projects rooted in rigorous geometry and classical proportion. Buildings that age gracefully.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Interiors",
    description:
      "Spaces shaped by material honesty, precise joinery, and negative space. Nothing added that isn't essential.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Curation",
    description:
      "Collections assembled with the eye of an editor — art, furniture, and objects that speak the same quiet language.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Consultation",
    description:
      "Advisory for collectors, institutions, and brands seeking editorial rigor in their spatial and visual identity.",
  },
];

export default function Editorial() {
  return (
    <>
      {/* Studio / About — boxed drop cap */}
      <section id="studio" className="relative border-b-[4px] border-black bg-white">
        <div className="pointer-events-none absolute inset-0 texture-diagonal opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="smallcaps mb-6 text-black">— The Studio</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                About
                <br />
                <em className="italic">Atelier</em>
                <br />
                Noir.
              </h2>

              <div className="mt-12 hidden lg:block">
                <p className="smallcaps mb-3 text-muted-foreground">Founded</p>
                <p className="font-display text-2xl">Two Thousand Twelve</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xl leading-relaxed md:text-2xl">
                <span className="drop-cap-box">A</span>
                telier Noir was founded on a singular conviction: that the most
                powerful design is the design that has been subtracted. We
                practice restraint as a discipline — every line drawn, every
                material chosen, every proportion set must justify its own
                presence. Nothing is added by default. Nothing is softened for
                comfort. Nothing is colored to compensate.
              </p>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Our work spans architecture, interiors, curation, and brand
                identity. What unites it is a shared editorial sensibility — the
                sensibility of the monograph, the gallery catalogue, the fashion
                quarterly. We approach each commission as if we were editing a
                publication: every element earning its place on the page, every
                blank space deliberate.
              </p>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                The studio is led by principals Ines Hartmann and Lukas Voss,
                working alongside a rotating group of architects, typographers,
                and craftspeople. We take on eight to twelve commissions per
                year, and we choose them carefully.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-8 border-t-2 border-black pt-8">
                <div>
                  <p className="font-display text-3xl font-bold">02</p>
                  <p className="smallcaps mt-2 text-muted-foreground">
                    Principals
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">14</p>
                  <p className="smallcaps mt-2 text-muted-foreground">
                    Studio Members
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">09</p>
                  <p className="smallcaps mt-2 text-muted-foreground">
                    Countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Features */}
      <section id="work" className="relative border-b-[4px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="smallcaps mb-6 text-black">— Services</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Four
                <br />
                Disciplines.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Each commission is approached as a complete editorial project —
              from the structural narrative to the typographic detail.
            </p>
          </div>

          <div className="grid gap-0 border-t-2 border-black md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className={`group relative border-b-2 border-black p-8 transition-colors duration-100 hover:bg-black hover:text-white md:p-12 ${
                    i % 2 === 0 ? "md:border-r-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-black transition-colors duration-100 group-hover:border-white">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-sm tracking-widest">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-12 font-display text-4xl font-bold tracking-tight md:text-5xl">
                    {service.title}.
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-10 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest">
                    <span>Read more</span>
                    <span className="transition-transform duration-100 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
