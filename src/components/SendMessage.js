import React,{createRef} from "react";

function SendMessage(props) {
    let textAreaRef = createRef();
    const addUser = () => {
        props.addUser();
    }
    const updateNewPostText = () => {
        let current = textAreaRef.current.value;
        props.updateNewPostText(current);
    }
    return(
        <div>
            <div>
                <textarea ref={textAreaRef} value={props.newPostText} onChange={updateNewPostText} />
            </div>
            <div>
                <button onClick={addUser} type='submit'>Send</button>
            </div>
        </div>
    )
}

export default SendMessage;
