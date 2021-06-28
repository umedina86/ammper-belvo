import React, { useState } from 'react'
import { getDataBelvo } from '../api/getDataBelvo'

const Info = () => {
    const [info, setInfo] = useState({});

    const infoData = async(e) => {
        if (Object.keys(info).length === 0) {
            const data =await getDataBelvo('/api/links/');
            setInfo(data.results);
        }
    }
    infoData();

    const checkStatus = (status) => {
        let classes = 'col-sm ';
        if(status === 'valid') {
            classes += 'bg-success';
        } else {
            classes += 'bg-danger';
        }

        return classes;
    }
    

    return (
        <div className="col-sm rounded bg-light bg-gradient">
            <div className="row m-2 pb-1">
                <div className="col-sm">
                    <h2 className="display-5 text-left">
                        Datos
                    </h2>
                </div>
            </div>
            <div className="row m-2 pb-1">
                <div className="col-sm">
                {
                    Object.keys(info).map((item, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className={checkStatus(info[index].status)} key={index}>
                                    <p className="font-weight-bold text-center" key={index}>{info[index].institution}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Info;