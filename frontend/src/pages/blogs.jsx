import Link from "next/link";
import blogData from "@/data/blogData";

export default function BlogList() {
  return (
    <section className="pb-12">
      {/* Full-width Hero / Breadcrumb Header */}
      <div className="bg-[#f7faf7] py-16 px-4 mb-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          {/* You can add breadcrumb here if needed */}

          {/* Title */}
          <h1 className="text-4xl font-light mb-6 font-serif">Insights & Success Stories</h1>

          {/* Subtitle */}
          <p className="text-gray-600 max-w-3xl ">
            Explore expert advice, real-world case studies, and actionable strategies
            to drive growth and innovation in your business.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl">
        {blogData.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <div className="bg-white rounded-lg overflow-hidden  cursor-pointer transform transition duration-300 hover:scale-105 ">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-86 object-cover"
              />
              <div className="p-4">
                <div className="text-[10px] text-gray-500 flex gap-2 flex-wrap mb-2">
                  <span className="bg-gray-100 px-1 py-1">{blog.author}</span>
                  <span className="bg-gray-100 px-1 py-1"> {blog.date}</span>
                </div>
                <h2 className="text-[14px]  mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
