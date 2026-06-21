import { Hero } from '../components/sections/Hero'
import { Manifesto } from '../components/sections/Manifesto'
import { Stats } from '../components/sections/Stats'
import { Approach } from '../components/sections/Approach'
import { SelectedWorks } from '../components/sections/SelectedWorks'
import { Process } from '../components/sections/Process'
import { Testimonials } from '../components/sections/Testimonials'
import { Engagement } from '../components/sections/Engagement'
import { FinalCTA } from '../components/sections/FinalCTA'

// Heavy horizontal rules between all major sections (bold choice #5)
const ThickRule = () => <div aria-hidden className="border-t-4 border-black" />
const UltraRule = () => <div aria-hidden className="border-t-8 border-black" />

export function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <UltraRule />
      <Stats />
      <Approach />
      <ThickRule />
      <SelectedWorks />
      <ThickRule />
      <Process />
      <ThickRule />
      <Testimonials />
      <ThickRule />
      <Engagement />
      <UltraRule />
      <FinalCTA />
    </>
  )
}
