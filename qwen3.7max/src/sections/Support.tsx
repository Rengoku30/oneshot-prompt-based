import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How many commissions does the studio accept each year?",
    a: "Between eight and twelve. We prefer to work on fewer projects with greater attention. Each commission receives the direct involvement of both founding principals from concept through completion.",
  },
  {
    q: "What is your typical engagement timeline?",
    a: "A residential commission runs twelve to eighteen months from initial conversation to handover. Smaller advisory engagements may be concluded in a single quarter. We do not compress timelines to meet arbitrary deadlines.",
  },
  {
    q: "Do you work outside of Switzerland?",
    a: "Yes. Roughly half our work is outside the country — across Europe and the Americas. We maintain a small network of trusted collaborators in each region and travel to the site at every key milestone.",
  },
  {
    q: "What is your stance on color?",
    a: "We practice in monochrome not as a dogma but as a discipline. Color, when it appears in our work, is always the result of a specific material decision — the warm gray of raw concrete, the black of charred cedar, the white of lime plaster. Never an applied surface.",
  },
  {
    q: "How do you price your work?",
    a: "All engagements are fixed-fee, priced before work begins. We do not work on a percentage of construction cost. Terms are transparent, staged, and tied to clear deliverables.",
  },
  {
    q: "Can you work alongside another architect or designer?",
    a: "We frequently collaborate as the editorial and curatorial voice within larger teams. Our role is typically one of authorial oversight — shaping the narrative, the material palette, and the typographic identity of the project.",
  },
];

export default function Support() {
  return (
    <>
      {/* FAQ */}
      <section className="border-b-[4px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="smallcaps mb-6 text-black">— Questions</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Frequently
                <br />
                <em className="italic">Asked</em>.
              </h2>

              <p className="mt-10 max-w-sm text-lg leading-relaxed text-muted-foreground">
                For anything not addressed here, write to the studio directly.
                We respond personally to every inquiry.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t-2 border-black">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group border-b-2 border-black"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-8">
                      <span className="font-display text-xl font-bold tracking-tight md:text-2xl">
                        {faq.q}
                      </span>
                      <span className="faq-plus flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black transition-colors duration-100 group-hover:bg-black group-hover:text-white">
                        <Plus size={18} strokeWidth={1.5} />
                      </span>
                    </summary>
                    <div className="pb-8 pr-16">
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — inverted with radial texture */}
      <section id="contact" className="relative overflow-hidden border-b-[4px] border-black bg-black text-white">
        <div className="pointer-events-none absolute inset-0 texture-radial-light" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-6">
              <p className="smallcaps mb-6 text-white/60">— Commission</p>
              <h2 className="font-display text-5xl font-bold leading-none tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl">
                Begin a
                <br />
                <em className="italic">Conversation</em>.
              </h2>

              <p className="mt-10 max-w-md text-lg leading-relaxed text-white/80">
                Every commission begins with an editorial brief — a document we
                prepare together over the course of a single meeting. Write to
                the studio and we will arrange the first conversation.
              </p>

              <div className="mt-12 space-y-6 border-t-2 border-white pt-10">
                <div>
                  <p className="smallcaps mb-2 text-white/60">Correspondence</p>
                  <p className="font-display text-2xl underline">
                    studio@ateliernoir.ch
                  </p>
                </div>
                <div>
                  <p className="smallcaps mb-2 text-white/60">By Telephone</p>
                  <p className="font-display text-2xl">+41 44 123 45 67</p>
                </div>
                <div>
                  <p className="smallcaps mb-2 text-white/60">By Appointment</p>
                  <p className="font-display text-2xl">
                    Bahnhofstrasse 42
                    <br />
                    8001 Zürich
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form className="space-y-10">
                <div>
                  <label className="smallcaps block mb-3 text-white/60">
                    — Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-white bg-transparent pb-3 font-display text-xl text-white placeholder:text-white/40 placeholder:italic focus:border-b-4 focus:outline-none"
                    placeholder="e.g. Marguerite Laurent"
                  />
                </div>

                <div>
                  <label className="smallcaps block mb-3 text-white/60">
                    — Correspondence
                  </label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-white bg-transparent pb-3 font-display text-xl text-white placeholder:text-white/40 placeholder:italic focus:border-b-4 focus:outline-none"
                    placeholder="you@domain.ch"
                  />
                </div>

                <div>
                  <label className="smallcaps block mb-3 text-white/60">
                    — Nature of Commission
                  </label>
                  <select className="w-full cursor-pointer border-b-2 border-white bg-transparent pb-3 font-display text-xl text-white focus:border-b-4 focus:outline-none">
                    <option className="bg-black">Architecture</option>
                    <option className="bg-black">Interiors</option>
                    <option className="bg-black">Curation</option>
                    <option className="bg-black">Consultation</option>
                    <option className="bg-black">Other</option>
                  </select>
                </div>

                <div>
                  <label className="smallcaps block mb-3 text-white/60">
                    — Brief Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-y border-b-2 border-white bg-transparent pb-3 font-display text-xl text-white placeholder:text-white/40 placeholder:italic focus:border-b-4 focus:outline-none"
                    placeholder="A sentence or two about the project you have in mind."
                  />
                </div>

                <button
                  type="submit"
                  className="btn group inline-flex items-center gap-3 border-2 border-white bg-white px-10 py-5 font-display text-sm font-medium uppercase tracking-widest text-black transition-colors duration-100 hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
                >
                  Submit Inquiry
                  <span className="transition-transform duration-100 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
