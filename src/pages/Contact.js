import React from "react";
import "./Contact.css";

export default function ContentPage() {
    return (
        <div className="content-page">
            <h1 className="headline">
                Breaking News: 🌍 Major Event Shakes the World
            </h1>
            <div className="meta">
                <span className="author">By John Doe</span> |{" "}
                <span className="date">September 18, 2025</span>
            </div>
            <img
                className="news-image"
                src="https://picsum.photos/900/400?random=1"
                alt="News"
            />
            <p>
                In a surprising turn of events today, significant developments have taken
                place that are expected to have far-reaching consequences. Eyewitnesses
                reported seeing unusual activity in several major cities around the globe.
            </p>
            <p>
                Governments and organizations are responding rapidly. Analysts predict
                that this could reshape economic and political landscapes worldwide. Stay
                tuned for more updates as this story develops.
            </p>

            <p>
                Follow our coverage for interviews with experts, live updates, and
                detailed analysis on how this event could impact different sectors
                including business, technology, and global relations.
            </p>

        </div>
    );
}
