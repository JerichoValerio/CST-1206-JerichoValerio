function process_response(data) {
  console.log(data);
  $("#z").html(JSON.stringify(data.weather[0].description));
}
function init_ajax() {
  city_name = $("#x").val();
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`,
    type: "GET",
    success: process_response,
  });
}

function setup() {
  $("#y").click(init_ajax);
}

$(document).ready(setup);
