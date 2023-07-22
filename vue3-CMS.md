[TOC]



# 🔺✨   day23- 13:50  CMS- BEGIN-

## 技术栈

<img src="vue3-CMS.assets/image-20230722135032029.png" alt="image-20230722135032029" style="zoom:67%;" />



## 文件配置

### 代码格式配置 - .editorConfig

多人开发- 定义规则

下载插件 -  editorConfig for vs-code 对文件生效

```ts
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```





### prittier配置 代码格式化

```ts
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}

```



下载prettier依赖（文件内部配置） 和 插件



暂时不生效- 功能不全 只能格式尾部空格， 不确定是否配置调整



### eslint插件下载- VSCOde

​    'plugin:prettier/recommended'

> `'plugin:prettier/recommended'` 是一个 ESLint 配置规则，用于结合 ESLint 和 Prettier 来统一管理代码格式和风格。
>
> ESLint 是一个用于静态代码分析的工具，它可以检查代码中的错误、潜在的问题以及代码风格不一致的地方。而 Prettier 是一个代码格式化工具，它可以自动格式化代码，使其符合统一的代码风格。
>
> 当你在 ESLint 配置文件中使用 `'plugin:prettier/recommended'` 规则时，它会结合 ESLint 内置的规则和 Prettier 的规则，使 ESLint 和 Prettier 的功能得以整合。具体来说，该配置规则会启用 ESLint 内置的规则，并在必要时使用 Prettier 来格式化代码。
>
> 使用 `'plugin:prettier/recommended'` 配置的好处是，可以同时使用 ESLint 和 Prettier 的功能，确保代码既符合统一的代码风格，又通过 ESLint 的规则检查。
>
> 示例配置文件：
>
> ```json
> {
>   "extends": [
>     "eslint:recommended",
>     "plugin:prettier/recommended" // 启用 'plugin:prettier/recommended' 规则
>   ],
>   "rules": {
>     // 可以在这里覆盖或添加其他 ESLint 规则
>   }
> }
> ```
>
> 通过以上配置，你可以在项目中同时使用 ESLint 和 Prettier，并且在保存代码时，Prettier 将自动格式化代码以符合统一的代码风格。



### Git-Husky 代码提交前检测

### 安装并配置文件

**npx hsky-init && npm install**

> 是的，`npx husky-init` 是用于自动配置 Husky 的命令。
>
> 当你执行 `npx husky-init` 命令时，它会自动初始化 Husky，设置必要的配置文件和目录，使 Husky 能够与 Git Hooks 配合工作。
>
> 具体来说，`npx husky-init` 命令会做以下几件事情：
>
> 1. 创建一个名为 `.husky` 的目录：该目录用于存放 Husky 的配置文件和钩子脚本。
>
> 2. 在 `.husky` 目录下创建 `pre-commit` 钩子脚本：`pre-commit` 钩子脚本会在执行 `git commit` 命令前触发，它允许你在提交代码之前运行自定义的脚本，例如代码检查、格式化等。
>
> 3. 更新 `package.json` 文件：`npx husky-init` 会自动修改 `package.json` 文件，将 `"husky"` 字段添加到其中，用于配置 Husky 的钩子脚本。
>
> 4. 添加 `husky` 的依赖项：`npx husky-init` 会将 Husky 添加为开发依赖项，这样你就可以在项目中使用 Husky 了。
>
> 接下来的 `npm install` 命令是用于安装 Husky 和其他项目依赖项的。
>
> 总的来说，运行 `npx husky-init` 和 `npm install` 命令是为了自动配置 Husky 并安装相关的依赖项，从而使 Husky 在你的项目中正常工作，你就可以在提交代码前运行自定义的脚本，提高代码质量和规范开发流程。
>
> 



可以进行回调， 在开发人员提交前进行回调函数- 

