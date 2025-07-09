import React, { useState } from "react";

const FormTab = () => {
    const [activeTab, setActiveTab] = useState(1); // Simplified tab state
    const [info, setInfo] = useState({
        personal: { name: "", age: "", email: "", job: "" },
        hobbies: { interests: [], favoriteSport: "" },
        settings: { notifications: true, theme: "light" }
    });

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const [section, field] = name.split('.'); // Split name into section and field

        setInfo(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: type === 'checkbox' ? checked : value
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", info);
        // Here you would typically send data to an API
    };

    const goToNextTab = () => {
        if (activeTab < 3) setActiveTab(activeTab + 1);
    };

    const goToPrevTab = () => {
        if (activeTab > 1) setActiveTab(activeTab - 1);
    };

    return (
        <div>
            <div className="tab-btn">
                <button onClick={() => handleTabChange(1)}>Personal Info</button>
                <button onClick={() => handleTabChange(2)}>Hobbies</button>
                <button onClick={() => handleTabChange(3)}>Settings</button>
            </div>

            <form onSubmit={handleSubmit}>
                {activeTab === 1 && (
                    <div>
                        <input
                            type="text"
                            name="personal.name"
                            value={info.personal.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input
                            type="number"
                            name="personal.age"
                            value={info.personal.age}
                            onChange={handleChange}
                            placeholder="Age"
                        />
                        <input
                            type="email"
                            name="personal.email"
                            value={info.personal.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="personal.job"
                            value={info.personal.job}
                            onChange={handleChange}
                            placeholder="Job"
                        />
                        <button type="button" onClick={goToNextTab}>Next</button>
                    </div>
                )}

                {activeTab === 2 && (
                    <div>
                        <input
                            type="text"
                            name="hobbies.favoriteSport"
                            value={info.hobbies.favoriteSport}
                            onChange={handleChange}
                            placeholder="Favorite Sport"
                        />
                        {/* Add more hobby fields as needed */}
                        <button type="button" onClick={goToPrevTab}>Previous</button>
                        <button type="button" onClick={goToNextTab}>Next</button>
                    </div>
                )}

                {activeTab === 3 && (
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="settings.notifications"
                                checked={info.settings.notifications}
                                onChange={handleChange}
                            />
                            Enable Notifications
                        </label>
                        <select
                            name="settings.theme"
                            value={info.settings.theme}
                            onChange={handleChange}
                        >
                            <option value="light">Light Theme</option>
                            <option value="dark">Dark Theme</option>
                        </select>
                        <button type="button" onClick={goToPrevTab}>Previous</button>
                        <button type="submit">Submit</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormTab;