import { appTasks } from '@ohos/hvigor-ohos-plugin';
import { exec } from '@jd/oh-code_generator/src/index';
exec('.','./entry/src/main/ets');

export default {
    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */
}
