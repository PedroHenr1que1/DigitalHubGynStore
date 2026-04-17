import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import BusinessHours from "@/components/BusinessHours";
import TradeInBanner from "@/components/TradeInBanner";
import ProductCarousel from "@/components/ProductCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import SocialLinks from "@/components/SocialLinks";
import PaymentSection from "@/components/PaymentSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import ServiceModal from "@/components/ServiceModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleService = () => {
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <HeroSection onRequestQuote={handleService} />
      <div className="mt-6 space-y-6 px-0">
        <div className="px-5">
        </div>
        <BusinessHours />
        <TradeInBanner />
        <ProductCarousel />
        <PaymentSection />
        <LocationSection />
        <FAQSection />
        <ReviewsSection />
        <SocialLinks />
        <FooterSection />
      </div>

      <ServiceModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
