// ============================================================
//  MERIDIAN — editorial content
// ============================================================

export const studio = {
  name: 'MERIDIAN',
  wordmark: 'M.',
  full: 'Meridian Architects',
  tagline: 'Architecture as Discipline',
  statement:
    'A studio for form, light, and permanence. We build quiet buildings that intend to outlast their century.',
  established: '1998',
  locations: ['Copenhagen', 'New York'],
  email: 'studio@meridian.archi',
  press: 'press@meridian.archi',
  phone: '+45 33 12 00 98',
  address: ['Bredgade 42', '1260 Copenhagen K', 'Denmark'],
  addressNY: ['120 Greenwich St, Fl. 9', 'New York, NY 10006'],
}

export const nav = [
  { label: 'Studio', to: '/studio' },
  { label: 'Work', to: '/work' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '25', suffix: '+', label: 'Years in practice' },
  { value: '184', suffix: '', label: 'Completed commissions' },
  { value: '42', suffix: '', label: 'International awards' },
  { value: '14', suffix: '', label: 'Countries built' },
]

export const approach = [
  {
    no: '01',
    title: 'Light',
    icon: 'Sun',
    text: 'We begin with the path of the sun. Orientation, aperture, and shadow are decided before a single line is drawn for form.',
  },
  {
    no: '02',
    title: 'Material',
    icon: 'Layers',
    text: 'Concrete, stone, oak, plaster. Few materials, chosen once, allowed to age without apology. Honesty over novelty.',
  },
  {
    no: '03',
    title: 'Restraint',
    icon: 'Minus',
    text: 'Every element must earn its place. We remove until only the necessary remains — then remove again, if it can bear it.',
  },
  {
    no: '04',
    title: 'Permanence',
    icon: 'Mountain',
    text: 'A building is a long sentence spoken slowly. We design for the fourth generation, not the first photograph.',
  },
]

export const process = [
  {
    no: 'I',
    phase: 'Listening',
    weeks: 'Weeks 1–4',
    text: 'Before drawings, we read the site. We walk it at dawn and dusk, in rain and clear weather, and we listen to the people who will inhabit it.',
  },
  {
    no: 'II',
    phase: 'Reduction',
    weeks: 'Weeks 4–12',
    text: 'The brief is interrogated until only its spine remains. We sketch by hand, in pencil, until the idea will not simplify further.',
  },
  {
    no: 'III',
    phase: 'Drawing',
    weeks: 'Months 3–9',
    text: 'Precise drawings and full-scale mock-ups. Materials are sampled against the actual light of the site. Nothing is left to interpretation.',
  },
  {
    no: 'IV',
    phase: 'Building',
    weeks: 'Year 1 onward',
    text: 'We remain on site through construction. The architect who drew the detail is the architect who watches it built.',
  },
]

