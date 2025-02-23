import React from 'react';
import Blogpage from './Blogpage';

const Blog10 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Munnar Tourism</h1>
        <p>Munnar is a town in the Western Ghats mountain range in India’s Kerala state. </p>
      </header>

      {/* About Munnar */}
      <section className="mb-5">
        <h2>About Munnar</h2>
        <p>
        A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Munnar</h2>
        <div className="row">
          {/* Tea Gardens*/}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Gateway+of+India"
                className="card-img-top"
                alt="Gateway of India"
              />
              <div className="card-body">
                <h5 className="card-title">Tea Gardens</h5>
                <p className="card-text">
                There are more than 50 tea estates in and around Munnar covering an area of 3000 hectares.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Rajamalai National Park*/}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Marine+Drive"
                className="card-img-top"
                alt="Marine Drive"
              />
              <div className="card-body">
                <h5 className="card-title">Rajamalai National Park</h5>
                <p className="card-text">
                Eravikulam National Park is a 97 km² national park located along the Western Ghats in the Idukki and Ernakulam districts of Kerala in India.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Anamudi Peak*/}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Elephanta+Caves"
                className="card-img-top"
                alt="Anamudi Peak"
              />
              <div className="card-body">
                <h5 className="card-title">Anamudi Peak</h5>
                <p className="card-text">
                With an elevation of 2,695 metres and a topographic prominence of 2,479 metres, it is the highest peak in the Western Ghats and in South India.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Munnar</h2>
        <p>
        The best time to visit Munnar is during the winter months, from October to February when the weather is cool, misty, and perfect for sightseeing with pleasant temperatures and stunning views of the tea plantations; this is considered the peak season. 
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Wear comfortable clothing and footwear as you will be walking a lot while exploring the city.</li>
          <li>Be cautious of the traffic in Mumbai, as it can be chaotic at times, especially during rush hours.</li>
          <li>Always carry bottled water and stay hydrated, as Mumbai’s climate can be hot and humid.</li>
          <li>Try local street food like vada pav, pav bhaji, and bhel puri for an authentic Mumbai experience.</li>
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

export default Blog10;