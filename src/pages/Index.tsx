import WelcomeHero from "@/components/WelcomeHero";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WelcomeHero />
      <CountdownTimer />
      <PhotoGallery />
    </div>
  );
};

export default Index;