> Git Husky（或简称 Husky）是一个用于在 Git Hooks 中运行脚本的工具。Git Hooks 是在 Git 执行特定操作时触发的钩子，允许你在特定的时机执行自定义的脚本，例如在提交代码前进行代码检查、格式化代码等。
>
> Husky 允许开发者在项目中配置 Git Hooks，并在特定的 Git 操作时自动运行预定义的脚本。它的作用主要有两个：
>
> 1. 提高代码质量：通过在提交代码前运行代码检查、格式化等脚本，可以确保提交的代码符合项目的代码质量要求。
>
> 2. 规范开发流程：通过配置 Husky，在特定的 Git 操作时执行预定的脚本，可以帮助项目团队规范开发流程，保证代码质量和项目的一致性。
>
> 常见的使用场景包括：
>
> - 在提交代码前进行代码检查（例如 ESLint 或 TSLint）。
>
> - 在提交代码前格式化代码（例如 Prettier）。
>
> - 在提交代码前运行单元测试（例如 Jest）。
>
> - 在推送代码前进行代码审查。
>
> 要使用 Husky，首先需要在项目中安装它，可以使用 npm 或 yarn 进行安装：
>
> ```bash
> npm install husky --save-dev
> # 或者
> yarn add husky --dev
> ```
>
> 然后，在项目的 `package.json` 文件中配置 Git Hooks 和对应的脚本。例如，可以在 `package.json` 中添加以下配置：
>
> ```json
> {
>   "husky": {
>     "hooks": {
>       "pre-commit": "npm run lint",
>       "pre-push": "npm run test"
>     }
>   }
> }
> ```
>
> 上面的配置表示在执行 `git commit` 命令前，会先运行 `npm run lint` 脚本，然后在执行 `git push` 命令前，会先运行 `npm run test` 脚本。
>
> 通过 Husky 的配置，你可以灵活地定义项目中需要运行的脚本，并在特定的 Git 操作时自动执行这些脚本，从而提高代码质量和规范开发流程。



执行后 - 并没有格式化 - husky 但是手动 npm run lint 会格式化







## commitizen 规范提交信息

> Commitizen 是一个用于规范化 Git 提交消息的工具，它可以帮助开发团队更好地管理和维护版本控制历史记录。
>
> 在团队合作开发中，良好的提交消息是非常重要的。通过使用 Commitizen，可以强制开发者按照一定的规范书写提交消息，使得提交记录更加清晰、易读和易于维护。这样的规范化提交消息对于版本控制和代码审查非常有益。
>
> 使用 Commitizen 的好处包括：
>
> 1. 统一提交消息格式：Commitizen 提供了预定义的提交消息格式规范，开发者只需要根据规范填写提交信息即可，避免了不同开发者提交消息格式不一致的问题。
>
> 2. 自动生成版本变更日志：通过规范化的提交消息，可以自动生成版本变更日志（Changelog），帮助团队了解每个版本的变更内容。
>
> 3. 提高代码审查效率：清晰的提交消息可以使代码审查更加高效，审查者能更快地理解代码变更的目的和内容。
>
> 要使用 Commitizen，首先需要在项目中安装它，可以使用 npm 或 yarn 进行安装：
>
> ```bash
> npm install commitizen --save-dev
> # 或者
> yarn add commitizen --dev
> ```
>
> 安装完成后，可以使用 `npx commitizen init cz-conventional-changelog --save-dev --save-exact` 命令初始化 Commitizen，并选择预定义的提交消息格式规范（通常选择 `cz-conventional-changelog`）。
>
> 然后，可以通过运行 `git cz` 命令来代替普通的 `git commit` 命令进行提交。运行 `git cz` 后，会自动弹出一个交互式的命令行界面，引导开发者填写规范化的提交消息。
>
> 通过 Commitizen 的配置和使用，可以让团队中的每个成员都遵循相同的提交消息规范，从而使项目的版本控制历史更加清晰、易读和易于管理。



<img src="vue3-CMS.assets/image-20230722150923853.png" alt="image-20230722150923853" style="zoom:67%;" />



原先配置：

<img src="vue3-CMS.assets/image-20230722154133351.png" alt="image-20230722154133351" style="zoom:67%;" />

会在上层查找 路径- ， 由于git提交的位置处于上层



需要修改路径

> 是的，`commitizen` 的配置和所在文件目录有关系。当你在 Git 项目中使用 `commitizen` 时，它的配置是相对于 `package.json` 所在的目录的。
>
> 如果你的 Git 提交根目录在上层，而你在上层也想使用 `commitizen`，那么你需要在上层的项目中也安装和配置 `commitizen`。你可以在上层的项目中执行以下命令来安装 `commitizen`：
>
> ```
> npm install commitizen --save-dev
> ```
>
> 然后在上层项目的 `package.json` 文件中添加 `commitizen` 的配置，例如：
>
> ```json
> "commitizen": {
>   "path": "cz-conventional-changelog"
> }
> ```
>
> 接下来，在上层项目中也可以使用 `npx cz` 命令来进行提交，`commitizen` 就会按照配置进行提交信息的填写。
>
> 需要注意的是，`commitizen` 的配置是针对每个项目的，如果你在不同的项目中使用不同的 Git 仓库，每个项目都需要单独配置一次 `commitizen`。而且在项目的根目录中配置 `commitizen` 更为常见和推荐，因为这样可以确保不同开发者在不同环境中都可以使用统一的提交方式，不会受到文件目录的影响。