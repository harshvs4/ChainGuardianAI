import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import Logo from '../assets/logo/ChainGuardianAI.png'

import './footer4.css';

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="/transactions"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text16">Dashboard</span>
                </Fragment>
              )}
            </a>
            <a
              href="/regulatory"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text19">Regulatory Library</span>
                </Fragment>
              )}
            </a>
            <a
              href="/assistant"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text14">AI Assistant</span>
                </Fragment>
              )}
            </a>
            {/* <a
              href="/help"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text17">Help/FAQ</span>
                </Fragment>
              )}
            </a>
            <a
              href="/settings"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text15">Settings</span>
                </Fragment>
              )}
            </a> */}
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                © 2024 ChainGuardian AI - All Rights Reserved
              </span>
            </div>
            <div className="footer4-footer-links">
              <a
                href="/privacy-policy"
                className="thq-body-small"
              >
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Privacy Policy</span>
                  </Fragment>
                )}
              </a>
              <a
                href="/terms-of-use"
                className="thq-body-small"
              >
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text18">Terms of Use</span>
                  </Fragment>
                )}
              </a>
              <a
                href="/cookies-policy"
                className="thq-body-small"
              >
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text21">Cookies Policy</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer4.defaultProps = {
  link3: '/assistant',
  link5: undefined,
  link1: '/transactions',
  link4: undefined,
  logoAlt: 'ChainGuardian AI Logo',
  termsLink: undefined,
  link2: '/regulatory',
  logoSrc: Logo, 
  privacyLink: undefined,
  cookiesLink: undefined,
};

Footer4.propTypes = {
  link3: PropTypes.element,
  link5: PropTypes.element,
  link1: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
  cookiesLink: PropTypes.element,
};

export default Footer4;