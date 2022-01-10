# @alameer/ngx-fancy-grid 🎉

This library based on a code design I found on [ColorLib](https://colorlib.com/etc/tb/Table_Fixed_Header/index.html), I found it very amazing and very fancy to be used in Angular application witgh an easy to use configurations.

`npm install @alameer/ngx-fancy-grid --save`

## Styles and Scripts Configuration

To your `angular.json` add the following lines in the <strong> scripts section </strong>:

```JavaScript
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/jquery/jquery-3.2.1.min.js",
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/bootstrap/js/popper.min.js",
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/bootstrap/js/bootstrap.min.js",
"./node_modules/@alameer/ngx-fancy-grid/assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
"./node_modules/@alameer/ngx-fancy-grid/assets/js/main.js"
```

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
import `NgxFancyGridModule` in your module, in which the grid will be used.

```JavaScript
import { NgxFancyGridModule  } from '@alameer/ngx-fancy-grid';
```

```JavaScript
imports: [
    BrowserModule,
    NgxFancyGridModule
],
```

## In your component - in .ts file
To identify the yoru grid headers you need to import the `NGXheader` model and create an arry of it, define the names of the grid headers and the width in %.


```JavaScript
import { NGXheaders } from '@alameer/ngx-fancy-grid';


 gridHeaders : NGXheaders[] = [
    {
      name: "Name",
      width: 25
    },
    {
      name: "National ID",
      width: 25
    },
    {
      name: "Salary",
      width: 25
    },
    {
      name: "Discount Val.",
      width: 25
    }
  ];
``` 

Then create an array of data that will be presented in the grid, create your object with type `any[]`.

> make sure that your objects attributes have the same name that you gave to your headers, because ngx-fancy-grid is using the attributes names to bind the data to the grid.

This is an example for the data:

```JavaScript
  data = [
    {
      "Name": "Alameer Ashraf",
      "National ID" : "2434344532323",
      "Salary" : "2332",
      "Discount" : "20%"
    },
        {
      "Name": "Mayan Alameer Ashraf",
      "National ID" : "23234657645",
      "Salary" : "342213",
      "Discount" : "20%"
    }
  ];
```

> Mayan is my daughter, she is the perfect human that I've ever met 😍. 
