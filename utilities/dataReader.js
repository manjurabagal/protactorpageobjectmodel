var Excel = require('exceljs');
var filename = __dirname + '..\\..\\test_data\\MFW2_Registration_Data_Day1_Day2_Scenarios.xlsx';
var getDataFromExcel = function (participant_id, callback) {
  var participant_details = {
    FName: "NA", MName: "NA", LName: "NA", EmailId: "NA",
    Address1: "NA", City: "NA", State: "NA", Zipcode: "NA", SSN: "NA", DOB: "NA", Gender: "NA", Company: "NA"
  };
  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile(filename.replace("features\\step_definitions..\\..\\", ""))
    .then(function () {
      var worksheet;
      if (participant_id.includes('d2'))
        worksheet = workbook.getWorksheet(2);
      else
        worksheet = workbook.getWorksheet(1);
      worksheet.eachRow({includeEmpty: false}, function (row) {
        if (typeof (JSON.stringify(row.values[5])) != "undefined") {
          if (JSON.stringify(row.values[5]).replace(/"/g, "") == participant_id) {
            participant_details.FName = JSON.stringify(row.values[14]).replace(/"/g, "");
            participant_details.MName = JSON.stringify(row.values[15]).replace(/"/g, "");
            participant_details.LName = JSON.stringify(row.values[16]).replace(/"/g, "");
            participant_details.EmailId = JSON.stringify(row.values[17]).replace(/"/g, "");
            participant_details.Address1 = JSON.stringify(row.values[18]).replace(/"/g, "");
            participant_details.City = JSON.stringify(row.values[19]).replace(/"/g, "");
            participant_details.State = JSON.stringify(row.values[20]).replace(/"/g, "");
            participant_details.Zipcode = JSON.stringify(row.values[21]).replace(/"/g, "");
            participant_details.SSN = JSON.stringify(row.values[25]).replace(/"/g, "");
            participant_details.DOB = JSON.stringify(row.values[26]).replace(/"/g, "");
            participant_details.Gender = JSON.stringify(row.values[27]).replace(/"/g, "");
            participant_details.Company = JSON.stringify(row.values[36]).replace(/"/g, "");
            callback(participant_details);
          }
        }
      });
    });
};