export const projects = [
  {
    slug: 'house-on-the-cliff',
    title: 'House on the Cliff',
    type: 'Private Residence',
    year: '2023',
    location: 'Faroe Islands, DK',
    area: '420 m²',
    status: 'Completed',
    image: '/images/work-cliff.jpg',
    summary:
      'A concrete house cut into basalt, holding a single horizon line of glass against the North Atlantic.',
    description:
      'Commissioned by a writer seeking silence, the house is buried into the cliff so that only a low basalt-colored plinth is visible from the sea. Inside, every room opens to a single uninterrupted horizon. The structure is cast in place over four seasons, allowing the concrete to record the weather of its own making.',
    materials: ['Cast concrete', 'Basalt', 'Untreated oak', 'Linen'],
  },
  {
    slug: 'monolith-pavilion',
    title: 'Monolith Pavilion',
    type: 'Cultural',
    year: '2022',
    location: 'Venice, IT',
    area: '180 m²',
    status: 'Completed',
    image: '/images/work-pavilion.jpg',
    summary:
      'A single block of black concrete, hollowed by a shaft of sky, exhibited at the Architecture Biennale.',
    description:
      'A meditation on mass and void. From without, a mute black monolith; from within, a vertical well of light that tracks the hour. The pavilion was disassembled and re-erected in three cities after the Biennale closed.',
    materials: ['Pigmented concrete', 'Black steel', 'Travertine'],
  },
  {
    slug: 'the-reading-room',
    title: 'The Reading Room',
    type: 'Civic / Library',
    year: '2021',
    location: 'Helsinki, FI',
    area: '2,400 m²',
    status: 'Completed',
    image: '/images/work-reading.jpg',
    summary:
      'A public library organized around a single long table lit from above by a thin seam of glass.',
    description:
      'The brief asked for openness; we answered with one room. A 38-metre table of solid pine runs the length of the building beneath a continuous north-light skylight. Shelves line the perimeter in a single material, so that attention falls, always, on the reader and the page.',
    materials: ['Solid pine', 'Plaster', 'Cork', 'Brass'],
  },
  {
    slug: 'carrara-residence',
    title: 'Carrara Residence',
    type: 'Private Residence',
    year: '2020',
    location: 'Tuscany, IT',
    area: '560 m²',
    status: 'Completed',
    image: '/images/work-carrara.jpg',
    summary:
      'A house faced in the same marble quarried from the hill beneath it, weathering back toward the landscape.',
    description:
      'Set into a working marble quarry, the residence is clad in rough-cut Carrara so that, over decades, the building returns to the colour of the slope. Interiors are deliberately dark — a counterweight to the blinding exterior stone.',
    materials: ['Carrara marble', 'Stained ash', 'Black slate'],
  },
  {
    slug: 'north-light-chapel',
    title: 'North Light Chapel',
    type: 'Sacred',
    year: '2019',
    location: 'Tromsø, NO',
    area: '210 m²',
    status: 'Completed',
    image: '/images/work-chapel.jpg',
    summary:
      'A timber chapel beneath the polar night, lit only by a slot cut to the exact angle of the winter sun.',
    description:
      'For two months each year the sun does not rise here. A single raking slot in the eastern wall is calibrated to catch the first returning light of January and throw it across the floor. The rest of the year, the room holds a steady, diffuse grey.',
    materials: ['Tarred pine', 'Plaster', 'Cast bronze'],
  },
  {
    slug: 'edward-gallery',
    title: 'Edward Gallery',
    type: 'Cultural / Museum',
    year: '2024',
    location: 'London, UK',
    area: '4,800 m²',
    status: 'In Progress',
    image: '/images/work-gallery.jpg',
    summary:
      'A contemporary art museum conceived as a sequence of nine white rooms of subtly differing proportion.',
    description:
      'Rather than a single grand hall, the gallery offers nine rooms, each tuned to a distinct ratio and quality of light. Visitors move between them as between movements of a piece of music. Currently under construction; completion expected 2026.',
    materials: ['Hand-troweled plaster', 'Limestone', 'White oak'],
  },
]

export const testimonials = [
  {
    quote:
      'They built us a house that is quieter than the landscape around it. Twenty years on, it has only become more itself.',
    name: 'Astrid Holm',
    role: 'Client, House on the Cliff',
  },
  {
    quote:
      'Meridian does not decorate. They decide. Every millimetre of our library was argued for, and you can feel that conviction when you sit inside it.',
    name: 'Markus Lehto',
    role: 'Director, Helsinki City Library',
  },
  {
    quote:
      'I have published four monographs of their work. I have never once had to crop a photograph to hide a mistake.',
    name: 'Editor, Architectural Review',
  },
]

export const engagement = [
  {
    name: 'Concept',
    price: 'From enquiry',
    cadence: 'per study',
    summary: 'A foundational study to test the idea before commitment.',
    features: [
      'Site & light analysis',
      'Hand-drawn concept',
      'Material direction',
      'Feasibility report',
    ],
    elevated: false,
  },
  {
    name: 'Full Service',
    price: 'By project',
    cadence: 'design → build',
    summary: 'The complete practice, from first sketch to final detail on site.',
    features: [
      'Everything in Concept',
      'Detailed design & drawings',
      'Full-scale material mock-ups',
      'On-site construction oversight',
      'Furniture & lighting design',
    ],
    elevated: true,
  },
  {
    name: 'Counsel',
    price: 'Retainer',
    cadence: 'ongoing',
    summary: 'Long-form advisory for institutions and recurring clients.',
    features: [
      'Strategic counsel',
      'Master planning',
      'Competitions & juries',
      'Biannual site reviews',
    ],
    elevated: false,
  },
]

export const team = [
  {
    name: 'Ida Meridian',
    role: 'Founding Partner',
    note: 'Established the studio in 1998. Trained at the Royal Danish Academy.',
    image: '/images/team-ida.jpg',
  },
  {
    name: 'Søren Vang',
    role: 'Partner, Materials',
    note: 'Leads the workshop. Obsessive about concrete cure times.',
    image: '/images/team-soren.jpg',
  },
  {
    name: 'Naomi Reyes',
    role: 'Partner, New York',
    note: 'Opened the New York atelier in 2014. Civic and cultural work.',
    image: '/images/team-naomi.jpg',
  },
  {
    name: 'Lukas Brandt',
    role: 'Associate, Drawings',
    note: 'Keeper of the pencil. Every detail drawing passes his desk.',
    image: '/images/team-lukas.jpg',
  },
]

