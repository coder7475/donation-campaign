
const Banner = () => {
    return (
        <div className="h-[500px] flex flex-col justify-center items-center gap-[40px]">
            <h1 className="text-center text-[#0B0B0B] font-inter text-[48px] font-bold">I Grow By Helping People In Need</h1> 
            <div className="flex">
                <input type="text" name="search" id="search" className="w-80 h-[50px] rounded-l-lg p-4 text-[14px] font-normal font-inter text-[#0B0B0B66]" placeholder="Search Here"/>        
                <button className="text-white w-[110px] h-[50px] bg-[#FF444A] rounded-r-lg text-[16px] font-semibold">Search</button>
            </div>
        </div>
    );
};

export default Banner;