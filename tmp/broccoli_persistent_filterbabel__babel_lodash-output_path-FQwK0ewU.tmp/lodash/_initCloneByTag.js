define('lodash/_initCloneByTag', ['exports', 'lodash/_cloneArrayBuffer', 'lodash/_cloneDataView', 'lodash/_cloneRegExp', 'lodash/_cloneSymbol', 'lodash/_cloneTypedArray'], function (exports, _cloneArrayBuffer, _cloneDataView, _cloneRegExp, _cloneSymbol, _cloneTypedArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return (0, _cloneArrayBuffer.default)(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return (0, _cloneDataView.default)(object, isDeep);

      case float32Tag:case float64Tag:
      case int8Tag:case int16Tag:case int32Tag:
      case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
        return (0, _cloneTypedArray.default)(object, isDeep);

      case mapTag:
        return new Ctor();

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return (0, _cloneRegExp.default)(object);

      case setTag:
        return new Ctor();

      case symbolTag:
        return (0, _cloneSymbol.default)(object);
    }
  }

  exports.default = initCloneByTag;
});