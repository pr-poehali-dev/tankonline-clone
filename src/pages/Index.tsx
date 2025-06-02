import HeroSection from "@/components/HeroSection";
import GameFeatures from "@/components/GameFeatures";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <GameFeatures />
      <NewsSection />
    </div>
  );
};

export default Index;
