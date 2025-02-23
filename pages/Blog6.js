import React from 'react';
import Blogpage from './Blogpage';

const Blog6 = () => {
  return (
    <div className="container mt-5">
    <header className="text-center mb-5">
      <h1>Tamil Nadu Tourism</h1>
      <p>Explore the cultural heritage, ancient temples, and scenic beauty of Tamil Nadu!</p>
    </header>

    {/* About Tamil Nadu */}
    <section className="mb-5">
      <h2>About Tamil Nadu</h2>
      <p>
        Tamil Nadu, located in the southernmost part of India, is a state renowned for its rich history, vibrant culture, and architectural wonders. From ancient temples with intricate carvings to serene beaches and hill stations, Tamil Nadu offers an unparalleled travel experience.
      </p>
    </section>

    {/* Top Tourist Places */}
    <section className="mb-5">
      <h2>Top Tourist Places in Tamil Nadu</h2>
      <div className="row">
        {/* Meenakshi Temple */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/300x200?text=Meenakshi+Temple"
              className="card-img-top"
              alt="Meenakshi Temple"
            />
            <div className="card-body">
              <h5 className="card-title">Meenakshi Temple</h5>
              <p className="card-text">
                The Meenakshi Temple in Madurai is one of the most famous Hindu temples in India. Known for its stunning architecture and vibrant sculptures, this temple is a major pilgrimage site.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* Ooty */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/300x200?text=Ooty"
              className="card-img-top"
              alt="Ooty"
            />
            <div className="card-body">
              <h5 className="card-title">Ooty</h5>
              <p className="card-text">
                Ooty, also known as Udhagamandalam, is a beautiful hill station located in the Nilgiri Hills. It is famous for its lush green landscapes, pleasant climate, and the Nilgiri Mountain Railway.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* Rameswaram */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/300x200?text=Rameswaram"
              className="card-img-top"
              alt="Rameswaram"
            />
            <div className="card-body">
              <h5 className="card-title">Rameswaram</h5>
              <p className="card-text">
                Rameswaram is a small town in Tamil Nadu known for the Ramanathaswamy Temple and its significance in Hindu mythology. The island is famous for its beautiful beaches and sacred temples.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Best Time to Visit */}
    <section className="mb-5">
      <h2>Best Time to Visit Tamil Nadu</h2>
      <p>
        The best time to visit Tamil Nadu is between **November and March** when the weather is pleasant and cool. This is ideal for exploring the temples, hill stations, and coastal regions. Summers (April to June) can be hot, while the monsoon season (July to September) brings heavy rains to the coastal areas.
      </p>
    </section>

    {/* Travel Tips */}
    <section className="mb-5">
      <h2>Travel Tips</h2>
      <ul>
        <li>Wear comfortable shoes as you will be walking around temples and historical sites a lot.</li>
        <li>Try local Tamil Nadu cuisine, such as dosa, idli, sambar, and filter coffee.</li>
        <li>Respect the dress code when visiting temples (modest attire is preferred).</li>
        <li>Use local transport options like buses and auto-rickshaws to navigate through the cities.</li>
      </ul>
    </section>
    </div>
  );
};

export default Blog6;