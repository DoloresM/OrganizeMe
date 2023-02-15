const DashNav = ()=>{
    let img = "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

    
    return(
        <div className="dashNav"> 
            <nav className="flex flex-justify-space flex-space-center">
                <a href="/" className="logo">
                    <img src={img} alt="organize"/> 
                </a>
                <a href="/" className="menu-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="header-links hide-for-mobile">
                    <a href="http://">Home</a>
                    <a href="http://">About</a>
                    <a href="http://">Contact</a>
                    <a href="http://">Blog</a>
                    <a href="http://">Careers</a>
                </div>
                <a href="http://" className="button archorBtn">Sign Out</a>


            </nav>
          
        </div>

    );
}
export default  DashNav;