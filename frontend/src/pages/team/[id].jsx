import { useRouter } from "next/router";
import { teamData } from "@/data/teamData";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function TeamDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Get the selected person
  const person = teamData.find((member) => member.id === id);

  if (!person) return <p className="p-6">Loading...</p>;

  // Get other team members
  const otherMembers = teamData.filter((member) => member.id !== id);

  return (
    <>
     <div className="bg-[#f7faf7] py-16 px-30 mb-10">
        <div className="w-full">
          {/* Title */}
          <button className="bg-white  py-2 px-2 rounded-xl ">{person.role}</button>
          
<div className="flex items-center justify-between mb-6">
  {/* Name */}
  <h1 className="text-4xl font-light">{person.name}</h1>

  {/* Icons */}
  <div className="flex items-center gap-4">
    {person.linkedin && (
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
      >
        <FaLinkedin className="text-xl text-gray-700" />
      </a>
    )}
    {person.email && (
      <a
        href={`mailto:${person.email}`}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
      >
        <MdEmail className="text-xl text-gray-700" />
      </a>
    )}
  </div>
</div>
        </div>
      </div>
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Detail Section */}
     
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
          <p className="text-green-600 font-medium mb-4">{person.role}</p>
          <p className="text-gray-700 leading-relaxed">{person.description}</p>
        </div>
      </div>

      {/* Other Team Members */}
      <button className="bg-gray-100 py-1 px-1 rounded-md">Our Team</button>
      <h2 className="text-[46px] font-serif mb-6">Other Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherMembers.slice(0, 4).map((member) => (
          <Link
            key={member.id}
            href={`/team/${member.id}`}
            className="bg-gray-100 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-green-100 cursor-pointer"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
