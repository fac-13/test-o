const tape = require("tape");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");
const runDbBuild = require("../src/database/db_build");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("getData", t => {
  runDbBuild(function(err, res) {
    t.error(err, "No Error"); //Assert that db_build finished successfully with no errors

    let expected = [
          {
        "id":"ChIJnX2njGIPdkgRJSUCk-BqQsk",
        "name":"Chit Chaat Chai",
        "latitude": 51.4600145,
        "longitude": -0.1890872
          },
          {
        "id":"ChIJrXOlLNYadkgRiohqRNt8BSY",
        "name":"Oriental Dragon",
        "latitude": 51.5154956,
        "longitude": -0.1493805
          },
          {
        "id":"ChIJ-TGDfdQdkgRIZht1FeEQeg",
        "name":"WorkSpace Design",
        "latitude": 51.5175847,
        "longitude": -0.146326
          }
    ];

    getData((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected, "Returns expected data");
      t.end();
    });
  });
});

tape("PostData", t => {
  runDbBuild(function(err, res) {
    t.error(err, "No Error");

    postData("Minesh", "London", (err, result) => {
      if (err) console.log(err);
      getData((err, result) => {
        if (err) console.log(err);
        t.deepEqual(result.length, 2, "Returns expected data");
        t.end();
      });
    });
  });
});
