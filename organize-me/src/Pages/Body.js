import React ,{ useContext } from "react";
import BodyContent from "./Home.js";
import Banner from "./Banner.js";
import SectionBody from "./SectionBody.js";
import Partners from "./Partners.js";
import Reviews from "./Review.js";
import ArticleBlogs from "./ArticleBlogs.js";
import BlogSec from "../BlogDwnld/BlogSec.js";



export default function Body() {
  
    return (
        <div >
            <Banner/>
            <SectionBody/>
            <SectionBody/>
            <BlogSec/>
            <Partners/>
            <Reviews/>
            <ArticleBlogs/>
        </div>
        

    );
  }
  
 
