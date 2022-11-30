import React from 'react';

const Citas = (props) => {

    const onClick = (cita) => {
        console.log(cita);
        props.updateData(current =>
             current.filter(c => {
                return c !== cita;
            }),
        );
    }

    const handleClick = (cita) => () => {
        onClick(cita);
    }

    const Cita = ({ cita }) => {
        
        if (cita["user"] === props.user) {
            return (
                <div className='col-12 mb-3'>
                    <div className='card text-bg-secondary'>
                        <div className='row px-3'>
                            <div className='col-4 ps-4 py-4'>
                                <span >{cita["date"].toLocaleDateString("en-US")} - {cita["hour"]}</span>
                            </div >
                            <div className='col-4 py-4'>
                                <span className='align-bottom' >{cita["type"]}</span>
                            </div>
                            <div className='col-4 py-4 py-lg-3'>
                                <button className='btn btn-outline-secondary' value={cita}  onClick={handleClick(cita)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className='container'>
                <div className='card bg-info bg-opacity-25 p-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <h5>Mis citas programadas</h5>
                        </div>
                        {props.data.map((cita, i) => {
                            return (
                                <Cita key={i} cita={cita} />
                            )
                        })}
                    </div>
                </div>
            </div >

        </>
    );
}

export default Citas;