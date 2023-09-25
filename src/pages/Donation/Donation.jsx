import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import DonateCard from "../../components/DonateCard/DonateCard";
import { useState } from "react";

const Donation = () => {
    const savedDonations = getStoredDonations();
    const allDonations = useLoaderData();
    const donated = allDonations.filter(donation => savedDonations.includes(donation.id));
    const [count, setCount] = useState(4);

    const handleSeeAll = () => {
        setCount(donated.length);
    }
    console.log(allDonations);
    console.log(donated);
    return (
        <section className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 h">
                {
                    donated.slice(0, count).map(donate => <DonateCard donate={donate} key={donate.id}></DonateCard>)
                }
            </div>
            <div className="text-center" onClick={handleSeeAll} style={{
                    display: count > 4 ? "none" : ""
                }}>
                <button type="button" className="border bg-black text-white p-2 rounded"
                
                >
                See All
                </button>
            </div>
        </section>

    );
};


export default Donation;