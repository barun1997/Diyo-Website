import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Diyo </Subheading>}
        heading="We are an AI Company"
        buttonRounded={false}
        primaryButtonText="See Portfolio"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to localize AI in Nepal"
        buttonRounded={false}
        primaryButtonUrl="/contact"
        description="After a couple of years with a new team in a new start-up with a vision of localizing AI with world-class products in language, speech, vision, gaming and robotics, a next generation of chatbot is emerging"
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We strongly believe in our WHY. These are how we connect to it:"
        description="Our values are important in whatever we do - in order to achieve our WHY - to localize AI in Nepal."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Accessible Technology",
            description:
              "24/7 Support for all our clients, as well as reliable accessible technology.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "We believe in providing World-class technology, built through help of years of our research.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "The satisfaction of our customers is at core of what we do. ",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <Footer />
    </AnimationRevealPage>
  );
};
