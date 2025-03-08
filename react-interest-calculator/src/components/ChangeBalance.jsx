
import Button from 'react-bootstrap/Button';

import { useState } from "react";


function ChangeBalance({balance, handleBalance, transformBalance, bText}) {


    const [numInput, setNumInput] = useState('');



    const handleChange = (event) => {

        setNumInput(event.target.value);
        console.log(typeof event.target.value);
      }

      //numInput treated as string until converted to number for calculations
      const alterBalance = () => {
        let numBalance = Number(numInput);
        if(Number.isNaN(numBalance) || numBalance === 0) {
          setNumInput('');
          return
        }
        // console.log(numBalance);  //error checking
        // console.log(typeof numBalance);
        // console.log(typeof balance);


        let changeIt = transformBalance(balance, numInput); //callbacks for deposit/withdraw calculations
        handleBalance(changeIt);
        setNumInput(''); 

      }

    return (
      <>
    <input type="text" value={numInput} onChange={handleChange} />
    <Button variant="outline-primary" onClick={alterBalance}>{bText}</Button>




      </>
    )
  }
  
  export default ChangeBalance



  /*
  const input = props => {  
  const [textInput, setTextInput] = React.useState('');

  const handleClick = () => {
    console.log(textInput);
    props.send(textInput);
  }

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} placeholder="Type a message..." />
      <div onClick={handleClick} className="icon">
        <i className="fa fa-play" />
      </div>
    </div>
  )
}
  */