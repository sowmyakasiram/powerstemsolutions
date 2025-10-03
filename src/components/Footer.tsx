import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="public/assets/images/logo.png" 
                alt="PowerStem Solutions" 
                className="h-6 w-6 object-contain"
              />
              <span className="font-bold">PowerStemSolutions</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading the transition to sustainable energy solutions through innovative solar, wind, and power trading expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Solar Projects</li>
              <li>Wind Projects</li>
              <li>Power Trading</li>
              <li>Sustainability Consulting</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 99946 67761</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>siva@powerstemsolutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Green Energy Blvd, Eco City</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Follow Us</h3>
            <p className="text-gray-300 text-sm">
              Stay updated with the latest in clean energy solutions and sustainability trends.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 PowerStemSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}