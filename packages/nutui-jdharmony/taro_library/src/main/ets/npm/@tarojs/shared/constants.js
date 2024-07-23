var PLATFORM_TYPE;
(function (PLATFORM_TYPE) {
    PLATFORM_TYPE["MINI"] = "mini";
    PLATFORM_TYPE["WEB"] = "web";
    PLATFORM_TYPE["RN"] = "rn";
    PLATFORM_TYPE["HARMONY"] = "harmony";
    PLATFORM_TYPE["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
const PLATFORM_CONFIG_MAP = {
    h5: {
        type: PLATFORM_TYPE.WEB
    },
    harmony: {
        type: PLATFORM_TYPE.HARMONY
    },
    mini: {
        type: PLATFORM_TYPE.MINI
    },
    rn: {
        type: PLATFORM_TYPE.RN
    },
    quickapp: {
        type: PLATFORM_TYPE.QUICK
    },
};

export { PLATFORM_CONFIG_MAP, PLATFORM_TYPE };
//# sourceMappingURL=constants.js.map
