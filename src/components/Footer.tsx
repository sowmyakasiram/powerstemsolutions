import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-glass-dark border-t border-white/10 text-white relative">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-green-400">PowerStemSolutions</h3>
            <p className="text-white/70 text-sm">
              Leading the transition to sustainable energy solutions through innovative solar, wind, and power trading expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-green-400">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Solar Projects</li>
              <li className="hover:text-white transition-colors cursor-pointer">Wind Projects</li>
              <li className="hover:text-white transition-colors cursor-pointer">Power Trading</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sustainability Consulting</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-green-400">Contact Info</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+91 99946 67761</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-green-400" />
                <span>siva@powerstemsolutions.com</span>
              </div>
              <div className="flex items-start space-x-2 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>45/5 Vivekananda 2 Street, Perundurai Erode, Tamil Nadu - 638052</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-green-400">Follow Us</h3>
            <p className="text-white/70 text-sm">
              Stay updated with the latest in clean energy solutions and sustainability trends.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 PowerStemSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}