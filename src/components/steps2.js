import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import './steps2.css';

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Unlock Seamless Compliance and Risk Management
            </h2>
            <p className="thq-body-large">
              ChainGuardian AI is your trusted partner in navigating the complexities of blockchain compliance and financial risk. Harness the power of AI to streamline your operations and stay ahead of regulatory challenges.
            </p>
            <div className="steps2-actions">
              {/* <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Get Started</span>
              </button> */}
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Explore Cutting-Edge Compliance Tools
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      Leverage AI-powered compliance tools to ensure your operations align with the latest regulatory standards, reducing risks and enhancing transparency.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Monitor Transactions in Real-Time
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Stay on top of your blockchain transactions with real-time previews and alerts, giving you the insights you need to act quickly and efficiently.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Access Comprehensive Dashboards
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Gain actionable insights through interactive dashboards that provide a detailed overview of risks, transaction statuses, and compliance metrics.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Consult with Our AI Assistant
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Get instant guidance from our AI Assistant to address compliance concerns, optimize processes, and answer your queries in real time.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Steps2.defaultProps = {
  step1Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step4Title: undefined,
  step4Description: undefined,
};

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Title: PropTypes.element,
  step4Description: PropTypes.element,
};

export default Steps2;