import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { ProjectCard } from '../components/ProjectCard'
import { FinalCTA } from '../components/sections/FinalCTA'
import { projects } from '../data/content'
import { cn } from '../lib/cn'

export function Work() {
  const types = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.type)))],
    []
  )
  const [active, setActive] = useState('All')

  const list = active === 'All' ? projects : projects.filter((p) => p.type === active)

  return (
    <>
      <PageHeader
        eyebrow="Work — 1998 / 2024"
        title={
          <>
            Selected
            <br />
            <span className="italic">commissions.</span>
          </>
        }
        intro="A small catalogue of built and ongoing work. Each project is the product of the same discipline, applied to a different site, light, and life."
        meta={[
          { label: 'Built', value: `${projects.length} commissions` },
          { label: 'Status', value: 'Selective intake' },
          { label: 'Range', value: 'Sacred to civic' },
        ]}
      />

      <Section texture="lines" className="bg-white">
        <Container className="py-16 md:py-24">
          {/* filter */}
          <div className="flex flex-wrap items-center gap-3 border-b border-black pb-8">
            <span className="mr-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-black/45">
              Filter
            </span>
            {types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={cn(
                  'focus-outline border-2 border-black px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors duration-100',
                  active === t
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black hover:bg-black hover:text-white'
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {list.length === 0 && (
            <p className="py-24 text-center font-display text-2xl italic text-black/50">
              No work in this category — yet.
            </p>
          )}
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
