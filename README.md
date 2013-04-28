# Comffee : Compass, CoffeScript and SASS united

- [CoffeScript](https://github.com/jashkenas/coffee-script)
- [Compass](https://github.com/chriseppstein/compass)
- [GruntJS](http://gruntjs.com/)
- [NodeJS](http://nodejs.org/)
- [UglifyJS](https://github.com/mishoo/UglifyJS)

## Getting Started

This project requires Grunt `~0.4.0` and `Compass`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

## Description

This is a sample GruntJS project that unites Compass, CoffeScript and SASS using GruntJS plugins.

Used GruntJS Plugins: uglify, coffee, compass, clean, watch, jasmine

## Usage

1. First things first: You will need [npm package manager](https://npmjs.org/) to install all dependencies. npm comes within NodeJS [since version 0.6.3](http://blog.nodejs.org/2011/11/25/node-v0-6-3/).

1. To use Compass and SASS, you will need to install [Ruby](http://www.ruby-lang.org/) and the gems declared in the `Gemfile`. There are many [ways to install Ruby](http://www.ruby-lang.org/en/downloads/), just choose one and be happy.

1. To install all Ruby-Comffee depencies, install Ruby and them run `bundle install`, using the [bundler gem](http://gembundler.com/) or run `gem install compass` and `gem install bootstrap-sass`.

1. To install all NodeJS-Comffee dependencies, install NodeJS and then run `npm install`. This command will install all node_modules that are necessary to run this application.

1. With all dependencies installed, run the `grunt` command and have fun :)

## Project Structure

```js
- fonts   // Put your font files here
- images  // Put your image files here, like the glyphicons from bootstrap
- spec    // Put your tests here
- src 
	- css // Put your CSS,SASS or SCSS files here
	- js  // Put your Coffee or JS files here
```

-------------------------------------

It is important to note that this project has [bootstrap-sass](https://github.com/thomas-mcdonald/bootstrap-sass) included.

To import bootstrap-sass in your CSS just import it.

```css
@import "bootstrap";
```

If you like to include its responsive support, you could also include the `bootstrap-responsive` file.

```css
@import "bootstrap-responsive";
```

For further information you can read how to configure the [bootstrap-sass](https://github.com/thomas-mcdonald/bootstrap-sass/#css)

## Testing

Comffee uses [Jasmine plugin](https://github.com/gruntjs/grunt-contrib-jasmine) to run JS tests. 

Put your test files in the spec using "\*Spec" naming for your specs and "\*Helper" for your test helpers. Example: "dropdownSpec.coffee" and "dropdownHelper.coffee".

With Comffee you can write Jasmine specs using CoffeScript. Just write your specs inside the `spec/coffee` and your tests will be converted to JS.