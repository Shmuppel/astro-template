module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': null,
    'order/order': ['custom-properties', 'declarations'],
    indentation: 2,
  },
  customSyntax: 'postcss-html',
}
