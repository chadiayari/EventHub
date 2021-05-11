import React from 'react';


const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button classname="button" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <br />
        </section>
    );
};

export default Hero;

