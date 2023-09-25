import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { title, picture, category, btn_color, card_bg_color, text_color } = card;
    return (
        <div className="w-[312px] rounded-lg font-inter" style={{backgroundColor: card_bg_color}}>
            <img src={picture} alt="picture" className="w-[312px] h-[194px] rounded-t-lg"/>
            <div className="ml-4 mt-4">
            <button type="button" className="px-[10px] py-1 text-[14px] font-medium rounded" style={{
                backgroundColor: btn_color,
                color: text_color
            }}>{category}</button>
            </div>
            <h1 className="text-[20px] font-[700] ml-4 mt-4 w-3/4 mb-4" style={
                {color:text_color}
            }>
                {title}
            </h1>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
}

export default Card;