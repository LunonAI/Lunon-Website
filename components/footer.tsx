import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center">
                <a href="/" className="flex items-center group">
                  <span className="text-2xl font-semibold text-slate-50 transition-colors group-hover:text-white flex items-center">
                    {/* "Lun" */}
                    <span>Lun</span>
                    
                    {/* Crescent Moon as "o" */}
                    <span className="relative inline-flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform duration-300 group-hover:rotate-12"
                      >
                        <path
                          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                          fill="#F1F5F9"
                          className="group-hover:fill-white transition-colors"
                        />
                        {/* Small orbital dot */}
                        <circle cx="19" cy="8" r="1.5" fill="#CBD5E1" className="animate-pulse" />
                      </svg>
                    </span>
                    
                    {/* "n" */}
                    <span>n</span>
                  </span>
                </a>
              </div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
                AI-powered intelligence platform for modern consulting firms. Secure, scalable, and built for
                enterprise.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 transition-colors hover:bg-slate-700 hover:border-slate-600"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 transition-colors hover:bg-slate-700 hover:border-slate-600"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 transition-colors hover:bg-slate-700 hover:border-slate-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 transition-colors hover:bg-slate-700 hover:border-slate-600"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-100">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-100">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-100">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 transition-colors hover:text-slate-200">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Lunon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
