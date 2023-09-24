/*шimport lib*/

import http from "http";
import DomParser from "dom-parser";
import fs, { write } from "fs";
import { parse } from "himalaya";
import { title } from "process";
import { toURI } from "node-opcua";
import { isUtf8 } from "buffer";

var options = {
  host: "192.168.3.16",
  port: "80",
  path: "//#!/dashboards/dashboard1",

};

// Callback function is used to deal with response
var callback = async function (response) {

  // Continuously update stream with
  var body = "";
  response.on("data", function (data) {
    body += data;
  });

  response.on("end", async function () {
    // Data received completely.
    //console.log(body);
    /* create files for parsing */

    /* create file JSON*/

    // fs.appendFile("C:/Users/ScriptEr/Documents/CODE/lan.json", j, (err) => {

    //   if (err) throw err;

    // });

    /**************************************************/

    var parser = new DomParser();

    fs.readFile(
      "C:/Users/ScriptEr/Documents/CODE/loglan.html",
      "utf8",
      function (err, html) {
        if (!err) {
          var dom = parser.parseFromString(html);
          //var dataMassive = [];
          //for (var i = 0; i < 10; i++) {

            let dataMassive = dom.getElementsByTagName('select')[0].outerHTML;

            console.log(dataMassive);

            // fs.appendFile(
            //   "C:/Users/ScriptEr/Documents/CODE/lan.json",
            //   d,
            //   (err) => {
            //     if (err) throw err;
            //   }
            // );

            //var mass = dataMassive.join("");
          //}

          fs.appendFile(
            "C:/Users/ScriptEr/Documents/CODE/Trend/mass.html",
            mass,
            (err) => {
              if (err) throw err;
              console.log("File was write");
              var d = fs.readFile(
                "C:/Users/ScriptEr/Documents/CODE/Trend/mass.html",
                "utf8",
                (err, data) => {
                  if (err) throw err;
                  console.log(
                    parser
                      .parseFromString(data)
                      .getElementsByName("W1(S)newVal")[0].value
                  );
                }
              );
            }
          );
        }
      });
      // добраться путем dom.getElementsByTagName('Select').getElem.....
    http.createServer(function (request, response) { response.end(d);
    })
      .listen(3000)
    //console.log(JSDOM.html());
  });
  /*create server for web view*/
};
// Make a request to the server

var req = http.request(options, callback);
req.end();
process.on("uncaughtException", function (err) {
  console.log(err);
});
