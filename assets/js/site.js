$(function () {
  const assetVersion = "20260405-5";

  $("#site-header").load(`/partials/header.html?v=${assetVersion}`, function () {
    const path = window.location.pathname.toLowerCase();
    const navKey = path.endsWith("/blog.html") ? "blog" : "";
    $(`[data-nav="${navKey}"]`).addClass("is-active");
  });

  $("#site-footer").load(`/partials/footer.html?v=${assetVersion}`, function () {
    $("#site-year").text(new Date().getFullYear());
  });
});
