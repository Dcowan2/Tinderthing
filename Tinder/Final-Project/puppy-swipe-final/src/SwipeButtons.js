
import React from 'react';
import './SwipeButtons.css';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { IconButton } from '@material-ui/core';


function Swipebuttons() {
    return <div className = "swipeButtons">

<IconButton className="swipeButtonLike">
    <ThumbUpIcon fontSize = "large"/>
</IconButton>
<IconButton className="swipeButtonDislike">
    <ThumbDownIcon fontSize = "large"/>
</IconButton>

    </div>;
}

export default Swipebuttons;
