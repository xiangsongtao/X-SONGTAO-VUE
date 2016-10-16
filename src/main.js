/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";
import routerConfig from "./router.js";
import app from "./App.vue";
import blogNav from "./views/blog.nav";
import "./theme/util.scss";
import "bootstrap/scss/bootstrap.slim.scss";
import "bootstrap/js/tooltip.js";
import "bootstrap/js/modal.js";
import "bootstrap/js/transition.js";
import attachFastClick from "fastclick";

/**
 * 工具提示栏 tooltip 初始化方法
 * */
window.tooltip = function tooltip() {
  // 异步是为了等待页面加载完毕
  setTimeout(function () {
    let clientWidth = parseInt(document.documentElement.clientWidth);
    let $tooltips = $('[data-toggle="tooltip"]');
    if (clientWidth <= 768) {

    } else if (clientWidth > 769 && clientWidth < 991) {
      $tooltips.tooltip({
        trigger: 'hover',
        placement: 'bottom'
      });
    } else if (clientWidth > 991) {
      $tooltips.tooltip({
        trigger: 'hover',
        placement: 'right'
      });
    }
  }, 50)
};


/**
 * 路由相关 路由规则配置
 * */
routerConfig();

/**
 * 触摸配置
 * */
new attachFastClick(document.body);

/**
 * 发布模式禁用console.log()
 * */
if (process.env.NODE_ENV === 'production') {
  console.log = function () {
  }
  console.warn = function () {
  }
}


new Vue({
  el: '#app',
  replace: false,
  data: function () {
    return {}
  },
  components: {
    blogNav, app
  },
  ready: function () {
  }

})



