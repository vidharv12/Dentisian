import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // SEO: Set document title
    document.title = 'DENTISIAN - Expert Orthodontic & Dental Care | Best Dental Clinic';

    // SEO: Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DENTISIAN is a premier orthodontic and dental clinic offering expert dental care, braces, cosmetic dentistry, and comprehensive dental treatments. Book your appointment today!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'DENTISIAN is a premier orthodontic and dental clinic offering expert dental care, braces, cosmetic dentistry, and comprehensive dental treatments. Book your appointment today!';
      document.head.appendChild(meta);
    }

    // SEO: Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'dentist, orthodontist, dental clinic, braces, teeth whitening, cosmetic dentistry, dental care, orthodontic treatment, dental implants, emergency dentist';
      document.head.appendChild(meta);
    }

    // SEO: Add author meta tag
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      const meta = document.createElement('meta');
      meta.name = 'author';
      meta.content = 'DENTISIAN Dental Clinic';
      document.head.appendChild(meta);
    }

    // SEO: Add viewport meta tag if not exists
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }

    // SEO: Add Open Graph tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'DENTISIAN - Expert Orthodontic & Dental Care';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Premier orthodontic and dental clinic offering expert care, braces, cosmetic dentistry, and comprehensive dental treatments.';
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.content = 'website';
      document.head.appendChild(meta);
    }

    // SEO: Add canonical link
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }

    // SEO: Add language meta tag
    document.documentElement.lang = 'en';

    // SEO: Add robots meta tag
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Semantic HTML5 structure for SEO */}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
