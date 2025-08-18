const teamMembers = [
  {
    name: "Aldo Garibay",
    role: "Coach",
    image:
      "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png",
  },
  {
    name: "Javi Perez",
    role: "Coach certificado método MyRopingCoach",
    image:
      "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png",
  },
  {
    name: "Fernando Higuera",
    role: "Auxiliar de coach",
    image:
      "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png",
  },
  {
    name: "Andrés Pérez",
    role: "Desarrollador del sitio",
    image:
      "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png",
  },
];

const Contacta = () => {
  return (
      <div>
      <section className="py-12">
          <div className=" mx-auto text-center">
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-gray-100 to-white p-6 rounded-2xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105"
                >
                  <img
                    className="w-40 h-40 sm:w-48 sm:h-48 mb-4 rounded-full shadow-md border-4 border-gray-200 transition duration-300 hover:border-gray-400"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contacta;
