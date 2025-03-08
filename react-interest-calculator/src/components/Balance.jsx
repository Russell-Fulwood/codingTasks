//import child components
import DisplayBalance from './DisplayBalance';
import ChangeBalance  from './ChangeBalance';
import ModifyBalance from './ModifyBalance';
//bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState } from 'react'

function Balance() {

  const [balance, setBalance] = useState(100)

  //callback to change state of balance from children
  const handleBalance = (userInput) => {
    setBalance(userInput);
  }

  const addFn = (a, b) => +a + +b;  // fn sometimes converts numbers to strings 
  const subFn = (a, b) => a-b;   // 

  const interestRate = 10; // 10%
  const interest = (a) => { 
  return Math.round((a*(interestRate+100)))/100; // number to 2 decimal places (dp)
  }
  const fees = 25; 
  const bankFees = (a) =>  Math.round((a - fees + Number.EPSILON)*100)/100;  //number to 2 dp without rounding errors 


//styling using bootstrap grids
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col  className='d-flex justify-content-center'>
            <DisplayBalance balance={balance} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ChangeBalance balance={balance}
                          handleBalance={handleBalance}
                          transformBalance={addFn}
                          bText={'Deposit Money'} />
          </Col>
          <Col>
            <ChangeBalance balance={balance}
                          handleBalance={handleBalance}
                          transformBalance={subFn}
                          bText={'Withdraw Money'}/>
          </Col>
        </Row>
        <Row>
          <Col d-flex={'align-items-center'} >
            <ModifyBalance balance={balance}
                          handleBalance={handleBalance}
                          transformBalance={interest}
                          bText={`Add Interest ${interestRate}%`}/>
          </Col>
          <Col>
            <ModifyBalance balance={balance}
                          handleBalance={handleBalance}
                          transformBalance={bankFees}
                          bText={`Charge Bank Fees £${fees}`}/>
          </Col>
        </Row>
</Container>
        </>
  );
}

export default Balance
