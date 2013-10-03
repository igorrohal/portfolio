<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

$headers .= "From:".strtolower($_POST['email'])."\r\n";
$headers .= "X-Sender: $_POST[email]\n";
$headers .= "Return-Path: $_POST[email]\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

$enviar = "<html>
                <head>
                <title>CONTATO</title>
                </head>
                <body>
                <table width='100%' cellpadding='0' cellspacing='0' border='0' style='background-color:#677DA3;'>
                  <tr>
                    <td>
                        <table width='100%' cellpadding='4' cellspacing='1' bgcolor='#CCCCCC' style='font-family:tahoma, arial; font-size:11px; color:#666666;'>
                            <tr>  
                                <td width='15%' height='25' bgcolor='#F3F3F3'><strong>Name:</strong></td>
                                <td bgcolor='#FFFFFF'>$_POST[name]</td>
                            </tr>
                            <tr>  
                                <td width='15%' height='25' bgcolor='#F3F3F3'><strong>Email:</strong></td>
                                <td bgcolor='#FFFFFF'>".strtolower($_POST['email'])."</td>
                            </tr>
                            <tr>  
                                <td width='15%' height='25' bgcolor='#F3F3F3'><strong>Message:</strong></td>
                                <td bgcolor='#FFFFFF'>".nl2br($_POST['message'])."</td>
                            </tr>                           
                        </table>
                    </td>
                  </tr>
                </table>
            </body>
            </html>";
    mail("igor.rohal@gmail.com","[Contact from irohal.com]", $enviar, $headers);          
    echo "<script language='javascript'>alert('Thanks for contacting me!');location.href='index.html'</script>";
}
?>