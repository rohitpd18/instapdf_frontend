import React, { useEffect, useState } from "react";
import "../assets/Css/Home.css";
import Card from "../Components/Card";
import { usePdfContext } from "../context/PdfContext";
import { useFilterContext } from "../context/FilterContext";


const Home = () => {
  const {isLoading}= usePdfContext()
  
  const {filterPdf}= useFilterContext()


  if(isLoading) {
    return <div>Loading...</div>
}

  return (
    <>
      <div className="home-heading">
        <h2>Free Pdfs are Free to download!!</h2>
      </div>

      <div className="container card-container">
        {filterPdf.map((ele) => {
          return (
            <Card
              key={ele._id}
              id={ele._id}
              name={ele.name}
              pdfUrl={ele.pdfUrl}
              pdfSize= {ele.pdfSize}
              noOfPage= {ele.noOfPage}
              img={ele.img}
              tag={ele.tag}
              category={ele.category}
              publishDate= {ele.publishDate}
              uploadedBy={ele.uploadedBy}
              subtitle= {ele.subtitle}
              description={ele.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
