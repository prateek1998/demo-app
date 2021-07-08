
<?php
date_default_timezone_set('Asia/Kolkata');


$postData = file_get_contents('php://input');
$xml = simplexml_load_string($postData);

if(!empty($xml->processUnstructuredSSRequest_Request))
{
	$deepakreq = json_decode(json_encode($xml),TRUE);

	$reqText=$deepakreq['international_number']['ributes']['string'];
	$msisdn=$deepakreq['proc']['msis_num']['ttributes'];

	if($reqText == '*370*1#')
	{
        $resp = getBalance($concheck,$msisdn);
         

        $response = json_decode($resp);

    if($response->status == 1)
    {             
                   $messag = $response->message;
        
                        echo '<?xml version="1.0" encoding="UTF-8" ?>
                            <dialog type="End" mapMessagesSize="1" prearrangedEnd="false">
                            <processUnstructuredSSRequest_Response invokeId="1" dataCodingScheme="72" string="'.$messag.'"/>
                            </dialog>';
                            exit();
    }


}}





