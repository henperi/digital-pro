import React, { useRef } from 'react';

// Components
import { Button } from '../../UiKit/Button';
import { Card } from '../../UiKit/Card';

// Styles
import './LandingPage.scss';
import '../../styles/responsive.scss';

// Svgs
import heroBg from '../../assets/images/hero_bg.svg';
import bulb from '../../assets/images/bulb.svg';
import doc from '../../assets/images/doc.svg';
import search from '../../assets/images/search.svg';
import analysis from '../../assets/images/analysis.svg';
import clients from '../../assets/images/clients.svg';
import student from '../../assets/images/student.svg';
import dinner from '../../assets/images/dinner.svg';
import womanBooks from '../../assets/images/womanBooks.svg';
import avatarMan from '../../assets/images/avatarMan.svg';
import quotes from '../../assets/images/quotes.svg';
import testimonialBg from '../../assets/images/testimonialBg.svg';
import subscribeBottomLeftBg from '../../assets/images/subscribeBottomLeftBg.svg';
import subscribeTopRightBg from '../../assets/images/subscribeTopRightBg.svg';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebookIcon.svg';
import instagramIcon from '../../assets/images/instagramIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';

/**
 * The Landing Page
 *
 * @returns {JSX.Element} Element
 */
export function LandingPage() {
  const mobileLinksRef = useRef(null);

  const handleBurgerMenuClick = () => {
    mobileLinksRef.current.classList.toggle('menu-links--mobile');
  };

  return (
    <div className="main">
      <div className="hero">
        <nav className="contain nav row row__mainAxis--spaceBetween row__crossAxis--center">
          <div className="nav--left">
            <h3 className="underline">DigiPro</h3>
          </div>
          <div className="nav--right">
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleBurgerMenuClick()}
              onKeyPress={() => handleBurgerMenuClick()}
            >
              <span className="burger-menu" />
            </div>
            <div ref={mobileLinksRef} className="menu-links">
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleBurgerMenuClick()}
                onKeyPress={() => handleBurgerMenuClick()}
              >
                <span className="burger-menu--close" />
              </div>

              <span>About</span>
              <span>Service</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>
          </div>
        </nav>
        <img alt="" src={heroBg} className="hero__bg" />

        <div className="contain hero__content col col-4 col-md-7 col-sm-11 col__mainAxis--center">
          <h1 className="">Digital Future Designs</h1>
          <span>
            The future of digital design is here. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore.
          </span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </p>
          <Button className="margin__top--10">Get Started</Button>
        </div>
      </div>
      <section className="contain col col__mainAxis--center">
        <div className="textAlign--center margin__vertical--40">
          <h3>Services</h3>
          <h2>Our Agency Providing</h2>
          <span>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </span>
        </div>
        <div className="row row__mainAxis--center margin__bottom--100">
          <Card className="col bg--coolBlue col-sm-12 col-md-12 col-4">
            <object data={bulb}>
              <img alt="" src={bulb} />
            </object>
            <h3>Business Strategy</h3>
            <span>
              Lorem ipsum dolor sit consetetur diam sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt aliquyam erat, sed diam
            </span>
          </Card>
          <Card className="col col-sm-12 col-md-12 col-4">
            <object data={search}>
              <img alt="" src={search} />
            </object>
            <h3>Business Strategy</h3>
            <span>
              Lorem ipsum dolor sit consetetur diam sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt aliquyam erat, sed diam
            </span>
          </Card>
          <Card className="col col-sm-12 col-md-12 col-4">
            <object data={doc}>
              <img alt="" src={doc} />
            </object>
            <h3>Business Strategy</h3>
            <span>
              Lorem ipsum dolor sit consetetur diam sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt aliquyam erat, sed diam
            </span>
          </Card>
        </div>
        <div className="row margin__top--60">
          <div className="col-5 col-sm-12">
            <object width="100%" data={analysis}>
              <img alt="" src={analysis} />
            </object>
          </div>
          <div className="col-1" />
          <div className="col-6 col-sm-12 col col__mainAxis--center service--padding">
            <h2>Business opportunities Analysis </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, diam voluptua. At vero eos
            </p>
            <p>
              Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos nonumy eirmod tempor.
            </p>
          </div>
        </div>
        <div className="row row--reversed margin__top--60">
          <div className="col-5 col-sm-12">
            <object width="100%" data={clients}>
              <img alt="" src={clients} />
            </object>
          </div>
          <div className="col-1" />
          <div className="col-6 col-sm-12 col col__mainAxis--center service--padding">
            <h2>Business opportunities Analysis </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, diam voluptua. At vero eos
            </p>
            <p>
              Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos nonumy eirmod tempor.
            </p>
          </div>
        </div>
      </section>
      <section className="contain section margin__top--100 margin__bottom--100">
        <div className="col textAlign--center margin__vertical--40">
          <h3>Our Case Studies</h3>
          <span>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </span>
        </div>
        <div className="row">
          <Card className="card card__padding--5 col-4 col-md-6 col-sm-12">
            <object width="100%" data={student}>
              <img width="100%" alt="" src={student} />
            </object>
            <div className="padding__all--10">
              <h3>Business Solution Process</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                Eirmod tempor invint ut labore
              </p>
            </div>
          </Card>
          <Card className="card card__padding--5 col-4 col-md-6 col-sm-12">
            <object width="100%" data={dinner}>
              <img width="100%" alt="" src={dinner} />
            </object>
            <div className="padding__all--10">
              <h3>Marketing Stratagy</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                Eirmod tempor invint ut labore
              </p>
            </div>
          </Card>
          <Card className="card card__padding--5 col-4 col-md-6 col-sm-12">
            <object width="100%" data={womanBooks}>
              <img width="100%" alt="" src={womanBooks} />
            </object>
            <div className="padding__all--10">
              <h3>How We Research Market?</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                Eirmod tempor invint ut labore
              </p>
            </div>
          </Card>
        </div>
        <div className="row row__mainAxis--center margin__vertical--40">
          <Button>See More</Button>
        </div>
      </section>
      <section className="row testimonial">
        <object className="testimonial--bg" data={testimonialBg}>
          <img className="testimonial--bg" alt="" src={testimonialBg} />
        </object>
        <div className="col col__mainAxis--center col-4 col-sm-12">
          <h4 className="contain underline">Some Awesome Word</h4>
        </div>
        <div className="col-8 col-sm-12 padding__vertical--40">
          <div className="row scrollable">
            <Card className="col scrollable--card relative">
              <object className="quotes" data={quotes}>
                <img className="quotes" alt="" src={quotes} />
              </object>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidun
              </span>
              <div className="row margin__top--20">
                <div className="img--bg">
                  <object data={avatarMan}>
                    <img alt="" src={avatarMan} />
                  </object>
                </div>
                <div className="col col__mainAxis--center padding__left--10">
                  <span>Jonathon Doe</span>
                  <span>TED Communication Ltd.</span>
                </div>
              </div>
            </Card>
            <Card className="col scrollable--card relative">
              <object className="quotes" data={quotes}>
                <img className="quotes" alt="" src={quotes} />
              </object>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidun
              </span>
              <div className="row margin__top--20">
                <div className="img--bg">
                  <object data={avatarMan}>
                    <img alt="" src={avatarMan} />
                  </object>
                </div>
                <div className="col col__mainAxis--center padding__left--10">
                  <span>Jonathon Doe</span>
                  <span>TED Communication Ltd.</span>
                </div>
              </div>
            </Card>
            <Card className="col scrollable--card relative">
              <object className="quotes" data={quotes}>
                <img className="quotes" alt="" src={quotes} />
              </object>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidun
              </span>
              <div className="row margin__top--20">
                <div className="img--bg">
                  <object data={avatarMan}>
                    <img alt="" src={avatarMan} />
                  </object>
                </div>
                <div className="col col__mainAxis--center padding__left--10">
                  <span>Jonathon Doe</span>
                  <span>TED Communication Ltd.</span>
                </div>
              </div>
            </Card>
            <Card className="col scrollable--card relative">
              <object className="quotes" data={quotes}>
                <img className="quotes" alt="" src={quotes} />
              </object>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidun
              </span>
              <div className="row margin__top--20">
                <div className="img--bg">
                  <object data={avatarMan}>
                    <img alt="" src={avatarMan} />
                  </object>
                </div>
                <div className="col col__mainAxis--center padding__left--10">
                  <span>Jonathon Doe</span>
                  <span>TED Communication Ltd.</span>
                </div>
              </div>
            </Card>
            <Card className="col scrollable--card relative">
              <object className="quotes" data={quotes}>
                <img className="quotes" alt="" src={quotes} />
              </object>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidun
              </span>
              <div className="row margin__top--20">
                <div className="img--bg">
                  <object data={avatarMan}>
                    <img alt="" src={avatarMan} />
                  </object>
                </div>
                <div className="col col__mainAxis--center padding__left--10">
                  <span>Jonathon Doe</span>
                  <span>TED Communication Ltd.</span>
                </div>
              </div>
            </Card>
            <Card className="col scrollable--card relative">
              <object className="quotes" data={quotes}>
                <img className="quotes" alt="" src={quotes} />
              </object>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidun
              </span>
              <div className="row margin__top--20">
                <div className="img--bg">
                  <object data={avatarMan}>
                    <img alt="" src={avatarMan} />
                  </object>
                </div>
                <div className="col col__mainAxis--center padding__left--10">
                  <span>Jonathon Doe</span>
                  <span>TED Communication Ltd.</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="contain contact row row__mainAxis--center margin__top--100">
        <div className="col-5 col-sm-12 col">
          <h3 className="underline margin__top--40">Let&rsquo;s Talk About Everything</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, diam voluptua. At vero eos
          </p>
        </div>
        <div className="col-1" />
        <div className="col-6 col-sm-12 card form">
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Subject" />
          <textarea className="textArea" placeholder="Message" />
          <Button>Send Request</Button>
        </div>
      </section>
      <section className="subscribe row row__mainAxis--center margin__top--100">
        <object className="bottomLeftBg" data={subscribeBottomLeftBg}>
          <img className="bottomLeftBg" alt="" src={subscribeBottomLeftBg} />
        </object>
        <object className="topRightBg" data={subscribeTopRightBg}>
          <img className="topRightBg" alt="" src={subscribeTopRightBg} />
        </object>
        <div className="contain col col-6 col-md-12 col-sm-12 textAlign--center">
          <h3>Subscribe to our nesleter</h3>
          <span>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </span>
          <div className="row margin__top--20">
            <div className="col-9 col-sm-12">
              <input className="input input--rounded margin__bottom--10" placeholder="Subject" />
            </div>
            <div className="col-3 col-sm-12">
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="footer contain padding__vertical--40">
        <div className="row">
          <div className="col-3 col-md-6 col-sm-12 col">
            <h2>DIGISOL</h2>
            <span>digisol.co@mail.com</span>
            <span>087-552-485-165</span>
          </div>
          <div className="col-3 col-md-6 col-sm-12 col">
            <h4>Services</h4>
            <span>Digital Marketing</span>
            <span>Business Analysis</span>
            <span>Content</span>
            <span>Wordpress</span>
            <span>Social Activation</span>
          </div>
          <div className="col-3 col-md-6 col-sm-12 col">
            <h4>About Us</h4>
            <span>Who We Are</span>
            <span>Founders</span>
            <span>History</span>
          </div>
          <div className="col-3 col-md-6 col-sm-12 col">
            <h4>Our Address</h4>
            <span>59/B Jonson Road Ave, New York, USA</span>
            <span>Email: support@digi.com</span>
          </div>
        </div>
        <div className="row row__mainAxis--center">
          <div className="iconBg">
            <FacebookIcon className="svg" />
          </div>
          <div className="iconBg">
            <object data={instagramIcon}>
              <img alt="" src={instagramIcon} />
            </object>
          </div>
          <div className="iconBg">
            <object data={twitterIcon}>
              <img alt="" src={twitterIcon} />
            </object>
          </div>
        </div>
      </section>
    </div>
  );
}
