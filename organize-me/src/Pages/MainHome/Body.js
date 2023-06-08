
import Banner from "./InfoSection/Banner.js";
import SectionBody from "./InfoSection/SectionBody.js";
import Partners from "./Partnerships/Partners.js";
import Reviews from "./Reviews/Review.js";
import ArticleBlogs from "./Articles/ArticleBlogs.js";
import BlogSec from "./MainBodyBlog/BlogSec.js";



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
  
 
