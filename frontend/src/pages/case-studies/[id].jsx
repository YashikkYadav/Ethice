import { useRouter } from "next/router";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudiesData";

export default function CaseStudyDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const study = caseStudies.find((c) => c.id === parseInt(id));

  if (!study) return <p>Case study not found</p>;

  const relatedStudies = caseStudies
    .filter((c) => c.id !== study.id)
    .slice(0, 2);

  return (
    <>
      {/* Full-width Hero Section */}
      <section className="w-full bg-[#f5f7f4] py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-snug mb-6">
            {study.title}
          </h1>
          <Link href="/case-studies">
            <button className="px-4 py-1 rounded-md text-sm border border-gray-300 bg-white hover:bg-gray-100 transition">
              Case Studies
            </button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={study.image}
            alt={study.title}
            className="h-[250px] sm:h-[300px] md:h-[400px] w-full md:w-[300px] object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 sm:p-5 flex flex-col space-y-3">
                <h3 className="text-md sm:text-lg font-semibold">{study.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunity */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">The Opportunity</h2>
          <p className="text-gray-700 leading-relaxed">{study.opportunity}</p>
        </div>

        {/* Solution */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">The Solution</h2>
          <p className="text-gray-700 leading-relaxed">{study.solution}</p>
        </div>

        {/* Impact */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">The Impact</h2>
          <p className="text-gray-700 leading-relaxed">{study.impact}</p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-8 sm:py-12 flex justify-center px-4">
        <div className="bg-[#0F3D3A] rounded-lg px-6 sm:px-8 py-8 sm:py-10 max-w-2xl text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-6">
            Call Us Today to Schedule a Free Consultation
          </h3>
          <Link href="/contact">
            <button className="bg-[#C8F8A9] text-[#0F3D3A] px-5 sm:px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-[#b7e997] transition">
              Book A Free Strategy Call
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Related Case Studies */}
   <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
  <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8">Related Case Studies</h2>

  <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
    {relatedStudies.map((related) => (
      <Link
        key={related.id}
        href={`/case-studies/${related.id}`}
        className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:scale-[1.02] transition"
      >
        {/* Image wrapper to force consistent size */}
        <div className="w-full sm:w-[250px] h-[200px] sm:h-[300px] flex-shrink-0">
          <img
            src={related.image}
            alt={related.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 sm:p-5 flex flex-col justify-between">
          <h3 className="text-md sm:text-lg font-semibold mb-2">{related.title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{related.description}</p>
        </div>
      </Link>
    ))}
  </div>
</section>

    </>
  );
}
