
const DonateCard = ({ donate }) => {
    console.log(donate);
    return (
        <div className="h-[200px] flex justify-center items-center border gap-2">
            {donate.title}
        </div>
    );
};

export default DonateCard;