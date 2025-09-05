import { FaCheckCircle } from 'react-icons/fa';

const FocusCards = () => {
  const data = [
    {
      title: 'Our Focus',
      description:
        'We prioritize strategic clarity, sustainable growth, and measurable impact, ensuring businesses stay ahead in a dynamic market.',
    },
    {
      title: 'Our Approach',
      description:
        'Combining data–driven insights with tailored solutions, we create actionable strategies that drive real business results.',
    },
    {
      title: 'Our Experience',
      description:
        'Years of hands–on consulting have helped organizations navigate complexity, unlock growth, and achieve lasting transformation.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-serif font-medium mb-12 leading-snug text-black">
        We add value by focusing on understanding your <br />
        business and applying our experience and <br />
        implementation approach.
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="group border-l-2 border-gray-200 hover:border-green-500 bg-white transition-all duration-300 p-6 shadow-sm hover:shadow-md"
          >
            {/* Icon placeholder */}
            <div className="text-green-700 mb-4">
              <FaCheckCircle size={28} />
            </div>

            <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusCards;
