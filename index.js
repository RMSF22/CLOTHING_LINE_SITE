
<script>
    function checkdate(myform)
    {
     var a = document.forms["myform"]["myfield"].value;
     	Check = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
      if(!a.match(Check)) {
       alert("Error: Date format: ##-##-#### ");
       return false;
      }
           }
   </script>
