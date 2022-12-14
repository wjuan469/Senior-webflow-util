
/*
 * webflow-table-helper
 *
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * LO-CODE Helper class to simplify table functions.
 */

import { getCsvAsData } from '../modules/webflow-data.js';
import { renderTableFromData } from '../modules/webflow-table.js';
import { getGoogleSheetCsvUrl } from '../datasources/google-sheet-data.js';

export var renderTableFromGoogleSheet = function (elem, googleSheetId) {

    // Construct Google Sheet CSV URL
    const url = getGoogleSheetCsvUrl(googleSheetId);

    // Instantiate Webflow Table util
//    var webflowTableUtil = new WebflowTableUtil({
//        logging: true, // enable logging to console
////        csvFile: 'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv',
//    });

    // Retrieve CSV and convert to JSON
    var data = getCsvAsData(
        url
    );

    // Create HTML table
    renderTableFromData(
        elem,
        data
    );

}

