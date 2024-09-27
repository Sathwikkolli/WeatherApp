import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ImageUrl from './imageUrl'; // Ensure the path is correct

const GetData = ({ city }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (!city) return; // Early return if no city is provided
            
            const apiKey = '619bf9009e2b4a68abd61730242709';
            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(url);
                setWeather(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city]);

    if (loading) return <p className="loading">Loading weather data...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="weather-container">
            {weather && (
                <div className="weather-details">
                    <h1 className="location-name">{weather.location.name}</h1>
                    <p className="temperature">{weather.current.temp_c}°C</p>
                    <p className="condition">{weather.current.condition.text}</p>
                    <ImageUrl type={weather.current.condition.text} />
                    <p className="humidity">Humidity: {weather.current.humidity}%</p>
                    <p className="wind-speed">Wind Speed: {weather.current.wind_kph} kph</p>
                </div>
            )}
        </div>
    );
};

export default GetData; // Default export
