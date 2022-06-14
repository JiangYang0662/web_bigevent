// 在ajaxPrefilter中统一拼接请求的根路径
//1.每次请求的时候先调用次函数，在这个函数中可以拿到统一的根路径
$.ajaxPrefilter(function(options){
    options.url = 'http://www.liulongbin.top:3007' + options.url;
})