let header_data, user_data;
(async () => {
  const response = await fetch(
    "https://kfnvmcl9-dev.preview.zestyio.com/-/instant/6-92cdfaaffe-nbvzv8.json"
  );
  const user_details = await fetch(
    "https://kfnvmcl9-dev.preview.zestyio.com/-/instant/6-d2cdf9b0f1-7t0gbh.json"
  );


  user_data = await user_details.json();
  header_data = await response.json();
    console.log(header_data);
  $.each(header_data.data, function(key, value) {
    $("#dropdown").append(
      new Option(value.content.language, value.content.language)
    );
  });

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

$("#dropdown").change(function() {
  const data = header_data.data.find(
    val => val.content.language === document.getElementById("dropdown").value
  );
  render(data.content);
});
