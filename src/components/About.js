import React from "react";

function About({ about, image }) {
    const defaultImage = "https://via.placeholder.com/215";

    return (
        <div id="about">
            <aside>
                <img
                    src={image || defaultImage}
                    alt="blog logo"
                />
                <p id={about}>{about}</p>
            </aside>
        </div>
    );
}

export default About;