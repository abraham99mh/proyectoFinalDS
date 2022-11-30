import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

const HoursTable = ({ data, updateData, dateSelected, user }) => {

    const hours = [
        {
            "hour": "9:00"
        },
        {
            "hour": "10:00"
        },
        {
            "hour": "11:00"
        },
        {
            "hour": "12:00"
        },
        {
            "hour": "13:00"
        },
        {
            "hour": "14:00"
        },
        {
            "hour": "15:00"
        },
        {
            "hour": "16:00"
        },
        {
            "hour": "17:00"
        }
    ];

    const types = [
        "Análisis de sangre",
        "Estudio general",
        "Pruebas de laboratorio"
    ]

    const [showModal, setShowModal] = useState(false);
    const [hourSelected, setHourSelected] = useState('');
    const [type, setType] = useState('Análisis de sangre');

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
        setType(types[0]);
        setHourSelected(e.target.value);
        setShowModal(true);
    }

    const agendar = () => {
        const cita = {
            "date": dateSelected,
            "hour": hourSelected,
            "user": user,
            "type": type
        };
        updateData(current => [...current, cita])
        console.log('Data: ', data);
        setShowModal(false);
    }

    const Agendados = ({ hour }) => {
        let agendado = false;
        for (let i = 0; i < data.length; i++) {
            if (dateSelected.getTime() === data[i]["date"].getTime()) {
                if (data[i]["hour"] === hour) {
                    agendado = true;
                    return (<>
                        Hora agendada
                    </>)
                }
            }
        }
        if (agendado === false) {
            return (<>
                <button value={hour} onClick={handleShow} className='btn btn-info'>Agendar</button>
            </>)
        }
    }

    const onChangeDrop = (e) => {
        setType(e.target.value);
    }

    return (
        <div className='col-12'>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agendar cita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="px-5">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Tipo de cita</label>
                            <select onChange={onChangeDrop} className="form-select" id="inputGroupSelect01">
                                {types.map((t, i) => {
                                    return (
                                        <option key={i} value={t}>{t}</option>
                                    )
                                })}

                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre de usuario</span>
                            <input disabled value={user} type="text" className="form-control" placeholder="Nombre de usuario"></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Hora</span>
                            <input required disabled value={hourSelected} type="text" className="form-control" placeholder="Nombre de usuario"></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre del paciente</span>
                            <input required type="text" className="form-control" placeholder="Nombre del paciente"></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Edad</span>
                            <input required type="text" className="form-control" placeholder="Edad"></input>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Comentarios</span>
                            <textarea placeholder="..." className="form-control"></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={handleClose}>
                        Cerrar
                    </button>
                    <button className='btn btn-info' onClick={agendar}>
                        Agendar
                    </button>
                </Modal.Footer>
            </Modal>
            <table className="table table-info table-striped mt-4 text-center">
                <thead>
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map((hour, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{hour["hour"]}</th>
                                <td>
                                    <Agendados hour={hour["hour"]} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default HoursTable;