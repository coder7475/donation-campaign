const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations');

    if (storedDonations) {
        return JSON.parse(storedDonations);
    }
    return [];
}

const saveDonations = (id) => {
    const storedDonations = getStoredDonations();
    const alreadyStored = storedDonations.find(donationID => donationID === id);

    if (!alreadyStored) {
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonations));
    }
    
}

export { getStoredDonations, saveDonations };