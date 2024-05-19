console.log('Your index file has loaded correctly');
    $(#myButton).ready(function(){
      $("#downloadResumeButton").click(function(){
        window.location.href = "Images/KPERRY_UI_Resume.pdf";
      });
    });