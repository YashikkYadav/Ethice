import { useState } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudiesData";

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleToggle = () => {
    setVisibleCount((prev) =>
      prev === 2 ? caseStudies.length : 2
    );
  };

  return (
    <section className="pb-12">
      {/* Full-width Hero / Breadcrumb Header */}
      <div className="bg-[#f7faf7] py-16 px-4 mb-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
     

          {/* Title */}
          <h1 className="text-4xl font-light mb-6">Case Studies</h1>

          {/* Subtitle */}
          <p className="text-gray-600 max-w-3xl mx-auto">
            By harnessing technology, we unlock new growth, pioneer net-zero innovation,
            and build enterprise-wide skills—delivering impact beyond financial metrics.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 px-4 max-w-6xl mx-auto">
        {caseStudies.slice(0, visibleCount).map((study) => (
          <Link
            key={study.id}
            href={`/case-studies/${study.id}`}
            className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
          >
            <img
              src={study.image}
              alt={study.title}
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="p-5 flex flex-col justify-between">
              <h3 className="text-md font-semibold mb-2">{study.title}</h3>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-[#C8F8A9] hover:bg-green-900 hover:text-white text-black font-medium px-6 py-3 rounded-md transition"
        >
          {visibleCount === 2 ? "Load More" : "Show Less"}
        </button>
      </div>
    </section>
  );
}
