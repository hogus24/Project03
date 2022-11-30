$(function () {
  firstmenu = $(".gnb > li");

  firstmenu.mouseenter(function () {
    $(this).find("ul").show();
  });

  firstmenu.mouseleave(function () {
    $(this).find("ul").hide();
  });
});
