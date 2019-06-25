const lengthComplexNumber = (a, b) => {
  return Math.sqrt(Math.pow(a, 2), Math.pow(b, 2));
};

/**
 * Mandelbrot function:
 *  fc(z) = pow(z,2) + c
 *
 *  Where c = ca + cb * i is a complex number which corresponds to the point of the
 *  plane you want to evaluate => (ca, cb)
 *
 *  Where z is / z0 = 0, zi = result of f for iteration i-1 => it's a complex number
 *  as well, represented as za + zb*i
 *
 */
const mandelbrotPoint = (za, zb, ca, cb, currStep, maxAcceptable, maxSteps) => {
  const real = Math.pow(za, 2) - Math.pow(zb, 2) + ca;
  const imaginary = 2 * za * zb + cb;
  const length = lengthComplexNumber(real, imaginary);
  if (length > maxAcceptable || currStep >= maxSteps) {
    return currStep;
  }
  currStep++;
  return mandelbrotPoint(real, imaginary, ca, cb, currStep, maxAcceptable, maxSteps);
};

/**
 * Get Mandelbrot points info.
 *
 * @param number xmin Min value on x axis to process
 * @param number xmax Max value on x axis to process
 * @param number ymin Min value on y axis to process
 * @param number ymax Max value on y axis to process
 * @param number step Step between each two values on the same axis
 * @param number maxAcceptable value from which the function is considered to diverge
 * @param number maxSteps max steps to execute for every point
 *
 * @returns a list of objects with format {x, y, numIterations}
 *
 */
const getPoints = (xmin, xmax, ymin, ymax, step, maxAcceptable, maxSteps) => {
  if (xmin >= xmax || ymin >= ymax) {
    throw new Error('Pass parameters / xmin < xmax and ymin < ymax');
  }
  const res = [];
  for (let x = xmin; x <= xmax; x += step) {
    for (let y = ymin; y <= ymax; y += step) {
      res.push({x, y, iters: mandelbrotPoint(0, 0, x, y, 1, maxAcceptable, maxSteps)});
    }
  }
  return res;
};

module.exports = {getPoints};
