import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Card, Button, Select, Row } from 'antd';


const style = {
    textdeail: {
        marginTop: -19,
        textcolor: '#4B4B4B',

    },
    CardStyle: {
        borderColor: '#FFC674',
        borderRadius: 20,
        width: 600,
        marginTop: 10,
        bottom:10
    },
    txtTiltle: {
        left: 5.91,
        right: 83.74,
        top: 18.57,
        bottom: 71.9,
        fontfamily: 'Roboto',
        fontstyle: 'normal',
        fontweight: 500,
        fontsize: 36,
        lineheight: 20,
        letterspacing: 0.15,
        color: '#000000',
    },
    txtDescription: {
        /* description */

        // position: absolute,
        left: 5.91,
        right: 74.22,
        top: 35.24,
        bottom: 55.24,
        fontfamily: 'Roboto',
        fontstyle: 'normal',
        fontweight: 'normal',
        fontsize: 20,
        lineheight: 20,
        letterspacing: 0.15,
        color: '#7A7A7A',
    },
    Ddl: {
        marginLeft: 30,
        width: 300
    },
    btn: {
        marginLeft: 10,
        background: '#FFC674',
        color: '#ffffff',
        textAlign: 'left'

    }
}

const handleChange = (value) => {
    console.log(`selected ${value}`);
}

// const fetchDate = () => {
//     return axios.get("/api/currenprice")
//           .then((response) => console.log(response.data));}


function BitcoinPrice() {

    const [hasError, setError] = useState(false)
    const [data, setData] = useState([])
    const [datetime, setTime] = useState([])
    const { Option } = Select;



    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/supported-currencies');
            // const res = await fetch('/api/currentprice');
            res
                .json()
                .then(res => setData(res))
                .catch(err => setError(err))
        }
        fetchData()
        console.log('data', data);
        async function fetchDate() {
            // const res = await fetch('/api/supported-currencies');
            const res = await fetch('/api/currentprice');
            res
                .json()
                .then(res => setTime(res))
                .catch(err => setError(err))
        }
        fetchDate();


    }, [])


    const mapdata = () => {
        return data && data.map(
            function (data, index) {
                return (
                    <>
                        <Card style={style.CardStyle}>
                            <h1 style={style.txtTiltle}>{data.currency}</h1>
                            <h2 style={style.txtDescription}>{data.country}</h2>
                            <h2 style={{ textAlign: 'right' }}>{ }</h2>
                        </Card>
                    </>
                )
            }
        )
    }

    const mapselect = () => {
        return data && data.map(
            function (data, index) {
                return (
                    <>
                        <Option value={index}>{data.currency}</Option>
                    </>
                )
            }
        )
    }

    return (
        <div style={{ margin: 160, marginLeft: 100 }}>
            <h1>BitcoinPrice</h1>
            <h3 style={style.txtDescription}>update : {datetime.time && datetime.time.updated}</h3>


            <Row>

                <h2> add curencies : </h2> &nbsp; &nbsp;

                <Select placeholder="select" style={{ width: 120 }} onChange={handleChange}>
                    {mapselect()}
                </Select>
                <Button style={style.btn}>
                    ADD
                </Button>
                <Button style={style.btn}>
                    ADD ALL
                </Button>
            </Row>

            <p>count : {data.length}</p>
            {/* {mapdata()} */}

            <Card style={style.CardStyle}>
                <h1 style={style.txtTiltle}>{datetime.bpi && datetime.bpi.USD.code}</h1>
                <h2 style={style.txtDescription}>{datetime.bpi &&  datetime.bpi.USD.description}</h2>
                <h2 style={{ textAlign: 'right' }}>{datetime.bpi &&  datetime.bpi.USD.rate}</h2>
            </Card>
            <Card style={style.CardStyle}>
                <h1 style={style.txtTiltle}>{datetime.bpi && datetime.bpi.GBP.code}</h1>
                <h2 style={style.txtDescription}>{datetime.bpi && datetime.bpi.GBP.description}</h2>
                <h2 style={{ textAlign: 'right' }}>{datetime.bpi &&  datetime.bpi.GBP.rate}</h2>
            </Card>
            <Card style={style.CardStyle}>
                <h1 style={style.txtTiltle}>{datetime.bpi  && datetime.bpi.EUR.code}</h1>
                <h2 style={style.txtDescription}>{datetime.bpi  && datetime.bpi.EUR.description}</h2>
                <h2 style={{ textAlign: 'right' }}>{datetime.bpi  && datetime.bpi.EUR.rate}</h2>
            </Card>


        </div>
    );
}

export default BitcoinPrice;
