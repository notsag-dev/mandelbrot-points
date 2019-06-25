# Mandelbrot points
Get info at point level for the Mandelbrot set (any position, any scale).

## Install
```npm i mandelbrot-points```

## Use
```
const {getPoints} = require('mandelbrot-points');

const points = getPoints(
  -2,    // Min value on x axis to get info for
   2,    // Max value on x axis to get info for
  -1,    // Min value on y axis to get info for
   1,    // Max value on y axis to get info for
   0.01, // Step (related to scale): distance between points on same axis. 
   15,   // Max acceptable value (limit used to determine if function diverges or not)
   20    // Max num iterations per point
);
```

It returns an array of objects with the following structure:
```
{ x, y, iters }
```
Where (x, y) is the point location and iters is the number of iterations executed for the point before the function "diverged". If the function does not diverge iters will be equal to the max number of iterations passed as parameter.

## Licence
GPL-3.0
