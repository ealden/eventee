# Eventee

Calendar app.  Built using Rails + Vue.js (in Vite).

## Testing

To run unit tests:

| Application | Framework | Command |
| Frontend    | Vite      | npm run spec           |
| Backend     | Rails     | bundle exec rails spec |

To run acceptance tests:

```
npm run deploy
bundle exec rails cucumber
```

We use Cucumber for Specification by Example.  This resides in Rails, so we can easily manage test data.  This means that we need to build our Vite app, and then "deploy" it inside Rails, before running our acceptance tests.

## Future

This application is structured so we can reimplement in Rust + React :)
