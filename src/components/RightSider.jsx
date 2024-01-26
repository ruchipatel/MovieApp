import React from 'react'
import FeatureBanner from './FeatureBanner'
import MovieListContainer from './MovieListContainer'
import BannerImg from '../assets/img/f-t-1.png'
import FeatureBannerImg from '../assets/img/f-1.jpg'
import BannerImage from '../assets/img/f-t-2.png'
import FeatureBannerImage from '../assets/img/f-2.jpg'
const RightSider = () => {
  return (
    <div className="container">
        <div className="content-container">
            <FeatureBanner img={BannerImg} bgImg={FeatureBannerImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quasi."/>
            <MovieListContainer title="Trending Now" category="top_rated"/>
            <MovieListContainer title="Popular Now" category="popular"/>
            <FeatureBanner img={BannerImage} bgImg={FeatureBannerImage} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quasi."/>
            <MovieListContainer title="New Releases" category="now_playing"/>
            <MovieListContainer title="Coming Soon" category="upcoming"/>
        </div>
    </div>
  )
}

export default RightSider