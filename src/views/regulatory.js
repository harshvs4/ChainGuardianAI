import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
// 1) Import your JSON data
import complianceData from '../news/compliance_articles_full.json';

import './regulatory.css';

const RegulatoryLibrary = () => {
  return (
    <div className="regulatory-container">
      <Helmet>
        <title>Regulatory Library - ChainGuardian AI</title>
        <meta
          property="og:title"
          content="Regulatory Library - ChainGuardian AI"
        />
      </Helmet>

      {/* 2) Navbar */}
      <Navbar8
        link1={
          <Fragment>
            <span className="regulatory-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="regulatory-text101">Dashboard</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="regulatory-text102">Regulatory Library</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="regulatory-text103">AI Assistant</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="regulatory-text104">Sign In</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="regulatory-text105">Get Started</span>
          </Fragment>
        }
      />

      {/* 3) Hero Banner */}
      <div className="regulatory-hero">
        <div className="regulatory-hero-content">
          <h1>Regulatory Library</h1>
          <p>Stay up to date with the latest compliance and regulatory news.</p>
        </div>
      </div>

      {/* 4) Compliance News Section */}
      <div className="compliance-wrapper">
        <h2>Latest Compliance News</h2>
        <p className="compliance-intro">
          Browse through industry updates, job postings, and announcements
          related to financial compliance.
        </p>

        <div className="compliance-cards">
          {complianceData.map((item, index) => (
            <div key={index} className="compliance-card">
              <h3>{item.title}</h3>
              <p className="compliance-desc">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="compliance-link"
              >
                Read More
              </a>
              {/* If you want to display the full_text or content */}
              <details className="compliance-details">
                <summary>View Full Text</summary>
                <p>{item.full_text}</p>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* 5) Footer */}
      <Footer4
        link1={
          <Fragment>
            <span className="regulatory-text214">Dashboard</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="regulatory-text215">Regulatory Library</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="regulatory-text216">AI Assistant</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="regulatory-text217">Help/FAQ</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="regulatory-text218">Settings</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="regulatory-text219">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="regulatory-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="regulatory-text221">Privacy Policy</span>
          </Fragment>
        }
      />
    </div>
  );
};

export default RegulatoryLibrary;