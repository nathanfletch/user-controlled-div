$(document).ready(function () {
  $('#color-form').on('input', function () {
    const bgColor = $('#color-input').val();
    const borColor = $('#border-color-input').val();
    $('#target').css("background-color", bgColor);
    $('#target').css("border-color", borColor);
  });
  $('#border-form').on('input', function () {
    const borWidth = parseInt($('#border-width-input').val());
    const borStyle = $("input:radio[name=style]:checked").val();
    $('#target').css("border-width", borWidth);
    $('#target').css("border-style", borStyle);
  });
  
  $('#hue-form').on('input', function () {
    const hue = $('#hue-input').val();
    console.log(hue);
    $('#target').css("filter", `hue-rotate(${hue}deg)`);
  })

});