import React from 'react';
import './main.css';
import Cards from '../cards/cards';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import CardsPage from '../cards-page/cards-page';

const Main = ({ data }) => {
  return (
    <div className="Main">
      <Cards data={data} />

    </div>
    // <Router>
    //   <div className="Main-cards">
    //     <h1 className="Main-title">ТОП-товары</h1>
    //     <div className="Cards">

    //       <Link to="/cards">
    //         {data.map((data) => {
    //           return (<div className="Card">
    //             <img src={data.src} />
    //             <div className="title">{data.title}</div>
    //             <div className="price">{data.price}</div>
    //           </div>
    //           )
    //         })}
    //       </Link>
    //       <Switch>
    //         <Route path="/cards">
    //           <CardsPage />
    //         </Route>

    //       </Switch>

    //     </div>
    //   </div>
    // </Router>

  )
};
export default Main;