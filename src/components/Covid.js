import React,{useState , useEffect} from 'react';
import './Covid.css';

const Covid = () => {

    const [data , setData] = useState([]);

    const getCovidData = async () => {

        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            
            setData(actualData.statewise[0]);
        }catch (err) {
            console.log(err);
        }
         
    }

    useEffect(() =>{
        getCovidData();
    }, []);

    return (
        <>
           <section>
            <h1>🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className="card" >
                    <div className="card_main" style={{background:'blue'}}>
                        <div className="card_inner">
                            <p className="card_name"> <span> OUR </span> COUNTRY</p>
                            <p className="card_total card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{background:'green'}}>
                        <div className="card_inner">
                            <p className="card_name"> <span> TOTAL </span> RECOVERED</p>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{background:'#1ebe09'}}>
                        <div className="card_inner">
                            <p className="card_name"> <span> TOTAL </span> CONFIRMED</p>
                            <p className="card_total card_small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{background:'#fce803'}}>
                        <div className="card_inner">
                            <p className="card_name"> <span> TOTAL </span> DEATHS</p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{background:'#b3ac62'}}>
                        <div className="card_inner">
                            <p className="card_name"> <span> TOTAL </span> ACTIVE</p>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main" style={{background:'#62b3aa'}}>
                        <div className="card_inner">
                            <p className="card_name"> <span> TOTAL </span> UPDATED</p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
            </section>
        </>
    )
}

export default Covid;
