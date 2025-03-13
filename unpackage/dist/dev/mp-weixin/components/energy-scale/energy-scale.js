"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_avatar2 = common_vendor.resolveComponent("avatar");
  _easycom_avatar2();
}
const _easycom_avatar = () => "../avatar/avatar.js";
if (!Math) {
  _easycom_avatar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "energy-scale",
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const scaleList = common_vendor.reactive([
      { key: 1, level: "1", color: "#2d7d3c" },
      { key: 2, level: "2", color: "#7ab042" },
      { key: 3, level: "3", color: "#ffd100" },
      { key: 4, level: "4", color: "#f7941d" },
      { key: 5, level: "5", color: "#ed1c24" }
    ]);
    const scaleSelected = common_vendor.ref(scaleList[0]);
    const scaleClick = (scale) => {
      scaleSelected.value = scale;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(scaleList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.level),
            b: common_vendor.n("energy-scale_item energy-scale_" + item.level),
            c: item.color,
            d: item.key,
            e: common_vendor.o(($event) => scaleClick(item), item.key)
          };
        }),
        b: common_vendor.t(scaleSelected.value.level),
        c: scaleSelected.value.color,
        d: 30 + (scaleSelected.value.key - 1) * 60 - 30 + "rpx",
        e: common_vendor.p({
          scaleInfo: scaleSelected.value
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/energy-scale/energy-scale.js.map
