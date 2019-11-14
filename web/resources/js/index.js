$(document).ready(function () {
    function updateClock() {
        var now = new Date();

        var hours=now.getHours()<10?"0"+now.getHours():now.getHours();
        var minutes=now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes();
        var seconds=now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds();
        var time = hours + ':' + minutes + ':' + seconds;


        var date = [now.getDate(), now.getMonth()+1, now.getFullYear()].join('.');
        document.getElementById('time').innerHTML = [time, date].join('\t');
        setTimeout(updateClock, 8000);
    }

    updateClock();
});