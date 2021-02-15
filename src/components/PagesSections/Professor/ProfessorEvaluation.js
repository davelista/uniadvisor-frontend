import React from 'react';
import './Professor.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import Rating from '@material-ui/lab/Rating';

function ProfessorEvaluation(props) {
    const {finalEvaluation} = props;

    return (
        <>
            <div className={"professor-evaluation-container"}>
                {finalEvaluation.filter(x => x.title !== "Overall")
                    .map((x) => {
                        return (
                            <div className={"professor-evaluation-details"}>{x.title}:
                                    <Rating defaultValue={x.value}
                                            precision={0.5}
                                            readOnly
                                            emptyIcon={<FiberManualRecordOutlinedIcon fontSize="medium" style={{fill: "#e53a1e"}}/>}
                                            icon={<FiberManualRecordIcon fontSize="medium" style={{fill: "#e53a1e"}}/>}
                                    />
                            </div>)
                    })}
            </div>
        </>
    );
}

export default ProfessorEvaluation;