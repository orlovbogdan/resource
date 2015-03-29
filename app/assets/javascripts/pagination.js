$(function() {
  $(document).on("click", ".pagination a, th a", function() {
    $(".pagination").html("Page is loading...");
    $.get(this.href, null, null, "script")
    return false;
  });
});

$(function() {
  $("#entities_search input").keyup(function() { //$("#entities_search").submit(function() {
    $.get($("#entities_search").attr("action"), $("#entities_search").serialize(), null, "script");
    return false;
  });
});