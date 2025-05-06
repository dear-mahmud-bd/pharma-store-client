const MedicineInfoTips = () => {
  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Important Information for Buyers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              💡 Before You Purchase:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Verify if a prescription is required before ordering.</li>
              <li>Check the expiry date and manufacturer details.</li>
              <li>
                Ensure the medicine is suitable for your age and health
                condition.
              </li>
              <li>
                Compare with alternatives for price and brand reliability.
              </li>
              <li>
                Only purchase from verified sellers or registered platforms.
              </li>
              <li>
                Confirm the dosage and packaging type (tablet, syrup, etc.).
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              🍽️ While Consuming:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                Follow the dosage as prescribed by your healthcare provider.
              </li>
              <li>Do not mix with alcohol or incompatible medications.</li>
              <li>
                Store the medicine as per instructions (e.g., cool, dry place).
              </li>
              <li>
                Check for side effects or allergic reactions after intake.
              </li>
              <li>
                Do not skip doses or stop treatment midway without consultation.
              </li>
              <li>Keep out of reach of children and pets.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicineInfoTips;
