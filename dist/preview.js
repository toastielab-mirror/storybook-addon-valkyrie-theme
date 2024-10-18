'use strict';

var previewApi = require('@storybook/preview-api');

var o="valkyrieTheme";var s=(e,n)=>{let[l]=previewApi.useGlobals(),r=l[o],{theme:a}=n.globals;return previewApi.useEffect(()=>{i(r);},[r,a]),e()};function i(e){e?document.documentElement.dataset.misskeyTheme=e:delete document.documentElement.dataset.misskeyTheme;}var p={decorators:[s],globals:{[o]:!1}},S=p;

module.exports = S;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.js.map