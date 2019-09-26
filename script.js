const CONFIG = {
  INSTANCE_URL: "https://kfnvmcl9-dev.preview.zestyio.com",
  HEADER_DETAILS: "/-/instant/7-b2cbd788c8-fs1zlr.json",
  USER_DETAILS: "/-/instant/6-d2cdf9b0f1-7t0gbh.json",
};

let header_data, user_data;

(async () => {
  
  const header_details = await fetch(`${CONFIG.INSTANCE_URL}${CONFIG.HEADER_DETAILS}`);
  const user_details = await fetch(`${CONFIG.INSTANCE_URL}${CONFIG.USER_DETAILS}`);

  user_data = await user_details.json();
  header_data = await header_details.json();

  console.dir(header_data);
  
  // $.each(header_data.data, function(key, value) {
  //   $("#dropdown").append(
  //     new Option(value.content.language, value.content.language)
  //   );
  // });

  $.each(user_data.data, function(key, value) {
    // console.log(value);
    $("#userlist-table tr:last").after(`<tr>
    <td>${value.content.firstname}</td>
    <td>${value.content.lastname}</td>
    <td>${value.content.contact}</td>
  </tr>`);
  });
  
  render(header_data.data[0].content);
})();

const render = data => {
  // console.log(data);
  $("#brand-name").text(data.brandname);
  $("#logo").attr("src", data.logo.data[0].url);
  $('#custom').append(data.tagline);
};

// $("#dropdown").change(function() {
//   const data = header_data.data.find(
//     val => val.content.language === document.getElementById("dropdown").value
//   );
//   render(data.content);
// });
