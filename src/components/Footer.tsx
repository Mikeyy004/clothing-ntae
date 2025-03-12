import styled from "styled-components"
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi"

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: white;
  position: relative;
`

const FooterAccent = styled.div`
  height: 3px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondary} 0%,
    ${({ theme }) => theme.colors.secondaryLight} 50%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const FooterContent = styled.div`
  padding: 100px 0 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 40px;
  }
`

const FooterLogo = styled.div`
  flex: 1;
  min-width: 250px;
`

const LogoTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.secondary};
`

const LogoSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 1px;
`

const FooterLinks = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 30px;
  }
`

const FooterColumn = styled.div`
  flex: 1;
  min-width: 180px;
`

const ColumnTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const LinksList = styled.ul`
  list-style: none;
`

const LinkItem = styled.li`
  margin-bottom: 15px;
`

const FooterLink = styled.a`
  transition: ${({ theme }) => theme.transitions.default};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  position: relative;
  display: inline-block;
  padding-left: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 5px;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};
  padding-left: 0 !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-5px);
    padding-left: 0 !important;
  }
`

const FooterBottom = styled.div`
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`

const FooterPolicies = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const PolicyLink = styled.a`
  font-size: 0.9rem;
  opacity: 0.8;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }
`

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FooterAccent />
      <div className="container">
        <FooterContent>
          <FooterLogo>
            <LogoTitle>Maison Élégance</LogoTitle>
            <LogoSubtitle>Timeless Elegance, Modern Luxury</LogoSubtitle>
          </FooterLogo>

          <FooterLinks>
            <FooterColumn>
              <ColumnTitle>Collections</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink href="#">New Arrivals</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Signature Pieces</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Limited Edition</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Bespoke Services</FooterLink>
                </LinkItem>
              </LinksList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Client Care</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink href="#">Contact Us</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Shipping & Returns</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Care Guide</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Private Appointments</FooterLink>
                </LinkItem>
              </LinksList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Our Maison</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink href="#">Heritage</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Sustainability</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Craftsmanship</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="#">Press</FooterLink>
                </LinkItem>
              </LinksList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Connect</ColumnTitle>
              <SocialIcons>
                <SocialIcon href="#">
                  <FiInstagram />
                </SocialIcon>
                <SocialIcon href="#">
                  <FiFacebook />
                </SocialIcon>
                <SocialIcon href="#">
                  <FiLinkedin />
                </SocialIcon>
                <SocialIcon href="#">
                  <FiTwitter />
                </SocialIcon>
              </SocialIcons>
            </FooterColumn>
          </FooterLinks>
        </FooterContent>

        <FooterBottom>
          <Copyright>&copy; {new Date().getFullYear()} Maison Élégance. All rights reserved.</Copyright>
          <FooterPolicies>
            <PolicyLink href="#">Privacy Policy</PolicyLink>
            <PolicyLink href="#">Terms of Service</PolicyLink>
          </FooterPolicies>
        </FooterBottom>
      </div>
    </FooterSection>
  )
}

export default Footer

