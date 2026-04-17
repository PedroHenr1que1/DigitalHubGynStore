import HeroSection from "@/components/HeroSection";
import BusinessHours from "@/components/BusinessHours";
import TradeInBanner from "@/components/TradeInBanner";
import ProductCarousel from "@/components/ProductCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import SocialLinks from "@/components/SocialLinks";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/556285177744", "_blank");
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <HeroSection onRequestQuote={handleWhatsApp} />
      <div className="mt-6 space-y-6 px-0">
        <div className="px-5">
        </div>
        <BusinessHours />
        <TradeInBanner />
        <ProductCarousel />
        <ReviewsSection />
        <LocationSection />
        <SocialLinks />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
