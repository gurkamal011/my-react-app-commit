// // src/components/Home.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const navigate = useNavigate();

//     const handleLoginClick = () => {
//         navigate('/login');
//     };

//     return (
//         <div>
//             <h1>Welcome to the Home Page</h1>
//             <p>This is a simple Home page for your React app.</p>
//             <button onClick={handleLoginClick}>Go to Login</button>
//         </div>
//     );
// }

// export default Home;

/* ------------------------------------------------------------------------------------------- */

import React from 'react'
import { Link } from 'react-router-dom'

//import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Banner from '../components/banner'
import Branding from '../components/branding'
import Steps from '../components/steps'
import IconContainer from '../components/icon-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Helpa template</title>
        <meta property="og:title" content="Helpa template" />
      </Helmet>
      <Banner></Banner>
      <section className="home-hero">
        <div className="home-main1">
          <div className="home-content10">
            <header className="home-header10">
              <header data-thq="thq-navbar" className="home-navbar-interactive">
                <Branding rootClassName="brandingroot-class-name1"></Branding>
                <div
                  data-thq="thq-navbar-nav"
                  data-role="Nav"
                  className="home-desktop-menu"
                >
                  <div className="home-links1">
                    <Link to="/" className="home-link10 navLink">
                      Mission
                    </Link>
                    <Link to="/" className="home-link11 navLink">
                      Take Action
                    </Link>
                    <Link to="/" className="home-link12 navLink">
                      News
                    </Link>
                    <Link to="/" className="home-link13 navLink">
                      Contact
                    </Link>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                  <button className="button">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav"
                  >
                    <div className="home-container11">
                      <Branding rootClassName="brandingroot-class-name"></Branding>
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon12">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-links2">
                      <Link to="/" className="home-link14 navLink">
                        Mission
                      </Link>
                      <Link to="/" className="home-link15 navLink">
                        Take Action
                      </Link>
                      <Link to="/" className="home-link16 navLink">
                        News
                      </Link>
                      <Link to="/" className="home-link17 navLink">
                        Contact
                      </Link>
                    </div>
                    <div className="home-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon14"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon16"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon18"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </header>
            </header>
            <div className="home-hero-section">
              <div className="home-header11">
                <h1 className="home-heading10">You can make a difference</h1>
                <p className="home-caption10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="home-buttons1">
                <button className="button">
                  <span>Donate Now</span>
                </button>
                <button className="home-button12 button">
                  <span>Join our newsletter</span>
                </button>
              </div>
            </div>
          </div>
          <div className="home-image10">
            <button className="button home-button13">Donate</button>
          </div>
        </div>
        <div className="home-details-container">
          <div className="home-details1">
            <div className="home-category1">
              <img alt="image" src="/details-1.svg" className="home-image11" />
              <p className="home-text12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                {/* <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                /> */}
              </p>
            </div>
            <div className="home-category2">
              <img alt="image" src="/details-2.svg" className="home-image12" />
              <p className="home-text13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                {/* <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                /> */}
              </p>
            </div>
            <div className="home-category3">
              <img alt="image" src="/details-3.svg" className="home-image13" />
              <p className="home-text14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                {/* <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                /> */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-mission">
        <div className="home-content11">
          <div className="home-main2">
            <span className="home-title1">Our Mission</span>
            <div className="home-header12">
              <h2 className="home-heading11">
                Hepa has been working to free animals from cruelty and
                institutionalized exploitation around the world.
              </h2>
              <p className="home-caption11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="home-highlights1">
            <div className="home-highlight1">
              <h3 className="home-title2">Action</h3>
              <p className="home-description1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="home-highlight2">
              <h3 className="home-title3">Help</h3>
              <p className="home-description2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className="home-images1">
          <img alt="image" src="/mission-1-400w.png" className="home-image14" />
          <div className="home-row1">
            <img
              alt="image"
              src="/mission-2-400w.png"
              className="home-image15"
            />
          </div>
        </div>
      </section>
      <section className="home-petitions">
        <div className="home-images2">
          <img alt="image" src="/petition-1400w.png" className="home-image16" />
        </div>
        <div className="home-content12">
          <div className="home-main3">
            <div className="home-header13">
              <h2 className="home-heading12">
                Sign our petitions and make your voice heard for the animals
                that need your help.
              </h2>
              <p className="home-caption12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                {/* <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                /> */}
              </p>
            </div>
          </div>
          <div className="home-button14">
            <button className="button">
              <span>Sign petition</span>
            </button>
          </div>
        </div>
      </section>
      <section className="home-steps">
        <div className="home-content13">
          <div className="home-information">
            <div className="home-main4">
              <div className="home-header14">
                <h2 className="home-heading13">
                  Making a difference lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod.
                </h2>
                <p className="home-caption13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="home-button16">
              <button className="button">
                <span>Take action</span>
              </button>
            </div>
          </div>
          <Steps></Steps>
        </div>
      </section>
      <section className="home-help">
        <div className="home-help-content">
          <div className="home-header15">
            <h2 className="home-heading14">How can you help</h2>
            <p className="home-caption14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              {/* <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              /> */}
            </p>
          </div>
          <div className="home-switch1">
            <div id="individual" className="switch-active switch">
              <span>Individuals</span>
            </div>
            <div id="company" className="switch">
              <span>Companies</span>
            </div>
          </div>
        </div>
        <div className="home-content14">
          <div id="individuals-content" className="home-save">
            <div className="home-content15">
              <div className="home-main5">
                <div className="home-header16">
                  <h2 className="home-heading15">
                    This is the Individuals Tab
                  </h2>
                  <p className="home-caption15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    {/* <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    /> */}
                  </p>
                </div>
                <div className="home-highlights2">
                  <div className="home-highlight3">
                    <h3 className="home-title4">60%</h3>
                    <p className="home-description3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="home-highlight4">
                    <h3 className="home-title5">40%</h3>
                    <p className="home-description4">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-button18">
                <button className="button">
                  <span>Take action</span>
                </button>
                <button className="button">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className="home-images3">
              <img alt="image" src="/help-1400w.png" className="home-image17" />
            </div>
          </div>
          <div id="companies-content" className="home-companies">
            <div className="home-content16">
              <div className="home-main6">
                <div className="home-header17">
                  <h2 className="home-heading16">This is the Companies Tab</h2>
                  <p className="home-caption16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    {/* <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    /> */}
                  </p>
                </div>
                <div className="home-highlights3">
                  <div className="home-highlight5">
                    <h3 className="home-title6">55%</h3>
                    <p className="home-description5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="home-highlight6">
                    <h3 className="home-title7">45%</h3>
                    <p className="home-description6">
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>
              </div>
              <div className="home-button21">
                <button className="button">
                  <span>Take action</span>
                </button>
                <button className="button">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className="home-images4">
              <img alt="image" src="/help-1400w.png" className="home-image18" />
            </div>
          </div>
        </div>
        <div>
          <div className="home-container13">
            <script
              html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
            ></script>
          </div>
        </div>
      </section>
      <section className="home-quote-one">
        <div className="home-quote-content1">
          <h2 className="home-quote1">
            “Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.”
          </h2>
          <div className="home-quoted1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwb3RyYWl0fGVufDB8fHx8MTY3MDkyNjgxNQ&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-image19"
            />
            <p className="home-caption17">Michael Belfort, @helpa</p>
          </div>
        </div>
      </section>
      <section className="home-quote-two">
        <div className="home-content17">
          <div className="home-video1">
            <video
              src
              poster="/video-1400w.png"
              className="home-video2"
            ></video>
            <div className="home-play">
              <div className="home-button24">
                <svg
                  viewBox="0 0 808.5942857142857 1024"
                  className="home-icon20"
                >
                  <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-quote-content2">
            <h2 className="home-quote2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </h2>
            <div className="home-quoted2">
              <p className="home-caption18">Andrew Gonzalez</p>
              <p className="home-caption19">@ihelpyou</p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-donate">
        <div className="home-content18">
          <div className="home-header18">
            <span className="home-heading17">
              Donate now and help us help animals
            </span>
            <span className="home-caption20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </div>
          <div className="home-amount">
            <div className="home-row2">
              <button className="home-button25 button">$5</button>
              <button className="home-button26 button">$10</button>
            </div>
            <div className="home-row3">
              <button className="home-button27 button">$20</button>
              <button className="home-button28 button">$40</button>
            </div>
          </div>
        </div>
      </div>
      <section className="home-donation-use">
        <div className="home-header19">
          <h2 className="home-heading18">
            Your donations will be used to help animals.
          </h2>
          <p className="home-caption21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="home-accordion">
          <div
            data-role="accordion-container"
            className="accordion-element home-element1"
          >
            <div className="home-header20">
              <h3 className="home-text23">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-containerroot-class-name4"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element2"
          >
            <div className="home-header21">
              <h3 className="home-text25">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-containerroot-class-name5"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element3"
          >
            <div className="home-header22">
              <h3 className="home-text27">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-containerroot-class-name6"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element4"
          >
            <div className="home-header23">
              <h3 className="home-text29">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-containerroot-class-name7"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="accordion-element home-element5"
          >
            <div className="home-header24">
              <h3 className="home-text31">
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="icon-containerroot-class-name8"></IconContainer>
            </div>
            <div data-role="accordion-content" className="accordion-content">
              <p className="home-text32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <div className="home-container15">
              <script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></script>
            </div>
          </div>
        </div>
      </section>
      <section className="home-updates">
        <div className="home-content24">
          <div className="home-details2">
            <div className="home-header25">
              <h2 className="home-heading19">
                Get updates and action alerts from Helpa by joining our
                newsletter
              </h2>
              <p className="home-caption22">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-action">
              <div className="home-input">
                <input
                  type="text"
                  placeholder="Email address"
                  className="home-textinput input"
                />
                <button className="button home-button29">Subscribe</button>
              </div>
              <div className="home-agreement">
                <div className="home-states">
                  <div id="tos" className="home-checkbox1"></div>
                  <div id="tos-active" className="home-checkbox2">
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-caption23">
                  <label htmlFor="tos" className="home-normal">
                    I agree to the
                  </label>
                  <label htmlFor="tos" className="home-bold">
                    Terms and Conditions
                  </label>
                </div>
                <div>
                  <div className="home-container17">
                    <script
                      html={`<script>
// Create a boolean to represent the state of the toggle
let tosToggle = false;

// Add event listeners to the divs and labels
document.getElementById("tos").addEventListener("click", toggleTos);
document.getElementById("tos-active").addEventListener("click", toggleTos);
document.querySelectorAll("label[for=tos]").forEach(label => label.addEventListener("click", toggleTos));

// Define the toggleTos function to hide/show the elements based on the state of the toggle
function toggleTos() {
  if (tosToggle) {
    document.getElementById("tos").style.display = "flex";
    document.getElementById("tos-active").style.display = "none";
  } else {
    document.getElementById("tos").style.display = "none";
    document.getElementById("tos-active").style.display = "flex";
  }
  tosToggle = !tosToggle;
}
</script>`}
                    ></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-slider1">
            <div className="home-slides">
              <div className="slide-active slide">
                <img
                  alt="image"
                  src="/slide-1-1400w.png"
                  className="home-image20"
                />
                <span className="home-text33">
                  WFH One year on. Here’s what we’ve learned.
                </span>
              </div>
              <div className="slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image21"
                />
                <span className="home-text34">
                  <span>This is a test slide</span>
                  <br></br>
                </span>
              </div>
              <div className="slide">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image22"
                />
                <span className="home-text37">
                  <span>This one also!</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-buttons-container">
              <div className="home-buttons2">
                <button id="previous-slide" className="home-previous button">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                  </svg>
                </button>
                <button id="next-slide" className="home-next button">
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <Branding></Branding>
          <nav className="home-navigation-links">
            <Link to="/" className="home-link18 navLink">
              Mission
            </Link>
            <Link to="/" className="home-link19 navLink">
              Take Action
            </Link>
            <Link to="/" className="home-link20 navLink">
              News
            </Link>
            <Link to="/" className="home-link21 navLink">
              Contact
            </Link>
          </nav>
        </div>
        <div className="home-middle">
          <span className="home-text40">
            +0 222.345.987 office@helpa.template
          </span>
          <span className="home-text41">
            Forge Co.13G Eagle Blvd.Nashville, TN 37011-5678
          </span>
        </div>
        <div className="home-bottom">
          <span className="home-copyright">© Copyright Company – 2022</span>
        </div>
      </footer>
      <div>
        <div className="home-container19">
          <script
            html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
          ></script>
        </div>
      </div>
      <div>
        <div className="home-container21">
          <script
            html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
          ></script>
        </div>
      </div>
    </div>
  )
}

export default Home
