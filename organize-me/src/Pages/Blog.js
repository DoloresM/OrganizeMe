import React from 'react';
import '../App.css';
import Nav from './Nav.js';
import BlogHeader from './BlogHeader.js'
import BlogBody from './BlogBody.js'

function Blog() {
    return (
        <React.Fragment>
            <Nav/>
            <BlogHeader/>
            <BlogBody/>
        </React.Fragment>
        
        
    );
  }
  export default Blog;