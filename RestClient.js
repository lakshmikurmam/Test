const { response } = require("express");

 

const url = "http://10.246.0.10/MC/V1/OSPMS/DRIVE/E0010/Power_Consumed_KW";

 

async function getData(urlPath) {

  let response = await fetch(urlPath);

  let data = await response.json();

  console.log(data);

}

 

getData(url);

 