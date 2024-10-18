'use strict';

var managerApi = require('@storybook/manager-api');
var r = require('react');
var components = require('@storybook/components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);

var o="valkyriecoms/storybook-addon-valkyrie-theme",e=`${o}/tool`,i="valkyrieTheme";var n=r.memo(function(){let [a,p]=r.useState(!1),[s,m]=managerApi.useGlobals();managerApi.useStorybookApi();let d=!!s[i];return r__default.default.createElement(components.WithTooltip,{placement:"top",closeOnOutsideClick:!0,tooltip:({onHide:u})=>r__default.default.createElement(components.TooltipLinkList,{links:["(clear)","l-light","l-coffee","l-apricot","l-rainy","l-botanical","l-vivid","l-cherry","l-sushi","l-u0","d-dark","d-persimmon","d-astro","d-future","d-botanical","d-green-lime","d-green-orange","d-cherry","d-ice","d-u0"].map((t,T)=>({id:t,title:t,onClick(){m({[i]:T?t:!1}),u();},value:t,active:t===s[i]}))}),onVisibleChange:p},r__default.default.createElement(components.IconButton,{key:e,active:d||a,title:"Switch theme"},r__default.default.createElement(components.Icons,{icon:"mirror"})))});managerApi.addons.register(o,()=>{managerApi.addons.add(e,{type:managerApi.types.TOOL,title:"Valkyrie theme",match:({viewMode:l})=>!!(l&&l.match(/^(story|docs)$/)),render:n});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map