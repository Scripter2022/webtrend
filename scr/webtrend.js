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
const parse=require('himalaya');

//*********************************************************************************************** */

var options = {
  host: "192.168.3.2",
  port: "3000",
  path: "/",
};

// Callback function is used to deal with response

var callback = async function (response) {

  // Continuously update stream with

  var body = "";

  response.on("data", function (data) {

    body += data;

  });

  response.on("end", async function () {

    console.log(body);

    

    /* create files for parsing */
    /* create file JSON*/

    // fs.appendFile("C:/Users/ScriptEr/Documents/CODE/lan.json", j, (err) => {
    //   if (err) throw err;
    // });
    /**************************************************/

          var parser = new DomParser();

          var dom = parser.parseFromString(body);

          let button= dom.getElementsByTagName("button").outerHTML;

          console.log(button);

        



          /*





          fs.appendFile(

            "C:/Users/ScriptEr/Documents/CODE/Trend/mass.html",  mass, (err) => {

              if (err) throw err;

              console.log("File was write");

              var d = fs.readFile(

                "C:/Users/ScriptEr/Documents/CODE/Trend/mass.html",

                "utf8",

                (err, data) => {

                  if (err) throw err;

                  console.log(

                    parser
                      .parseFromStr
                      ing(data)
                      .getElementsByName("W1(S)newVal")[0].value
                  );
                }
              );
            }
          );
        }
      }




      */






    // http
    //   .createServer(function (request, response) {
    //     response.end(d);
    //   })
    //   .listen(3000);
    
  });
  /*create server for web view*/
};
// Make a request to the server

var req = http.request(options, callback);
req.end();
process.on("uncaughtException", function (err) {
  console.log(err);
});
