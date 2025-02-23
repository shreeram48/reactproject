import React from 'react';
import Blogpage from './Blogpage';

const Blog9 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Goa Tourism</h1>
        <p>Goa is a popular destination for Indian and foreign tourists.</p>
      </header>

      {/* About Goa */}
      <section className="mb-5">
        <h2>About Goa</h2>
        <p>
        Goa is a popular tourist destination in India known for its beaches, culture, and nightlife. 
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Goa</h2>
        <div className="row">
          {/* South Goa */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Gateway+of+India"
                className="card-img-top"
                alt="Gateway of India"
              />
              <div className="card-body">
                <h5 className="card-title">South Goa</h5>
                <p className="card-text">
                South Goa is the best place to go if you want a relaxing vacation with quiet beaches. South Goa's beaches, including Palolem, Agonda and Colva, are less developed commercially yet have their own allure.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* North Goa*/}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Marine+Drive"
                className="card-img-top"
                alt="Marine Drive"
              />
              <div className="card-body">
                <h5 className="card-title">North Goa</h5>
                <p className="card-text">
                North Goa. Known as the party capital of Goa, North Goa comprises various popular beaches, including Candolim, Calangute, Baga, Anjuna, Vagator, Morjim, Ashwem, Mandrem, and Arambol.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/*For Aguada*/}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Elephanta+Caves"
                className="card-img-top"
                alt="Fort Aguada"
              />
              <div className="card-body">
                <h5 className="card-title">Fort Aguada</h5>
                <p className="card-text">
                Fort Aguada is a well-preserved seventeenth-century Portuguese-era fort, along with a lighthouse, standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Goa</h2>
        <p>
        The best time to visit Goa is between November and February when the weather is pleasant, with comfortable temperatures and minimal rainfall, making it ideal for enjoying the beaches and vibrant nightlife; this is considered the peak season in Goa. 
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li> Think Before You Clickbefore flashing your camera, look out for signs that say “No Pictures” or “Photography Restricted”,.</li>
          <li>Keep A Check Of What You EatPopular Konkani proverb states that “You can’t think until you’ve eaten well”.</li>
          <li>Shopaholics, Stay Alert!.Goa houses one of the best shopping destinations and is a shopaholic’s dream place as well.</li>
          <li>Say No To Drugs!.Consumption of drugs (unless prescribed by a doctor) is banned in India and is a non-bailable offense in every part of the country. </li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Chhatrapati Shivaji Maharaj Terminus (CST):</strong> A UNESCO World Heritage site and a beautiful example of Victorian Gothic architecture in Mumbai.</li>
          <li><strong>Juhu Beach:</strong> A popular beach in Mumbai known for its lively atmosphere and street food stalls.</li>
          <li><strong>Haji Ali Dargah:</strong> A famous mosque and tomb situated in the middle of the Arabian Sea, accessible by a causeway.</li>
        </ul>
      </section>
</div>
  );
};

export default Blog9;