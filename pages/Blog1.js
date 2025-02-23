import React from 'react';
import Blogpage from './Blogpage';

const Blog1 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Kanyakumari: A Tourist's Paradise</h1>
        <p>Explore the land where the three seas meet!</p>
      </header>

      {/* About Kanyakumari */}
      <section className="mb-5">
        <h2>About Kanyakumari</h2>
        <p>
          Kanyakumari, located at the southernmost tip of India, is where the Bay of Bengal, Arabian Sea, and Indian Ocean meet. It is famous for its beautiful beaches, temples, and historical monuments. Kanyakumari is not only a pilgrimage destination but also a paradise for nature lovers.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Kanyakumari</h2>
        <div className="row">
          {/* Vivekananda Rock Memorial */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://www.gettyimages.in/detail/photo/vivekananda-rock-memorial-kanyakumari-tamil-nadu-royalty-free-image/962192408"
                className="card-img-top"
                alt="Vivekananda Rock Memorial"
              />
              <div className="card-body">
                <h5 className="card-title">Vivekananda Rock Memorial</h5>
                <p className="card-text">
                  The Vivekananda Rock Memorial is located on a rock island in the Indian Ocean. It is dedicated to Swami Vivekananda and is an important pilgrimage and tourist destination.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Thiruvalluvar Statue */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Thiruvalluvar+Statue"
                className="card-img-top"
                alt="Thiruvalluvar Statue"
              />
              <div className="card-body">
                <h5 className="card-title">Thiruvalluvar Statue</h5>
                <p className="card-text">
                  This towering 133-feet statue honors the famous Tamil poet and philosopher Thiruvalluvar. The statue stands on a separate island and is one of the tallest statues in India.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Kanyakumari Beach */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Kanyakumari+Beach"
                className="card-img-top"
                alt="Kanyakumari Beach"
              />
              <div className="card-body">
                <h5 className="card-title">Kanyakumari Beach</h5>
                <p className="card-text">
                  Kanyakumari Beach is famous for its unique sunrise and sunset views where the three seas converge. It is a peaceful place for tourists to relax and enjoy the natural beauty.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Kanyakumari</h2>
        <p>
          The best time to visit Kanyakumari is from **October to March**. During this period, the weather is cool and pleasant, making it ideal for sightseeing. Avoid visiting during the summer months (April to June) as the temperatures can get quite high.
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Carry sunscreen and light clothing as it can get sunny during the day.</li>
          <li>Wear comfortable footwear for exploring the monuments and beaches.</li>
          <li>Respect the local customs and traditions, especially when visiting temples.</li>
          <li>Ensure you carry sufficient water to stay hydrated, especially during the summer months.</li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Padmanabhapuram Palace</strong>: A historical palace known for its traditional Kerala-style architecture.</li>
          <li><strong>Suchindram Temple</strong>: A famous temple located just a few kilometers from Kanyakumari, known for its musical pillars and grand structure.</li>
          <li><strong>Vattakottai Fort</strong>: A coastal fort offering beautiful views of the sea and nearby hills.</li>
        </ul>
      </section>
      </div>
  );
};

export default Blog1;