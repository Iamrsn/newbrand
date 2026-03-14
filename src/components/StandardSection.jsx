import { FaLeaf, FaGlobe, FaFlask } from "react-icons/fa";

function StandardSection() {

  const features = [
    {
      icon: <FaLeaf />,
      title: "Zero Additives",
      text: "No fillers or anti-caking agents."
    },
    {
      icon: <FaGlobe />,
      title: "Direct Sourcing",
      text: "Partnerships with farmers worldwide."
    },
    {
      icon: <FaFlask />,
      title: "Potency Lab-Tested",
      text: "Each batch tested for purity."
    }
  ];

  return (
    <section className="py-24 bg-white text-center">

      <p className="text-orange-500 text-xs uppercase tracking-widest">
        The Standard
      </p>

      <h2 className="text-2xl mt-4 text-gray-700">
        Defined by strict selection and ethical cultivation.
      </h2>

      <div className="grid md:grid-cols-3 gap-14 mt-16 max-w-6xl mx-auto">

        {features.map((f, i) => (
          <div key={i}>

            <div className="text-orange-500 text-2xl mb-4 flex justify-center">
              {f.icon}
            </div>

            <h3 className="font-semibold">{f.title}</h3>

            <p className="text-gray-500 mt-2 text-sm">
              {f.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default StandardSection;