function devourBurger(id) {
    $.ajax({
        url: `/api/burger/${id}`,
        type: "PUT",
        success: function () {
            console.log('DDDDOONNNE');
        }
    }).done(function () {
        console.log('Done');
    });
}

$(".devour-btn").on("click", function () {
    let id = $(this).attr("data-burger");
    devourBurger(id);
});