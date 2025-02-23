import React from 'react';
import Blogpage from './Blogpage';

const Blog4 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Bangalore: The Silicon Valley of India</h1>
        <p>Explore the perfect blend of modernity, nature, and culture in Bangalore!</p>
      </header>

      {/* About Bangalore */}
      <section className="mb-5">
        <h2>About Bangalore</h2>
        <p>
          Bangalore, also known as Bengaluru, is the capital city of Karnataka and the IT hub of India. Known for its pleasant weather, lush greenery, historical sites, and modern infrastructure, Bangalore is a vibrant city that offers something for everyone—from tech enthusiasts to nature lovers and culture seekers.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Bangalore</h2>
        <div className="row">
          {/* Bangalore Palace */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Bangalore+Palace"
                className="card-img-top"
                alt="Bangalore Palace"
              />
              <div className="card-body">
                <h5 className="card-title">Bangalore Palace</h5>
                <p className="card-text">
                  Bangalore Palace is a historic palace inspired by the Windsor Castle in England. It’s known for its stunning architecture, vintage furniture, and beautiful interiors.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Lalbagh Botanical Garden */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Lalbagh+Botanical+Garden"
                className="card-img-top"
                alt="Lalbagh Botanical Garden"
              />
              <div className="card-body">
                <h5 className="card-title">Lalbagh Botanical Garden</h5>
                <p className="card-text">
                  Lalbagh is one of the most famous botanical gardens in India, known for its vast collection of plants, centuries-old trees, and the Glass House, which hosts an annual flower show.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Cubbon Park */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Cubbon+Park"
                className="card-img-top"
                alt="Cubbon Park"
              />
              <div className="card-body">
                <h5 className="card-title">Cubbon Park</h5>
                <p className="card-text">
                  A lush green park in the heart of the city, Cubbon Park is perfect for morning walks, picnics, and enjoying nature amidst the urban landscape.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Bangalore</h2>
        <p>
          The best time to visit Bangalore is between **October and March**, when the weather is pleasant and perfect for sightseeing and outdoor activities. Summers (March to May) can be hot, while the monsoon season (June to September) can bring heavy rains.
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Carry light clothing during summer months and a light jacket for evenings in winter.</li>
          <li>Use public transport like the metro, buses, or ride-sharing apps for easy commuting around the city.</li>
          <li>Visit the city’s parks early in the morning or in the evening to enjoy a peaceful experience.</li>
          <li>Try local South Indian cuisine, especially dosas, idlis, and filter coffee.</li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Bannerghatta National Park</strong>: A wildlife park located on the outskirts of Bangalore, home to a variety of species, including tigers and elephants.</li>
          <li><strong>Vidhana Soudha</strong>: A stunning legislative building, known for its architecture and significance in Karnataka's politics.</li>
          <li><strong>Nandi Hills</strong>: A popular hill station located near Bangalore, offering panoramic views and historical sites.</li>
        </ul>
      </section>
</div>
  );
};

export default Blog4;