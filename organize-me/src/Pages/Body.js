import React ,{ useContext } from "react";
import BodyContent from "./Home.js";
import Banner from "./Banner.js";
import SectionBody from "./SectionBody.js";
import DownloadIcons from "./DownloadIcons.js";
import Partners from "./Partners.js";
import Reviews from "./Review.js";
import ArticleBlogs from "./ArticleBlogs.js";



export default function Body() {
  
    return (
        <div>
            <Banner/>
            <SectionBody/>
            <SectionBody/>
            <DownloadIcons/>
            <Partners/>
            <Reviews/>
            <ArticleBlogs/>
            <h4>online!</h4>
        </div>
        

    );
  }
  
 
