module.exports = {
  "plugins": ["stylelint-order"],
  "extends": [
    "stylelint-config-html",
    "stylelint-config-prettier",
    "stylelint-config-idiomatic-order"
  ],
  "rules": {
    "selector-pseudo-class-no-unknown": null,
    "order/order": [
      "custom-properties",
      "declarations"
    ]
  }
}