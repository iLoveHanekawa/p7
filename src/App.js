import React from "react";
import NavBar from "./components/NavBar";
import "./index.css"
import data from "./data"
import Card from "./components/Card"

export default function App() {
    return <div className = "appFlex">
        <NavBar/>
        {data.map(i => (
            <Card
            title = {i.title}
            location = {i.location}
            gmapUrl = {i.googleMapsUrl}
            startDate = {i.startDate}
            endDate = {i.endDate}
            description = {i.description}
            imageUrl = {i.imageUrl}
            />
        ))}
    </div>
}
