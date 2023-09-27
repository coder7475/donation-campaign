import PropTypes from 'prop-types';

const Banner = ({  handleSearchClick }) => {
    return (
        <div className="h-56 md:h-[500px] flex flex-col justify-center items-center gap-[40px]">
            <h1 className="text-center text-[#0B0B0B] font-inter text-xl md:text-[48px] font-bold">I Grow By Helping People In Need</h1> 
            <form className="flex" onSubmit={handleSearchClick}>
                <input type="text" name="search" id="search" className="w-36 sm:w-44 md:w-56 lg:w-80 h-[50px] rounded-l-lg p-4 text-[14px] font-normal font-inter text-[#0B0B0B66]" placeholder="Search Here" />        
                <input className="text-white w-12 sm:w-14 md:w-20 lg:w-[110px] h-[50px] bg-[#FF444A] rounded-r-lg text-xs sm:px-1 lg:text-[16px] font-medium lg:font-semibold" type="submit"   value="Search"/> 
            </form>
        </div>
    );
};
Banner.propTypes = {
    // handleSearchBar: PropTypes.func,
    handleSearchClick: PropTypes.func
}
export default Banner;