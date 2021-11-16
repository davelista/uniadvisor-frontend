import React, { useEffect, useRef, useState } from "react";
import "./ExpandableParagraph.css";

export default function ExpandableParagraph(props) {
    const { lines = 4, expandText = "Visualizza altro", collapseText = "Visualizza meno" } = props;

    const paragraph = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState("0px");
    const [hideButton, setHideButton] = useState(false);

    useEffect(() => {
        if (paragraph.current === null) return;
        if (!expanded) {
            const lh = window.getComputedStyle(paragraph.current).lineHeight;
            if (lines * lh.replace(/px/g, "") < paragraph.current.scrollHeight) setHeight(`calc(${lines} * ${lh})`);
            else {
                setHeight(paragraph.current.scrollHeight + "px");
                setHideButton(true);
            }
        } else setHeight(paragraph.current.scrollHeight + "px");
    }, [lines, expanded]);

    return (
        <div>
            <p className="expandable-paragraph-text" style={{ height }} ref={paragraph}>
                {props.children}
            </p>
            <button
                className={`expandable-paragraph-button ${hideButton ? "expandable-paragraph-button-hidden" : ""}`}
                onClick={() => {
                    setExpanded((e) => !e);
                }}
            >
                {expanded ? collapseText : expandText}
            </button>
        </div>
    );
}
