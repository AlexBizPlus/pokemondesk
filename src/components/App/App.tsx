import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className={cn(s.body)}>
      <Header />
      <div style={{ height: '800px', marginTop: '250px' }}>
        You can know the type of Pokemon, its strengths, disadvantages and abilities
      </div>
      <Footer />
    </div>
  );
};

export default App;
