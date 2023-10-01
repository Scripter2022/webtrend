/*import lib*/
// import http from "http";
// import DomParser from "dom-parser";
// import fs, { write } from "fs";
// import { parse } from "himalaya";
// import { title } from "process";
// import { toURI } from "node-opcua";
// import { isUtf8 } from "buffer";
// import dialog from "e:./lib/dialog.js";

const http=require('http');
const DomParser=require('dom-parser');
const fs=require('fs');
const serv=require("./lib/serv")

//*********************************************************************************************** */
var options = {
  host: "192.168.3.1",
  port: "80",
  path: "/small/html/index.html",
};
// Callback function is used to deal with response
var callback = async function (response) {
  // Continuously update stream with
  var body = "";
  response.on("data", function (data) {
    body += data;
  });
  response.on("end", async function () {
    //console.log(body);
    /* create files for parsing */
    /* create file JSON*/
    // fs.writeFile(
    //   "E:/JS/webDev/project/webtrend/scr/index.html",
    //   body,
    //   (err) => {
    //     if (err) throw err;
    //   }
    // );

    /**************************************************/

    fs.readFile(
      "E:/JS/webDev/project/webtrend/scr/index.html",
      "utf8",
      function (err, html) {
        if (!err) {
          //console.log(html);

          var parser = new DomParser();

          var dom = parser.parseFromString(html);

          var form = dom.getElementsByTagName("select")[0].innerHTML;

          console.log(form);
          
          fs.writeFile("E:/JS/webDev/project/webtrend/scr/views/home.handlebars", form,  (err) => {
            if (err) throw err;
          }
        );
        }
      }
    );
    
    
  });

  /*create server for web view*/
};
// Make a request to the server
var req = http.request(options, callback);
req.end();
process.on("uncaughtException", function (err) {
  console.log(err);
});
0;

serv.webServer();