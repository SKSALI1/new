// fp for first section of portfolio
// sp for second section of portfolio

import React from "react";

function Portfolio(){
    return <div className="portfolio">
        <h1>Our Portfolio</h1>
        <p>"Design is not just what it looks like and feels like. Design is how it works."<br/> - Steve Jobs</p>
        <div className="row fp">
            <div className="col">
                <img className="portfolioimg" src="/images/servicesimage/myimage.jpg" alt="portfolio image" />
            </div>
            <div className="col">
                <img className="portfolioimg" src="/images/servicesimage/myimage.jpg" alt="portfolio image" />

            </div>
            <div className="col">
                <img className="portfolioimg" src="/images/servicesimage/myimage.jpg" alt="portfolio image" />

            </div>
        </div>
        <div className="row sp" >
            <div className="col">
                <img className="portfolioimg" src="/images/servicesimage/myimage.jpg" alt="portfolio image" />

            </div>
            <div className="col">
                <img className="portfolioimg" src="/images/servicesimage/myimage.jpg" alt="portfolio image" />

            </div>
            <div className="col">
                <img className="portfolioimg" src="/images/servicesimage/myimage.jpg" alt="portfolio image" />

            </div>
        </div>




    </div>
}

export default Portfolio;