module.exports = ({ env }) => ({
    plugins: {
        'autoprefixer': {},
        'postcss-nesting': {},
        'csswring': env === 'production' ? {} : false
    }
});
