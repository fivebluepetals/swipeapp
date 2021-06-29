
# How to Run

The application uses `webpack` to build the application and Jekyll
to build the static SPA content (where the application may eventually live).
The application is also equipped with a standard webpack webserver
though it is untested.

Once we have all packages installed, you should be able to run
```bash
# To build the code needed to run
npx webpack

# To start the webserver
bundle exec jekyll server [--incremental]
```

## Requirements and Installation

The frontend application uses Vue (Typescript, SaSS) but getting the Vue
dependencies up and running involves installing the NPM dependencies and
making sure that `webpack` is working appropriately. We need:

- `npm@^7.14.0`
- `node@^12.17.0`

in our dev environment and for setting up. On MacOS

- Upgrade npm via `(sudo) npm i -g npm`
- Upgrade node via `sudo n stable`

The application is stored in `_app` directory, and we can install all
relevant dependencies by
```
cd _app && npm install
```
Which will pull in `webpack`, Vue, and other dev dependencies.

The backend application uses Jekyll. We are able to get the application running
via

- `bundler@^2.2.17`
- `ruby@^2.6.3` and `ruby@3.0.0`

To install the dependencies that the documented in `Gemfile`, run

```bash
bundler install
```