import './App.css';
import {useCallback, useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
      axios.get('/api/load')
          .then(res => {
              if(res.status === 200) setMessage(res.data.message);
          })
          .catch(err => alert(err));
  }, []);

  const handleChange = useCallback(e => setMessage(e.target.value), []);
  const handleSubmit = useCallback(e => {
      e.preventDefault();
      axios.post('/api/save', { message })
          .then(res => {
              if(res.status === 200) alert("Successfully saved.");
          })
          .catch(err => alert(err));
  }, [message]);

  return (
    <div className="App">
      <form className="App-header" onSubmit={handleSubmit}>
        <label>
          <input className="App-input" type="text" placeholder="Enter any message" value={message} onChange={handleChange} />
        </label>
        <input className="App-submit" type="submit" value="Save"/>
      </form>
    </div>
  );
}

export default App;
