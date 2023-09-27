import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const cards = useLoaderData();
    const id = useParams();
    const { donateId } = id;
    const ID = parseInt(donateId);
    // console.log(cards);
    // console.log(typeof ID);
    const details = cards.find(card => card.id === ID);
    // console.log(details);
    const { picture, price, title, description, text_color } = details;

    const handleDonateClick = () => {
        saveDonations(ID);
    }

    const notify = () => toast.success("Thank You! “You who believe, do not cancel out your charitable deeds with reminders and hurtful words” (Qur'an, 2:264).");
    return (
        <div className="max-w-[1320px] mx-auto mt-[80px]">
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-[130px] bg-[#0B0B0B] bg-opacity-50"></div>
                <img className="w-full rounded h-[300px] md:h-[700px]" src={picture} alt="donation picture" />
                <div className="absolute bottom-9 left-9" onClick={handleDonateClick}>
                    <button onClick={notify} className=" text-white w-fit rounded h-[24px] px-6 py-4 flex justify-center items-center" style={{ backgroundColor: text_color }}>Donate $
                        <span className="text-[20px] font-semibold font-inter">
                            {price}
                        </span>
                    </button>

                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <h1 className="p-2 mt-[93px] text-[#0B0B0B] font-inter text-[40px] font-bold mb-6">{title}</h1>
            <p className="text-[#0B0B0BB3] w-fit font-inter mb-[122px] font-normal text-[16px] p-2">{description}</p>
        </div>
    );
};

export default Details;