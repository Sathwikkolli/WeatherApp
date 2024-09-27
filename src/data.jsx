// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Main() {
//     const [weather, setWeather] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [name, setName] = useState('Hyderabad'); // Default city
//     const [greet, setGreet] = useState(null);
//     const [showWeather, setShowWeather] = useState(false); 

//     // Handle input change
//     const handleTemp = (temp) => {
//         setName(temp.target.value);
//     };

//     // Handle form submission
//     const takeInput = (temp) => {
//         temp.preventDefault();
//         setGreet(name);
//         setShowWeather(true); 
//     };

//     useEffect(() => {
//         if (showWeather) { 
//             const apiKey = '619bf9009e2b4a68abd61730242709';
//             const city = name;

//             setLoading(true); 
//             const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

//             axios
//                 .get(url)
//                 .then((response) => {
//                     setWeather(response.data);
//                     setLoading(false); 
//                 })
//                 .catch((error) => {
//                     setError(error.message);
//                     setLoading(false); 
//                 });
//         }
//     }, [showWeather, name]); // Dependency on showWeather and name

//     // Loading and error handling
//     if (loading) return <p>Loading weather data...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
//             <form onSubmit={takeInput}>
//                 <input
//                     type='text'
//                     value={name}
//                     onChange={handleTemp}
//                     placeholder='Enter City'
//                     style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
//                 />
//                 <button type='submit' style={{ padding: '10px', fontSize: '16px' }}>
//                     Submit
//                 </button>
//             </form>
//             {showWeather && weather && ( // Conditional rendering for weather details
//                 <div>
//                     <h1>Weather in {weather.location.name}</h1>
//                     <p>Temperature: {weather.current.temp_c}°C</p>
//                     <p>Condition: {weather.current.condition.text}</p>
//                     <p>Humidity: {weather.current.humidity}%</p>
//                     <p>Wind Speed: {weather.current.wind_kph} kph</p>
//                 </div>
//             )}
//             <h1>{greet}</h1>
//         </div>
//     );
// }
