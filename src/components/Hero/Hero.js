import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Let's Build <br />
          Something Great Together
        </SectionTitle>
        <SectionText>
        I am Gonzalo, an internationally experienced UX/UI designer. My experience for over 5 years has allowed me to acquire skills in all phases of cultural and commercial product managing, marketing and production, with experience in various fields including e-commerce, SaaS and app development.
        <br />
        <br />
        <br />
        <br />
        </SectionText>

      </LeftSection>
    </Section>
  </>
);

export default Hero;