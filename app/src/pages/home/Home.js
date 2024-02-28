import React from 'react';
import Offeres from './Offeres';
import Categories from './Categories';
import SubCategories from './SubCategories';

const Home = () => {
  return (
    <div className="home insta-an">
      <Offeres />
      <br/>
      <h1>Shop by Category</h1>
      <Categories />
      <br/>
      <SubCategories />
    </div>
  );
};

export default Home;
