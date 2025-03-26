import styled from "styled-components"

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

  svg {
    width: 20px;
    height: 20px;
  }

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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
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

