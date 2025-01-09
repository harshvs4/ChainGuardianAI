import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import './contact10.css';

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text19">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text18">
                    Have questions about ChainGuardian AI or need assistance
                    during the hackathon? Contact us today!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    Email: harshvs4@outlook.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Reach out via email for detailed queries, feedback, or
                    partnership discussions. We'll respond promptly.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="contact10-container4">
            <img
              alt="Twitter Icon"
              src="https://images.unsplash.com/photo-1598018553943-29ace5bf9867?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D"
              className="contact10-image3 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              Twitter Updates
            </h3>
            <p className="thq-body-large">
              Follow us for real-time updates, announcements, and hackathon tips:{" "}
              <a
                href="https://twitter.com/chainguardianai"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter.com/chainguardianai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact10.defaultProps = {
  location1ImageSrc:
    'https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1haWx8ZW58MHx8MHx8fDA%3D',
  content1: undefined,
  location1ImageAlt: 'Email Icon',
  heading1: undefined,
  location1Description: undefined,
  location1: undefined,
};

Contact10.propTypes = {
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  location1: PropTypes.element,
};

export default Contact10;