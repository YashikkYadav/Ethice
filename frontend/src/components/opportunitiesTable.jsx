import { FaArrowRight } from "react-icons/fa";

const jobs = [
  { position: "Associate Consultant", city: "New York", type: "Hybrid" },
  {
    position: "Consultant – Remuneration & Total Rewards",
    city: "New York",
    type: "Onsite",
  },
  {
    position: "Consulting Team, Organizational Strategy",
    city: "New York",
    type: "Onsite",
  },
  {
    position: "Intern – KFI Outcomes/Data Analytics",
    city: "New York",
    type: "Remote",
  },
  {
    position: "Intern – Consulting Operations",
    city: "New York",
    type: "Hybrid",
  },
];

export default function OpportunitiesTable() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Tag */}
      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded mb-4">
        Open Positions
      </span>

      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-serif mb-6 sm:mb-8">
        Experienced Opportunities
      </h2>

      {/* Responsive table wrapper */}
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 sm:p-4 text-gray-600 text-sm sm:text-base">
                Position
              </th>
              <th className="p-3 sm:p-4 text-gray-600 text-sm sm:text-base">
                City
              </th>
              <th className="p-3 sm:p-4 text-gray-600 text-sm sm:text-base">
                Location type
              </th>
              <th className="p-3 sm:p-4"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="p-3 sm:p-4 text-sm sm:text-base">
                  {job.position}
                </td>
                <td className="p-3 sm:p-4 text-sm sm:text-base">{job.city}</td>
                <td className="p-3 sm:p-4 text-sm sm:text-base">{job.type}</td>
                <td className="p-3 sm:p-4">
                  <button className="flex items-center gap-2 bg-[#C8F8A9] hover:bg-green-300 transition text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded">
                    Apply
                    <FaArrowRight className="text-xs sm:text-sm" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
