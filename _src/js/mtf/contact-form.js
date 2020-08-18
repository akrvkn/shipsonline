/*===================================*
	08. CONTACT FORM JS
	*===================================*/
$("#submitCButton").on("click", function(event) {
    event.preventDefault();
    var mydata = $(".cform").serialize();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://www.mosturflot.ru/api/ajax/contact.php",
        data: mydata,
        success: function(data) {
            if (data.type === "error") {
                $("#alert-msg").removeClass("alert-msg-success");
                $("#alert-msg").addClass("alert-msg-failure");
            } else {
                $("#alert-msg").addClass("alert-msg-success");
                $("#alert-msg").removeClass("alert-msg-failure");
                $("#name").val("Ваши фамилия и имя");
                $("#email").val("Email или телефон");
                $("#phone").val("");
                $("#msg").val("");

            }
            $("#alert-msg").html(data.msg);
            $("#alert-msg").show();
        },
        error: function(xhr, textStatus) {
            alert(textStatus);
        }
    });
});
