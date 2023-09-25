import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/CardsDisplay/Cards";

const Home = () => {
    const [searchText, SetSearchText] = useState('');
    
    const handleSearchClick = (e) => {
        e.preventDefault();
        SetSearchText(e.target.search.value.toLowerCase());
    }
    // console.log(searchText);
    return (
        <>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="donation+image" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-neutral-200 bg-opacity-80"></div>
                <div className="relative max-w-[1320px] mx-auto pt-12">
                 <Banner  handleSearchClick={handleSearchClick}></Banner>
                </div>
            </div>
            <Cards searchText={searchText}></Cards>
        </>
        
    );
};

export default Home;