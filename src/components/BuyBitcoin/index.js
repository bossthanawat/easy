import React, { useState } from 'react';
import { Row, Input, Button, Col,List,Typography } from 'antd';

const style = {
    input: {
        width: 200,
        marginLeft: 20,
        textAlign: 'Left',
    },
    btn: {
        marginTop: 10,
        background: '#FFC674',
        color: '#ffffff',
        textAlign: 'center',
        borderRadius: 4,
        fontSize: 14,
        width: 99,
        height: 36

    }
}





function BuyBitcoin() {

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];
      
    const history = (Name, Note, Amount) => {
        console.log("his",his);
        const data = []
        data.push('\''+ Name + Note + Amount+'\'')
        console.log("data",data);
        return (
            <List
            bordered
                dataSource={data}
                
            renderItem={item => (
              <List.Item>
                {his}
              </List.Item>
            )}
          />
        )

    }
    


    const [Name, setName] = useState("");
    const [Note, setNote] = useState("");
    const [Amount, setAmounts] = useState("");
    const [his, steHis] = useState([]);

    return (
        
        <div style={{ margin: 160, marginLeft: 100 }}>
            <h1>BitcoinPrice</h1>
            <Row style={{marginTop: 20}}>
                <Col span={2}>
                Name : 
                </Col>
                <Col span={10}>
                    <Input id="Names" style={style.input} onChange={e=>setName(e.target.value)} />
                </Col>
                 
            </Row>
            <Row style={{marginTop: 20}}>
                <Col span={2}>
                Note : 
                </Col>
                <Col span={10}>
                <Input id="Note"style={style.input} onChange={e=>setNote(e.target.value)}/>
                </Col>
                 
            </Row>
            <Row style={{marginTop: 20}}>
                <Col span={2}>
                Amount : 
                </Col>
                <Col span={10}>
                <Input id="Amounts" style={style.input} onChange={e=>setAmounts(e.target.value)} />
                </Col>
                 
            </Row>
            <Button onClick={e => { history(e, Name, Note, Amount);steHis(Name+Note+Amount)}} style={style.btn}>Buy</Button>
            <h1 style={{ marginTop: 30 }}>History</h1>
            <p>{history()}</p>

        </div>
    );
}

export default BuyBitcoin;
