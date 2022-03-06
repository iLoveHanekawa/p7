import React from "react";
import {MdLocationOn} from "react-icons/md"

export default function Card(props) {
    return <div className = "cardFlex">
        <img src = {props.imageUrl} className = "cardImg"></img>
        <div className = "cardContent">
            <section className = "cardLocationFlex">
                <MdLocationOn className = "cardLocationIcon"/>
                <p className = "cardLocationTxt">
                    {props.location}
                </p>
                <a className = "cardLocationUrl" href = {props.gmapUrl} target = "_blank">View on Google Maps</a>
            </section>
            <section>
                <h2 className = "cardTitle">{props.title}</h2>
                <b>{props.startDate} - {props.endDate}</b>
                <p className = "cardDescription">{props.description}</p>
            </section>
        </div>
    </div>
}