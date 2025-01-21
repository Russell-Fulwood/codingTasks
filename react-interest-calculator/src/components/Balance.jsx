import DisplayBalance from './DisplayBalance';
import ChangeBalance  from './ChangeBalance';
import ModifyBalance from './ModifyBalance';

import { useState } from 'react'

function Balance() {

  const [balance, setBalance] = useState(0)

  //callback to change state
  const handleBalance = (userInput) => {
    setBalance(userInput);
  }

  const addFn = (a, b) => a+b;
  const subFn = (a, b) => a-b;
  const interest = (a, b) => a*(b/100);
  const bankFees = (a, b) => a-b;

  return (
    <>
    <DisplayBalance balance={balance} />
    <ChangeBalance balance={balance}
                   handleBalance={handleBalance}
                   transformBalance={addFn}
                   bText={'Deposit Money'} />
    <ChangeBalance balance={balance}
                   handleBalance={handleBalance}
                   transformBalance={subFn}
                   bText={'Withdraw Money'}/>
    <ModifyBalance balance={balance}
                   handleBalance={handleBalance}
                   transformBalance={interest}
                   bText={'Add Interest'}/>
    <ModifyBalance balance={balance}
                   handleBalance={handleBalance}
                   transformBalance={bankFees}
                   bText={'Charge Bank Fees'}/>
    </>
  );
}

export default Balance
