<!DOCTYPE html>
<html>
<head>
    <title>Pusher Test</title>
    <script src="https://js.pusher.com/5.1/pusher.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>

        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('c4a08f4726d206f07602', {
            cluster: 'ap1',
            forceTLS: true
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
            console.log('done');
            //var obj = JSON.parse(data);
            //alert("{{ url("/table") }}");
               /* $.ajax(
                {
                    url: "{{ url("/table") }}",
                    success: function(result)
                    {
                        $("#tabledata").html(result);
                    }
                });*/
            });
    </script>
</head>
<body>
<h1>Pusher Test</h1>
<p>
    Try publishing an event to channel <code>my-channel</code>
    with event name <code>my-event</code>.
</p>
<div id="tabledata">

</div>
</body>
</html>
