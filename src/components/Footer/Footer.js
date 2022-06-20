import React from 'react'
import { Button } from '../../globalStyles';
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterSubHeading, FooterSubscription, FooterSubtext, Form, FormInput, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './Footer.elements'

const Footer = () => {
  return (
      <FooterContainer>
          <FooterSubscription>
              <FooterSubHeading>
                  Join Our exclusive memnership to receive the latest news and trends
              </FooterSubHeading>
              <FooterSubtext>
                  You can unsubscribe at any time
              </FooterSubtext>
              <Form>
                  <FormInput name="email" type="email" placeholder="Your Email"></FormInput>
                  <Button fontBig>Subscribe</Button>
              </Form>
          </FooterSubscription>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                      <FooterLink to='/sign-up'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Investors</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>Contact Us</FooterLinkTitle>
                      <FooterLink to='/sign-up'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Investors</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
                  </FooterLinksWrapper>
              <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>Videos</FooterLinkTitle>
                      <FooterLink to='/sign-up'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Investors</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>Social Media</FooterLinkTitle>
                      <FooterLink to='/sign-up'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Investors</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
                <SocialMediaWrap>
                  <SocialLogo to="/">
                      <SocialIcon />
                      Ultra
                  </SocialLogo>
                    <WebsiteRights>Ultra 2022</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
          </SocialMedia>
    </FooterContainer>
  )
}

export default Footer