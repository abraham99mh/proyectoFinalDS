import React from 'react';

const HoursTable = ({ data, updateData, dateSelected }) => {

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
                <button className='btn btn-info'>Agendar</button>
            </>)
        }
    }

    return (
        <div className='col-12'>
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