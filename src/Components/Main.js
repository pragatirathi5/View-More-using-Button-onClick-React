import React, { useState } from "react";
import "../App.css";

const ViewData = ({ children }) => {
const card = children;
const [viewMore, setViewMore] = useState(true);
const clickHandler = () => {
setViewMore(!viewMore);
};
return (
    <>
	<p className="card">
	{viewMore ? card.slice(-20, 5) : card}
    <br />
	<button onClick={clickHandler} className="view">{viewMore  ? "Click to View Details" : " Show Less"}
	</button>
	</p>
    </>
);
}
const Main = (props) => {
const { state } = props
return state.map((item) => {
    const { serial, id, name, email, phone, city, region, country, organization, profile, additional } = item
    return( 
    <>
	<div className="containerone">
    <div className="one">
		<ViewData key={id}>	
        <label className="firstname">{name}</label>
        <br />
        <label>{email}</label>
        <br />
        <label>{phone}</label>
        <br />
        <label>{city}</label>
        <br />
        <label>{region}</label>
        <br />
        <label>{country}</label>
        <br />
        <label>{organization}</label>
        <br />
        <label>{profile}</label>
        <br />
        <label>{additional}</label>
        <br /> 
		</ViewData>
        </div>
        </div>

        <div className="containertwo">
        <div className="one">
		<ViewData key={serial}>
        <label className="firstname">{name}</label>
        <br />
        <label>{email}</label>
        <br />
        <label>{phone}</label>
        <br />
        <label>{city}</label>
        <br />
        <label>{region}</label>
         <br />
        <label>{country}</label>
        <br />
        <label>{organization}</label>
        <br />
        <label>{profile}</label>
        <br />
        <label>{additional}</label>
        <br /> 
		</ViewData>
        </div>
	</div>

    </>
)}
)}
export default Main