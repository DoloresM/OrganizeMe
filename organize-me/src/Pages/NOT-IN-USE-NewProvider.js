import {React} from "react";
import {products} from "../AppContent";
console.log(products);

export const NewContext = React.createContext();

export const NewProvider = ()=>{
    const days = ["Mon", "Tues", "Wed"];
    return(
        <NewProvider.Provider value = {products}>
            []
        </NewProvider.Provider>
    )

}