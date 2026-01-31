const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-teal-100">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Footwear Nester For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Footwear Nester is ideal wherever footwear components are cut
          from leather, textile, or synthetics and material wastage must be
          tightly controlled.
        </p>

        {/* Footwear brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Footwear brands and manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Factories producing sports, casual, fashion, formal, and safety
              footwear where material cost is a major share of product cost.
            </li>
            <li>
              Units needing automated AI-based nesting to consistently
              outperform manual lay planning across many styles and sizes.
            </li>
          </ul>
        </div>

        {/* OEM / ODM */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            OEM / ODM suppliers and export units
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers developing and producing collections for
              international brands and retailers under OEM/ODM contracts.
            </li>
            <li>
              Plants under price pressure that need better material yield to
              maintain margins while meeting strict quality and delivery
              expectations.
            </li>
          </ul>
        </div>

        {/* Leather */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Leather footwear and leather-goods units
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Factories cutting leather uppers, linings, straps, and small
              components where hides are expensive and variable in quality.
            </li>
            <li>
              Units that also use synthetics or textiles and want unified
              nesting across multiple material types.
            </li>
          </ul>
        </div>

        {/* Safety footwear */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Safety, workwear, and specialty footwear producers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Producers of safety, military, industrial, and orthopaedic
              footwear running large, repeated orders in common materials.
            </li>
            <li>
              Operations where even small percentage savings in leather or
              technical textiles translate into significant annual cost
              reductions.
            </li>
          </ul>
        </div>

        {/* Training */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Training institutes, students, and professionals
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Footwear institutes, polytechnics, and skill centres teaching
              digital nesting and cutting-room optimization as part of their
              curriculum.
            </li>
            <li>
              Students and professionals who use REACH Footwear Nester to build
              careers in the digital footwear value chain or offer nesting
              services.
            </li>
          </ul>
        </div>

        {/* NGOs */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            NGOs, social enterprises, and cluster CFCs
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Non-profits and social enterprises working with marginalized
              groups to run footwear micro-units needing better material
              utilization.
            </li>
            <li>
              Cluster-based Common Facility Centres providing centralized
              AI-driven nesting and cut planning to multiple MSME footwear
              units.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
