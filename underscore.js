(function () {
    
    //establishing a root object
    var root = this;

    //save previous underscore variable
        // I guess this is useful if you want to
        // use multiple versions of underscore
    var previousUnderscore = this._;

    var breaker = {};

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    var push = Array.push,
        slice = Array.slice,
        concat = Array.concat,
        toString = Array.toString,
        hasOwnProperty = Array.hasOwnProperty;
    

}).call(this);
