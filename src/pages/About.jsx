import React from "react";

const About = () => {
  return (
    <div className="flex-1">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            À propos de nous
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
                <p className="text-gray-600 mb-6">
                  Fondée en 2020, notre entreprise s'est donnée pour mission de
                  fournir des solutions numériques innovantes. Nous combinons
                  expertise technique et créativité pour répondre aux défis de
                  nos clients.
                </p>
                <p className="text-gray-600 mb-6">
                  Notre équipe passionnée travaille chaque jour pour dépasser
                  les attentes et créer des expériences utilisateur
                  exceptionnelles.
                </p>
              </div>
              <div className="bg-blue-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🏢</span>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                Nos valeurs
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3">Transparence</h3>
                  <p className="text-gray-600">
                    Communication claire et honnête avec nos clients
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Recherche constante de nouvelles solutions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    Engagement vers la perfection dans chaque projet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
