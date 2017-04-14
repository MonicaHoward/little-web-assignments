var tbody = document.querySelector('tbody');
var productQuery = document.querySelector('#product-query');
var violationQuery = document.querySelector('#violation-query');
var firmQuery = document.querySelector('#firm-query');

var allViolations;



function makeAjaxCall() {

  $.ajax({
    url: '/api/cpscViolations'
  })

  .done(function(data) {
    allViolations = data;
  });

    setTimeout(function() {
      console.log(allViolations)
    }, 2000);

    put

}



//   for (var i = 0; i < data.values.length; i++) {

      makeAjaxCall();
//
//     var addtr = document.createElement('tr');
//
//     var dateTD = document.createElement('td');
//     dateTD.textContent = data.values[i].date;
//     addtr.appendChild(dateTD);
//
//     var productTD = document.createElement('td');
//     productTD.textContent = data.values[i].product;
//     addtr.appendChild(productTD);
//
//     var violationTD = document.createElement('td');
//     violationTD.textContent = data.values[i].violation;
//     addtr.appendChild(violationTD);
//
//     var firmTD = document.createElement('td');
//     firmTD.textContent = data.values[i].firm;
//     addtr.appendChild(firmTD);
//
//
//     tbody.appendChild(addtr);
//
//   }
// });
//
// }








productQuery.addEventListener('keyup', function(evt) {

  if ()

  makeAjaxCall();

});

violationQuery.addEventListener('keyup', function() {

  if ()

  makeAjaxCall();

});

firmQuery.addEventListener('keyup', function() {

  if ()
  makeAjaxCall();

});
