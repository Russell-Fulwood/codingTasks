// React – Local State Management and Events: Auto-graded task
/*
● Create a React application that simulates a banking system with the
  following functionality:
  ○ Display the user’s current bank balance.
  ○ Input for the user to deposit money to the bank (the user should input a number and click a
    button that will add the “deposit” amount to the currently displayed bank balance).
  ○ Input for the user to withdraw money from the bank (the user should input a number and click
    a button that will remove the withdrawn amount from the currently displayed bank balance).
  ○ There should be a button that the user can click to “add interest” to the account, using 
    either a fixed interest rate percentage or a rate the user has entered in another input,
    that will then be added to the balance being displayed.
  ○ There should be a button that the user can click to “Charge bank fees” that can either be a 
    fixed amount or calculated as a percentage of the bank balance. This should then be deducted
    from the displayed balance
● This app must use at least two separate components with a shared state that is lifted
  to a parent component.
● Try to be creative and use some Bootstrap styling or, optionally, have an alert that 
  triggers when the user goes into a negative balance, for example.
*/

import './App.css'
import Balance from './components/Balance'

function App() {

  return (
    <>
      <Balance/>
    </>
  )
}

export default App
