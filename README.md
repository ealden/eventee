# Eventee

Calendar app.  Built using Rails + Vue.js (in Vite).

## Development

Setup Vite:

```
cd app/
npm install

npm run spec
npm run dev
```

Setup Rails:

```
cd api/
bundle exec rails install

bundle exec rails spec
bundle exec rails server
```

To run acceptance tests:

```
cd app/
npm run deploy

cd ../api/
bundle exec rails cucumber
```

We use Cucumber for Specification by Example.  This resides in Rails, so we can easily manage test data.

We need to build our Vite app, then "deploy" it inside Rails, before running our acceptance tests.

## Future

This application is structured so we can reimplement in Rust + React :)
