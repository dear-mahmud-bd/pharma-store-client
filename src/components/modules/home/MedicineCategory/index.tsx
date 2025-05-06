
const categories = [
  { name: "Pain Relief", icon: "💊" },
  { name: "Antibiotics", icon: "🧫" },
  { name: "Supplements", icon: "🧴" },
  { name: "Gastrointestinal", icon: "🌿" },
  { name: "Cardiovascular", icon: "❤️" },
  { name: "Diabetes Management", icon: "🩸" },
  { name: "Respiratory", icon: "🫁" },
  { name: "Neurological", icon: "🧠" },
  { name: "Dermatology", icon: "🧴" },
  { name: "Allergy & Immunology", icon: "🌸" },
];

const MedicineCategory = () => {
  return (
    <section className="mb-16">
        
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Categories
        </h2>
        <p className="text-center text-gray-600 mb-5">
            Browse our wide range of medicine categories tailored to your health
            needs.
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicineCategory;