export const journal = [
  {
    slug: 'on-removing-things',
    title: 'On Removing Things',
    excerpt:
      'The hardest part of our work is not what we add, but what we are brave enough to take away. A note on subtraction as a design method.',
    category: 'Essay',
    date: '2024.11',
    read: '6 min',
    image: '/images/journal-remove.jpg',
    body: [
      'A building is finished not when nothing more can be added, but when nothing more can be taken away. We have made this sentence our working rule, borrowed and bent from Antoine de Saint-Exupéry, because it names the discipline we keep failing and trying again to keep.',
      'Subtraction is harder than addition because addition feels generous. A client asks for a feature; the generous architect provides it. But generosity in architecture is frequently cruelty in disguise — a room that cannot decide what it is, a facade that apologises for itself with ornament, a detail buried under three other details.',
      'Our process is therefore mostly one of refusal. We refuse the extra window, the second material, the decorative beam. We refuse until the building begins to push back — until to remove one more thing would be to remove the thing itself. That threshold is the work.',
    ],
  },
  {
    slug: 'concrete-and-time',
    title: 'Concrete and Time',
    excerpt:
      'Concrete is the only material that keeps a diary. A field note on casting through four seasons.',
    category: 'Field Note',
    date: '2024.08',
    read: '4 min',
    image: '/images/journal-concrete.jpg',
    body: [
      'We cast the House on the Cliff across an entire year, panel by panel, so that the wall would record the weather of its own making. A panel poured in January holds a different grey than one poured in July.',
      'Most contractors hate this. They want consistency, speed, a wall that looks like the render. We want the opposite: a wall that looks like the place. Concrete remembers the temperature of the day it was born, the humidity, the hand that troweled it. It is the only material we know that keeps a diary.',
      'Give it thirty years and the diary becomes a biography. The surface darkens where the rain runs, brightens where the sun strikes, and stays pale in the sheltered seams. The building, slowly, begins to resemble its own site.',
    ],
  },
  {
    slug: 'drawing-by-hand',
    title: 'Why We Still Draw by Hand',
    excerpt:
      'The pencil is slower than the cursor, and that is exactly the point. On the value of resistance in the design process.',
    category: 'Practice',
    date: '2024.05',
    read: '5 min',
    image: '/images/journal-hand.jpg',
    body: [
      'Every Meridian building is still sketched by hand, in 2B pencil, on tracing paper. We own software, of course; we produce construction documents that would be impossible otherwise. But the first thousand lines are drawn by a human hand holding a human tool.',
      'The pencil is slower than the cursor, and that is exactly why we trust it. Speed is the enemy of doubt, and doubt — the willingness to hesitate, to consider, to set a line down and lift it again — is where the architecture actually lives.',
      'A computer invites you to commit before you have understood. A pencil makes you wait. We are not nostalgic; we are simply unwilling to give up the friction that forces a thought to be a thought before it becomes a wall.',
    ],
  },
  {
    slug: 'a-room-is-a-ratio',
    title: 'A Room Is a Ratio',
    excerpt:
      'Before light, before material, a room is a proportion. A short meditation on the mathematics of feeling.',
    category: 'Essay',
    date: '2024.02',
    read: '7 min',
    image: '/images/work-gallery.jpg',
    body: [
      'Stand in a room and you are standing inside a number. The ratio of its length to its width to its height is a physical fact, but you experience it as a feeling: this room is calm, that one is anxious, this one wants me to stay.',
      'We spend a great deal of time on these numbers, which is to say we spend a great deal of time on feelings that most people will never consciously notice. The Edward Gallery is nine rooms of subtly differing proportion; visitors cannot say why they linger in the fifth and hurry through the third, but they do.',
      'This is the secret pleasure of our discipline. The mathematics is exact and the experience is irreducible, and the two are the same thing seen from opposite sides.',
    ],
  },
]

export const awards = [
  { year: '2024', name: 'RIBA International Prize', project: 'Shortlist — Edward Gallery' },
  { year: '2023', name: 'Mies van der Rohe Award', project: 'Nominee — House on the Cliff' },
  { year: '2022', name: 'Venice Biennale', project: 'Selected — Monolith Pavilion' },
  { year: '2021', name: 'Finnish Architecture Award', project: 'Winner — The Reading Room' },
  { year: '2019', name: 'Global Lighting Design', project: 'Winner — North Light Chapel' },
  { year: '2016', name: 'AIA Honor Award', project: 'Winner — Carrara Residence' },
]

export const press = [
  'Architectural Review',
  'Domus',
  'Dezeen',
  'Wallpaper*',
  'El Croquis',
  'A+U',
  'Frame',
  'Detail',
]

export const socials = [
  { label: 'Instagram', to: '#' },
  { label: 'LinkedIn', to: '#' },
  { label: 'Journal / RSS', to: '#' },
]
