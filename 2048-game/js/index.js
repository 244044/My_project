
//
var flag = [false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false,];
var color = ["#FF9966", "#FFCCCC", "#CC9966", "#99CCCC", "#99CC99", "#99CCFF", "#CCCCFF", "#FFCC00", "#333399", "#CC9999", "#009999", "#996666", "#CCCCCC", "#CCCCFF", "#99CC99"];
var ds = document.getElementsByClassName("square");
var max_num = parseInt('2');
lose_view = false;

//初始化界面，生成2个数字方块
function init() {
    // Math.rount()四舍五入取整
    var i = Math.round(Math.random() * 16);
    var j = Math.round(Math.random() * 16);
    while (i == j) {
        j = Math.round(Math.random() * 16);
    }
    ds[i].style.backgroundColor = "#FF7578";
    ds[j].style.backgroundColor = "#FF7578";
    ds[i].innerHTML = "2";
    ds[j].innerHTML = "2";
    flag[i] = true;
    flag[j] = true;
    document.body.addEventListener("load", load(event), false)



}

//记录取得的最大分数
function max_score() {
    for (var i = 0; i < ds.length; i++) {
        var c_num = parseInt(ds[i].innerText);
        if (c_num > max_num) {
            max_num = c_num;
        }
    }
    document.getElementById("num_v").innerHTML = max_num;

}

//重新开始游戏，重新回到初始页面
function restart() {
    if (lose_view == true) {
        var $h2 = document.getElementById("reset1");
        var $par2 = $("body");
        $par2[0].removeAttribute($h2);
        lose_view = false;
    }
    for (var i = 0; i < ds.length; i++) {
        ds[i].innerText = "";
        flag[i] = false;
        ds[i].removeAttribute("style");
    }
    init();

}

