window.onload = function() {
	//タイマー起動
	timerID = setInterval("moveTimer()",1000);
};
//時計を動かす
function moveTimer() {
	var date,Hou,Min,Sec,hDeg,mDeg,sDeg;
	//日付
	date = new Date();
	//時間取得
	Hou = date.getHours();
	//分取得
	Min = date.getMinutes();
	//秒取得
	Sec = date.getSeconds();
	//針の角度取得
	hDeg = (Hou % 12) * (360 / 12);
	mDeg = Min * (360 / 60);
	sDeg = Sec * (360 / 60);
	hDeg += (Min / 60) * (360 / 12);
	mDeg += (Sec / 60) * (360 / 60);
	//デジタル表示
	if (Hou < 10) Hou = "0" + Hou;
	if (Min < 10) Min = "0" + Min;
	if (Sec < 10) Sec = "0" + Sec;
	//時刻表示
	document.getElementById("clock_time").innerHTML = Hou + ":" + Min + ":" + Sec; 
	//短針の表示
	document.getElementById("image_short").style.transform = "rotate(" + hDeg + "deg)";
	document.getElementById("image_short").style.MozTransform = "rotate(" + hDeg + "deg)";
	document.getElementById("image_short").style.WebkitTransform = "rotate(" + hDeg + "deg)";
	document.getElementById("image_short").style.msTransform = "rotate(" + hDeg + "deg)";
	
	//長針の表示
	document.getElementById("image_long").style.transform = "rotate(" + mDeg + "deg)";
	document.getElementById("image_long").style.MozTransform = "rotate(" + mDeg + "deg)";
	document.getElementById("image_long").style.WebkitTransform = "rotate(" + mDeg + "deg)";
	document.getElementById("image_long").style.msTransform = "rotate(" + mDeg + "deg)";
	
	//秒針の表示
	document.getElementById("image_sec").style.transform = "rotate(" + sDeg + "deg)";
	document.getElementById("image_sec").style.MozTransform = "rotate(" + sDeg + "deg)";
	document.getElementById("image_sec").style.WebkitTransform = "rotate(" + sDeg + "deg)";
	document.getElementById("image_sec").style.msTransform = "rotate(" + sDeg + "deg)";   
}
