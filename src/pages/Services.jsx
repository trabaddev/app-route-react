
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Sites web modernes et responsives",
      icon: "💻",
      features: ["React", "Vue.js", "Node.js", "API REST"],
    },
    {
      title: "Applications Mobile",
      description: "Apps natives et cross-platform",
      icon: "📱",
      features: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      title: "Consulting IT",
      description: "Conseil et stratégie numérique",
      icon: "🎯",
      features: ["Architecture", "Audit", "Formation", "Support"],
    },
  ];

  return (
    <div className="flex-1">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Des solutions complètes pour tous vos besoins numériques
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>

            <div className="p-10 rounded-lg shadow-lg bg-white">

            </div>

        </div>
      </div>
    </div>
  );
};

export default Services;