import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <img 
                  src="/Stratos-Labs-Logo.png" 
                  alt="Stratos" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Stratos</span>
              </div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/70">
                AI-powered intelligence platform for modern consulting firms. Secure, scalable, and built for
                enterprise.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-colors hover:bg-[#AC9776] hover:border-[#AC9776]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-colors hover:bg-[#AC9776] hover:border-[#AC9776]"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-colors hover:bg-[#AC9776] hover:border-[#AC9776]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-colors hover:bg-[#AC9776] hover:border-[#AC9776]"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 transition-colors hover:text-white">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Stratos. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
