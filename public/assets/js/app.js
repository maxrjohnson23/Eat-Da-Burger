function devourBurger(id) {
    $.ajax({
        url: `/api/burger/${id}`,
        type: "PUT",
        success: function () {
            window.location.reload();
        }
    })
}

$(".devour-btn").on("click", function () {
    let id = $(this).attr("data-burger");
    devourBurger(id);
});

$("#addBurger").on("click", function (e) {
    e.preventDefault();
    const data = {
        name: $("#burgerName").val()
    };
    $.ajax({
        type: "POST",
        url: "api/burger",
        data: data,
        success: function (result) {
            console.log(result);
        }
    });
})