import React from 'react';
import '../App.css';
import Nav from './MainHome/MainHeader/Nav.js';
import BlogHeader from './BlogHeader.js'
import BlogBody from './BlogBody.js'

function BlogPage() {
    return (
        <React.Fragment>
            <Nav/>
            <BlogHeader/>
            <BlogBody/>
        </React.Fragment>
        
        
    );
  }
  export default BlogPage;