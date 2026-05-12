---
name: nutui-build-local-verify
description: NutUI 比例缩放本地验证——默认就地覆盖：每个组件 SCSS 写回 src/packages 下同一路径（如 actionsheet/actionsheet.scss→同文件）；--mirror 才写到 scale-verify/ 对照。不写 build。
disable-model-invocation: true
---

# NutUI Build Local Verify

## 在做什么

**只做一步**：用 `scripts/px-to-scale-px-in-component-scss.cjs` 把组件 SCSS 里裸 `px` 转成 `scale-px` 等，并把结果写回磁盘。

- **默认（就地覆盖）**：对每个匹配的 `.scss`，**读、写都是同一路径**——相对 `src/packages` 的路径不变。例如 `src/packages/actionsheet/actionsheet.scss` 转换后仍写回该文件，不会改到别的目录或改名。
- **`--mirror`**：不写源码；结果写到 **`scale-verify/<与 src/packages 相同的相对路径>`**（例如 `scale-verify/actionsheet/actionsheet.scss`），便于 diff。

之后是否再跑 `pnpm run build`、是否用别的工具核对，由你自行决定；本 skill **不要求** build。

## 覆盖原 SCSS（推荐）

在 **nutui-react 仓库根目录** 执行。**务必先 commit / stash**，用完 `git restore src/packages` 或 `git checkout -- src/packages` 恢复。

```bash
pnpm run verify-scale
```

等价：

```bash
node .cursor/skills/nutui-build-local-verify/scripts/verify-scale-generation.mjs
```

（`--in-place` / `-i` 与默认等价。）

## 报告

路径：**`scale-verify/report.json`**。覆盖模式下看 `overwriteSource === true`、`changedFileCount`、`changedFiles`。

## 其它命令

```bash
# 删除仓库根下 scale-verify/ 整目录（含 report；不还原已覆盖的 src/packages）
node .cursor/skills/nutui-build-local-verify/scripts/verify-scale-generation.mjs --clean
```

**可选**（只镜像、不覆盖源码）：

```bash
pnpm run verify-scale:mirror
```

`--mirror` 与 `--in-place` 不能同时使用。

## 核对清单

- [ ] 覆盖前已 git 可回滚
- [ ] `changedFiles` 抽样无 `scale-px(0px)`、无重复嵌套 `scale-px`
- [ ] `font-size` / `font` 未被误改（转换器会跳过）

## 给用户的一句话结论

- 脚本跑完 + `changedFileCount` + 列 2～3 个 `changedFiles`
- **覆盖的是真实源码**时，验证完用 **git 恢复**
