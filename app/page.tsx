
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import OpinionSlider from '@/components/OpinionSlider';
import ImportantComplaintSection from '@/components/ImportantComplaintSection';
import OpinionSection from '@/components/OpinionSection';
import DevelopmentProgressSection from '@/components/DevelopmentProgressSection';
import Team from '@/components/Team';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <OpinionSlider/>
      <ImportantComplaintSection/>
      <OpinionSection/>
      <DevelopmentProgressSection/>
      <Team/>
    </> 
  );
}
