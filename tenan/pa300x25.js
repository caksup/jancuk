/*
Random Image Link Script- By JavaScript Kit(http://www.javascriptkit.com) 
Over 200+ free JavaScripts here!
Updated: 00/04/25
*/

function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="http://promo.propellerads.com/300x250-popads_1.gif"
myimages[2]="http://promo.propellerads.com/300x250-propellerads-monetize-traffic.gif"
myimages[3]="http://promo.propellerads.com/300x250_06.gif"
myimages[4]="http://promo.propellerads.com/300x250_03.jpg"
myimages[5]="http://promo.propellerads.com/300x250_02.jpg"
myimages[6]="http://promo.propellerads.com/300x250_01.jpg"
myimages[7]="http://promo.propellerads.com/300x250_05.gif"
myimages[8]="http://promo.propellerads.com/300x250_04.gif"

//specify corresponding links below
var imagelinks=new Array()
imagelinks[1]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[2]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[3]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[4]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[5]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[6]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[7]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"
imagelinks[8]="https://publishers.propellerads.com/#/pub/auth/signUp?ref_id=THb3"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<a href='+'"'+imagelinks[ry]+'"'+'><img src="'+myimages[ry]+'" border=0></a>')
}
random_imglink()
