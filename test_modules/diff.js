var fs = require("fs");
var parse = require("csv-parse");
// var csvWriter = require("csv-write-stream");
// var writer = csvWriter();
var csvData = [];
let rowNum = 0;
let validRowsNumber = 0;
let keys;
let filename =
  "qinhxu_ttquery_2018070217-14_riskauthevalserv_Login_common_2018061707_2018061708 2.csv";
let corr_id = "c08c45ae792ad";
let store = {};
let result = [];
let resultKeys = [];

const hasDiff = values => {
  if (values === undefined || values.length === 0) {
    return false;
  }
  let ori = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] !== ori) {
      return true;
    }
  }
  return false;
};

fs.createReadStream(filename)
  .pipe(parse({ delimiter: "," }))
  .on("data", function(csvrow) {
    // console.log(csvrow.length);
    if (rowNum === 0) {
      console.log("total column numbers:", csvrow.length);
      keys = csvrow;
      for (const key of keys) {
        store[key] = [];
      }
    } else {
      //   console.log(csvrow[1]);
      if (csvrow[1].includes(corr_id)) {
        validRowsNumber++;
        for (let i = 0; i < csvrow.length; i++) {
          store[keys[i]].push(csvrow[i]);
        }
      }
    }
    rowNum++;
    // console.log(keys[1]);
  })
  .on("end", function() {
    console.log("diff keys are listed as following:");

    for (const key of keys) {
      if (hasDiff(store[key])) {
        // console.log(key);
        resultKeys.push(key);
        // result.push(store[key]);
      }
    }
    console.log("total column numbers:", resultKeys.length);

    for (let j = 0; j < resultKeys.length; j++) {
      const key = resultKeys[j];
      const values = store[key];
      for (let k = 0; k < values.length; k++) {
        if (!result[k]) result[k] = [];
        result[k][j] = values[k];
      }
    }

    const createCsvWriter = require("csv-writer").createArrayCsvWriter;
    const filepath = filename + "_out.csv";
    const csvWriter = createCsvWriter({
      header: resultKeys,
      path: filepath
    });

    csvWriter
      .writeRecords(result) // returns a promise
      .then(() => {
        console.log("output file has been done, ", filepath);
      });
  });
