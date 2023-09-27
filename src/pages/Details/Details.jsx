import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const quotes = [
    "Charity is an effective cure, and the actions of people in their present life will be before their eyes in the next life. - Hazrat Ali (AS)",
    "The Prophet, upon him be peace, said: “Give charity without delay, for it stands in the way of calamity.” (Al-Tirmidhi)",
    "Who is it that will offer up unto God a goodly loan, which He will amply repay? For, such (as do so) shall have a noble reward. (Surah Al Hadid 57:11)",
    "Charity is for those in need, who, in Allah’s cause are restricted (from travel), and cannot move about in the land, seeking (For trade or work)” (2:273)",
    " “Allah will deprive usury of all blessing, but will give increase for deeds of charity. For He loves not creatures ungrateful and wicked” (2:276)",
    "“Charity in secret, quiets the wrath of God and takes away one’s sin as the water puts out the fire and keeps away seventy kinds of calamities.” (Charity In Quran 2:271)",
    "“Allah will deprive usury of all blessing, but will give increase for deeds of charity. For He loves not creatures ungrateful and wicked” (2:276)",
    " The Prophet (peace & blessings of Allah be upon him) said,”The best charity is that which is practiced by a wealthy person. And start giving first to your dependents.” – Sahih Al-Bukhari Volume 2, Book 24, Number 507",
    "“Do not show lethargy or negligence in giving alms and charity till your last breath.” -Prophet Muhammad, upon him be peace (Bukhari and Muslim)",
    "The Prophet, upon him be peace, said: “A crafty one, a miser, and one who keeps reminding people of what he has given, will not enter Paradise.” (Tirmidhi)",
    "“Allah, the Exalted, says, ‘Spend, O son of Adam, and I shall spend on you.’” – Prophet Muhammad, upon him be peace (Al-Bukhari and Muslim).",
    "Prophet Muhammad, upon him be peace, said, “Protect yourself from hell-fire even by giving a piece of date as charity.” (Al-Bukhari and Muslim)",
    "The Prophet, upon be peace, said: “The believer’s shade on the Day of Resurrection will be his charity.” (Al-Tirmidhi)"
]

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

    const notify = () => {
        const randInx = Math.floor(Math.random() * quotes.length);
        return toast.success(quotes[randInx]);
    }
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