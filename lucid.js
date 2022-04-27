$(document).ready(function () {
  $("#underline-movement").mouseover(function () {
    $("#actual-underline").animate({ width: "105px" });
  });
});
$(document).ready(function () {
  $("#underline-movement").mouseout(function () {
    $("#actual-underline").animate({ width: "0px" });
  });
});
