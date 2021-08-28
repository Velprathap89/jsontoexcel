const express = require('express');
const initRoutes = require("./router");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);
// app.get('/', async (req, res) => {
//     res.send('Hello World!');

//     // const response = await axios.get(
//     //     "https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all"
//     // );
//     // const responseData = await response.data.Table;
//     // const fields = [
//     //     { label: "Security Code", value: "scrip_cd" },
//     //     { label: "Security Name", value: "scripname" },
//     //     { label: "Group", value: "scrip_grp" },
//     //     { label: "LTP", value: "highrate" },
//     //     { label: "Chg", value: "change_val" },
//     //     { label: "% Chg", value: "change_percent" }
//     // ];
//     // // const csvParser = new CsvParser({ fields });
//     // // const csvData = csvParser.parse(responseData);
//     // const date = new Date();
//     // const fileName = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}_output.csv`;
//     // downloadData(res, fileName, fields, responseData)
//     // res.header('Content-Type', 'text/csv');
//     // res.attachment(fileName);
//     // res.send(csvData);
//     // const date = new Date();
//     // const fileName = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}_output.csv`;
//     // fs.writeFile(`output.csv`, csvData, err => {
//     //     if (err) throw err;
//     //     res.download(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}output.csv`, err => {
//     //         // if (err) {
//     //         //     fs.unlinkSync(`./${fileName}`);
//     //         // }
//     //         // fs.unlinkSync(`./${fileName}`);
//     //     });
//     // });
//     // res.setHeader("Content-Type", "text/csv");
//     // res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");
//     // res.status(200).end(csvData);

//     // const json2csvParser = new Parser({ fields });
//     // const csv = json2csvParser.parse(responseData);
//     // json2csv({ data: responseData, fields: fields }, (err, csv) => {
//     //     if (err) console.log(err);
//     //     fs.writeFile('test_ouptut.csv', csv, currentError => {
//     //         if (currentError) throw err;
//     //         console.log("file save");
//     //         res.download(fileName, err => {
//     //             // if (err) {
//     //             //     fs.unlinkSync(`./${fileName}`);
//     //             // }
//     //             // fs.unlinkSync(`./${fileName}`);
//     //         });
//     //     });
//     //     // res.setHeader('Content-disposition', 'attachment; filename=data.csv');
//     //     // res.set('Content-Type', 'text/csv');
//     //     // res.status(200).send(csv);
//     // });
//     // const file = "test_ouptut.csv";
//     // res.download(file, 'test_ouptut.csv');
//     // const fileName = "test_output.csv";
//     // fs.writeFile(fileName, responseData, err => {
//     //     if (err) throw err;
//     //     res.download(fileName, err => {
//     //         // if (err) {
//     //         //     fs.unlinkSync(`./${fileName}`);
//     //         // }
//     //         // fs.unlinkSync(`./${fileName}`);
//     //     });
//     // });
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})