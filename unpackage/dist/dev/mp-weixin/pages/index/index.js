"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_energy_scale2 = common_vendor.resolveComponent("energy-scale");
  const _easycom_avatar2 = common_vendor.resolveComponent("avatar");
  (_easycom_energy_scale2 + _easycom_avatar2)();
}
const _easycom_energy_scale = () => "../../components/energy-scale/energy-scale.js";
const _easycom_avatar = () => "../../components/avatar/avatar.js";
if (!Math) {
  (_easycom_energy_scale + _easycom_avatar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const defaultText = common_vendor.reactive([
      { key: 0, title: "每周额定工作量(H)", desc: "40" },
      { key: 1, title: "每日额定工作量(H)", desc: "8" },
      { key: 2, title: "每周最大工作量(H)", desc: "44" }
    ]);
    const scaleInfo = common_vendor.ref(null);
    const scaleChange = (scale) => {
      scaleInfo.value = scale;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(scaleChange),
        b: common_vendor.p({
          scaleInfo: scaleInfo.value
        }),
        c: common_vendor.f(defaultText, (item, k0, i0) => {
          return {
            a: item.title,
            b: item.desc,
            c: item.key
          };
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
