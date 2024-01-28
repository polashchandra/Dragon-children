import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Leftnav from "./../shared/Leftnav";
import Rightnav from "../shared/rightnav";
import BrekingNews from "../shared/brekingNews";
import { useLoaderData } from "react-router-dom";
import News from "./news";



const Home = () => {
  const news=useLoaderData()
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BrekingNews></BrekingNews>
      <Nav></Nav>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="col-span-1">
          <Leftnav></Leftnav>
        </div>
        <div className="col-span-2">this is main
        {
          news.map(anews=><News key={anews._id} news={anews}></News>)
        }
        
        </div>
        <div className="col-span-1">
          <Rightnav></Rightnav>
        </div>
      </div>
    </div>
  );
};

export default Home;
