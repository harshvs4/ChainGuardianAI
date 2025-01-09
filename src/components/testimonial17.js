import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text29">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text33">
                  See what our clients have to say about ChainGuardian AI.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            CEO, Tech Company X
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        ChainGuardian AI has revolutionized the way we manage
                        compliance in our blockchain projects. The AI Assistant
                        is incredibly helpful and the real-time updates are a
                        game-changer.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            COO, Blockchain Startup Y
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text32">
                        I highly recommend ChainGuardian AI to any company
                        working with blockchain technology. The Dashboard
                        provides valuable insights and the compliance tools are
                        top-notch.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            David Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            CTO, Crypto Firm Z
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        Using ChainGuardian AI has significantly improved our
                        risk management processes. The Watchlist Management
                        feature is particularly useful for staying ahead of
                        potential compliance issues.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            CFO, Digital Asset Company W
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        ChainGuardian AI has been a game-changer for our
                        organization. The Historical Analysis feature has helped
                        us track and analyze past transactions effectively.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Alt: 'Image of Sarah Johnson, CFO of Digital Asset Company W',
  review4: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1666885181184-dc564c517268?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author3Position: undefined,
  author3Name: undefined,
  author1Position: undefined,
  heading1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1453365180904-3312e935e12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe, CEO of Tech Company X',
  review1: undefined,
  author2Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1636041241164-3d20e98d43a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author3Alt: 'Image of David Lee, CTO of Crypto Firm Z',
  author2Src:
    'https://images.unsplash.com/photo-1715163545065-bb96c94cb637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith, COO of Blockchain Startup Y',
  content1: undefined,
  review3: undefined,
  author4Position: undefined,
  author2Position: undefined,
  author4Name: undefined,
}

Testimonial17.propTypes = {
  author4Alt: PropTypes.string,
  review4: PropTypes.element,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  author1Position: PropTypes.element,
  heading1: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
  author3Src: PropTypes.string,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.element,
  review3: PropTypes.element,
  author4Position: PropTypes.element,
  author2Position: PropTypes.element,
  author4Name: PropTypes.element,
}

export default Testimonial17
