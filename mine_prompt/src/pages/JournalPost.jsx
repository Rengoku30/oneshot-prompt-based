import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Eyebrow } from '../components/ui/Atoms'
import { FinalCTA } from '../components/sections/FinalCTA'
import { journal, studio } from '../data/content'

export function JournalPost() {
  const { slug } = useParams()
  const index = journal.findIndex((p) => p.slug === slug)
  const post = journal[index]

  if (!post) return <Navigate to="/journal" replace />

  const next = journal[(index + 1) % journal.length]
  const [firstPara, ...restPara] = post.body
  const [firstChar, ...restChars] = firstPara

  return (
    <>
      <article>
        <Container className="pt-10">
          <Link
            to="/journal"
            className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-black/55 focus-outline hover:text-black"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-100 group-hover:-translate-x-1"
            />
            The journal
          </Link>
        </Container>

        {/* header */}
        <Section texture="lines" className="bg-white">
          <Container size="prose" className="py-12 md:py-16">
            <div className="flex items-center gap-3">
              <Eyebrow>{post.category}</Eyebrow>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-black/40">
                {post.date} · {post.read} read
              </span>
            </div>
            <h1
              className="mt-6 font-display font-medium leading-[0.95] tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
            >
              {post.title}
            </h1>
          </Container>
        </Section>

        {/* cover */}
        <Container className="py-8 md:py-12">
          <figure className="border-2 border-black">
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </figure>
        </Container>

        {/* body */}
        <Section texture="grid" className="bg-white">
          <Container size="prose" className="py-12 md:py-20">
            <p className="font-serif text-xl leading-relaxed text-black/85 md:text-2xl">
              <span className="float-left mr-3 mt-2 inline-flex h-14 w-14 items-center justify-center border-2 border-black font-display text-2xl font-bold leading-none md:h-16 md:w-16 md:text-3xl">
                {firstChar}
              </span>
              {restChars.join('')}
            </p>

            {/* pull quote */}
            <blockquote className="my-12 border-l-4 border-black pl-6 md:my-16 md:pl-10">
              <p className="font-display text-2xl italic leading-snug md:text-4xl">
                {post.excerpt}
              </p>
            </blockquote>

            {restPara.map((para, i) => (
              <p
                key={i}
                className="mb-6 font-serif text-lg leading-relaxed text-black/80"
              >
                {para}
              </p>
            ))}

            <footer className="mt-12 border-t border-black pt-6">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-black/50">
                Written by the studio · {studio.name} · {post.date}
              </p>
            </footer>
          </Container>
        </Section>
      </article>

      {/* next */}
      <Link
        to={`/journal/${next.slug}`}
        className="group block border-t-4 border-black bg-black text-white focus-outline-light"
      >
        <Container className="flex items-center justify-between gap-6 py-12 md:py-16">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              Next entry
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
              {next.title}
            </h2>
          </div>
          <ArrowRight
            size={28}
            strokeWidth={1.25}
            className="shrink-0 transition-transform duration-100 group-hover:translate-x-2"
          />
        </Container>
      </Link>

      <FinalCTA />
    </>
  )
}
