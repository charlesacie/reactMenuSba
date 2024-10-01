Restaurant Website with Cocktails API
Overview
This is a simple restaurant website built using React, CSS, and JavaScript. The site displays different menus (Breakfast, Lunch, Dinner) and uses the Cocktails API to show cocktail options. The user can search for cocktails by ingredient or name, and the results will display the drink name, an image, and instructions on how to make the cocktail.

Technologies Used
HTML: Used to structure the content of the website.
CSS: Used for styling the layout and design of the site.
JavaScript: Used for dynamic functionality, including fetching data from the API.
React: A JavaScript library used for building the user interface and handling the state of the app.
Features
Menu Display: Users can click buttons to view different menus (Breakfast, Lunch, or Dinner), with images and names of available food and drinks.
Cocktail Search: Users can search for a cocktail by typing an ingredient or cocktail name. The app fetches data from the Cocktails API and displays the results.
User Interaction: The app dynamically updates the display based on user input, such as changing menus and searching for drinks.
Unsolved Problems
Local Storage: I wanted to save user preferences (like the last menu viewed or favorite cocktails) in the browser so that the data is saved even after the user refreshes the page. However, I couldn't figure out how to get the localStorage feature to work. This means that currently, user preferences are not saved after the page is refreshed.