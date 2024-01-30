# Reinforcement Project: Movie Search App with React and OMDB API

## Objective:

In this assignment, you'll use React and the OMDB API to build a simple movie search application.

## Requirements:

Your application should allow users to:

1. **Search for a movie by title:** Implement a search bar where the user can input the title of a movie.

2. **Display search results:** Display a list of movies that match the search term. Each movie entry should show the title, year of release, and poster (if available). The movies should be fetched from the OMDB API.

3. **Display detailed information about a movie:** When a user clicks on a movie in the list, the app should display more information about that movie, such as its plot, director, actors, and rating.

## Instructions:

1. **Set Up Your Project:** Create a new React project using codesandbox.

2. **Set Up the API Request:** You will need to send a GET request to the OMDB API. You can use the `fetch` function or a library like `axios` to do this. Note: You will need to sign up for a free OMDB API key.

3. **Implement Search Functionality:** Create a search bar that lets users search for movies by title. The search should trigger a new API request each time the user submits a new search term.

4. **Display Search Results:** Show a list of movies that match the search term. Each movie should display at least the title, year of release, and poster image.

5. **Show Detailed Movie Information:** When a user clicks on a movie, fetch and display more detailed information about that movie from the OMDB API.

## Tips:

- To manage your application's state, consider using the `useState` and `useEffect` hooks.
- Remember to handle potential errors in your API requests. What should your application do if a movie can't be found, or if there's an error with the API request?

## Submission:

Share the link to the sandbox, first make the sandbox public or unlisted.