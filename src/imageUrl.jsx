import React from 'react';
import cloudy from './photos/rain.avif';
import sunny from './photos/sunny.avif';
import rain from './photos/cloud.jpg';

const ImageUrl = ({ type }) => {
    let backgroundImage;

    switch (type.toLowerCase()) {
        case 'sunny':
            backgroundImage = sunny; // Replace with actual image path
            break;
        case 'cloudy':
            backgroundImage = cloudy; // Replace with actual image path
            break;
        case 'rain':
            backgroundImage = rain; // Replace with actual image path
            break;
        // Add more cases as needed
        default:
            backgroundImage = sunny; // Default image
    }

    // Inline styles for background image
    const imageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        height: '200px', // Set a height for the background image area
        width: '100%', // Full width
        borderRadius: '8px', // Optional: rounded corners
    };

    return <div style={imageStyle} className="weather-image" />;
};

export default ImageUrl; // Ensure you are using a default export
