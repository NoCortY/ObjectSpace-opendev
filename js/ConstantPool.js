/**********************************************常量池**********************************************/
var REQUEST_SUCCESS = "1001";
var ZUUL_URL = "http://127.0.0.1:7000/ObjectCloud";
var WS_ZUUL_URL="ws://127.0.0.1:7000/ObjectCloud";
/**********************************************常量池**********************************************/


/**********************************************方法区**********************************************/
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

/**
 * 判定是否是JSON
 * @param $string
 * @returns {boolean}
 */
function isJson($string)
{
    try {
        if(typeof JSON.parse($string) == 'object')
            return true;
        return false;
    } catch (e) {
        console.log(e);
        return false;

    }
}
/**********************************************方法区**********************************************/