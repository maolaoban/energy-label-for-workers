"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "avatar",
  props: {
    scaleInfo: { default: null }
  },
  setup(__props) {
    const props = __props;
    const { scaleInfo } = common_vendor.toRefs(props);
    const expression = ["excited", "happy", "calm", "sad", "pain"];
    const customImage = common_vendor.ref("");
    common_vendor.watch([scaleInfo], () => {
      customImage.value = "";
    });
    const chooseImage = () => {
      common_vendor.index.chooseImage({
        count: 1,
        success(res) {
          customImage.value = res.tempFilePaths[0];
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !customImage.value
      }, !customImage.value ? {
        b: common_vendor.n("face " + expression[common_vendor.unref(scaleInfo).key - 1])
      } : {
        c: customImage.value
      }, {
        d: common_vendor.o(chooseImage),
        e: common_vendor.unref(scaleInfo).color
      });
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/avatar/avatar.js.map
