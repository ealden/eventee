# Eventee

Calendar app.  Built using Rails + Vue.js (in Vite).

## Development

To run the application:

| App   | Command                   |
| ----- | ------------------------- |
| Vite  | npm run dev               |
| Rails | bundle exec rails server  |

To run unit tests:

| App   | Command                   |
| ----- | ------------------------- |
| Vite  | npm run spec              |
| Rails | bundle exec rails spec    |

To run acceptance tests:

```
npm run deploy
bundle exec rails cucumber
```

We use Cucumber for Specification by Example.  This resides in Rails, so we can easily manage test data.  This means that we need to build our Vite app, and then "deploy" it inside Rails, before running our acceptance tests.

## Future

This application is structured so we can reimplement in Rust + React :)
