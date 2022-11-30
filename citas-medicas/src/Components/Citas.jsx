import React from 'react';

const Citas = (props) => {

    const onClick = (e) => {
        console.log(e.target.value);
        props.updateTeam(current =>
            current.filter(poke => {
                return poke !== e.target.value;
            }),
        );
    }

    const Cita = ({ cita }) => {
        if (cita["user"] === props.user) {
            return (
                <div className='col-12 mb-3'>
                    <div className='card text-bg-secondary'>
                        <div className='row'>
                            <div className='col-3 ps-4 py-3'>
                                <span className='fs-5'>Fecha y hora</span>
                            </div >
                            <div className='col-5 py-3'>
                                <span className='text-capitalize fs-5'>Cita</span>
                            </div>
                            <div className='col-4 py-3'>
                                <button className='btn btn-outline-secondary' value={false} onClick={onClick}>Eliminar cita</button>
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
                        {props.data.map((cita) => {
                            return (
                                <Cita cita={cita} />
                            )
                        })}
                    </div>
                </div>
            </div >

        </>
    );
}

export default Citas;