import React from "react";

function Users(props) {
    let componentUser = props.state.users.map(user => <div>{user}</div>);

    return(
        <div>
            {componentUser}
        </div>
    )
}

export default Users;
