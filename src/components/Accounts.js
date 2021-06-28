import React, { useState } from 'react'
import { getAccounts } from '../api/getAccounts'

const Accounts = () => {
    const [accounts, setAccounts] = useState({});

    const infoAccounts = async(e) => {
        if (Object.keys(accounts).length === 0) {
            const data =await getAccounts();
            setAccounts(data.results);
        }
    }
    infoAccounts();

    return (
        <div className="col-sm rounded bg-light bg-gradient">
            <div className="row m-2 pb-1">
                <div className="col-sm">
                    <h2 className="display-5 text-left">
                        Cuentas
                    </h2>
                </div>
            </div>
            <div className="row m-2 pb-1">
                <div className="col-sm">
                <table className="table table-responsive">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Saldo</th>
                    <th scope="col">Saldo Disponible</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            Object.keys(accounts).map((item, index) => {
                                return (
                                    <tr key={index}>
                                    <th scope="row">
                                        {accounts[index].number}
                                    </th>    
                                    <td>{accounts[index].name}</td>
                                    <td>${accounts[index].balance.current} {accounts[index].currency}</td>
                                    <td>${accounts[index].balance.current} {accounts[index].available} {accounts[index].currency}</td>
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

export default Accounts