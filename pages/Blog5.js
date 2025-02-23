import React from 'react';
import Blogpage from './Blogpage';

const Blog5 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Kerala: God's Own Country</h1>
        <p>Explore Kerala's scenic beauty, cultural heritage, and tranquil backwaters!</p>
      </header>

      {/* About Kerala */}
      <section className="mb-5">
        <h2>About Kerala</h2>
        <p>
          Kerala is a coastal state in the southern part of India, renowned for its beautiful backwaters, stunning beaches, serene hill stations, and rich cultural heritage. Known as "God's Own Country," Kerala is famous for its Ayurvedic treatments, houseboats, traditional dance forms, and vibrant festivals.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Kerala</h2>
        <div className="row">
          {/* Backwaters of Alleppey */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Backwaters+of+Alleppey"
                className="card-img-top"
                alt="Backwaters of Alleppey"
              />
              <div className="card-body">
                <h5 className="card-title">Backwaters of Alleppey</h5>
                <p className="card-text">
                  The backwaters of Alleppey are one of Kerala’s most famous attractions. Visitors can enjoy a peaceful boat ride through lush green landscapes and enjoy the tranquil beauty of the water.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Munnar */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Munnar"
                className="card-img-top"
                alt="Munnar"
              />
              <div className="card-body">
                <h5 className="card-title">Munnar</h5>
                <p className="card-text">
                  Munnar is a popular hill station known for its lush tea plantations, cool climate, and scenic mountain views. It’s perfect for trekking and nature walks.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Varkala Beach */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Varkala+Beach"
                className="card-img-top"
                alt="Varkala Beach"
              />
              <div className="card-body">
                <h5 className="card-title">Varkala Beach</h5>
                <p className="card-text">
                  Varkala is a beautiful beach located near Thiruvananthapuram, known for its cliff-side views and pristine beaches. It’s a great spot for relaxation and yoga.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Kerala</h2>
        <p>
          The best time to visit Kerala is between **November and February** when the weather is pleasant and ideal for exploring the beaches, hill stations, and backwaters. The monsoon season (June to September) offers a unique experience but can also bring heavy rains.
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Don't miss a backwater cruise in Alleppey; it's one of the top experiences in Kerala.</li>
          <li>Kerala’s cuisine is rich in flavor, so be sure to try local dishes like appam, puttu, and Kerala sadya (feast).</li>
          <li>Make sure to carry light clothing in summer, and a jacket for cool evenings in the hill stations.</li>
          <li>Respect local customs and dress modestly, especially when visiting temples and cultural sites.</li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Fort Kochi</strong>: A historic area with colonial architecture, famous for its Chinese fishing nets and vibrant arts scene.</li>
          <li><strong>Thekkady</strong>: Home to Periyar Wildlife Sanctuary, known for its tiger reserve and boat rides on Periyar Lake.</li>
          <li><strong>Wayanad</strong>: A scenic district known for its waterfalls, wildlife sanctuaries, and beautiful hill stations.</li>
        </ul>
      </section>
</div>
  );
};

export default Blog5;