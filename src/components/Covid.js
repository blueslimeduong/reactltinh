import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";
const Convid = () => {
    const today = moment().startOf('day').toISOString(true);
    const preDate = moment().startOf('day').subtract(31, 'days').toISOString(true);
    const {data: dataCovid, isLoading, isError} 
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${preDate}&to=${today}`, true)

    return (
        <>
        <h3>Tracking covid in vietnam</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && 
                 dataCovid.map(item => {
                    return (
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td> 
                        </tr>
                    )
                 })
                }

               {isLoading === true &&
                <tr>
                    <td colSpan={5} style={{textAlign: 'center'}}>Loading...</td>
                </tr>
               } 

                {isError === true &&
                <tr>
                    <td colSpan={5} style={{textAlign: 'center'}}>Something wrong...</td>
                </tr>
                } 

            </tbody>
        </table>
        </>
    )
}

export default Convid;