
var qiehuan = document.getElementById('qiehuan');
var qiehuan_box = document.getElementsByClassName('qiehuan_box')[0];
qiehuan.onclick= function(){
	if (qiehuan_box.style.display=='block') {
		qiehuan_box.style.display='none';
	} else{
		qiehuan_box.style.display='block';
	}
}