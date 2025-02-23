import React from 'react';
import image1 from './image/sunflower.jpg';

const Blogpage = ({ title, content }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tourist Places in India</h1>
      <p style={styles.paragraph}>
        India, with its rich cultural heritage and diverse landscapes, is home to some of the most famous and breathtaking tourist spots in the world. From the majestic mountains of the Himalayas to the tranquil backwaters of Kerala, the country offers a wide range of travel experiences that attract millions of visitors each year.
      </p>
      
      <h2 style={styles.subtitle}>1. Taj Mahal – Agra, Uttar Pradesh</h2>
      <p style={styles.paragraph}>
        The Taj Mahal, a symbol of eternal love, is undoubtedly one of the most iconic landmarks in India and is recognized as one of the Seven Wonders of the World. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this marble mausoleum attracts tourists from all corners of the globe who come to admire its beauty, symmetry, and the romantic history behind it.
      </p>

      <h2 style={styles.subtitle}>2. Jaipur – Rajasthan</h2>
      <p style={styles.paragraph}>
        Known as the 'Pink City' for its distinct pink-colored buildings, Jaipur is famous for its rich royal history, vibrant culture, and grand architecture. The city is home to majestic forts and palaces such as the Amber Fort, Hawa Mahal, and the City Palace. Jaipur is also known for its colorful bazaars and festivals, making it a cultural hub of India.
      </p>

      <h2 style={styles.subtitle}>3. Goa</h2>
      <p style={styles.paragraph}>
        Goa, with its pristine beaches, vibrant nightlife, and Portuguese-influenced architecture, is one of the most popular tourist destinations in India. Whether you’re seeking relaxation on a sandy beach, water sports activities, or a glimpse into India’s colonial past, Goa offers something for everyone. The state's relaxed atmosphere and warm climate attract travelers from all over the world.
      </p>

      <h2 style={styles.subtitle}>4. Kerala Backwaters</h2>
      <p style={styles.paragraph}>
        The backwaters of Kerala offer a serene and unique travel experience. Cruising on a traditional houseboat through the backwaters, surrounded by lush greenery, provides an escape from the hustle and bustle of everyday life. The Kerala backwaters are a blend of natural beauty and peaceful surroundings, with destinations like Alleppey and Kumarakom providing picturesque views.
      </p>

      <h2 style={styles.subtitle}>5. Varanasi – Uttar Pradesh</h2>
      <p style={styles.paragraph}>
        Varanasi, one of the oldest living cities in the world, holds great spiritual significance for Hindus. Situated on the banks of the river Ganges, the city is known for its ghats, temples, and the mesmerizing evening Ganga Aarti ceremony. Varanasi offers a glimpse into ancient Indian traditions and rituals, making it a must-visit for those seeking a spiritual journey.
      </p>

      <h2 style={styles.subtitle}>6. The Himalayas</h2>
      <p style={styles.paragraph}>
        The mighty Himalayas, stretching across the northern borders of India, are known for their stunning landscapes and are a major attraction for adventure enthusiasts and nature lovers. With famous trekking spots like Himachal Pradesh, Uttarakhand, and Ladakh, the Himalayas are perfect for trekking, mountaineering, and seeking spiritual solace in monasteries nestled in the mountains.
      </p>

      <p style={styles.paragraph}>
        India is a land of contrasts, and its tourist spots reflect the country’s diversity. Whether you are looking for historical landmarks, natural beauty, spiritual experiences, or a combination of everything, India has it all. The country continues to draw travelers from all over the world, offering a diverse range of experiences that cater to every type of tourist.
      </p>
      <img src={image1} alt=""></img>
    </div>
  );
};

// Inline Styles for the Component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#333',
    lineHeight: '1.6',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#2980b9',
  },
  paragraph: {
    fontSize: '1rem',
    textAlign: 'justify',
    marginTop: '10px',
  },

};

export default Blogpage;