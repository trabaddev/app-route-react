import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MonSite</h3>
            <p className="text-gray-300">
              Solutions numériques innovantes pour votre entreprise.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-gray-300 space-y-2">
              <p>📧 contact@monsite.com</p>
              <p>📞 +225 07 07 07 07</p>
              <p>📍 123 Rue Example, Abidjan</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 MonSite. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
