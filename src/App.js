import React from 'react'
import './App.css';
import './assets/globalStyles/styles.css'
import Search from './components/common/searchComp/Search';
import Banner from './components/common/bannerComp/Banner';
import Occasion from './components/occasion/Occasion';
import PopularVenue from './components/popularVenue/PopularVenue';
import SyloSelect from './components/syloSelect/SyloSelect';
import CustomerReview from './components/customerReview/CustomerReview';
import BudgetVenue from './components/budgetVenue/BudgetVenue';

function App() {
  return (
    <div>
      <Search />
      <Banner />
      <Occasion />
      <PopularVenue />
      <SyloSelect />

      <CustomerReview />
      <BudgetVenue />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}

export default App;
