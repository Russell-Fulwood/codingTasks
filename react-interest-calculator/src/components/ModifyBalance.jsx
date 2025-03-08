import Button from 'react-bootstrap/Button';

function ModifyBalance({balance, handleBalance, transformBalance, bText}) {



  const alterBalance = () => {
    let changeIt = transformBalance(balance); // callback for interest/bank charges
    handleBalance(changeIt);  //split with variable for clarity. This changes parent balance state
  }

    return (
      <>
      <Button variant="secondary" onClick={alterBalance}>{bText}</Button>
      </>
    )
  }
  
  export default ModifyBalance