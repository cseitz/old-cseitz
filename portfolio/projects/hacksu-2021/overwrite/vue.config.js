module.exports = {
    publicPath: '/hacksu-2021',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/global.scss";
                `
            }
        }
    }
};