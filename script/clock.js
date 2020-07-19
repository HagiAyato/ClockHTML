window.onload = function() {
	//タイマー起動
	timerID = setInterval("moveTimer()",1000);
};

//時間設定時
function settime() {
	alert(document.getElementById("inputDT").value);
}

//時計を動かす
function moveTimer() {
	//時間更新無効の場合はすぐに処理終了
	var settingElements = document.getElementById("settings");
	if(settingElements.timeMode.value === "2"){
		return;
	}else{
		
	}
	//変数定義
	var date,Yea,Mon,Day,Hou,Min,Sec,hDeg,mDeg,sDeg;
	var week = ["日", "月", "火", "水", "木", "金", "土"];
	//日付
	date = new Date();
	//年取得
	Yea = date.getFullYear();
	//月取得
	Mon = date.getMonth() + 1;
	//日取得
	Day = date.getDate();
	//曜日取得
	Wee = week[date.getDay()];
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
	//細かい単位の針の動き
	hDeg += (Min / 60) * (360 / 12);
	hDeg += (Sec / 60) * (360 / (60 * 12));
	mDeg += (Sec / 60) * (360 / 60);
	//デジタル表示
	if (Mon < 10) Mon = "0" + Mon;
	if (Day < 10) Day = "0" + Day;
	if (Hou < 10) Hou = "0" + Hou;
	if (Min < 10) Min = "0" + Min;
	if (Sec < 10) Sec = "0" + Sec;
	//日付表示
	document.getElementById("clock_date").innerHTML = Yea + "/" + Mon + "/" + Day + "(" + Wee + ")";
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
