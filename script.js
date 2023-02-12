$(".createAccount").click(function () {
  if ($("#password").val() !== $("#confirmPassword").val()) {
    $(".invalid-feedback").show();
    $("form").on("submit", function (e) {
      e.preventDefault();
    });
  } else {
    $(".invalid-feedback").hide();
  }
});
