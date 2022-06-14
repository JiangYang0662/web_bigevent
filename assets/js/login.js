$(function () {
    //1.点击"注册账号"的连接
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show();
    })

    //2. 点击"去登录"按钮
    $('#link_login').on('click', function () {
        $('.login-box').show();
        $('.reg-box').hide();
    })

    //3. 自定义校验规则
    //从layui中获取form对象
    var form = layui.form;
    var layer = layui.layer;
    //通过form.verify()函数自定义校验规则
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位,却不能出现空格'],
        repwd: function (value) {
            var pwd = $('#form_reg [name=password]').val();
            if (pwd !== value) {
                return '两次密码不一样!';
            }
        }
    });

    //4.发起ajax请求
    //注册表单
    $('#form_reg').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: {
                username: $('#form_reg [name=username]').val(),
                password: $('#form_reg [name=password]').val()
            },
            success: function(res){
                if(res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功');
                $('#link_login').click();
            }
        })
        // var data = {
        //     username: $('#form_reg [name=username]').val(),
        //     password: $('#form_reg [name=password]').val()
        // }
        // console.log(data);
        // $.post('http://www.liulongbin.top:3007/api/reguser', data, function (res) {
        //     if (res.status !== 0) {
        //         return layer.msg(res.message);
        //     }
        //     layer.msg('注册成功，请登录！');
        //     $('#link_login').click();
        // })
    })

    //登录表单
    $('#form_login').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功！');
                //将登录成功得到的token字符串保存到localStorage中
                localStorage.setItem('token', res.token);
                //调转到后台页面
                // location.href = '/index.html';
            }
        })
    })
})