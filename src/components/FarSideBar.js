import React, {useState, useEffect} from 'react'
import { useStateValue } from "../StateProvider";
import db from '../firebase';
import FarSideBarOption from '../components/FarSideBarOption';
import myself from "../images/myself.jpg"
import wow from "../images/wow.png"
import { AlarmOnIcon }  from '@material-ui/icons/AlarmOn';

function FarSideBar() {

    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();
    
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc =>
                    ({
                        id: doc.id,
                        name: doc.data().name
                    }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Caleb Middleton</h2>
                    <h3>
                        {user?.displayName}
                    </h3>

                        <FarSideBarOption  title="myself"  Icon={AlarmOnIcon}/>
                        <FarSideBarOption  title="wow"  Icon={AlarmOnIcon}/>
                        <FarSideBarOption  title="add"  Icon={AlarmOnIcon} addChannelOptions/>

                </div>
                {channels.map(channel => (
                    <FarSideBarOption title={channel.name} id={channel.id} />
                ))}
            </div>
        </div>
    )
}

export default FarSideBar
