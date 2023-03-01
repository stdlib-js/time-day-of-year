<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# dayOfYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the day of the year.



<section class="usage">

## Usage

```javascript
import dayOfYear from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-day-of-year@esm/index.mjs';
```

#### dayOfYear( \[month\[, day, year]] )

Returns the day of the year.

```javascript
var num = dayOfYear();
// returns <number>
```

By default, the function returns the day of the year for the current date (according to local time). To determine the day of the year for a particular day, provide `month`, `day`, and `year` arguments.

```javascript
var num = dayOfYear( 12, 31, 2016 );
// returns 366

num = dayOfYear( 12, 31, 2017 );
// returns 365
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = dayOfYear( 12, 31, 2016 );
// returns 366

num = dayOfYear( 'dec', 31, 2016 );
// returns 366

num = dayOfYear( 'december', 31, 2016 );
// returns 366
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = dayOfYear( new Date() );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import dayOfYear from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-day-of-year@esm/index.mjs';

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = dayOfYear( 'Dec', 31, i );
    console.log( 'In the year %d, December 31 is day number %d.', i, v );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time-day-of-quarter`][@stdlib/time/day-of-quarter]</span><span class="delimiter">: </span><span class="description">determine the day of the quarter.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-day-of-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-day-of-year

[test-image]: https://github.com/stdlib-js/time-day-of-year/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/time-day-of-year/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-day-of-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-day-of-year?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-day-of-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-day-of-year/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/time-day-of-year#cli
[cli-url]: https://github.com/stdlib-js/time-day-of-year/tree/cli
[@stdlib/time-day-of-year]: https://github.com/stdlib-js/time-day-of-year/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-day-of-year/tree/deno
[umd-url]: https://github.com/stdlib-js/time-day-of-year/tree/umd
[esm-url]: https://github.com/stdlib-js/time-day-of-year/tree/esm
[branches-url]: https://github.com/stdlib-js/time-day-of-year/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-day-of-year/main/LICENSE

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/day-of-quarter]: https://github.com/stdlib-js/time-day-of-quarter/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
