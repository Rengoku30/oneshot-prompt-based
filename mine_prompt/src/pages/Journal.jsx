import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Atoms'
import { FinalCTA } from '../components/sections/FinalCTA'
import { journal } from '../data/content'

export function Journal() {
  const [featured, ...rest] = journal

  return (
    <>
      <PageHeader
        eyebrow="Journal — Notes from the studio"
        title={
          <>
            On building,
            <br />
            <span className="italic">slowly.</span>
          </>
        }
        intro="Essays and field notes on material, light, proportion, and the patient craft of making buildings. Written by the people who draw them."
        meta={[
          { label: 'Entries', value: `${journal.length} published` },
          { label: 'Updated', value: 'Monthly' },
        ]}
      />

      <Section texture="lines" className="bg-white">
        <Container className="py-16 md:py-24">
          {/* featured */}
          <Link
            to={`/journal/${featured.slug}`}
            className="group grid grid-cols-1 gap-8 border-b border-black pb-12 focus-outline md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-7">
              <div className="relative overflow-hidden border-2 border-black transition-all duration-100 group-hover:border-[4px]">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-5">
              <div className="flex items-center gap-3">
                <Eyebrow>{featured.category}</Eyebrow>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-black/40">
                  {featured.date} · {featured.read}
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 font-serif text-lg leading-relaxed text-black/70">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
                Read essay
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-100 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* list */}
          <ul className="mt-4">
            {rest.map((post) => (
              <li key={post.slug} className="border-b border-black/15">
                <Link
                  to={`/journal/${post.slug}`}
                  className="group grid grid-cols-1 gap-6 py-8 focus-outline md:grid-cols-12 md:items-center md:gap-8"
                >
                  <div className="md:col-span-2">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-black/45">
                      {post.date}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <Eyebrow>{post.category}</Eyebrow>
                    <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                      {post.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-serif text-base leading-relaxed text-black/65">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.5}
                      className="inline-block transition-transform duration-100 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
