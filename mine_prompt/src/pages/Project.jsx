import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Atoms'
import { Button } from '../components/ui/Button'
import { FinalCTA } from '../components/sections/FinalCTA'
import { projects } from '../data/content'

export function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) return <Navigate to="/work" replace />

  const next = projects[(index + 1) % projects.length]
  const [first, ...rest] = project.description

  const specs = [
    { label: 'Location', value: project.location },
    { label: 'Completed', value: project.year },
    { label: 'Area', value: project.area },
    { label: 'Typology', value: project.type },
    { label: 'Status', value: project.status },
  ]

  return (
    <>
      <article>
        {/* back */}
        <Container className="pt-10">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-black/55 focus-outline hover:text-black"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-100 group-hover:-translate-x-1"
            />
            All work
          </Link>
        </Container>

        <PageHeader
          eyebrow={`${project.type} — ${project.year}`}
          title={
            <>
              {project.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="italic">
                {project.title.split(' ').slice(-1)}.
              </span>
            </>
          }
          intro={project.summary}
        />

        {/* featured image */}
        <Container className="py-12 md:py-16">
          <figure className="group relative block border-2 border-black transition-all duration-100 hover:border-[4px]">
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
            <figcaption className="absolute bottom-0 left-0 bg-black px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white">
              {project.location}
            </figcaption>
          </figure>
        </Container>

        {/* body + specs */}
        <Section texture="grid" className="bg-white">
          <Container className="py-16 md:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <Eyebrow>The commission</Eyebrow>
                <p className="mt-8 font-serif text-xl leading-relaxed text-black/85 md:text-2xl">
                  <span className="float-left mr-3 mt-2 inline-flex h-14 w-14 items-center justify-center border-2 border-black font-display text-2xl font-bold leading-none md:h-16 md:w-16 md:text-3xl">
                    {first}
                  </span>
                  {rest.join('')}
                </p>

                <p className="mt-8 font-serif text-lg leading-relaxed text-black/75">
                  The work is documented in the studio archive and has been published
                  internationally. Drawings, models, and full-scale material samples
                  are available to prospective clients on request.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button to="/contact" variant="primary" arrow>
                    Commission similar
                  </Button>
                  <Button to="/work" variant="ghost">
                    More work
                  </Button>
                </div>
              </div>

              {/* specs sidebar */}
              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="border-2 border-black p-8">
                  <Eyebrow>Specification</Eyebrow>
                  <dl className="mt-6">
                    {specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-baseline gap-3 border-b border-black/15 py-3 last:border-0"
                      >
                        <dt className="w-24 shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-black/50">
                          {s.label}
                        </dt>
                        <dd className="font-serif text-base">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 border-t border-black pt-6">
                    <Eyebrow>Palette</Eyebrow>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.materials.map((m) => (
                        <li
                          key={m}
                          className="border border-black px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em]"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </article>

      {/* next project */}
      <Link
        to={`/work/${next.slug}`}
        className="group block border-t-4 border-black bg-black text-white focus-outline-light"
      >
        <Container className="flex items-center justify-between gap-6 py-12 md:py-16">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              Next project — {String(projects.indexOf(next) + 1).padStart(2, '0')}
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-6xl">
              {next.title}
            </h2>
          </div>
          <ArrowRight
            size={32}
            strokeWidth={1.25}
            className="shrink-0 transition-transform duration-100 group-hover:translate-x-2"
          />
        </Container>
      </Link>

      <FinalCTA />
    </>
  )
}
