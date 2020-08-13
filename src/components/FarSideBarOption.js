import React from 'react'
//import myself from "../images/myself.jpg"
import '../CSS/main.scss'
import { useHistory } from "react-router-dom";
import db from '../firebase';


function FarSideBarOption({ id, title, addChannelOptions, Icon} ) {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }


    return (
        <div className="sidebarOption" onClick={addChannelOptions ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ? (
                <h3> {title} </h3>
            ): (
                <h3 className="sidebarOption__channel">
                   <span className="sidebarOption__hash">#</span>{title}
                </h3>
            )}
        </div>
    )
}

export default FarSideBarOption

/*
<div className="FarSideBar" onClick={addChannelOptions ? addChannel : selectChannel}>
            <img src={img} className="FarSideBar-img"/>
        </div>
        */


        /* return (
        <div className="FarSideBar" onClick={addChannelOptions ? addChannel : selectChannel}>
            {img && <img className=""/>}
            {img ? (
                <>
                    <img src={img} className="FarSideBar-img"/>
                    <h3> {title} </h3>
                </>
            ): (
                <h3 className="sidebarOption__channel">
                   <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )}
        </div>
    )*/