//捕捉屏幕滑动事件
function load(event) {
    $("body").on("touchstart", function (e) {
        e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $("body").on("touchend", function (e) {
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        moveEndY = e.originalEvent.changedTouches[0].pageY;
        X = Math.floor(moveEndX - startX);
        Y = Math.floor(moveEndY - startY);

        if (Math.abs(X) > Math.abs(Y)) {
            if (Math.abs(X) > 20) {
                if (X > 0) {
                    rightgo();
                }
                else {
                    leftgo();
                }
            }

        }
        if (Math.abs(X) < Math.abs(Y)) {
            if (Math.abs(Y) > 20) {
                if (Y > 0) {
                    bottomgo();
                }
                else {
                    topgo();
                }
            }
        }



    });
}

// 设置方块颜色
function addcolor() {
    for (var i = 0; i < ds.length; i++) {
        var ss = parseInt(ds[i].innerHTML);
        switch (ss) {
            case 2:
                ds[i].style.backgroundColor = color[0];
                break;
            case 4:
                ds[i].style.backgroundColor = color[1];
                break;
            case 8:
                ds[i].style.backgroundColor = color[2];
                break;
            case 16:
                ds[i].style.backgroundColor = color[3];
                break;
            case 32:
                ds[i].style.backgroundColor = color[4];
                break;
            case 64:
                ds[i].style.backgroundColor = color[5];
                break;
            case 128:
                ds[i].style.backgroundColor = color[6];
                break;
            case 256:
                ds[i].style.backgroundColor = color[7];
                break;
            case 512:
                ds[i].style.backgroundColor = color[8];
                break;
            case 1024:
                ds[i].style.backgroundColor = color[9];
                break;
            case 2048:
                ds[i].style.backgroundColor = color[10];
                break;
            case 4096:
                ds[i].style.backgroundColor = color[11];
                break;
            case 8192:
                ds[i].style.backgroundColor = color[12];
                break;
            case 16384:
                ds[i].style.backgroundColor = color[13];
                break;
            default:
                break;

        }
    }
}

//判断是否可以继续上移，true则表示可以,需要返回值
function istop() {
    var istop = false;
    //i1,有4行
    for (var i1 = 4; i1 < 16; i1++) {
        if (flag[i1] == true) {
            //若这个方块和下一个方块数字相等，就可以移动

            if (flag[i1 - 4] = true) {

                if (ds[i1].innerHTML == ds[i1 - 4].innerHTML) {
                    istop = true;
                }
            }
            //若为空，也可以移动
            else {
                istop = true;
            }
        }
    }
    return istop;

}

//判断是否可以继续下移，true则表示可以
function isbottom() {
    var isbottom = false;
    for (var i2 = 11; i2 >= 0; i2--) {
        if (flag[i2] == true) {
            if (flag[i2 + 4] == true) {
                if (ds[i2].innerHTML == ds[i2 + 4].innerHTML) {
                    isbottom = true;
                }
            }
            else {
                isbottom = true;
            }
        }
    }
    return isbottom;
}

//判断是否可以继续左移，true则表示可以
function isleft() {
    var isleft = false;
    for (var i3 = 0; i3 < 4; i3++) {
        for (var j3 = 0; j3 < 3; j3++) {
            if (flag[j3 + 4 * i3 + 1] == true) {
                if (flag[j3 + 4 * i3] == true) {
                    if (ds[j3 + 4 * i3].innerHTML == ds[j3 + 4 * i3 + 1].innerHTML) {
                        isleft = true;
                    }
                }
                else {
                    isleft == true;
                }

            }
        }
    }
    return isleft;
}

//判断是否可以继续右移，true则表示可以
function isright() {
    var isright = false;

    for (var i4 = 3; i4 >= 0; i4--) {
        for (var j4 = 2; j4 >= 0; j4--) {
            if (flag[j4 + 4 * i4] == true) {
                if (flag[j4 + 4 * i4 + 1] == true) {
                    if (ds[j4 + 4 * i4].innerHTML == ds[j4 + 4 * i4 + 1].innerHTML) {
                        isright = true;
                    }
                }
                else {
                    isright = true;
                }
            }
        }
    }

    return isright;
}





//上移
function topgo() {
    var top1 = istop();
    for (var ss6 = 0; ss6 < 3; ss6++) {
        for (var i6 = 4; i6 < 16; i6++) {
            if (flag[i6] == true) {
                if (flag[i6 - 4] == true) {
                    if (ds[i6].innerHTML == ds[i6 - 4].innerHTML) {
                        var sum = parseInt(ds[i6].innerHTML) * 2;
                        ds[i6 - 4].innerHTML = sum;
                        flag[i6] = false;
                        ds[i6].removeAttribute('style');
                        ds[i6].innerHTML = "";
                    }
                }
                else {
                    ds[i6 - 4].innerHTML = ds[i6].innerHTML;
                    ds[i6 - 4].style.backgroundColor = "#FF9E3E";
                    flag[i6 - 4] = true;
                    ds[i6].innerHTML = "";
                    ds[i6].removeAttribute("style");
                    flag[i6] = false;
                }
            }
        }
    }

    if (top1 == true) {
        var kk1 = Math.round(Math.random() * 15);
        while (flag[kk1] == true) {
            var kk1 = Math.round(Math.random() * 15);
        }
        ds[kk1].innerHTML = '2';
        flag[kk1] = true;
        addcolor();
    } else {
        islose();
    }
}
//左移
function leftgo() {
    var left1 = isleft();
    for (var ss7 = 0; ss7 < 3; ss7++) {
        for (var i7 = 0; i7 < 4; i7++) {
            for (var j7 = 0; j7 < 3; j7++) {
                if (flag[j7 + 4 * i7 + 1] == true) {
                    if (flag[j7 + 4 * i7] == true) {
                        if (ds[j7 + 4 * i7].innerHTML == ds[j7 + 4 * i7 + 1].innerHTML) {
                            var sum = parseInt(ds[j7 + 4 * i7 + 1].innerHTML) * 2;
                            ds[j7 + 4 * i7].innerHTML = sum;
                            flag[j7 + 4 * i7 + 1] = false;
                            ds[j7 + 4 * i7 + 1].removeAttribute("style");
                            ds[j7 + 4 * i7 + 1].innerHTML = "";
                        }
                    }
                    else {
                        ds[j7 + 4 * i7].innerHTML = ds[j7 + 4 * i7 + 1].innerHTML;
                        ds[j7 + 4 * i7].style.backgroundColor = "#FF9E3E";
                        flag[j7 + 4 * i7] = true;

                        ds[j7 + 4 * i7 + 1].innerHTML = "";
                        ds[j7 + 4 * i7 + 1].removeAttribute("style");
                        flag[j7 + 4 * i7 + 1] = false;

                    }
                }
            }
        }
    }

    if (left1 == true) {
        var kk2 = Math.round(Math.random() * 15);
        while (flag[kk2] == true) {
            var kk2 = Math.round(Math.random() * 15);
        }
        ds[kk2].style.backgroundColor = "#FF9E3E";
        ds[kk2].innerHTML = "2";
        flag[kk2] = true;
        addcolor();
    }
    else {
        islose();
    }
}

function rightgo() {                //右移
    var right1 = isright();
    for (var ss8 = 0; ss8 < 3; ss8++) {
        for (var i8 = 3; i8 >= 0; i8--) {
            for (var j8 = 2; j8 >= 0; j8--) {
                if (flag[j8 + 4 * i8] == true) {
                    if (flag[j8 + 4 * i8 + 1] == true) {
                        if (ds[j8 + 4 * i8].innerHTML == ds[j8 + 4 * i8 + 1].innerHTML) {
                            var sum = parseInt(ds[j8 + 4 * i8 + 1].innerHTML) * 2;
                            ds[j8 + 4 * i8 + 1].innerHTML = sum;
                            flag[j8 + 4 * i8] = false;
                            ds[j8 + 4 * i8].removeAttribute("style");
                            ds[j8 + 4 * i8].innerHTML = "";
                        }
                    }
                    else {
                        ds[j8 + 4 * i8 + 1].innerHTML = ds[j8 + 4 * i8].innerHTML;
                        ds[j8 + 4 * i8 + 1].style.backgroundColor = "#FF9E3E";
                        flag[j8 + 4 * i8 + 1] = true;

                        ds[j8 + 4 * i8].innerHTML = "";
                        ds[j8 + 4 * i8].removeAttribute("style");
                        flag[j8 + 4 * i8] = false;

                    }
                }
            }
        }
    }

    if (right1 == true) {
        var kk3 = Math.round(Math.random() * 15);
        while (flag[kk3] == true) {
            var kk3 = Math.round(Math.random() * 15);
        }
        ds[kk3].style.backgroundColor = "#FF9E3E";
        ds[kk3].innerHTML = "2";
        flag[kk3] = true;
        addcolor();
    }
    else {
        islose();
    }

    //  var ss=max_score();
    //alert(ss);
}

function bottomgo() {                        //下移
    var bottom1 = isbottom();
    for (var ss9 = 0; ss9 < 3; ss9++) {
        for (var i9 = 11; i9 >= 0; i9--) {
            if (flag[i9] == true) {
                if (flag[i9 + 4] == true) {
                    if (ds[i9].innerHTML == ds[i9 + 4].innerHTML) {
                        var sum = parseInt(ds[i9].innerHTML) * 2;
                        ds[i9 + 4].innerHTML = sum;
                        flag[i9] = false;
                        ds[i9].removeAttribute("style");
                        ds[i9].innerHTML = "";
                    }
                }
                else {
                    ds[i9 + 4].innerHTML = ds[i9].innerHTML;
                    ds[i9 + 4].style.backgroundColor = "#FF9E3E";
                    flag[i9 + 4] = true;

                    ds[i9].innerHTML = "";
                    ds[i9].removeAttribute("style");
                    flag[i9] = false;

                }
            }
        }
    }

    if (bottom1 == true) {
        var kk4 = Math.round(Math.random() * 15);
        while (flag[kk4] == true) {
            var kk4 = Math.round(Math.random() * 15);
        }
        ds[kk4].style.backgroundColor = "#FF9E3E";
        ds[kk4].innerHTML = "2";
        flag[kk4] = true;
        addcolor();
    }
    else {
        islose();
    }
}
//判断是否输掉游戏
function islose() {
    if (lose_view == false) {
        var los = 0
        for (let i5 = 0; i5 < 16; i5++) {
            if (flag[i5] == true) {
                los++;
            }
        }
        if (los == 16) {
            var left = isleft();
            var right = isright();
            var top = istop();
            var bottom = isbottom();
            if (left || right || top || bottom == false) {
                max_score();
                var $h1 = $('<div>');
                var $par = $('body');
                $h1.attr("id", "reset1");
                $h1.text('Game Over!');
                $par.append($h1);

                var sleep = function (time) {
                    var startTime = new Data().getTime() + parseInt(time, 10);
                    while (new Data().getTime() < startTime) { }
                }
                lose_view = true;
            }
        }
    }
}