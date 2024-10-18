import { useGlobals, useEffect } from '@storybook/preview-api';

var o="valkyrieTheme";var s=(e,n)=>{let[l]=useGlobals(),r=l[o],{theme:a}=n.globals;return useEffect(()=>{i(r);},[r,a]),e()};function i(e){e?document.documentElement.dataset.misskeyTheme=e:delete document.documentElement.dataset.misskeyTheme;}var p={decorators:[s],globals:{[o]:!1}},S=p;

export { S as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.mjs.map