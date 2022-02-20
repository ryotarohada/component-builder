"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexPresenterConflictResove = void 0;
/**
 * indexとpresenter同時に設定時の競合解決
 */
const indexPresenterConflictResove = (outExtensions) => {
    let indexFlg = false;
    let presenterFlg = false;
    outExtensions.forEach((extension) => {
        if (extension === 'presenter')
            presenterFlg = true;
        if (extension === 'index')
            indexFlg = true;
    });
    if (indexFlg && presenterFlg) {
        const removeIndexExtension = outExtensions.filter((extension) => {
            if (extension !== 'index')
                return extension;
        });
        return removeIndexExtension;
    }
    return outExtensions;
};
exports.indexPresenterConflictResove = indexPresenterConflictResove;
