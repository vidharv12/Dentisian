import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    rating: 5,
    text: 'DENTISIAN transformed my smile! The staff is incredibly professional and caring. My orthodontic treatment was smooth and the results exceeded my expectations.',
    image: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    rating: 5,
    text: 'Best dental experience I\'ve ever had. The clinic is modern, clean, and the team makes you feel comfortable. Highly recommend for anyone looking for quality dental care.',
    image: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient',
    rating: 5,
    text: 'I was nervous about getting braces as an adult, but the team at DENTISIAN made the whole process easy and stress-free. Thank you for giving me confidence in my smile!',
    image: 'ER'
  },
  {
    name: 'David Thompson',
    role: 'Patient',
    rating: 5,
    text: 'Exceptional service from start to finish. The doctors are knowledgeable and take time to explain everything. My family and I wouldn\'t go anywhere else.',
    image: 'DT'
  },
  {
    name: 'Lisa Anderson',
    role: 'Patient',
    rating: 5,
    text: 'The technology they use is amazing! My treatment was faster and more comfortable than I expected. The results speak for themselves - I love my new smile!',
    image: 'LA'
  },
  {
    name: 'James Wilson',
    role: 'Patient',
    rating: 5,
    text: 'Professional, friendly, and efficient. They work with your schedule and insurance. I appreciate how they prioritize patient comfort and satisfaction.',
    image: 'JW'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied patients about their experience at DENTISIAN.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="h-8 w-px bg-gray-300 mx-4"></div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.9/5.0</div>
              <div className="text-sm text-gray-600">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
