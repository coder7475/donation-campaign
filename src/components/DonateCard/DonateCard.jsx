
const DonateCard = ({ donate }) => {
    const { title, picture, category, btn_color, card_bg_color, text_color, id, price } = donate;

    return (
        <div
            className="h-[200px] w-[648px] rounded-lg flex justify-between items-center border gap-6 font-inter"
            style={
                { backgroundColor: card_bg_color }
            }>
            <figure className="">
                <img src={picture} alt="picture" className="w-[220px] h-[200px]" />
            </figure>
            <div className="flex-1">
                <div className="" >
                    <button type="button" className="px-[10px] py-1 text-[14px] font-normal rounded" style={{
                        backgroundColor: btn_color,
                        color: text_color
                    }}>{category}</button>
                </div>
                <h1 className="text-[24px] font-semibold" style={
                    { color: "#0B0B0B" }
                }>
                    {title}
                </h1>
                <p className="font-inter text-[16px] font-semibold">
                    <span
                        style={
                            { color: text_color }
                        }>
                        ${price}.00

                    </span>
                </p>
                <button type="button" className="text-white text-[18px] px-4 py-2 font-semibold font-inter rounded mt-6" style={
                    {backgroundColor: text_color}
                }>View Details</button>
            </div>
        </div>
    );
};

export default DonateCard;