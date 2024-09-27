import React, { useState, useEffect } from 'react';
import GetData from './getData';
import image from './photos/backGroundImage.jpg'
export default function Main() {
    const [name, setName] = useState('');
    const [greet, setGreet] = useState(null);
  
    // Handle input change
    const handleTemp = (temp) => {
      setName(temp.target.value);
    };
  
    // Handle form submission
    const takeInput = (temp) => {
      temp.preventDefault();
      setGreet(name);
    };
  
    return (

        <div style={{textAlign:'center'}}>
          <h1>Enter City Name</h1>
          <form onSubmit={takeInput} style={{ display: 'inline-block' }}>
            <input
              type="text"
              className="input--text"
              value={name}
              onChange={handleTemp}
              placeholder="Enter City"
              style={{
                padding: '10px',
                fontSize: '16px',
                marginBottom: '10px',
                textAlign: 'center',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #f0f8ff, #add8e6)',
              }}
            />
            <button
              className="button"
              type="submit"
              style={{
                textAlign: 'center',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
  
          {<GetData city={greet} />}
        </div>
  
    );
  }
  