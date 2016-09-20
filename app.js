function pro() {
    $(".pro2", ".container").each(function() {
        $(this).css({
            "width": "0%"
        });
        $(this).empty();
        var level = "";
        if ($(this).attr("data-value") >= 90)
            level = "Master";
        else if ($(this).attr("data-value") >= 70)
            level = "Expert";
        else if ($(this).attr("data-value") >= 55)
            level = "Proficient";
        else if ($(this).attr("data-value") >= 30)
            level = "Familiar";
        else if ($(this).attr("data-value") < 30)
            level = "Beginner";

        $(this).append(level);
        $(this).animate({
            "width": $(this).attr("data-value") + "%"
        }, 4000);
    });
}
$(document).ready(function() {pro();});