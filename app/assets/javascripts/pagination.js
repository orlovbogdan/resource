$(function() {
  $(document).on("click", ".pagination a, th a", function() {
    $(".pagination").html("Page is loading...");
    $.getScript(this.href);
    history.pushState(null, document.title, this.href);
    return false;
  });
  $("#entities_search input").keyup(function() { //$("#entities_search").submit(function() {
    $.get($("#entities_search").attr("action"), $("#entities_search").serialize(), null, "script");
    history.replaceState(null, document.title, $("#entities_search").attr("action") + "?" + $("#entities_search").serialize()); //pushState
    return false;
  });
  $(window).bind("popstate", function() {
    $.getScript(location.href);
  });
});

