window.onload = function() {
	//タイマー起動
	timerID = setInterval("moveTimer()",1000);
};

//数値の正常異常判定
function numValidate(num,min,max,type){
	//数値?
	if(isNaN(num)){
		alert(type + "が数値ではありません!!");
		return false;
	}
	//上限下限
	if((num < min)||(max < num)){
		alert(type + "が上限(" + max + ")下限(" + min + ")を超えています!!");
		return false;
	}
	return true;
}

//時間設定時
function settime() {
	//変数定義
	var date,Yea,Mon,Day,Hou,Min,Sec;
	//値を取得
	Yea = document.getElementById("input_year").value;
	Mon = document.getElementById("input_month").value;
	Day = document.getElementById("input_day").value;
	Hou = document.getElementById("input_hour").value;
	Min = document.getElementById("input_min").value;
	Sec = document.getElementById("input_sec").value;
	//Validationg
	if(!numValidate(Yea,1900,2100,"年"))return;
	if(!numValidate(Mon,1,12,"月"))return;
	if(!numValidate(Day,1,31,"日"))return;
	if(!numValidate(Hou,0,23,"時"))return;
	if(!numValidate(Min,0,59,"分"))return;
	if(!numValidate(Sec,0,59,"秒"))return;
	//日付
	date = new Date();
	//年設定
	date.setFullYear(Yea);
	//月設定
	date.setMonth(Mon-1);
	//日設定
	date.setDate(Day);
	//時間設定
	date.setHours(Hou);
	//分設定
	date.setMinutes(Min);
	//秒設定
	date.setSeconds(Sec);
	showClock(date);
}

//時計を動かす
function moveTimer() {
	//時間更新無効の場合はすぐに処理終了
	var settingElements = document.getElementById("settings");
	if(settingElements.timeMode.value === "2") return;
	//日付
	date = new Date();
	showClock(date);
}

//時計表示
function showClock(date) {
	//変数定義
	var date,Yea,Mon,Day,Hou,Min,Sec,hDeg,mDeg,sDeg;
	var week = ["日", "月", "火", "水", "木", "金", "土"];
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
