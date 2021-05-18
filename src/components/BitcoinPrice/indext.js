import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Menu, Card, Dropdown, Button, message, Row } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons'
const style = {
    textdeail: {
        marginTop: -19,
        textcolor: '#4B4B4B',

    },
    CardStyle: {
        borderColor: '#FFC674',
        borderRadius: 20,
        width: 600,
        marginTop: 10
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

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            1st menu item
        </Menu.Item>
    </Menu>
);


function BitcoinPrice() {

    const [hasError, setError] = useState(false)
    const [data, setData] = useState([])
    const [datetime, setTime] = useState({})

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/supported-currencies');
            res
                .json()
                .then(res => setData(res))
                .catch(err => setError(err))
        }
        fetchData()
        console.log('data', data);
        console.log('time', datetime);
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

    const mapSelect = () => {
        return data && data.map(
            function (data, index) {
                return (
                    <>
                        <Menu onClick={handleMenuClick}>
                            <Menu.Item key={index}>
                                {data.currency}
                            </Menu.Item>
                        </Menu>
                    </>
                )
            }
        )
    }

    return (
        <div style={{ margin: 160, marginLeft: 100 }}>
            <h1>BitcoinPrice</h1>

            <Row>
                <h2> add curencies : </h2> &nbsp; &nbsp;
                <Dropdown overlay={menu} style={style.Ddl} >
                    <Button style={style.Ddl}>
                        select <DownOutlined />
                    </Button>
                </Dropdown>
                <Button style={style.btn}>
                    ADD
                </Button>
                <Button style={style.btn}>
                    ADD ALL
                </Button>
            </Row>

            <p>count : {data.length}</p>
            {mapdata()}
        </div>
    );
}

export default BitcoinPrice;
