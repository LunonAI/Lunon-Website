export function Product() {
  return (
    <section id="product" className="bg-white pt-20 md:pt-24 pb-12 md:pb-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Your consulting documents, but actually useful
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Every consulting firm has the same problem: thousands of documents scattered across drives, 
                SharePoint, email threads. Finding that one analysis from six months ago? Good luck.
              </p>
              <p>
                Lunon turns your document chaos into a searchable, conversational knowledge base. Upload 
                files and our AI makes them instantly queryable. Need to find every mention of "operational 
                efficiency" across 200 client reports? Done. Want to know what your team recommended about 
                supply chain optimization last year? Just ask.
              </p>
            </div>
          </div>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#AC9776] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Upload everything
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Drop in your documents, reports, and spreadsheets. Connect to Drive, Dropbox, 
                    SharePoint, or upload directly. We process it all and build your knowledge base in minutes.
                  </p>
                </div>
              </div>
              {/* Connecting arrow */}
              <div className="hidden md:block absolute top-6 -right-5 w-10 h-0.5 bg-[#AC9776]/30"></div>
            </div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#AC9776] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    AI does the work
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our models analyze every document using semantic understanding and RAG. They learn the context 
                    and relationships across your entire company so you don't have to remember where anything is.
                  </p>
                </div>
              </div>
              {/* Connecting arrow */}
              <div className="hidden md:block absolute top-6 -right-5 w-10 h-0.5 bg-[#AC9776]/30"></div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#AC9776] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Instant insights
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Search by meaning, not keywords. Ask questions in plain English. Chat with your docs like talking 
                    to a colleague. Find insights across hundreds of files in seconds, with sources cited.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
