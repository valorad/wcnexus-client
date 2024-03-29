# wcnexus v4
wc's personal website v4

![cover](https://i.imgur.com/z9pmb5d.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development

### Getting Node Modules

Configure @xmj-alliance as a bit Scoped Registry.

``` shell
npm config set '@xmj-alliance:registry' https://node.bit.dev
```

Then get Node modules as you would.

``` shell
yarn install
```

### Notes
- `@angular/cli` native implemention. You can use any command from official cli.
- Sass enabled.
- Service worker enabled.
- `@angular-builders/custom-webpack` allows you to attach additional settings to override the native webpack config from `@angular/cli`. You may start from `webpack.config.extra.js` located at the project root.
- `@angular-builders/jest` enables Jest testing.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).