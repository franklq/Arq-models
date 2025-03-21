import React from "react";
import Slider from "react-slick";
import Hero from "../Home/Hero";
import About from "../About";

// Imágenes del slider
const sliderImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
];

// Staff info
const staffMembers = [
  {
    name: "Arq. Karla Torres",
    role: "Diseñadora Principal",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ing. Luis Herrera",
    role: "Director de Obra",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Arq. Camila Sánchez",
    role: "Renderista 3D",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Home = () => {
  // Configuración del slider principal
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Configuración del slider de staff
  const staffSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full">
      {/* HERO SLIDER */}
      <section className="relative h-screen w-full">
        <Slider {...sliderSettings} className="h-screen">
          {sliderImages.map((url, idx) => (
            <div key={idx} className="relative h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
                <Hero />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* INFORMACIÓN IMPORTANTE */}
<About/>

      {/* STAFF SLIDER */}
      <section className="py-16 bg-gray-100 px-4 md:px-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Nuestro Equipo</h2>
        <Slider {...staffSettings}>
          {staffMembers.map((member, idx) => (
            <div key={idx} className="flex justify-center px-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
                <img src={member.photo} alt={member.name} className="w-full h-60 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
