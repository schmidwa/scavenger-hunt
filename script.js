const outputElem = document.querySelector('output')

// human: get password from prof and enter the password into the first field and press enter

// code:
// read that password from the password input and make an HTTP request to the url provided in next property of the auto populated output, concatenated with the password



const pw = document.getElementById('i1')
pw.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') {
    console.log(pw.value)
    req.open("GET", `${PROVIDED_URL}${THE_PASSWORD_VALUE}`); // FIXME 
    req.send();
  }
})

let req = new XMLHttpRequest();
req.addEventListener("load", function (ev) {
  console.log("reqListener");
  const structuredData = JSON.parse(ev.target.responseText);
  // console.log("structuredData", structuredData);
  const data = structuredData;
  console.log(data);
  console.log(Object.keys(data).length);

  document.getElementById("i1-out").innerText = ev.target.responseText;
});

