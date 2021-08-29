import React from 'react';
import Users from "./Users";
import SendMessage from "./SendMessage";

function Profile(props) {
    return (
        <div>
            <Users state={props.state}/>
            <SendMessage
                         newPostText={props.state.newPostText}
                         addUser={props.addUser}
                         updateNewPostText={props.updateNewPostText}
            />
        </div>
)
}

export default Profile;
