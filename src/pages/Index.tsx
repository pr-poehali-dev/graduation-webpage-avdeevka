import WelcomeHero from "@/components/WelcomeHero";
import CountdownTimer from "@/components/CountdownTimer";
import InvitationCard from "@/components/InvitationCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WelcomeHero />
      <CountdownTimer />
      <InvitationCard />
    </div>
  );
};

export default Index;
