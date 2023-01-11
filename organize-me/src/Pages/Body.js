import React ,{ useContext } from "react";
import BodyContent from "./Home.js";
import Banner from "./Banner.js"


// console.log(products)
// console.log(products[0])
// console.log(products[0].id)


// <BodyContent.Consumer>
// {
//     context =>{
//         return <h1>hello</h1>
//     }
// }

// </BodyContent.Consumer>


//     export const SectionBody = ()=>{
        
     
//         return(
            
//             <div class="section-body">
//                 <section>
                 
//                     <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
//                                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
//                                 et quasi architecto beatae vitae dicta sunt explicabo.
//                     </p>
//                     </section>
//                 <section>
//                         <img src="https://images.unsplash.com/photo-1622658641558-235f26dd270b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
//                 </section>    
//             </div>
          
    
    
//     )
//   }


  

export default function Body() {
  
    return (
        <div>
            <Banner/>
            <h4>online!</h4>
        </div>
        

    );
  }
  
 
