import { useState } from 'react'
import { Check } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Atoms'
import { Button } from '../components/ui/Button'
import { studio } from '../data/content'

const fieldClass =
  'w-full border-b-2 border-black bg-transparent py-3 font-serif text-lg focus-input focus:outline-none'

export function Contact() {
  const [sent, setSent] = useState(false)

  const details = [
    { label: 'Copenhagen', lines: [...studio.address, studio.phone] },
    { label: 'New York', lines: [...studio.addressNY] },
    { label: 'General', lines: [studio.email] },
    { label: 'Press', lines: [studio.press] },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact — Begin a conversation"
        title={
          <>
            Write to
            <br />
            <span className="italic">the studio.</span>
          </>
        }
        intro="We accept a small number of new commissions each year and read every message ourselves. Tell us about your site, your brief, or simply your instinct."
      />

      <Section texture="grid" className="bg-white">
        <Container className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
            {/* form */}
            <div className="lg:col-span-7">
              <Eyebrow>Enquiry</Eyebrow>

              {sent ? (
                <div className="mt-8 border-2 border-black bg-black p-10 text-white md:p-14">
                  <Check size={32} strokeWidth={1.5} />
                  <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-4xl">
                    Message received.
                  </h2>
                  <p className="mt-4 max-w-md font-serif text-lg text-white/75">
                    Thank you. We read every enquiry personally and will reply within
                    five working days. If your matter is urgent, telephone the studio.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 font-mono text-xs uppercase tracking-[0.2em] underline-offset-4 hover:underline focus-outline-light"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-8"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-black/55"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-black/55"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@studio.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="type"
                        className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-black/55"
                      >
                        Project type
                      </label>
                      <select id="type" defaultValue="" className={fieldClass}>
                        <option value="" disabled>
                          Select a typology
                        </option>
                        <option>Private residence</option>
                        <option>Cultural / civic</option>
                        <option>Sacred</option>
                        <option>Commercial</option>
                        <option>Counsel / advisory</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="site"
                        className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-black/55"
                      >
                        Site / location
                      </label>
                      <input
                        id="site"
                        type="text"
                        placeholder="City, country"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-black/55"
                    >
                      The brief
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us what you intend to build…"
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <Button type="submit" variant="primary" arrow>
                      Send enquiry
                    </Button>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-black/45">
                      Reply within 5 working days
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* details */}
            <aside className="lg:col-span-4 lg:col-start-9">
              <Eyebrow>The studio</Eyebrow>
              <dl className="mt-8 space-y-8">
                {details.map((d) => (
                  <div key={d.label} className="border-b border-black/15 pb-6">
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-black/50">
                      {d.label}
                    </dt>
                    <dd className="mt-2 space-y-0.5 font-serif text-base text-black/80">
                      {d.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-2 border-black p-6">
                <p className="font-display text-2xl italic leading-snug">
                  Prefer to write directly?
                </p>
                <a
                  href={`mailto:${studio.email}`}
                  className="mt-3 inline-block font-mono text-sm underline-offset-4 hover:underline focus-outline"
                >
                  {studio.email}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
