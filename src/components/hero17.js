import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Transforming Blockchain Compliance with AI
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text5">
                  Welcome to ChainGuardian AI, your trusted partner for seamless
                  compliance management and risk analysis. Our AI-driven
                  platform empowers businesses to stay ahead of regulatory
                  requirements and ensure the security of blockchain
                  transactions with real-time insights.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        {/* <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                // <Fragment>
                //   <span className="hero17-text7">Explore Features</span>
                // </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text6">Get Started</span>
                </Fragment>
              )}
            </span>
          </button>
        </div> */}
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  heading1: undefined,
  content1: undefined,

  image1Alt: 'Robot Image',
  image1Src: 'https://images.unsplash.com/photo-1581090465357-c8a1f71f0407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU5MHw&ixlib=rb-4.0.3&q=80&w=1080',

  image2Alt: 'Stock Market Image',
  image2Src: 'https://images.unsplash.com/photo-1651340981821-b519ad14da7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D',

  image3Alt: 'AI Image',
  image3Src: 'https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D',

  image4Alt: 'Compliance Image',
  image4Src: 'https://media.istockphoto.com/id/638256864/photo/compliance-concept-with-related-keywords.webp?a=1&b=1&s=612x612&w=0&k=20&c=ftkzFugS7Cgx1Cdx4SLG5zcVyt-sO9L0nC2ndXMKQrI=',

  image5Alt: 'Stock Market Crash Image',
  image5Src: 'https://media.istockphoto.com/id/1214205670/photo/stockmarket-crash-and-financial-crisis-investmenst-business-leading-to-recession-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=TOrKoGTUQqbILGeznvJPtRiEqTaV6InsgpcECNVl4qI=',

  image6Alt: 'Ethereum Image',
  image6Src: 'https://images.unsplash.com/photo-1639987759021-bc55a0c96ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU4OHw&ixlib=rb-4.0.3&q=80&w=1080',

  image7Alt: 'Dashboard Image',
  image7Src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',

  image8Alt: 'Market Image',
  image8Src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA&ixlib=rb-4.0.3&q=80&w=1080',
  
  image9Alt: 'Random Image',
  image9Src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvY2tjaGFpbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3Dixlib=rb-4.0.3&q=80&w=1080',

  image10Alt: 'Bitcoin Image',
  image10Src: 'https://images.unsplash.com/photo-1639710342143-f87416f1a913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU5MHw&ixlib=rb-4.0.3&q=80&w=1080',

  image11Alt: 'Multimodal Image',
  image11Src: 'https://images.unsplash.com/photo-1717501217749-bbd8061155f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDYyNjU8N3w&ixlib=rb-4.0.3&q=80&w=1080',

  image12Alt: 'Compliance2 Image',
  image12Src: 'https://media.istockphoto.com/id/1370928101/photo/compliance-virtual-diagram-for-regulations-law-standards-requirements-and-audit-co-working.webp?a=1&b=1&s=612x612&w=0&k=20&c=nCo7uH-vIdx4S8vW1VqV0VbSgGwmf9ZvqODwRH0UqaY=',

  action1: undefined,
  action2: undefined,
};

Hero17.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,

  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,

  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,

  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,

  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,

  image5Alt: PropTypes.string,
  image5Src: PropTypes.string,

  image6Alt: PropTypes.string,
  image6Src: PropTypes.string,

  image7Alt: PropTypes.string,
  image7Src: PropTypes.string,

  image8Alt: PropTypes.string,
  image8Src: PropTypes.string,

  image9Alt: PropTypes.string,
  image9Src: PropTypes.string,

  image10Alt: PropTypes.string,
  image10Src: PropTypes.string,

  image11Alt: PropTypes.string,
  image11Src: PropTypes.string,

  image12Alt: PropTypes.string,
  image12Src: PropTypes.string,

  action1: PropTypes.element,
  action2: PropTypes.element,
};

export default Hero17;