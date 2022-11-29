import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'
import HoursTable from './HoursTable';
import Citas from './Citas';

const Start = () => {

    const [dateSelected, changeDate] = useState(new Date(2022, 10, 28));

    const [data, updateData] = useState([
        {
            "id": "1",
            "date": new Date(2022, 10, 28),
            "hour": "9:00",
            "name": "",
            "type": ""
        },
        {
            "id": "2",
            "date": new Date(2022, 10, 28),
            "hour": "11:00",
            "name": "",
            "type": ""
        },
        {
            "id": "3",
            "date": new Date(2022, 10, 28),
            "hour": "14:00",
            "name": "",
            "type": ""
        },

    ]);

    return (
        <div className='container mt-3'>
            <div className='row pt-3'>
                <div className='col-auto me-4'>
                    <div className='row'>
                        <div className='col-auto fs-4'>
                            Seleccione fecha:
                        </div>
                        <div className='col-auto px-0 ps-3'>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker value={dateSelected} onChange={changeDate} />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className='row'>
                        <HoursTable data={data} updateData={updateData} dateSelected={dateSelected} />
                    </div>
                </div>
                <div className='col-auto'>
                    <Citas />
                </div>
            </div>
        </div>)
        ;
}

export default Start;