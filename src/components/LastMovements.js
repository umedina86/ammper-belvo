import React, { useState } from 'react'
import { getDataBelvo } from '../api/getDataBelvo'

const LastMovements = () => {
    const [movements, setMovements] = useState({});

    const infoMovements = async(e) => {
        if (Object.keys(movements).length === 0) {
            const data =await getDataBelvo('/api/transactions/');
            setMovements(data.results);
        }
    }
    infoMovements();

    return (
        <div className="col-sm rounded bg-light bg-gradient">
            <div className="row m-2 pb-1">
                <div className="col-sm">
                    <h2 className="display-5 text-left">
                        Movimientos
                    </h2>
                </div>
            </div>
            <div className="row m-2 pb-1">
                <div className="col-sm">
                <table className="table table-responsive">
                <thead className="thead-dark ">
                    <tr>
                    <th scope="col">#Ref</th>
                    <th scope="col">Cuenta</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Status</th>
                    <th scope="col">Concepto</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                            Object.keys(movements).map((item, index) => {
                                return (
                                    <tr key={index}>
                                    <th scope="row">
                                        {movements[index].reference}
                                    </th>    
                                    <td>{movements[index].account.name}</td>
                                    <td>
                                        {movements[index].type === 'INFLOW' && 
                                        <p className="text-success">+{movements[index].amount} {movements[index].currency} 
                                        </p>}
                                        {movements[index].type === 'OUTFLOW' && 
                                        <p className="text-danger">+{movements[index].amount} {movements[index].currency} 
                                        </p>}
                                    </td>
                                    <td>
                                        {movements[index].value_date}
                                    </td>
                                    <td>
                                        {movements[index].status}
                                    </td>
                                    <td>
                                        {movements[index].description}
                                    </td>
                                    </tr>
                                )
                                })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default LastMovements