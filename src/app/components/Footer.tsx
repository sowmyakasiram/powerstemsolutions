import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from './Link';
//import logoImage from 'figma:asset/ad3d58b30c4e80cea88b04f971e329b6eaeb3101.png';
import logoImage from '../components/figma/logo.png';
export function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-[var(--glass-background)] border-t border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <img 
              src={logoImage} 
              alt="PowerStem Solutions" 
              className="h-16 w-auto mb-4" 
              style={{ mixBlendMode: 'multiply' }}
            />
            <p className="text-[var(--muted-foreground)] text-sm">
              Powering a sustainable future through innovative energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[var(--foreground)]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--muted-foreground)] hover:text-[var(--secondary)] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--muted-foreground)] hover:text-[var(--secondary)] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--muted-foreground)] hover:text-[var(--secondary)] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--muted-foreground)] hover:text-[var(--secondary)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[var(--foreground)]">Services</h3>
            <ul className="space-y-2">
              <li className="text-[var(--muted-foreground)] text-sm">Solar For Home</li>
              <li className="text-[var(--muted-foreground)] text-sm">Solar For Business</li>
              <li className="text-[var(--muted-foreground)] text-sm">Power Trading</li>
              <li className="text-[var(--muted-foreground)] text-sm">Solar Project Consultancy</li>
              <li className="text-[var(--muted-foreground)] text-sm">Second-Hand Solar / Wind Assets</li>
              <li className="text-[var(--muted-foreground)] text-sm">Regulatory Support</li>
              <li className="text-[var(--muted-foreground)] text-sm">PPA Structuring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[var(--foreground)]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[var(--muted-foreground)] text-sm">
                <Mail className="w-4 h-4 text-[var(--secondary)]" />
                siva@powerstemsolutions.com
              </li>
              <li className="flex items-center gap-2 text-[var(--muted-foreground)] text-sm">
                <Phone className="w-4 h-4 text-[var(--secondary)]" />
                +91-9994667761
              </li>
              <li className="flex items-start gap-2 text-[var(--muted-foreground)] text-sm">
                <MapPin className="w-4 h-4 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                <span>
                  1st Floor, L.S.Building, Annamalai St
                  <br />
                  Vengatappa Gounder Layout
                  <br />
                  Erode-638004, Tamilnadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--muted-foreground)] text-sm text-center">
            © 2025 PowerStem Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}