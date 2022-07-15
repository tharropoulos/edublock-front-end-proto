$("#eye").on("click", function () {
  const $this = $(this);
  if ($this.find("span").text() == "visibility") {
    $this.find("span").text("visibility_off");
  } else {
    $this.find("span").text("visibility");
  }
});



$('#searchForm').on('shown.bs.collapse', function () {
  // focus input on collapse
  $("#search").focus()
})

$('#searchForm').on('hidden.bs.collapse', function () {
  // focus input on collapse
  $("#search").blur()
})