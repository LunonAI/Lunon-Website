export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 text-white">
      <div className="py-8 md:py-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <span className="text-xl font-semibold text-slate-50 transition-colors group-hover:text-white">
                  {/* "Lun" */}
                  <span>Lun</span>
                  
                  {/* Crescent Moon as "o" */}
                  <span className="relative inline-block translate-y-[3.5px]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform duration-300 group-hover:rotate-12 block"
                    >
                      <path
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        fill="#F1F5F9"
                        className="group-hover:fill-white transition-colors"
                      />
                    </svg>
                  </span>
                  
                  {/* "n" */}
                  <span>n</span>
                </span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <a href="/about" className="text-slate-400 transition-colors hover:text-slate-200">
                About
              </a>
              <a href="/manifesto" className="text-slate-400 transition-colors hover:text-slate-200">
                Manifesto
              </a>
              <a href="mailto:contact@lunon.ai" className="text-slate-400 transition-colors hover:text-slate-200">
                Contact
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                Privacy
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                Terms
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} Lunon</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
