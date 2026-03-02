import { Check, Heart, Shield, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNDc0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Dentist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              About DENTISIAN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Trusted Partner in Dental Health
            </h2>
            <p className="text-lg text-gray-600">
              DENTISIAN is a premier orthodontic and dental clinic dedicated to providing world-class dental care in a comfortable, state-of-the-art environment. Our team of experienced professionals is committed to helping you achieve and maintain optimal oral health.
            </p>
            <p className="text-gray-600">
              With over 15 years of experience, we specialize in orthodontic treatments, cosmetic dentistry, and comprehensive dental care for patients of all ages. We believe in personalized treatment plans tailored to each patient's unique needs.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Advanced Technology</div>
                  <div className="text-gray-600">State-of-the-art equipment and modern techniques</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert Team</div>
                  <div className="text-gray-600">Board-certified orthodontists and dental specialists</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Patient-Centered Care</div>
                  <div className="text-gray-600">Comfortable environment and personalized treatment</div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Compassion</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Trust</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
