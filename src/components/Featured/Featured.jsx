import React from 'react'
import "./Featured.scss";
const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
            <h1>Find the Perfect <span>freelance</span> Services for Your Business </h1>
            <div className="search">
                <div className="searchInput">
                    <img src="public\img\search.jpg" alt="" srcset="" />
                    <input type="text" name="" placeholder="Try to search here" id="" />
                </div>
                <button>Search</button>
            </div>
            <br />
            <br />
            <div className="popular">
                <span>Popular:</span>
                <button>WebDesign</button>
                <button>WordPress</button>
                <button>Logo Design</button>
                <button>Ai Services</button>

            </div>
            </div>
            <div className="right">
                <img src="public/img/right_side.jpg" alt="not found"/>
            </div>

        </div>
      
    </div>
  )
}

export default Featured
