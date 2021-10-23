import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
    const darkModeStyle = {
        color: (props.mode === "Green" || props.mode === "Blue" || props.mode === "Black") ? "white" : "black",
        backgroundColor: props.mode,
        border: (props.mode === "Green" || props.mode === "Blue" || props.mode === "Black") ? '1px solid gray' : ""
    }
    return (
        <div className="container my-3" style={{
            color: (props.mode === "Green" || props.mode === "Blue" || props.mode === "Black") ? "white" : "black",
            backgroundColor: props.mode,
        }}>
            <h2 className="my-3">{props.title}</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={darkModeStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={darkModeStyle}>
                            About creator
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            My name is Ashish kumar sah, currently pursuing engineering in computer science
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkModeStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={darkModeStyle}>
                            Where I learnt from
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            I have made this website as a part of course on codewithharry channel. I thanks codewithharry for such a brilliant course.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkModeStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={darkModeStyle}>
                            References
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Codewithharry, react, bootstarp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
About.propTypes = {
    mode: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}