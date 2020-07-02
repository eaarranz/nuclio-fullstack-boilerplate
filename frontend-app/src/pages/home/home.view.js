import React from 'react';
import styles from './home.module.css';
import PinCard from "../../components/pinCard/pinCard.view";

const Home = () => {
  return (
    <div className={styles.__home_container}>
      <PinCard
        name="Nombre del pin"
        description="Un fantástico pin"
        image_url="https://images.unsplash.com/photo-1566590709188-4751c54143a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  );
};

export default Home;