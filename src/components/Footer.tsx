import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-[100rem] mx-auto px-8 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="https://static.wixstatic.com/media/9b1a81_dbcad26cd1974ef4a9d6368f11245fb6~mv2.jpg"
              alt="Radhe Polymers"
              width={160}
              className="h-10 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
              Leading manufacturer of premium PET preforms and caps, delivering precision and quality in every product.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-6">Our Products</h3>
            <div className="space-y-3">
              <p className="font-paragraph text-sm text-secondary-foreground/80">PET Preforms</p>
              <p className="font-paragraph text-sm text-secondary-foreground/80">Bottle Caps</p>
              <p className="font-paragraph text-sm text-secondary-foreground/80">Custom Solutions</p>
              <p className="font-paragraph text-sm text-secondary-foreground/80">Various Sizes</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@radhepolymers.com"
                  className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  info@radhepolymers.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+911234567890"
                  className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300"
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <p className="font-paragraph text-sm text-secondary-foreground/80">
                  Manufacturing Unit, Industrial Area, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © {currentYear} Radhe Polymers. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              Crafted with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
