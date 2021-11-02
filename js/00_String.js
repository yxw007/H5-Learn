String.isNullOrEmpty = function () {
    return this == null || this == "";
  };

let a = null;
console.log(String.isNullOrEmpty(a));