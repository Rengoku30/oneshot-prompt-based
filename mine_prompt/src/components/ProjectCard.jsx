import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

export function ProjectCard({ project, index = 0, className }) {
  const n = String(index + 1).padStart(2, '0')
  const ongoing = project.status && project.status !== 'Completed'
  return (
    <Link
      to={`/work/${project.slug}`}
      className={cn('group block focus-outline', className)}
    >
      <div className="relative overflow-hidden border-2 border-black transition-all duration-100 group-hover:border-[4px]">
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
        <span className="absolute left-0 top-0 bg-black px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white">
          {n}
        </span>
        {ongoing && (
          <span className="absolute right-0 top-0 border-b border-l border-black bg-white px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-black">
            {project.status}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-medium leading-tight tracking-tight">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-black/50">{project.year}</span>
      </div>
      <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-black/55">
        {project.type} — {project.location}
      </p>
    </Link>
  )
}
