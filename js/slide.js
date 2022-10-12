$(function () {
  var visualWrap = $("main"),
    slide = visualWrap.find(".main_visual > .main_visual_bg"),
    slideCount = slide.length,
    stopTimer,
    leftBtn = visualWrap.find(".main_btt > .left_btt"),
    rightBtn = visualWrap.find(".main_btt > .right_btt"),
    pager = visualWrap.find(".main_btt > span"),
    current = 0;

  var slidePos = slide.each(function (i) {
    $(this).css("left", i * 100 + "%");
  });

  timer();

  function timer() {
    stopTimer = setInterval(function () {
      var prev = slide.eq(current);
      move(prev, 0, "-100%");
      var prevPager = pager.eq(current);
      prevPager.removeClass("on");
      current++;
      if (current == slideCount) {
        current = 0;
      }
      var next = slide.eq(current);
      move(next, "100%", "0%");
      var nextPager = pager.eq(current);
      nextPager.addClass("on");
      cnt(current);
    }, 5000);
  }

  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000, "easeOutQuint");
  }

  rightBtn.click(function () {
    var prev = slide.eq(current);
    move(prev, 0, "-100%");
    var prevPager = pager.eq(current);
    prevPager.removeClass("on");
    current++;
    if (current == slideCount) {
      current = 0;
    }
    var next = slide.eq(current);
    move(next, "100%", "0%");
    var nextPager = pager.eq(current);
    nextPager.addClass("on");
    cnt(current);
  });

  leftBtn.click(function () {
    var prev = slide.eq(current);
    move(prev, 0, "100%");
    var prevPager = pager.eq(current);
    prevPager.removeClass("on");
    current--;
    if (current < 0) {
      current = slideCount - 1;
    }
    var next = slide.eq(current);
    move(next, "-100%", "0%");
    var nextPager = pager.eq(current);
    nextPager.addClass("on");
    cnt(current);
  });

  pager.click(function () {
    var tg = $(this);
    var i = tg.index();
    pager.removeClass("on");
    tg.addClass("on");
    pagerMover(i);
    cnt(i);
  });

  function pagerMover(i) {
    if (current == i) return;
    var currentEl = slide.eq(current);
    var nextEl = slide.eq(i);
    currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
    nextEl.css("left", "100%").stop().animate({ left: "0" }, 500);
    current = i;
  }
});
