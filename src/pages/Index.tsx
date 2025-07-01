import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ProcessSection from '@/components/home/ProcessSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import ContactSection from '@/components/home/ContactSection';
import StatsSection from '@/components/home/StatsSection';
import TeamSection from '@/components/home/TeamSection';
import CertificatesSection from '@/components/home/CertificatesSection';
import FAQSection from '@/components/home/FAQSection';
import BlogSection from '@/components/home/BlogSection';
import PartnersSection from '@/components/home/PartnersSection';
import EmergencySection from '@/components/home/EmergencySection';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <EmergencySection />
      <TechnologiesSection />
      <CaseStudiesSection />
      <TeamSection />
      <ReviewsSection />
      <CertificatesSection />
      <PartnersSection />
      <GuaranteeSection />
      <FAQSection />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};

export default Index;