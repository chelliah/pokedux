import React from 'react'
var src = require('../../assets/images/pokeball.svg')

const Header = () => (
    <h1 className="header">
      {/* <span>Redux</span> */}
      {/* <img src={src} className="header--pokeball"/> */}
      <svg viewBox="0 0 1000 1000" className="header--pokeball">
        <path className="st0" d="M904,469.5H671.4C657,387.9,585.8,325.9,500,325.9s-157,62-171.4,143.6H0.9C16.7,207.6,234.1,0,500,0
        	c0.8,0,1.7,0,2.5,0C708.1,1.8,890.3,218,904,469.5z"/>
        <path className="st1" d="M999.1,469.5h-95C890.3,218,708.1,1.8,502.5,0C767.3,1.3,983.4,208.4,999.1,469.5z"/>
        <path className="st2" d="M904.1,530c-13.5,250.7-194.4,466.5-399,470c-1.7,0-3.4,0-5,0C233.9,1000,16.4,792.2,0.9,530h327.6
        	c14.2,81.8,85.6,144.1,171.5,144.1S657.3,611.8,671.5,530H904.1z"/>
        <path className="st3" d="M999.1,530C983.7,790.5,768.8,997.4,505,1000c204.6-3.5,385.5-219.3,399-470H999.1z"/>
        {/* <path className="st4" d="M999.1,469.5H671.4C657,387.9,585.8,325.9,500,325.9s-157,62-171.4,143.6H0.9C0.3,479.6,0,489.8,0,500
        	c0,10.1,0.3,20.1,0.9,30h327.6c14.2,81.8,85.6,144.1,171.5,144.1S657.3,611.8,671.5,530h327.6c0.6-9.9,0.9-19.9,0.9-30
        	C1000,489.8,999.7,479.6,999.1,469.5z M609.4,530c-13.2,48.1-57.2,83.5-109.4,83.5s-96.3-35.4-109.4-83.5c-2.6-9.5-4-19.6-4-30
        	c0-10.6,1.4-20.8,4.1-30.5c13.3-47.9,57.2-83,109.3-83s96,35.1,109.3,83c2.7,9.7,4.1,19.9,4.1,30.5C613.5,510.4,612,520.5,609.4,530
        	z"/> */}
        <path className="st4" d="M609.3,469.5c-13.3-47.9-57.2-83-109.3-83s-96,35.1-109.3,83c-2.7,9.7-4.1,19.9-4.1,30.5c0,10.4,1.4,20.5,4,30
        	c13.2,48.1,57.2,83.5,109.4,83.5s96.3-35.4,109.4-83.5c2.6-9.5,4-19.6,4-30C613.5,489.4,612,479.2,609.3,469.5z M580.5,530
        	c-12.2,32.6-43.6,55.9-80.5,55.9s-68.3-23.2-80.5-55.9c-3.5-9.3-5.4-19.4-5.4-30c0-10.7,2-21,5.6-30.5
        	c12.3-32.4,43.6-55.4,80.3-55.4s68,23,80.3,55.4c3.6,9.5,5.6,19.7,5.6,30.5C585.9,510.6,584,520.7,580.5,530z"/>
        <path className="st5" d="M585.9,500c0,10.6-1.9,20.7-5.4,30c-12.2,32.6-43.6,55.9-80.5,55.9s-68.3-23.2-80.5-55.9
        	c-3.5-9.3-5.4-19.4-5.4-30c0-10.7,2-21,5.6-30.5c12.3-32.4,43.6-55.4,80.3-55.4s68,23,80.3,55.4C583.9,479,585.9,489.3,585.9,500z"
        	/>
      </svg>
    </h1>
)

export default Header
