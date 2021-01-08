import React from 'react';
import './Professor.css';

function ProfessorEvaluation(props) {
    const {finalEvaluation} = props;


    return (
        <>
            <div className={"professor-evaluation-container"}>
                    {finalEvaluation.map((x) => {
                        return (<div className={"professor-evaluation"}>
                         <p>{x.title}: {'\t'&& Math.round(x.value)}</p>
                        </div>)
                    })}
            </div>
        </>
    );
}

export default ProfessorEvaluation;