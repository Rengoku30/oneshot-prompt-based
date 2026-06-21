import React from 'react';
import Section from './components/Section';
import Typography from './components/Typography';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 pointer-events-none texture-noise z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-foreground bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          <div className="font-display text-2xl font-bold tracking-tighter">STUDIO.</div>
          <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
            <a href="#" className="hover:underline underline-offset-4">Work</a>
            <a href="#" className="hover:underline underline-offset-4">About</a>
            <a href="#" className="hover:underline underline-offset-4">Contact</a>
          </div>
          <Button variant="primary" className="px-4 py-2 text-xs">Hire Us</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40" texture="texture-lines">
        <div className="flex flex-col gap-12">
          <div className="relative">
            <Typography variant="display9" className="max-w-5xl">
              REDUCTION <br /> TO ESSENCE.
            </Typography>
            {/* Hero Decorative Element */}
            <div className="absolute -bottom-4 right-0 flex items-center gap-4">
              <div className="h-px w-24 bg-foreground" />
              <div className="w-4 h-4 border-2 border-foreground" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <Typography variant="lead" className="max-w-md">
              We strip away the noise to reveal the core. Architecture, design, and digital experiences built on the foundation of absolute precision.
            </Typography>
            <div className="flex justify-end">
              <Button variant="secondary" className="group flex items-center gap-2">
                VIEW PORTFOLIO <span className="transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section (Editorial) */}
      <Section texture="texture-grid">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Typography variant="display4">
              Our <br /> Philosophy
            </Typography>
          </div>
          <div className="md:col-span-8">
            <div className="relative">
              {/* Boxed Drop Cap */}
              <span className="inline-block w-12 h-12 border-2 border-foreground text-4xl font-display leading-none text-center mr-3 mt-1">
                M
              </span>
              <Typography variant="body" className="inline">
                Minimalism is not the lack of something. It is the perfect amount of something. In a world filled with sensory overload, we choose the silence of monochrome. We believe that when you remove color, you force the viewer to engage with form, space, and typography.
              </Typography>
              <Typography variant="body" className="mt-6">
                Every line we draw is a decision. Every pixel of whitespace is a breath. This is not just a style; it is a discipline of restraint.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* Services / Features */}
      <Section>
        <Typography variant="display5" className="text-center mb-20">Core Expertise</Typography>
        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-foreground">
          {[
            { title: "Visual Identity", desc: "Creating authoritative brand languages that transcend trends." },
            { title: "Digital Product", desc: "Architecting interfaces where utility meets editorial elegance." },
            { title: "Spatial Design", desc: "Translating minimalist principles into physical environments." },
          ].map((service, i) => (
            <Card key={i} variant="standard" className="border-r border-b p-12 group">
              <Typography variant="mono" className="text-xs mb-4">0{i+1} —</Typography>
              <Typography variant="display3" className="mb-6">{service.title}</Typography>
              <Typography variant="body" className="text-mutedForeground group-hover:text-background">
                {service.desc}
              </Typography>
            </Card>
          ))}
        </div>
      </Section>

      {/* Inverted Stats Section */}
      <Section inverted texture="texture-inverted-lines">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Typography variant="display7" className="mb-2">12+</Typography>
            <Typography variant="mono" className="text-xs text-background/60">Years of Discipline</Typography>
          </div>
          <div>
            <Typography variant="display7" className="mb-2">150+</Typography>
            <Typography variant="mono" className="text-xs text-background/60">Projects Completed</Typography>
          </div>
          <div>
            <Typography variant="display7" className="mb-2">24</Typography>
            <Typography variant="mono" className="text-xs text-background/60">Global Awards</Typography>
          </div>
        </div>
      </Section>

      {/* Testimonial / Pull Quote */}
      <Section texture="texture-diagonal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <span className="absolute -top-12 left-0 text-8xl font-display opacity-10">“</span>
            <Typography variant="italic" className="text-4xl md:text-6xl leading-tight mb-8">
              The most sophisticated designs are those that dare to be silent.
            </Typography>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-foreground" />
              <Typography variant="mono" className="text-sm">Alexander Thorne / CEO of VOGUE ARCH</Typography>
              <div className="h-px w-8 bg-foreground" />
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing/Plans */}
      <Section>
        <Typography variant="display5" className="text-center mb-20">Investment</Typography>
        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="standard" className="p-12 flex flex-col">
            <Typography variant="mono" className="text-xs mb-4">Basic</Typography>
            <Typography variant="display4" className="mb-8">$5,000</Typography>
            <div className="flex-grow space-y-4 mb-12">
              <div className="flex items-center gap-2 text-sm"><span>—</span> Visual Audit</div>
              <div className="flex items-center gap-2 text-sm"><span>—</span> Basic Identity</div>
              <div className="flex items-center gap-2 text-sm"><span>—</span> 2 Revisions</div>
            </div>
            <Button variant="ghost" className="w-full justify-center">Select Plan</Button>
          </Card>

          {/* Elevated Pricing Tier */}
          <Card variant="inverted" className="p-12 flex flex-col md:-mt-8 md:mb-8 shadow-none border-none">
            <Typography variant="mono" className="text-xs mb-4 text-background/60">Professional</Typography>
            <Typography variant="display4" className="mb-8 text-background">$12,000</Typography>
            <div className="flex-grow space-y-4 mb-12">
              <div className="flex items-center gap-2 text-sm"><span>✓</span> Full Brand System</div>
              <div className="flex items-center gap-2 text-sm"><span>✓</span> Web Strategy</div>
              <div className="flex items-center gap-2 text-sm"><span>✓</span> Unlimited Revisions</div>
              <div className="flex items-center gap-2 text-sm"><span>✓</span> Priority Support</div>
            </div>
            <Button variant="secondary" className="w-full justify-center">Select Plan</Button>
          </Card>

          <Card variant="standard" className="p-12 flex flex-col">
            <Typography variant="mono" className="text-xs mb-4">Enterprise</Typography>
            <Typography variant="display4" className="mb-8">Custom</Typography>
            <div className="flex-grow space-y-4 mb-12">
              <div className="flex items-center gap-2 text-sm"><span>—</span> Full Ecosystem</div>
              <div className="flex items-center gap-2 text-sm"><span>—</span> Dedicated Partner</div>
              <div className="flex items-center gap-2 text-sm"><span>—</span> Strategic Consulting</div>
            </div>
            <Button variant="ghost" className="w-full justify-center">Contact Us</Button>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section texture="texture-grid" className="border-b-none">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <Typography variant="display4" className="mb-6">Get in Touch</Typography>
            <Typography variant="body" className="text-mutedForeground mb-12">
              We only take on a limited number of projects per year to ensure absolute precision and dedication.
            </Typography>
            <div className="space-y-8">
              <Typography variant="mono" className="text-sm">studio@monochrome.design</Typography>
              <Typography variant="mono" className="text-sm">+1 (555) 000-1234</Typography>
              <Typography variant="mono" className="text-sm">New York, NY / London, UK</Typography>
            </div>
          </div>
          <div className="space-y-6">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email Address" placeholder="john@example.com" />
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-widest uppercase">Message</label>
              <textarea 
                className="bg-background border-b-medium border-foreground p-2 sharp outline-none transition-all duration-100 placeholder:italic placeholder:text-mutedForeground focus:border-b-ultra"
                placeholder="Tell us about your project..."
                rows={4}
              />
            </div>
            <Button variant="primary" className="w-full mt-6">Send Inquiry</Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-xl font-bold tracking-tighter">STUDIO.</div>
          <div className="font-mono text-xs tracking-widest uppercase opacity-60">
            © 2026 Studio Monochrome. All Rights Reserved.
          </div>
          <div className="flex gap-6 font-mono text-xs tracking-widest uppercase">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
