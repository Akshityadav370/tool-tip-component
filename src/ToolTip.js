import React, { useState } from "react";


const ToolTip = ({text, children, position}) => {
    // To set the tooltip when mouse hovers
    const [isVisible, setVisible] = useState(false);

    return (
        <div 
            className="tooltip-container"
            onMouseEnter={()=> setVisible(true)}
            onMouseLeave={()=> setVisible(false)}
        >   
            {children}
            {isVisible && <div className="tooltip" style={position}>{text}</div>}
        </div>
    )
}

export default ToolTip;