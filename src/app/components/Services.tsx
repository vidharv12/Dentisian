import { Sparkles, Smile, ArrowRight, Shield, HeartPulse, Stethoscope } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Sparkles,
    title: 'Orthodontic Treatment',
    description: 'Advanced braces and clear aligners to straighten your teeth and improve your bite.',
    features: ['Metal & Ceramic Braces', 'Clear Aligners', 'Retainers']
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our cosmetic procedures for a confident, beautiful appearance.',
    features: ['Teeth Whitening', 'Veneers', 'Bonding']
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Regular check-ups and cleanings to maintain optimal oral health and prevent issues.',
    features: ['Dental Cleaning', 'Oral Exams', 'Fluoride Treatment']
  },
  {
    icon: HeartPulse,
    title: 'Restorative Dentistry',
    description: 'Repair and restore damaged teeth with our comprehensive restorative solutions.',
    features: ['Crowns & Bridges', 'Fillings', 'Root Canal']
  },
  {
    icon: Stethoscope,
    title: 'Emergency Dental Care',
    description: '24/7 emergency services for urgent dental issues and pain relief.',
    features: ['Pain Management', 'Trauma Care', 'Same-Day Appointments']
  },
  {
    icon: Smile,
    title: 'Pediatric Dentistry',
    description: 'Gentle, specialized care for children to ensure healthy smiles from an early age.',
    features: ['Child-Friendly Environment', 'Preventive Education', 'Early Intervention']
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From routine check-ups to advanced orthodontic treatments, we offer a full range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}