
/** 
 * @Author: YISHI 
 * @Date: 2018-07-13 09:57:13  
 * @Desc: 通用层
 */

layui.define(['element'], function(exports) {
    
    var $ = layui.jquery,
        element = layui.element;
    
    // 手机端简单适配
    var mobileTree = $('.site-mobile-tree'),
        mobileShade = $('.site-mobile-shade');

    mobileTree.on('click', function() {
        $('body').addClass('site-mobile');
    });
    mobileShade.on('click', function () {
        $('body').removeClass('site-mobile');
    });

    exports('global', {});
});