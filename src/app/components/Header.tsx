import { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">DENTISIAN</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-600">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-blue-600">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-blue-600">
                Gallery
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-blue-600">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600">
                Contact
              </button>
              <div className="pt-4 border-t">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-blue-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <Button onClick={() => scrollToSection('contact')} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
