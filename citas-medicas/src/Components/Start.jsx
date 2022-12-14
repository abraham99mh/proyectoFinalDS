import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import HoursTable from './HoursTable';
import Citas from './Citas';

const Start = (props) => {

    const [dateSelected, changeDate] = useState(new Date(2022, 10, 30));

    return (
        <div className='container-fluid mt-3'>
            <div className='row justify-content-md-center pt-3'>
                <div className='col-6 col-lg-auto me-lg-4'>
                    <div className='row'>
                        <div className='col-auto fs-4'>
                            Seleccione fecha:
                        </div>
                        <div className='col-auto px-0 ps-3'>
                            <ReactDatePicker selected={dateSelected} onChange={changeDate} />
                        </div>
                    </div>
                    <div className='row'>
                        <HoursTable data={props.data} updateData={props.updateData} dateSelected={dateSelected} user={props.user} />
                    </div>
                </div>
                <div className='col-6 col-lg-5'>
                    <Citas user={props.user} updateData={props.updateData} data={props.data} />
                </div>
            </div>
        </div>)
        ;
}

export default Start;