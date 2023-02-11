import React from "react";

function Title() {
    console.log('rendering title...');

    return <h2>UseCallback Hook Tutorial</h2>
}

export default React.memo(Title);