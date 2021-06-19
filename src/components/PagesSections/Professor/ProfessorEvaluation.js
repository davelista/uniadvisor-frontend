import React from 'react';
import './Professor.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import Rating from '@material-ui/lab/Rating';

function ProfessorEvaluation(props) {
    const {finalEvaluation} = props;
    const title = {"chiarezza_spiegazione":"Chiarezza spiegazione", "correzione_compiti":"Correzione compiti", "disponibilita":"Disponibilità", "materiale_didattico":"Materiale didattico"}
    return (
        <>
            <div className={"professor-evaluation-container"}>
                {Object.entries(finalEvaluation).filter(([key, value]) => key !== "overall")
                    .map(([key, value]) => {
                            return (
                                <div className={"professor-evaluation-details"}>{title[key]}:
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