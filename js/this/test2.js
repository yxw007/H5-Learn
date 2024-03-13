var myObj = {
  name: "闷倒驴",
  showThis: function () {
    console.log(this); // myObj
    var bar = () => {
      this.name = "王美丽";
      console.log(this); // myObj
    };
    bar();
  },
};
myObj.showThis();
console.log(myObj.name); // "王美丽" console.log(window.name); // ''
