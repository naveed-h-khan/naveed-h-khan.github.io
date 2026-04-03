$(function () {
  $("#site-header").load("/partials/header.html", function () {
    const path = window.location.pathname.toLowerCase();
    const navKey = path.endsWith("/blog.html") ? "blog" : "home";
    $(`[data-nav="${navKey}"]`).addClass("is-active");
  });

  $("#site-year").text(new Date().getFullYear());
});
