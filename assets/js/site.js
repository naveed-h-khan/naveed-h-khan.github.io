$(function () {
  $("#site-header").load("/partials/header.html", function () {
    const path = window.location.pathname.toLowerCase();
    const navKey = path.endsWith("/blog.html") ? "blog" : "";
    $(`[data-nav="${navKey}"]`).addClass("is-active");
  });

  $("#site-footer").load("/partials/footer.html", function () {
    $("#site-year").text(new Date().getFullYear());
  });
});
