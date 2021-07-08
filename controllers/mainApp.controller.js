'use strict';

/**
 * Module dependencies.d
 */
 var convert = require('xml-js'),
     xml = require('xml');
    
// Method to Create Form
exports.responseCreator = function (req, res) {
    var xml = require('fs').readFileSync('./input.xml', 'utf8');
    // var xml =req.body;
    var result = convert.xml2js(xml, {compact: true, spaces: 4});
    if(result){
        var data = result.dialog.processUnstructuredSSRequest_Request;
        var reqText= data._attributes['string'];
        var msisdn= data.msisdn._attributes.number;
        
        if(reqText !== '*370*1#'){
            // var res = getBalance(conCheck,msisdn );
            // if(res.status == 1){
            //     var msg=res.message;
            var msg =1234
                console.log(reqText, msisdn);
                var output = `<?xml version="1.0" encoding="UTF-8" ?><dialog type="End" mapMessagesSize="1" prearrangedEnd="false"><processUnstructuredSSRequest_Response invokeId="1" dataCodingScheme="72" string="'.${msg}.'"/></dialog>`
                res.set('Content-Type', 'text/xml');
                res.send(output);
        //     }
        }
    }
}
