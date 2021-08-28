const axios = require('axios');
const downloadData = require('./util');
const CsvParser = require("json2csv").Parser;

const download = async (req, res) => {
    const response = await axios.get(
        "https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all"
    );
    const responseData = await response.data.Table;
    const fields = [
        { label: "Security Code", value: "scrip_cd" },
        { label: "Security Name", value: "scripname" },
        { label: "Group", value: "scrip_grp" },
        { label: "LTP", value: "highrate" },
        { label: "Chg", value: "change_val" },
        { label: "% Chg", value: "change_percent" }
    ];
    const date = new Date();
    const fileName = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}_output.csv`;

    // return downloadData(res, fileName, fields, responseData);
    const csvParser = new CsvParser({ fields });
    const csvData = csvParser.parse(responseData);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader(`Content-Disposition", "attachment; filename=${fileName}`);

    res.status(200).end(csvData);
}

module.exports = {
    download
};