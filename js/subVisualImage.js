// https://uteee.com/system/3750/
// 使用するのは、Variable WidthとCenter Modeの応用
$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    centerMode: true,
    variableWidth: true
  });
  // // まずは「Variable Width」で作成する
  // $('.variable-width').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });
});