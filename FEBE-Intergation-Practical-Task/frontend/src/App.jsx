import { useState,  useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({}) // State to store fetched data

  const [customMessage, setCustomMessage] = useState('');


  useEffect(() => {
    fetchData(); // Fetch data each time the component loads
    fetchMessage();
    }, []);

    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        /* Sends a GET request to
        'http://localhost:8080/api/data' (backend server) */
        const response = await axios.get('/api/data');
        setData(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
     //get request to fetch a simple message 
     const fetchMessage = async () => {
      try {
        /* The message is passed as a parameter the the backend sever, which returns it as
         a json object*/
        const response = await axios.get('/api/message/Hello from the front end.');
        setCustomMessage(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  return (
    <>
      <div className="App">
        <header className="App-header">
        {/* Display the message, or 'Loading...' if data is not yet fetched*/}
        <h1>{data.message || 'Loading...'}</h1>

        <h1>{customMessage.message || 'Loading...'}</h1>
        </header>    
      </div>
    </>
  )
}

export default App
