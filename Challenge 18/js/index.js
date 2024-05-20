console.log('Your index file has loaded correctly');

var buttons = document.querySelectorAll('.myButton'); 
console.log(buttons);


document.getElementById("#myButton").addEventListener('click', function() {


//   buttons = window.location.href;
  console.log(buttons);
         
//   var pdfPath = this.getAttribute('Images/mywork.pdf');
//   console.log(pdfPath)
  // Redirect to the specified PDF
  location.replace("./Images/myworkpdf");
});

// Add a click event listener to each button
// buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         // Get the value of the data-pdf attribute
//         var pdfPath = this.getAttribute('data-pdf');
//         // Redirect to the specified PDF
//         window.location.href = pdfPath;
//     });
// });