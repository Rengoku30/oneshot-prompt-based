import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { Eyebrow } from '../ui/Atoms'
import { ProjectCard } from '../ProjectCard'
import { projects } from '../../data/content'

export function SelectedWorks() {
  const featured = projects.slice(0, 3)
  return (
    <Section texture="lines" className="bg-white">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-6 border-b border-black pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Built things,
              <br />
              <span className="italic">made to last.</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.2em] focus-outline md:self-auto"
          >
            All projects
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-100 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
