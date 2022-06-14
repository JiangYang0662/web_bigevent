$(function(){
    //1.点击"注册账号"的连接
    $('#link_reg').on('click',function(){
        $('.login-box').hide();
        $('.reg-box').show();
    })

    //2. 点击"去登录"按钮
    $('#link_log').on('click', function(){
        $('.login-box').show();
        $('.reg-box').hide();
    })
})