import React from 'react'
const FeatureBanner = ({img,bgImg,desc}) => {
  return (
    <div className="featured-content" style={{background: `linear-gradient(to bottom, rgba(0,0,0,0), #151515),url(${bgImg})`}}>
     <img className="featured-title" src={img} alt=""/>
        <p className="featured-desc">
            {desc}
        </p>
        <button className="featured-button">WATCH</button>
    </div>
  )
}

export default FeatureBanner