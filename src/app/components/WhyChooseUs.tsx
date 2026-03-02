import { Clock, Award, DollarSign, HeartPulse, Users, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Board Certified Experts',
    description: 'Our team consists of highly qualified and experienced orthodontists and dental specialists.'
  },
  {
    icon: HeartPulse,
    title: 'Advanced Technology',
    description: 'We use the latest dental technology and equipment for precise, comfortable treatments.'
  },
  {
    icon: Users,
    title: 'Patient-Focused Care',
    description: 'Your comfort and satisfaction are our top priorities. We listen and care.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient appointment times including evenings and weekends to fit your schedule.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with flexible payment plans and insurance acceptance.'
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easily accessible location with ample parking for your convenience.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The DENTISIAN Difference
          </h2>
          <p className="text-lg text-blue-100">
            Discover what sets us apart and why thousands of patients trust us with their dental care.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
