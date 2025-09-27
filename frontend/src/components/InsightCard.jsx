export default function InsightsPage() {
  const insights = [
    {
      image: "/image (a).png",
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
      image: "/image (a).png",
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

  const fixedIncomePoints = [
    {
      title: "Income Generation",
      description: "Regular returns to support financial goals.",
    },
    {
      title: "Capital Preservation",
      description: "Protect your principal investment.",
    },
    {
      title: "Hedge Against Economic Slowdown",
      description: "Mitigate risks during market downturns.",
    },
    {
      title: "Portfolio Diversification",
      description: "Balance risk with other assets.",
    },
    {
      title: "Better Interest Rates",
      description: "Higher returns than traditional Bank FDs.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <button className="text-xs font-medium bg-gray-100 rounded-md px-2 py-2 text-gray-900 mb-2">
        Insights & Success Stories
      </button>
      <h2 className="text-4xl font-serif font-semibold mb-4">
        Expert Strategies, Industry Trends & Real Results
      </h2>
      <p className="max-w-2xl text-gray-600 mb-10">
        Stay ahead with the latest business insights, success stories, and
        industry trends. Explore expert advice, real-world case studies, and
        actionable strategies to drive growth and innovation in your business.
      </p>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

            {insight.description && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="text-white p-4">
                  <h3 className="text-lg font-semibold">{insight.title}</h3>
                  <p className="text-sm mt-1">{insight.description}</p>
                </div>
              </div>
            )}

            {!insight.description && (
              <div className="p-4 bg-white">
                <p className="text-xs text-gray-500 mb-1">
                  {insight.category} • {insight.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {insight.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Professional Fixed Income Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Why Fixed Income
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {fixedIncomePoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center"
            >
              {/* Optional icon */}
              <div className="bg-green-100 text-green-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-xl font-bold">
                {idx + 1}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {point.title}
              </h4>
              <p className="text-gray-500 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
