import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const DonateCard = ({ donate }) => {
    const { title, picture, category, btn_color, card_bg_color, text_color, id, price } = donate;

    return (
        <div
            className="h-[200px] lg:w-[648px] rounded-lg flex justify-between items-center border gap-6 font-inter"
            style={
                { backgroundColor: card_bg_color }
            }>
            <figure className="">
                <img src={picture} alt="picture" className="rounded-l-lg w-[220px] h-[200px]" />
            </figure>
            <div className="flex-1">
                <div className="" >
                    <button type="button" className="px-2 md:px-[10px] py-1 text-xs md:text-[14px] font-normal rounded" style={{
                        backgroundColor: btn_color,
                        color: text_color
                    }}>{category}</button>
                </div>
                <h1 className="text-sm md:text-[24px] font-medium md:font-semibold" style={
                    { color: "#0B0B0B" }
                }>
                    {title}
                </h1>
                <p className="font-inter text-xs md:text-[16px] font-semibold">
                    <span
                        style={
                            { color: text_color }
                        }>
                        ${price}.00

                    </span>
                </p>
                <Link to={`/${id}`}>
                    <button
                        type="button"
                        className="text-white text-xs md:text-[18px] px-2 md:px-4 py-1 md:py-2 font-medium md:font-semibold font-inter rounded md:mt-6"
                        style={
                            { backgroundColor: text_color }
                        }>
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

DonateCard.propTypes = {
    donate: PropTypes.object,
}

export default DonateCard;