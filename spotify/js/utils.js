function get_my_stuff()
{
    $('#info').html('.........running.......');
    $.get('http://dancewivme-api.appspot.com/', function(data) {
        $('#result').html(data);
    });
}

function get_top_list()
{
    var sp = getSpotifyApi(1);
    var models = sp.require('sp://import/scripts/api/models');

    var toplist = new models.Toplist();
    toplist.toplistType = models.TOPLISTTYPE.USER;
    //toplist.matchType = models.TOPLISTMATCHES.ARTISTS;
    toplist.matchType = models.TOPLISTMATCHES.TRACKS;

    toplist.observe(models.EVENT.CHANGE, function() {
        toplist.results.forEach(function(track) {
            $("#result").html( $("#result").html() + "<p>" + track.name+"</p>"   );
            console.log(track.name);
        });
    });

    toplist.run();
}
