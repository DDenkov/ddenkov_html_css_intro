/** Да се направи валидатор на JavaScript за дробни числа,
 * който проверява дали числото има максимална дължина на
 * цялата част от 10 символа и на дробната част - от 5 символа(не е задължителна),
 * като дробната и цялата част са отделени със запетая или точка. 
 */

function isFraction(str) {
  var regEx = /(-?\d\d?\d?\d?\d?(\.?|,?)\d?\d?\d?\d?\d?)/g;
  var isValid;
  isValid = regEx.test(str);
  return isValid;
}
