import React, { useState } from 'react';

const CitySearch = () => {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Goa", "Kolkata", "Jaipur", "Ahmedabad"];
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);

    if (input.length > 0) {
      const filtered = cities.filter(city => city.toLowerCase().startsWith(input.toLowerCase()));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        list="city-list"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search Places"
        className="your-input-class"
      />
      <datalist id="city-list">
        {suggestions.map((city, index) => (
          <option value={city} key={index} />
        ))}
      </datalist>
    </div>
  );
};

export default CitySearch;
