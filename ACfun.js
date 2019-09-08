// ==UserScript==
// @name         ACfun
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  acfun打开视频时，自动网页全屏，切换为1080P
// @author       You
// @match        http*://www.acfun.cn/v/*
// @grant           GM_getValue
// @grant           GM_setValue
// ==/UserScript==

(function() {
    var episode=window.location.href.split('_').slice(-1)[0];
    console.log(GM_getValue('episode'));
    if(episode>=(GM_getValue('episode')?GM_getValue('episode'):episode)){
        var go2login=document.querySelector('.go2login');
        go2login.className='';
        var first_quality=document.querySelector('.control-select > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)');
        var e=document.createEvent('Events');
        e.initEvent('click',true,false);
        first_quality.dispatchEvent(e);
        var qualify=document.querySelector('.quality-panel > ul:nth-child(1) > li:nth-child(1)');
        qualify.dispatchEvent(e);
        var video=document.querySelector('video');
        video.addEventListener('loadedmetadata',function () {
            var full_screen=document.querySelector('div.fullscreen:nth-child(6)');
            if (full_screen){
                full_screen.dispatchEvent(e);
            }
            var episode=window.location.href.split('_').slice(-1)[0];
            console.log(episode);
            GM_setValue('episode',episode);

        });
    }
    else{
        var url=window.location.href.split('_');
        url[url.length-1]=GM_getValue('episode');
        url=url.join('_');
        window.location.href=url;
    }
    // Your code here...
})();
