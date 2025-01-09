import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
//import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
//import Features25 from '../components/features25'
//import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ChainGuardian AI</title>
        <meta property="og:title" content="ChainGuardianAI" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Dashboard</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Regulatory Library</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">AI Assistant</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Dashboard</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Regulatory Library</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">AI Assistant</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Sign In</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Get Started</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Welcome to ChainGuardian AI</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Monitor your transactions and risks
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Stay informed with the latest regulations
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get assistance from our AI chatbot
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Explore Features</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Welcome to ChainGuardian AI, your trusted partner for seamless
              compliance management and risk analysis. Our AI-driven platform
              empowers businesses to stay ahead of regulatory requirements and ensure
              the security of blockchain transactions with real-time insights.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <div className="hero-heading-container">
              <h1 className="home-text117">Transforming Blockchain Compliance with AI</h1>
            </div>
          </Fragment>
        }
      />
      {/* <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">AI Chatbot</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Dynamic Charts</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Compliance Tools</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Engage with our AI Assistant for quick assistance and guidance.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Interactive dynamic charts for real-time data analysis.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Access to compliance tools for regulatory requirements.
            </span>
          </Fragment>
        }
      ></Features24> */}
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Sign up now and experience the power of ChainGuardian AI.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to streamline your compliance process?
            </span>
          </Fragment>
        }
      ></CTA26>
      {/* <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Feature #1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Feature #2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Feature #3</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Features25> */}
      {/* <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Basic Plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$299/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$999/year</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">Save 15% with annual billing</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Sign up now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$1999/year</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">Save 16% with annual billing</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Sign up now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$2999/year</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">Save 17% with annual billing</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">
              Contact us for enterprise pricing
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">
              $0.50 per additional transaction over limit
            </span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">
              Real-time transaction monitoring
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">AI-powered risk analysis</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Customizable watchlists</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">All features from Basic Plan</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Advanced risk visualizations</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Enhanced compliance tools</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Dynamic charts and graphs</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">
              All features from Advanced Plan
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">
              AI Assistant for real-time insights
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">Regulatory library access</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">
              Risk assessment modal explanations
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Dedicated account manager</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Historical data analysis</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">24/7 customer support</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">User-friendly settings</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Customizable dashboard layouts</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Priority email support</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">
              Tailored solutions for your business needs
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">
              $100 credit towards training sessions
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">
              $200 credit towards compliance consulting services
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">
              $300 credit towards customization services
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14> */}
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">
              Explore ChainGuardian AI Features
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">
              Utilize Real-Time Transaction Previews
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">
              Access Dashboard for Comprehensive Insights
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">
              Engage with AI Assistant for Assistance
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Discover the powerful features of ChainGuardian AI designed to
              streamline compliance processes and enhance risk management in
              blockchain transactions.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Get instant access to real-time transaction previews to stay
              updated on the latest blockchain activities and potential risks.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Navigate to the Dashboard to view transaction tables, risk
              visualizations, and receive real-time updates for informed
              decision-making.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Interact with the AI Assistant to receive personalized support,
              compliance guidance, and answers to your queries in real-time.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              ChainGuardian AI has revolutionized the way we manage compliance
              in our blockchain projects. The AI Assistant is incredibly helpful
              and the real-time updates are a game-changer.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              I highly recommend ChainGuardian AI to any company working with
              blockchain technology. The Dashboard provides valuable insights
              and the compliance tools are top-notch.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Using ChainGuardian AI has significantly improved our risk
              management processes. The Watchlist Management feature is
              particularly useful for staying ahead of potential compliance
              issues.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              ChainGuardian AI has been a game-changer for our organization. The
              Historical Analysis feature has helped us track and analyze past
              transactions effectively.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              See what our clients have to say about ChainGuardian AI.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">David Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Sarah Johnson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">CEO, Tech Company X</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">COO, Blockchain Startup Y</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">CTO, Crypto Firm Z</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">CFO, Digital Asset Company W</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Have questions or need guidance? We're here to help!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Get in Touch</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">
              Email: harshvs4@outlook.com
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Phone: +1-800-123-4567</span>
          </Fragment>
        }
        location3={
          <Fragment>
            <span className="home-text214">Hackathon Support: +1-800-HACKATHON</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Reach out to us via email for detailed inquiries, partnership proposals,
              or feedback. We’ll respond promptly!
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              Call us for immediate assistance during business hours or for general
              queries.
            </span>
          </Fragment>
        }
        location3Description={
          <Fragment>
            <span className="home-text215">
              Dedicated hackathon support hotline available 24/7 during the event.
            </span>
          </Fragment>
        }
        additionalSupport={
          <Fragment>
            <span className="home-text216">
              Follow us on Twitter for updates and announcements:{" "}
              <a href="https://twitter.com/chainguardianai" target="_blank">
                twitter.com/chainguardianai
              </a>
            </span>
          </Fragment>
        }
      />
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Dashboard</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Regulatory Library</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">AI Assistant</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Help/FAQ</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Settings</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
