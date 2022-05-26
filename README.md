# CBC-Current-Weather-App
React/Redux app that fetches the weather information for the user's current location from the OpenWeatherMap API via a GraphQL wrapper (GraphQL Weather API). 

## Available Scripts

In the client directory, run 

### `yarn start`

to start client in development mode at [http://localhost:3000](http://localhost:3000).

To be run in tandem with the [GraphQL Weather API app](https://github.com/konstantinmuenster/graphql-weather-api) at [http://localhost:4000](http://localhost:4000).


## File Structure

```
├── client
│   ├── public
│   │   ├── index.html
│   ├── src
│   │   ├── Components
│   │   │   ├── Header.js
│   │   │   ├── LoadingComponent.js
│   │   │   ├── RefreshButton.js
│   │   │   ├── Weather.js
│   │   │   ├── store
│   │   │   │   ├── reducers
│   │   │   │   │   ├── cityReducer.js
│   │   │   │   │   ├── coordinatesReducer.js
│   │   │   │   │   ├── weatherReducer.js
│   │   │   │   ├── store.js
│   │   │   ├── App.js
│   │   │   ├── GlobalStyles.js
│   │   │   ├── index.js
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── yarn.lock
├── README.md
```

