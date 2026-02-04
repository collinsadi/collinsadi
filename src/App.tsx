function App() {
  return (
    <div className="min-h-dvh max-w-2xl mx-auto px-5 sm:px-6 py-12 sm:py-16 flex flex-col">
      <header className="mb-10 sm:mb-14">
        <h1 className="text-xl font-medium tracking-tight text-zinc-800">
          Collins Adi
        </h1>
      </header>

      <main className="flex-1 space-y-8">
        <section>
          <p className="text-zinc-600 text-sm uppercase tracking-wider font-medium mb-2">
            Full Stack Blockchain Engineer
          </p>
          <p className="text-zinc-700 leading-relaxed">
            I build products at the intersection of hardware and crypto. I shipped{" "}
            <a
              href="https://reeng.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
            >
              Reeng
            </a>
            , the first wearable stablecoin wallet: a ring for contactless payments. I also work on open source and side projects.
          </p>
        </section>

        <section className="pt-2">
          <p className="text-zinc-600 text-sm mb-4">Links</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <a
              href="https://github.com/collinsadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/codellins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/collinsadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://cal.com/collinsadi/30min"
              className="text-zinc-600 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
            >
              Holla
            </a>
          </nav>
        </section>
      </main>

      <footer className="mt-14 pt-6 border-t border-zinc-200">
        <p className="text-xs text-zinc-500">
          Currently learning Rust. Thanks for stopping by.
        </p>
      </footer>
    </div>
  );
}

export default App;
