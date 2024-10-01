import React, { useState, useEffect } from 'react';

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('vodka'); 
  const [query, setQuery] = useState('vodka'); 

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '2ebe4d052dmsh49817526ea7a12ep14925djsn656c5456304c',
          'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchTerm}`, options);
        const data = await response.json();
        setCocktails(data.drinks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the cocktail data', error);
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div>
      <h1>Cocktails</h1>
      <p>
        Our cocktail menu is a fusion of classic flavors and innovative creations, crafted to perfection by our skilled mixologists.
      </p>
      <p>
        We take pride in using fresh, organic ingredients in our cocktails, from hand-squeezed juices to house-made syrups and artisanal spirits.
      </p>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a cocktail..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading cocktails...</p>}

      {!loading && cocktails && cocktails.length > 0 ? (
        <ul>
          {cocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>
              <h3>{cocktail.strDrink}</h3>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100px', height: '100px' }} />
              <p>{cocktail.strInstructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No cocktails found. Try another search term!</p>
      )}
    </div>
  );
}

export default Cocktails;
