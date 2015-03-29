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

  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        $.getScript(url);
      }
    });
  }


});
