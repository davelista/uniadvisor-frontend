export default class ApiResponse {
    constructor(...args) {
        Object.defineProperty(this, "_setKey", {
            enumerable: false,
            writable: false,
            configurable: false,
            value: this._setKey,
        });
        args.forEach((arg) =>
            Object.defineProperty(this, arg, { enumerable: true, writable: false, configurable: false, value: arg })
        );
    }

    _setKey(key) {
        this[key] = key;
    }
}