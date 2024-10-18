import { useGlobals, useStorybookApi, addons, types } from '@storybook/manager-api';
import r, { memo, useState } from 'react';
import { WithTooltip, TooltipLinkList, IconButton, Icons } from '@storybook/components';

var o="valkyriecoms/storybook-addon-valkyrie-theme",e=`${o}/tool`,i="valkyrieTheme";var n=memo(function(){let [a,p]=useState(!1),[s,m]=useGlobals();useStorybookApi();let d=!!s[i];return r.createElement(WithTooltip,{placement:"top",closeOnOutsideClick:!0,tooltip:({onHide:u})=>r.createElement(TooltipLinkList,{links:["(clear)","l-light","l-coffee","l-apricot","l-rainy","l-botanical","l-vivid","l-cherry","l-sushi","l-u0","d-dark","d-persimmon","d-astro","d-future","d-botanical","d-green-lime","d-green-orange","d-cherry","d-ice","d-u0"].map((t,T)=>({id:t,title:t,onClick(){m({[i]:T?t:!1}),u();},value:t,active:t===s[i]}))}),onVisibleChange:p},r.createElement(IconButton,{key:e,active:d||a,title:"Switch theme"},r.createElement(Icons,{icon:"mirror"})))});addons.register(o,()=>{addons.add(e,{type:types.TOOL,title:"Valkyrie theme",match:({viewMode:l})=>!!(l&&l.match(/^(story|docs)$/)),render:n});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map