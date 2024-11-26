import React from "react";
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css'
class BodySectionWithMarginBottom extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="bodySectionWithMargin">
                <BodySection{...this.props}/>
            </div>
        )
    }
}
export default BodySectionWithMarginBottom