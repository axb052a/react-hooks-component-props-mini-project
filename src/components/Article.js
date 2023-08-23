import React from "react";

function Article({ title, date, preview }) {
    const defaultDate = "January 1, 1970";

    return (
        <div id="article">
            <article>
                <h3>{title}</h3>
                <small>{date || defaultDate}</small>
                <p>{preview}</p>
                <div>
                </div>
            </article>
        </div>
    );
}

export default Article;
