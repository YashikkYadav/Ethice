export default function InsightsPage() {
  const insights = [
    {
      image: "/insight3.webp",
      category: "Expert Advice, Industry Insights",
      date: "March 29, 2025",
      title: "5 Key Market Trends Every Business Should Watch in 2024",
description:
        "AI, automation, and shifting consumer behavior are helping brands scale smarter.",
    },
    {
      image: "/insight4.webp",
      category: "Success Story",
      date: "March 29, 2025",
      title: "How We Helped a Retail Brand Increase Sales by 45%",
      description:
        "AI, automation, and shifting consumer behavior are helping brands scale smarter.",
    },
    {
      image: "/insight3.webp",
      category: "Success Story",
      date: "March 29, 2025",
      title: "From Startup to Scale: A Tech Company’s Growth Journey",
description:
        "AI, automation, and shifting consumer behavior are helping brands scale smarter.",
    },
    {
      image: "/insight4.webp",
      category: "Expert Advice",
      date: "March 29, 2025",
      title: "Why Most Business Strategies Fail — And How to Avoid It",
description:
        "AI, automation, and shifting consumer behavior are helping brands scale smarter.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <button className="text-xs font-medium bg-gray-100 rounded-md px-2 py-2 text-gray-900 mb-2">Insights & Success Stories</button>
      <h2 className="text-4xl font-serif font-semibold mb-4">
        Expert Strategies, Industry Trends & Real Results
      </h2>
      <p className="max-w-2xl text-gray-600 mb-10">
        Stay ahead with the latest business insights, success stories, and industry trends.
        Explore expert advice, real-world case studies, and actionable strategies to drive growth and innovation in your business.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay only if description exists */}
            {insight.description && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="text-white p-4">
                  <h3 className="text-lg font-semibold">{insight.title}</h3>
                  <p className="text-sm mt-1">{insight.description}</p>
                </div>
              </div>
            )}

            {/* Static Text Block below image (when no overlay is shown) */}
            {!insight.description && (
              <div className="p-4 bg-white">
                <p className="text-xs text-gray-500 mb-1">{insight.category} • {insight.date}</p>
                <h3 className="text-lg font-semibold text-gray-800">{insight.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
