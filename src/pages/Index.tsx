import MarioNavigation from '@/components/MarioNavigation';
import MarioHero from '@/components/MarioHero';
import MarioAbout from '@/components/MarioAbout';
import MarioSkills from '@/components/MarioSkills';
import MarioProjects from '@/components/MarioProjects';
import MarioContact from '@/components/MarioContact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MarioNavigation />
      <main>
        <MarioHero />
        <MarioAbout />
        <MarioSkills />
        <MarioProjects />
        <MarioContact />
      </main>
    </div>
  );
};

export default Index;