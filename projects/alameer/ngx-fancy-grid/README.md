# @alameer/ngx-fancy-grid 🎉

This library based on a code design I found on [ColorLib](https://colorlib.com/etc/tb/Table_Fixed_Header/index.html), I found it very amazing and very fancy to be used in Angular application witgh an easy to use configurations.

`npm install @alameer/ngx-fancy-grid --save`

## Styles and Scripts Configuration

To your `angular.json` add the following lines in the <strong> scripts section </strong>:

<code>
"styles": [ <br>
&nbsp; &nbsp; &nbsp; "./node_modules/@alameer/ngx-fancy-grid/assets/vendor/bootstrap/css/bootstrap.min.css", <br>
&nbsp; &nbsp; &nbsp; "./node_modules/@alameer/ngx-fancy-grid/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css", <br>
&nbsp; &nbsp; &nbsp; "./node_modules/@alameer/ngx-fancy-grid/assets/vendor/animate/animate.css", <br>
&nbsp; &nbsp; &nbsp; "./node_modules/@alameer/ngx-fancy-grid/assets/vendor/perfect-scrollbar/perfect-scrollbar.css", <br>
&nbsp; &nbsp; &nbsp; "./node_modules/@alameer/ngx-fancy-grid/assets/css/main.css",<br>
&nbsp; &nbsp; &nbsp; "./node_modules/@alameer/ngx-fancy-grid/assets/css/util.css" <br>
],
</code>


and in the styles section add the following code: 


```JavaScript
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/bootstrap/css/bootstrap.min.css",
"./node_modules/@alameer/ngx-fancy-grid/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/animate/animate.css",
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/perfect-scrollbar/perfect-scrollbar.css",
"./node_modules/@alameer/ngx-fancy-grid/assets/css/main.css",
"./node_modules/@alameer/ngx-fancy-grid/assets/css/util.css"
```


## In your module
Import `NgxFancyGridModule` in your module, in which the grid will be used.

`import { NgxFancyGridModule  } from '@alameer/ngx-fancy-grid';`

<code>
imports: [ <br>
&nbsp; &nbsp; &nbsp;BrowserModule, <br>
&nbsp; &nbsp; &nbsp;NgxFancyGridModule<br>
],
</code>

## In your component - in .ts file
Import `import { NGXheaders } from '@alameer/ngx-fancy-grid';` the headers model 

After building your library with `ng build ngx-fancy-grid`, go to the dist folder `cd dist/ngx-fancy-grid` and run `npm publish`.

## Running unit tests

Run `ng test ngx-fancy-grid` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-fancy-grid` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-fancy-grid`.
> Note: Don't forget to add `--project ngx-fancy-grid` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-fancy-grid` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-fancy-grid`, go to the dist folder `cd dist/ngx-fancy-grid` and run `npm publish`.

## Running unit tests

Run `ng test ngx-fancy-grid` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
