import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import StatsColumn from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <StatsColumn />
      <Features
        subheading={<Subheading>Why Us?</Subheading>}
        heading={
          <>
            We believe in <HighlightedText>empowering you.</HighlightedText>
          </>
        }
      />
      <Testimonial />
      <Footer />
    </AnimationRevealPage>
  );
};
