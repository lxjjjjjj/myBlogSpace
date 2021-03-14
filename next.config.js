const withCss = require('@zeit/next-css')
// next.js的配置文件
if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})
