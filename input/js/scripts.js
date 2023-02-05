window.addEventListener("load", function (e) {
  var inputs = document.querySelectorAll(".form-control");
  var form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    var i = 0;
    while (i <= inputs.length - 1) {
      var value = inputs[i].value;

      if (value === "") {
        return e.preventDefault();
      }
      i++;
    }
  });
});
    