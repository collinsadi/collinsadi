import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Syntract',
    description: 'Autonomous protocol for agent-to-agent negotiation.',
    href: null,
  },
  {
    title: 'Reeng',
    description: 'A stablecoin wallet built as a ring for tap to pay.',
    href: 'https://reeng.xyz',
  },
  {
    title: 'Opaque Cash',
    description: 'Privacy-centric implementation of stealth addresses on Ethereum.',
    href: 'https://opaque.cash',
  },
  {
    title: 'Lusus',
    description: 'Open Source, Multi-player, Reverse Memory Game.',
    href: 'https://lusus.collinsadi.xyz',
  },
  {
    title: 'Intentspec',
    description: 'Agent-readable metadata for smart contracts',
    href: 'https://intentspec.collinsadi.xyz/',
  },
  {
    title: 'EIP-8174(Draft)',
    description: 'Intent spec for contracts',
    href: 'https://ethereum-magicians.org/t/erc-8174-intent-spec-for-contracts/27869',
  },
  {
    title: 'Zawadi Protocol',
    description: 'Decentralized Hackathon Escrow Protocol',
    href: 'https://github.com/collinsadi/zawadi',
  },
  {
    title: 'SpacePledge',
    description: 'Decentralized Funding for Space Exploration Missions',
    href: 'https://github.com/spacepledge/spacepledge',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
}

const linkClass =
  'underline underline-offset-2 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-black dark:focus-visible:ring-white'

export function HomePage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-0"
    >
      {/* Hero */}
      <section className="pb-8 sm:pb-10">
        <motion.p
          variants={item}
          className="font-sans font-bold text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2"
        >
          Protocol Architect · Software Engineer
        </motion.p>
        <motion.h1
          variants={item}
          className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight mb-4"
        >
          Bienvenida a mi portfolio
        </motion.h1>
        <motion.div variants={item} className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>
            Digital nomad obsessed with building things that work. I ship protocols, agents, and products. Less theory, more shipped.
          </p>
          <p>
            21, based in Nairobi, Kenya. Protocol design, agent infrastructure, and privacy primitives. Always hacking on the next thing.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-10">
        <motion.h2
          variants={item}
          className="font-sans font-bold text-sm uppercase tracking-widest mb-6"
        >
          In the Lab
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-black dark:border-white sm:[&>*:nth-last-child(-n+2)]:border-b-0">
          {PROJECTS.map((project) => {
            const content = (
              <>
                <span className="font-sans font-bold uppercase">{project.title}</span>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
              </>
            )
            const cellClass =
              'p-4 sm:p-5 border-b border-black dark:border-white last:border-b-0 sm:odd:border-r border-black dark:border-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors'
            if (project.href) {
              return (
                <motion.a
                  key={project.title}
                  variants={item}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${cellClass} ${linkClass}`}
                >
                  {content}
                </motion.a>
              )
            }
            return (
              <motion.div key={project.title} variants={item} className={cellClass}>
                {content}
              </motion.div>
            )
          })}
        </div>
      </section>
    </motion.div>
  )
}
