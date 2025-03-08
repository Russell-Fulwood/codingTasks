import Alert from 'react-bootstrap/Alert';

function DisplayBalance({balance}) {


  return (
    <>
      <h1>Your Balance is: £{balance}</h1>
      {(balance < 0) &&
         <Alert key={'primary'} variant={'primary'} dismissible>
          <p>You are in debit</p>
       </Alert>
      }
    </>
  )
}

export default DisplayBalance