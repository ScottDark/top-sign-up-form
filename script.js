$("form").on("submit", function (e) {
  if ($("#password").val() !== $("#confirmPassword").val()) {
    e.preventDefault();
    $(".invalid-feedback").show();
  } else {
    $(".invalid-feedback").hide();
  }
});
