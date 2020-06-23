import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`;
const CustomerImage = tw.img`w-16 h-16 rounded-full`;
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`;
const CustomerName = tw.span`text-lg font-semibold`;
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`;
const ControlsContainer = tw.div`sm:ml-auto flex`;
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = "Read what our customers have to say!",
  testimonials = [
    {
      customerName: "Ramesh Pathak",
      customerProfile: "CEO, Panora",
      imageSrc:
        "https://avatars1.githubusercontent.com/u/30867740?s=460&u=d60b9c629dbed174e2539493ab0651168c2106b2&v=4",
      quote:
        "I've never volunteered to write one of these, but Diyo remains an exception. What a service!",
    },
    {
      customerName: "Santosh Dahal",
      customerProfile: "Founder, ARYO",
      imageSrc:
        "https://scontent.fktm10-1.fna.fbcdn.net/v/t1.0-1/c6.0.100.100a/p100x100/82018579_2622023744562195_8338776500941619200_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=y4EzgL1hjhYAX_sSgZr&_nc_ht=scontent.fktm10-1.fna&oh=93fae999373e99208bcd06a7deede7d6&oe=5F1901F0",
      quote: "Truly astonished with their deep insights about AI products. ",
    },
    {
      customerName: "Anup Sedhain",
      customerProfile: "CTO, Dailo",
      imageSrc:
        "https://avatars1.githubusercontent.com/u/25154948?s=460&u=8f47587adf6491e0e905373362e2a153c2a75092&v=4",
      quote:
        "Amazing experience! I definitely recommend Diyo to build chatbots for any company.",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>{testimonial.quote}</Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerImage src={testimonial.imageSrc} />
                <CustomerNameAndProfileContainer>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon className="icon" />
                  </ControlButton>
                  <ControlButton>
                    <ArrowRightIcon
                      className="icon"
                      onClick={sliderRef?.slickNext}
                    />
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
