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
                {Object.entries(finalEvaluation).filter(([key, value]) => key !== "overall")
                    .map(([key, value]) => {
                        console.log(key + value)
                        return (

                            <div className={"professor-evaluation-details"}>{key}:
                                    <Rating defaultValue={value}
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