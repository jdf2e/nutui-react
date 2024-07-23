function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isNull(o) {
    return o === null;
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
const isArray = Array.isArray;
const isWebPlatform = () => "jdharmony" === 'h5' || "harmony" === 'web';

export { isArray, isBoolean, isBooleanStringLiteral, isFunction, isNull, isNumber, isObject, isString, isUndefined, isWebPlatform };
//# sourceMappingURL=is.js.map
