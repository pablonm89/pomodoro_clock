/*setInterval(function() {
minutes = 

}, 1000);
*/

breakSession(5)
timerSession(25)




function breakSession(n) {
$('.js-break').html(n)

$('.break-down').click(_ => {
$('.js-break').html(n-=1)
})

$('.break-up').click(_ => {
$('.js-break').html(n+=1)
})

}

function timerSession(n) {
$('.js-session, .js-timer').html(n)

$('.session-down').click(_ => {
$('.js-session, .js-timer').html(n-=1)
})

$('.session-up').click(_ => {
$('.js-session, .js-timer').html(n+=1)
})

}






// RESET CLOCK //
function timerReset() {
breakSession(5)
timerSession(25)
}


$('.reset').click(_ => {
	timerReset()
})