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



### husky - 和  comitizen 暂时配置不生效 - 暂时不管 ， 这部分主要内容为项目提交规范





## router - vuex 的集成

vue-router

<img src="vue3-CMS.assets/image-20230722163719500.png" alt="image-20230722163719500" style="zoom:67%;" />



vue-x

<img src="vue3-CMS.assets/image-20230722163743080.png" alt="image-20230722163743080" style="zoom:67%;" />





## prettier 配置生效 shift+all+F

启用配置文件的格式进行 自动格式化

<img src="vue3-CMS.assets/image-20230722172007113.png" alt="image-20230722172007113" style="zoom:67%;" />

之所以不生效， 未配置 加上 本地有多个-  格式化程序， 需要指定一个





### powerShell  - 终端需要切换 - 

cmd的升级版 - 但是对于一些指令， 会报错， 切换为默认的cmd比较适合， 已切换



<img src="vue3-CMS.assets/image-20230722172945308.png" alt="image-20230722172945308" style="zoom:67%;" />





### 💓🐟- **false** 识别- 不出 $store

<img src="vue3-CMS.assets/image-20230722182726266.png" alt="image-20230722182726266" style="zoom:67%;" />

能在网页使用， ts识别不出， 但是已经提前声明还是显示错误， 先躲避



## element-plus

> Element Plus 是一款基于 Vue.js 的 UI 组件库，它是对 Element UI 的一次重写和升级，提供了一系列优雅美观的 UI 组件，方便开发者在 Vue.js 项目中快速构建出现代化的网页应用程序。
>
> Element Plus 提供了丰富的组件，包括但不限于按钮、输入框、表格、对话框、菜单、导航、表单等。这些组件都经过精心设计和开发，具有高度的可定制性，同时也符合现代 Web 应用程序的设计风格。
>
> 要在你的 Vue.js 项目中使用 Element Plus，首先需要在项目中安装 Element Plus 的依赖：
>
> ```bash
> npm install element-plus
> ```
>
> 或者使用 yarn 安装：
>
> ```bash
> yarn add element-plus
> ```
>
> 然后，在项目的入口文件（通常是 `main.js` 或 `main.ts`）中引入 Element Plus 的样式和组件：
>
> ```javascript
> import { createApp } from 'vue';
> import ElementPlus from 'element-plus';
> import 'element-plus/lib/theme-chalk/index.css';
> 
> import App from './App.vue';
> 
> const app = createApp(App);
> 
> app.use(ElementPlus);
> 
> app.mount('#app');
> ```
>
> 以上代码中，我们先导入了 Element Plus 的样式文件 `element-plus/lib/theme-chalk/index.css`，然后使用 `app.use(ElementPlus)` 将 Element Plus 注册为 Vue.js 的插件，这样就可以在整个项目中使用 Element Plus 的组件了。
>
> 之后，你就可以在你的 Vue 组件中按需引入 Element Plus 的组件，并使用它们来构建你的网页应用程序了。例如，在一个 Vue 组件中使用 Element Plus 的按钮组件：
>
> ```vue
> <template>
>   <el-button type="primary">点击我</el-button>
> </template>
> 
> <script>
> import { ElButton } from 'element-plus';
> 
> export default {
>   components: {
>     ElButton,
>   },
> };
> </script>
> ```
>
> 这样，你就可以在你的 Vue 项目中使用 Element Plus 提供的丰富组件了。Element Plus 的官方文档也非常详细，可以在其中查找更多组件的用法和配置选项：https://element-plus.org/



### babel-plugin-import

引用插件时， 会自动引用样式， 按需使用， 需要在配置文件中使用

<img src="vue3-CMS.assets/image-20230722193101855.png" alt="image-20230722193101855" style="zoom:67%;" />

当导入时，才会引入应用样式



> 是的，这部分代码使用了 Babel 插件 `babel-plugin-import`，它的作用是实现按需加载 Element Plus 组件的 CSS 文件。
>
> 具体解释如下：
>
> 1. `plugins` 数组中使用了 `import` 插件，这个插件的作用是帮助我们按需引入 Element Plus 组件以及对应的 CSS 文件。
>
> 2. `libraryName: 'element-plus'` 指定了要按需引入的库名称为 `element-plus`，也就是 Element Plus 库。
>
> 3. `customStyleName` 是一个回调函数，它接收组件名称 `name` 作为参数，并返回对应组件的 CSS 文件路径。这样做是为了指定 Element Plus 组件的 CSS 文件路径，以便按需加载对应的样式文件。
>
> 4. `presets: ['@vue/cli-plugin-babel/preset']` 是 Vue CLI 的 Babel 预设，用于配置 Vue 项目的 Babel 编译选项。
>
> 使用这个配置后，当你在代码中按需引入 Element Plus 组件时，它会自动加载对应的 CSS 文件，而不是将整个样式文件都打包进最终的项目构建文件中，从而减少了项目的体积。这样可以优化网页加载速度和用户体验。





> `babel-plugin-import` 是一个用于按需引入组件的 Babel 插件，主要用于优化代码体积。它通常与 UI 组件库（如 Ant Design、Element Plus 等）一起使用。
>
> 当我们使用 UI 组件库时，如果直接导入整个组件库的样式和代码，会导致最终打包生成的 JavaScript 文件较大，包含了未使用的组件代码，增加了页面加载时间。为了解决这个问题，我们可以使用 `babel-plugin-import` 插件按需引入组件，即只导入需要使用的组件代码，以及相应组件的样式。
>
> 使用 `babel-plugin-import` 插件的步骤如下：
>
> 1. 安装插件：
>
>    ```bash
>    npm install babel-plugin-import --save-dev
>    ```
>
> 2. 在 Babel 配置文件（通常是 `.babelrc` 或 `babel.config.js`）中添加插件配置：
>
>    ```json
>    {
>      "plugins": [
>        [
>          "import",
>          {
>            "libraryName": "element-plus",
>            "styleLibraryName": "theme-chalk"
>          }
>        ]
>      ]
>    }
>    ```
>
>    上面的配置表示使用 `element-plus` 组件库，并按需引入 `theme-chalk` 主题的样式。
>
> 3. 在代码中按需引入组件：
>
>    ```javascript
>    // 在需要使用的组件中直接按需引入
>    import { Button, Input } from 'element-plus';
>    ```
>
> 通过以上配置，`babel-plugin-import` 将会自动按需引入指定的组件，以及相应的样式。这样可以显著减少最终打包后的文件大小，优化页面加载速度。



## .d.ts文件代码解读

```tsx
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any,

```

> 这个 `.d.ts` 文件是 TypeScript 的类型声明文件，用于声明 Vue 单文件组件（`.vue` 文件）的类型信息。让 TypeScript 在开发过程中能够正确地识别和推断 `.vue` 文件的类型。
>
> 让我们逐个解析这个声明文件的内容：
>
> 1. `/* eslint-disable */`: 这是一个注释，用于禁用 ESLint 对该文件的检查，表示该文件内的代码不受 ESLint 规则限制。
>
> 2. `declare module '*.vue'`: 声明一个模块，表示导入一个以 `.vue` 结尾的文件时的类型信息。`*.vue` 是通配符，表示所有的 `.vue` 文件。
>
> 3. `import type { DefineComponent } from 'vue'`: 导入 Vue 的类型定义 `DefineComponent`，`import type` 用于只导入类型信息而不导入具体的值。
>
> 4. `const component: DefineComponent<{}, {}, any>`: 声明一个常量 `component`，其类型是 `DefineComponent`。`DefineComponent` 是 Vue 组件的类型定义，需要三个泛型参数：
>    - 第一个空对象 `{}` 表示组件的 Props 类型。这里为空对象，表示没有 Props。
>    - 第二个空对象 `{}` 表示组件的 Emits 类型。这里为空对象，表示没有 Emits。
>    - `any` 表示组件的 `setup` 函数返回值类型。这里用 `any` 表示不对 `setup` 函数的返回值进行类型检查。
>
> 5. `export default component`: 将常量 `component` 导出为默认导出，即当其他文件导入这个模块时，得到的是 `component`。
>
> 6. `declare let $store: any`: 声明一个全局变量 `$store`，类型为 `any`，表示这个全局变量可以接受任何类型的值。
>
> 综上所述，这个声明文件的作用是为了让 TypeScript 在处理 Vue 单文件组件时，能够正确地识别和推断组件的类型信息，同时允许全局使用一个类型为 `any` 的变量 `$store`。





### 全局组件注册

> 全局组件注册是指将一个组件在整个应用程序中都可以使用，而无需在每个使用该组件的地方进行单独的引入或注册。
>
> 在 Vue 2.x 版本中，我们可以通过在 `main.js`（或类似的入口文件）中注册全局组件，使其在整个应用程序中可用。以下是一个示例：
>
> ```javascript
> // main.js
> 
> import { createApp } from 'vue';
> import App from './App.vue';
> import MyGlobalComponent from './components/MyGlobalComponent.vue'; // 导入全局组件
> 
> const app = createApp(App);
> 
> app.component('my-global-component', MyGlobalComponent); // 注册全局组件
> 
> app.mount('#app');
> ```
>
> 在上面的代码中，我们通过 `app.component` 方法将 `MyGlobalComponent` 注册为全局组件，并为其指定了一个名称 `'my-global-component'`，以后在应用程序的任何地方，都可以通过这个名称来使用该组件。
>
> 使用全局组件时，无需在每个组件中再次导入或注册，而是直接在模板中使用它：
>
> ```html
> <!-- 在其他组件的模板中直接使用全局组件 -->
> <template>
>   <div>
>     <my-global-component></my-global-component>
>   </div>
> </template>
> ```
>
> 这样，`MyGlobalComponent` 就可以在整个应用程序中的任何组件模板中使用，无需重复导入或注册，从而提高代码的可维护性和复用性。



函数注册- 函数内部注册组件， 所以注册组件等价 注册函数



```tsx
globalRegister(app)，这二者等价是吗
app.use(globalRegister)

所调用的函数
import { App } from 'vue'
import registerElement from './register-element'

// ts 组件类型声明
export function globalRegister(app: App): void {
  app.use(registerElement)
}
```



> 是的，`globalRegister(app)` 和 `app.use(globalRegister)` 是等价的，都会调用 `globalRegister` 函数并传递 `app` 参数。在这种情况下，`globalRegister` 函数接收一个 `App` 实例作为参数，然后在内部调用 `app.use(registerElement)`，将 `registerElement` 函数注册到应用程序中。
>
> 实际上，`app.use()` 方法用于在 Vue 应用程序中安装插件，而 `globalRegister` 函数可以被视为一个插件，它在内部使用了 `app.use(registerElement)` 来注册一些全局组件。所以，当你调用 `app.use(globalRegister)` 时，它会将 `registerElement` 注册为全局组件，从而使这些组件在整个应用程序中都可用。





## axios 测试请求

http://httpbin.org/， 提供一个测试请求的网站



### interceptors作用

拦截器： 实质上是执行函数， 第一个参数为成功执行，第二个参数为失败，

可在请求发送前进行拦截， 也可在信息返回后进行拦截

> 拦截器（Interceptors）是在发送请求或响应之前拦截并对它们进行处理的功能。在前端开发中，拦截器通常用于以下目的：
>
> 1. 添加公共配置：可以在发送请求前，对请求进行拦截并添加一些公共的配置信息，比如在请求头中添加认证信息、设置请求超时时间等。
>
> 2. 请求/响应的处理：可以在请求发送前或响应返回后对它们进行预处理或后处理，例如，在请求发送前对请求参数进行加密，或者在响应返回后对响应数据进行统一处理。
>
> 3. 错误处理：拦截器可以用来捕获请求或响应中的错误，然后进行相应的处理，比如在请求失败时显示错误提示信息。
>
> 4. 请求取消：拦截器可以用来实现请求的取消功能，当某个请求已经发出，但在响应返回之前需要取消该请求，拦截器可以拦截该请求并取消它。
>
> 拦截器通常是在发送请求之前执行的请求拦截器和在响应返回后执行的响应拦截器两种类型。它们可以用来实现一些通用的功能和处理逻辑，使代码更加模块化和可维护。
>
> 在一些前端框架和库中，比如 Axios 和 Vue.js，拦截器是一个重要的特性，提供了强大的扩展性和灵活性，使开发人员可以在请求和响应的不同阶段进行定制化的处理。



### 只要是通过axios发送的请求都可被拦截器所拦截

> 拦截器需要提前设置在发送的请求前，只对在拦截器后续的请求生效





## 区分环境变量

![image-20230722222244524](vue3-CMS.assets/image-20230722222244524.png)



对于base_url,  base_name, 不同环境下，需要用到不同的名字， 有三种方式，一是手动修改， 不推荐（出错率高），二是使用逻辑判断进行赋值， 三是根据配置文件，使用语句进行读取， 自动获取



### 第二种方式 process.env.NODE_ENV

这种方式， 通过逻辑判断此属性赋予不同的值， 在开发中较常用于这种形式

它会根据环境的不同而自动设置

> 是的，`process.env.NODE_ENV` 是一个动态属性，并且是 Vue CLI 内置的一个特殊属性。它的值会根据当前运行的环境而自动设置，例如：
>
> - 在开发环境中，它的值是 "development"。
> - 在生产环境中，它的值是 "production"。
> - 在测试环境中，它的值是 "test"。
>
> 在 Vue CLI 项目中，这个属性的值会根据你启动应用的方式而动态设置，比如使用 `npm run serve` 启动开发服务器时，它会被设置为 "development"，而使用 `npm run build` 打包应用时，它会被设置为 "production"。这样，你可以根据 `process.env.NODE_ENV` 的值来做一些环境相关的配置或判断，例如使用不同的 API 地址、打开/关闭某些开发工具等。



### 第三种方式 process.env.VUE_APP定义变量

**process.env.VUE_APP_BASE_URL**

> `process.env.VUE_APP_BASE_URL` 是 Vue CLI 内置的一个特殊变量，用于设置项目的基础 URL。这个变量在 Vue CLI 项目中使用，并且在编译时会被替换成对应的值。
>
> 在 Vue CLI 项目中，可以在 `.env` 文件或者以 `.env` 开头的文件中设置环境变量。例如，可以在根目录下创建一个名为 `.env` 的文件，并在其中定义 `VUE_APP_BASE_URL` 变量：
>
> ```
> VUE_APP_BASE_URL=http://httpbin.org
> ```
>
> 然后，在你的代码中可以通过 `process.env.VUE_APP_BASE_URL` 获取到这个变量的值：
>
> ```javascript
> console.log(process.env.VUE_APP_BASE_URL); // 输出：http://httpbin.org
> ```
>
> 这样可以在项目中使用不同的环境变量值，而不需要在代码中硬编码这些值，方便在不同环境下进行切换和配置。注意，为了使 `.env` 文件生效，需要重新启动项目，或者在启动项目时加上 `--mode` 参数指定使用的环境模式。例如，使用以下命令启动项目：
>
> ```
> vue-cli-service serve --mode development
> ```
>
> 这样就会加载根目录下的 `.env.development` 文件，并将其中定义的变量设置为开发环境的值。类似地，可以使用 `--mode production` 或其他自定义的模式。



**自动注入**，不需要手动导入

> 是的，你说得对。在 Vue CLI 项目中，定义在以 `.env` 开头的文件中的环境变量会自动注入到应用中，并且可以直接使用 `process.env.VUE_APP_XXX` 的形式来获取它们的值，而不需要手动导入。这是 Vue CLI 内置的特性，方便在项目中使用不同的环境变量值，而无需显式导入或硬编码这些值。只要变量名以 `VUE_APP_` 开头，它们就会被注入到应用中，你可以在整个项目中直接使用它们。

<img src="vue3-CMS.assets/image-20230722224314810.png" alt="image-20230722224314810" style="zoom:80%;" />

根据当前的所处环境自动注入

开发 - 生产 - 注入





# 🔺✨day24- 13点20分

# 进度三

## 🔺✨axios封装 思路

二次封装， 逻辑封装 ， 类的封装

原生axios实例化对象并没有 InterCepteros拦截器具体实现方法， 为此使用一个接口，ts定义了四个函数类型， 同时再定义一个配置继承自 **AxiosRequestConfig**， 再进行内置此属性， 所以当前配置相当于具备了一个接口， 此接口可以实例化对象实现， 并且此接口时可选参数， 所以实例化对象，可以选择传入接口并给出具体的实现方法，

```ts
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequestConfig } from './type'
 //自定义接口扩展原config功能，添加拦截器功能  封装进type.ts
 interface HYRequestInterceptors<T = AxiosResponse> {
   requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
   requestInterceptorCatch?: (error: any) => any
   responseInterceptor?: (res: T) => T
   responseInterceptorCatch?: (error: any) => any
 }
 interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    //自定义接口使用 并拓展拦截功能- 可选
   interceptors?: HYRequestInterceptors<T>
   showLoading?: boolean
 }
```

**this.instance.interceptors.request.use**, **this.instance.interceptors.response.use**

这个为配置内置方法， 可以通过它调用接口的的方法（所定义的拦截器接收响应方法）



### 为每个实例化 配置拦截器

```tsx
this.instance.interceptors.request.use() 和 this.instance.interceptors.response.use() 是 axios 实例对象的内置方法，用于注册拦截器。
```



> 对的，你理解得没问题！
>
> 在代码中
>
> **`this.instance.interceptors.request.use()`**
>
> **`this.instance.interceptors.response.use()`** 
>
> 是 `axios` 实例对象的内置方法，用于注册拦截器。
>
> 拦截器分为请求拦截器和响应拦截器，每个拦截器都接收两个函数作为参数：
>
> 1. 第一个函数用于处理成功的情况，即请求或响应成功时执行的函数。
> 2. 第二个函数用于处理失败的情况，即请求或响应失败时执行的函数。
>
> 这两个函数都会接收一个参数，请求拦截器的参数是 `config`，响应拦截器的参数是 `res`（响应成功时）或 `err`（响应失败时）。
>
> 在这里，你对 `this.instance.interceptors.request.use()` 注册了一个请求拦截器，用于在请求成功时打印日志，并对请求配置进行处理。而 `this.instance.interceptors.response.use()` 注册了一个响应拦截器，用于在响应成功时打印日志，并对响应结果进行处理。
>
> 这些拦截器可以对请求和响应进行统一的处理，比如添加公共的请求头、处理错误信息等，非常方便。





```ts
    this.instance.interceptors.request.use(
      (config) => {
        console.log('默认实例拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('默认实例拦截器: 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('默认实例拦截器: 响应成功拦截')
        return res
      },
      (err) => {
        console.log('默认实例拦截器: 响应拦截失败')
        return err
      }
    )	
```



### 为实例化对象 调用其单独拦截器

根据实例化对象，是否传入配置， 在内部进行逻辑判断， 通过直接执行来实现对象特有的传入拦截器

为每个请求配置 个性化的拦截器

```tsx
request(config: HYRequestConfig): void {
    // 执行 请求独有的拦截器
    // 单独请求有自带拦截器执行请求拦截器-
    // 有拦截器的存在时进行执行拦截器内函数，再将config返回
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    // 单独请求有自带拦截器执行响应拦截器
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}
```



> 是的，你的理解是正确的。
>
> 在 `HYRequest` 类中的 `request` 方法中，通过传入的 `config` 对象来执行请求，并且在执行请求之前和请求成功后分别执行了请求拦截器和响应拦截器。
>
> 具体逻辑如下：
>
> 1. 首先判断 `config.interceptors?.requestInterceptor` 是否存在，如果存在，则说明传入了请求拦截器函数。在这种情况下，先执行传入的请求拦截器函数，并将其返回的 `config` 赋值给 `config` 变量，以便在请求时使用修改后的配置。
>
> 2. 接着执行请求，即调用 `this.instance.request(config)` 方法，该方法会返回一个 Promise 对象。
>
> 3. 在 Promise 的 `then` 回调中，检查 `config.interceptors?.responseInterceptor` 是否存在，如果存在，则说明传入了响应拦截器函数。在这种情况下，先执行传入的响应拦截器函数，并将其返回的响应结果 `res` 赋值给 `res` 变量，以便在后续处理中使用修改后的响应结果。
>
> 4. 最后，打印响应结果 `res`。
>
> 这样，通过在 `request` 方法中根据传入的配置判断是否执行特定的拦截器函数，实现了在每个请求独有的情况下，能够灵活地定制请求拦截器和响应拦截器的功能。同时，还利用了全局拦截器来处理所有实例的请求和响应。这样的设计非常灵活和易于维护。



### 封装的好处

这样的行为有助于定制个性化的处理，对请求或响应进行个性化的操作， 从而实现不同的操作 ，这样的封装， 让每个请求变得很灵活

> 正是的，你说得非常正确！
>
> 通过在 `HYRequest` 类中对请求和响应拦截器进行封装，以及在实例化 `HYRequest` 对象时可以传入特定的拦截器函数，使得每个请求可以根据具体需求进行个性化的处理。这样的封装让请求变得非常灵活和可定制，能够满足不同场景下的需求，同时也使得代码更加易于维护和扩展。
>
> 通过拦截器的使用，可以实现以下一些功能：
>
> 1. 添加全局的请求头或请求参数，适用于每个请求；
> 2. 在请求前做一些数据的处理，例如在请求中添加 token；
> 3. 在请求失败时进行错误处理，例如弹出错误提示；
> 4. 在响应成功时对数据进行处理，例如提取响应结果中的有效数据；
> 5. 在响应失败时进行错误处理，例如统一处理网络错误或超时错误。
>
> 这样的封装和灵活性可以大大提高开发效率，并且使得代码结构更加清晰和可维护。同时，对于复杂的业务场景，能够轻松应对各种需求变化。总体来说，合理使用拦截器可以提高代码的可复用性和可扩展性，使得整个项目开发更加高效和便捷。



## 拦截失败有两种返回结果 

**服务器设置接口的不同设置**

请求失败-   直接返回失败  response Catch 拦截

请求失败： 返回请求成功， 但data内为错误的状态码， 实际为失败

<img src="vue3-CMS.assets/image-20230723175633249.png" alt="image-20230723175633249" style="zoom:67%;" />

> 你说得很对！在拦截器中，对于请求失败和请求成功但返回的数据中包含错误信息这两种情况，可以分别进行不同的处理。
>
> 1. 对于请求失败，可以直接返回一个 `Error` 对象，让 `catch` 语句捕获并处理错误，从而在请求发生错误时进行统一的错误处理。例如，网络连接失败或服务器返回错误状态码等情况可以直接返回 `Error` 对象，并在 `catch` 中进行错误提示或处理逻辑。
>
> 2. 对于请求成功但返回的数据中包含错误信息，可以在拦截器中对响应数据进行判断，如果数据中包含错误码或错误信息，可以根据具体情况返回一个自定义的错误对象，或者在 `catch` 语句中进行错误处理。这样可以统一处理响应中的错误信息，确保请求成功时也能够及时发现并处理错误。
>
> 在拦截器的使用中，需要根据实际情况进行灵活处理，以满足不同业务需求。通过合理地使用拦截器，可以对请求和响应进行统一处理，提高代码的可复用性和可维护性。同时，对于异常情况的处理也更加方便和规范。



### 对两种情况的响应进行处理

res: 错误以成功的形式返回

err: 直接返回错误

```tsx
    this.instance.interceptors.response.use(
      (res) => {
        console.log('默认实例拦截器: 响应成功拦截')
        const data = res.data
        // 此情况为请求失败，但失败的状态返回在请求成功中
        if (data.returnCode === '-1001') {
          console.log(`请求失败,错误码为${data.returnCode}`)
        } else {
          return data
        }
        return res
      },
      (err) => {
        console.log('默认实例拦截器: 响应拦截失败')
        // 请求失败 在相应失败设置
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }
```



### 请求前的拦截- 身份标识 token

```tsx
  requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功拦截')
      return config
    },
```

> 对的，你说得没错！在这个代码片段中，`token` 相当于身份标识或认证令牌。它用于标识和验证发出请求的用户。
>
> 在 `HYrequest` 类的 `requestInterceptor` 函数中，它检查是否存在 `token`。如果有 `token`，则会将 `Authorization` 头添加到请求的 `config` 对象中，并设置为 `Bearer ${token}`。`Authorization` 头通常用于基于令牌的身份验证，服务器根据令牌验证用户的身份，并确定用户是否有权限访问请求的资源。
>
> `Bearer` 关键字是一种常见的约定，用于指示发送的令牌是承载令牌，这意味着服务器可以使用该令牌验证用户并授予对受保护资源的访问权限。
>
> 通过添加带有 `Bearer` 令牌的 `Authorization` 头，服务器可以验证用户的身份，并根据用户的权限允许或拒绝访问某些部分的应用程序或 API。
>
> 总体而言，在这个代码片段中，使用 `token` 是一种常见的方法来保护 API 请求，并确保只有经过身份验证的用户才能访问特定的资源。



每次的请求都会加上此token是吗， 然后服务器再进行验证， 一般这个token为用户初次使用时，由服务器进行分配?

> 是的，每次的请求都会加上这个 token，服务器再进行验证。通常情况下，token是由服务器在用户初次登录或进行身份验证时进行分配的。
>
> 用户在初次登录时，会提供身份信息（如用户名和密码），服务器会验证用户的身份，并根据验证结果生成一个 token 并分配给该用户。该 token 通常包含一些加密信息，用于标识用户的身份和权限。然后，服务器会将该 token 返回给客户端（例如浏览器或移动应用）。
>
> 客户端在后续的请求中，每次都会将这个 token 添加到请求的头部中的 `Authorization` 字段里。服务器在接收到请求后会验证这个 token，通过检查该 token 的有效性和权限，来确定用户是否有权访问请求的资源。
>
> 这种机制可以有效地保护 API 资源，只有经过身份验证并具有有效 token 的用户才能访问受保护的资源。如果用户没有提供有效的 token 或 token 验证失败，则服务器会拒绝该请求，并返回相应的错误状态码或错误信息。





## 请求添加-加载动画效果（element-plus）

首先需要为接口- 添加属性：showLoading:? : boolean， 设置后

在实例化对象才能使用传入这个属性- 为实例化对象 设置开关



在类中需要定义 

常量   DEAFULT_LOADING = true， 用于赋值showLoading ，逻辑判断，当无传入值时，默认为true执行动画

showLoading: boolean ， 开启动画开关， 当无传入时默认开启动画， 当对象中属性设置为false，将动画关闭

 loading?: ILoadingInstance， 加载的动画组件，需要进行声明类型和导入， 在请求使用时，需要要此参数接收动画组件 

```ts
this.loading = ElLoading.service({
​      lock: true,
​      text: '正在请求数据....',
​      background: 'rgba(0, 0, 0, 0.5)'
​     })
```

在信息返回后， 需要对动画进行关闭， 调用

```ts
      // 请求成功后 将loading移除, 不一定有使用加载动画配置，不需要使用if
      this.loading?.close()

```



执行逻辑判断， 最后需要对showLoading 设置为DEAFULT_LOADING （true）

​	不设置会影响下次请求

```ts
 // 单独请求有自带拦截器执行响应拦截器
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res.data)

      this.showLoading = true
    })
  }
}
```



## 💓🐟对象的请求封装为Promise对象 （这部分有点懵）

```ts

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 有拦截器的存在时进行执行拦截器内函数，再将config返回
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 这个请求开关，将影响加载动画开启， 默认不填入时为true,看类中constructor
      if (config.showLoading === false) {
        this.showLoading = false
      }

      // 单独请求有自带拦截器执行响应拦截器
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1. 单个请求数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 将showLoading设置为true， 不影响下次请求
          this.showLoading = DEAFULT_LOADING

          // 3. 将结果返回
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading 设置为true, 不影响下个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  
  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

...post ...delete ...patch 其它类似如上

```



```ts
  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

```

代码理解：相当于对request函数进行重写， 并且将原先instance.request方法直接修改为目标所执行的请求，在外界只需直接调用即可，传入配置文件， 底层会自动实现



> 在外部调用 `hyRequest.get()` 时，你需要传入配置信息。对于 `hyRequest.get()` 方法，它接受一个参数 `config`，这个参数包含了发送 GET 请求的相关配置，例如请求的 URL、请求参数、请求头等信息。
>
> 所以，在使用 `hyRequest.get()` 时，你需要像这样传入配置信息：
>
> ```javascript
> hyRequest.get({
>   url: '/api/data', // 请求的URL
>   params: { key: 'value' }, // 请求参数
>   headers: { 'Content-Type': 'application/json' }, // 请求头
>   // 其他配置...
> }).then((response) => {
>   // 处理响应数据
> }).catch((error) => {
>   // 处理请求错误
> });
> ```
>
> 通过这种方式，你可以在外部直接调用 `hyRequest.get()` 并传入相关配置信息来发送 GET 请求，而不需要关心底层的具体实现细节。



# 进度四

## tsConfig.json 配置文件



```ts
{
  "compilerOptions": {
    // 目标代码(ts -> js(es5/6/7))
    "target": "esnext",
    // 目标代码需要使用的模块化方案(commonjs require/module.exports/es module import/export)
    "module": "esnext",
    // 严格一些严格的检查(any) 
    "strict": true,
    // 对jsx进行怎么样的处理
    "jsx": "preserve",
    // 辅助的导入功能
    "importHelpers": true,
    // 按照node的方式去解析模块 import "/index.node"
    "moduleResolution": "node",
    // 跳过一些库的类型检测 (axios -> 类型/ lodash -> @types/lodash / 其他的第三方)
    // import { Person } from 'axios'
    "skipLibCheck": true,
    // export default/module.exports = {}
    // es module 和 commonjs
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    // 要不要生成映射文件(ts -> js)
    "sourceMap": true,
    // 文件路径在解析时, 基本url, 基于当前url
    "baseUrl": ".",
    // 指定具体要解析使用的类型
    "types": ["webpack-env"],
    // 路径解析(类似于webpack alias)
    "paths": {
      "@/*": ["src/*"],
      "components/*": ["src/components/*"]
    },
    // 可以指定在项目中可以使用哪里库的类型(Proxy/Window/Document)
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}

```





## defineComponent 包裹组件对象的作用

> 在 Vue.js 3.x 中，`defineComponent` 是一个辅助函数，用于包裹组件对象，并且执行一些必要的处理，以便将组件对象转换为一个 Vue 组件选项对象。
>
> 具体来说，`defineComponent` 的作用有以下几点：
>
> 1. 类型推断：`defineComponent` 使用泛型类型参数来推断组件的 props 类型。这样可以在组件内部使用 props 的类型检查，以及提供类型推断的支持。
>
> 2. 组件选项：`defineComponent` 会将组件对象包裹，并转换为 Vue 组件选项对象。这样就可以在组件内部使用 Vue.js 提供的组件选项，比如 `data`、`methods`、`computed` 等。
>
> 3. 兼容性处理：`defineComponent` 内部会处理一些兼容性问题，以确保组件对象在 Vue.js 3.x 中能够正确地运行。
>
> 示例使用 `defineComponent` 的代码：
>
> ```js
> import { defineComponent } from 'vue';
> 
> const MyComponent = defineComponent({
>   props: {
>     message: {
>       type: String,
>       required: true,
>     },
>   },
>   data() {
>     return {
>       count: 0,
>     };
>   },
>   methods: {
>     increment() {
>       this.count++;
>     },
>   },
>   template: `
>     <div>
>       <p>{{ message }}</p>
>       <p>Count: {{ count }}</p>
>       <button @click="increment">Increment</button>
>     </div>
>   `,
> });
> 
> export default MyComponent;
> ```
>
> 在上面的例子中，`defineComponent` 函数将组件对象转换为了一个 Vue 组件选项对象。组件对象内部定义了 props、data 和 methods，并使用了模板语法来渲染组件。使用 `defineComponent` 可以让组件对象更符合 Vue 组件的规范，提供了更好的类型检查和兼容性。





## normalize.css

对不同的浏览器保持相同的初始化状态

> 是的，您说得对。`normalize.css` 的目标之一就是确保不同浏览器在初始化状态下拥有相同的样式表现，从而消除浏览器之间的样式差异，使页面在各个浏览器上表现一致。
>
> 当我们在开发网页时，浏览器会自动为 HTML 元素应用一些默认样式，这些样式因浏览器而异。这就导致了不同浏览器在显示网页时可能会有细微的差异。`normalize.css` 会通过一系列的规则和样式重置来确保不同浏览器之间的一致性，从而为我们提供一个更统一、更可控的基础样式。
>
> 需要注意的是，`normalize.css` 并不会完全清除浏览器默认样式，而是尽量保持它们在各个浏览器上的一致性。这样做的目的是为了确保页面在不同浏览器中都有较好的表现，同时不会影响到页面的正常功能。



## el-plus的表格标签

```ts
<el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>


```

<img src="vue3-CMS.assets/image-20230724160245491.png" alt="image-20230724160245491" style="zoom:80%;" />



由最外部的el-tabs标签包裹， 内部的el-tab-pane为列表选项， 账号登录和手机登录，通过点击可切换不同的内容， 内置插槽是设置文本内容和图标（设置span 再设置 i标签）

标签login-account 为组件， 将内部信息进行一个抽取作为组件， 再将组件导入该部分内容



### 账号组件设置

```ts
  <div class="login-account">
   
      <!-- ：model表示将对象的信息实时传递给外标签， 进行规则检验 -->
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <!-- 对于标签框 需要动态绑定属性 -->
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
```

el-form  表单，单行元素， item文本， input输入框， 同时对其传入account信息， 为内部导出的对象，实时动态传入，应用规则 rules 对文本进行检验， 再对文本框的信息进行双向绑定， 



### 规则设置

```ts
// 编写好规则
export const rules = {
  // 检验规则是以数组的形式储存
  name: [
    {
      // 必传， 有此符号才有*号键
      required: true,
      message: '用户名是必传内容~',
      // 失去焦点时检验
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ]
    
}

```

抽取出来放置config， 内部检验数组形式， 多种应用规则



### 登录逻辑验证

在account-用户组件中

设置登录逻辑

  const formRef = ref<InstanceType<typeof ElForm>>()

需先import 该组件， instanceType， 为ts内置方法用于识别类型，此方法将绑定ElForm组件， 转换为响应式数据， .value 为获取当前组件实例



```ts
const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')
        }
      })
    }
```

逻辑判断， 当存在时Elform实例时， 调用其validate方法- 去验证定义的rules，检验是否通过rules判断， 是则执行内部语句



> 这段代码是在Vue 3中使用了Composition API的`ref`函数和TypeScript的泛型语法，同时还使用了Element UI（`ElForm`）的表单组件。
>
> 让我来解析这段代码：
>
> 1. `ref`函数：和之前解释的一样，`ref`函数是Vue 3中用于创建响应式数据的函数。
>
> 2. `<InstanceType<typeof ElForm>>`：这部分是TypeScript的泛型语法，它的作用和之前解释的一样，用于获取`ElForm`组件的实例类型。
>
> 3. `const formRef = ref<InstanceType<typeof ElForm>>()`: 这行代码声明了一个变量`formRef`，它是一个响应式引用，可以持有`ElForm`组件的实例。
>
> 4. `const loginAction = () => { ... }`: 这行代码定义了一个名为`loginAction`的函数。
>
> 5. `formRef.value?.validate((valid) => { ... })`: 这部分代码调用了`ElForm`组件的`validate`方法。`formRef.value`用于获取`formRef`的当前值（即`ElForm`组件的实例），然后通过`?.`安全导航操作符来确保`validate`方法存在，并在其存在的情况下执行它。
>
> 6. `if (valid) { console.log('真正执行登录逻辑') }`: 这部分代码在`validate`方法的回调中执行，它会根据表单验证的结果来决定是否执行真正的登录逻辑。如果表单验证通过（即`valid`为`true`），则输出'真正执行登录逻辑'。
>
> 综合起来，这段代码的作用是创建一个响应式引用`formRef`，用于持有`ElForm`组件的实例。然后，通过`loginAction`函数来处理登录逻辑，其中调用了`ElForm`组件的表单验证方法`validate`来验证表单的合法性。如果表单验证通过，则执行真正的登录逻辑。
>
> 请注意，以上代码中使用了Element UI的表单组件（`ElForm`），在实际应用中，你需要确保正确引入并注册Element UI组件，以及正确设置表单的验证规则和相关逻辑。



# 🔺✨day25  -  20点30分

# 🔺✨进度五



## 20-31详解instanceOF

![image-20230724203419476](vue3-CMS.assets/image-20230724203419476.png)





## 依赖报错- 重启vscode- 重装依赖问题

IDE问题：有时候IDE（集成开发环境）可能会出现缓存问题，导致识别不到新安装的类型声明。尝试重启IDE，或者清理IDE的缓存，然后再次打开项目。



E问题：有时候IDE（集成开发环境）可能会出现缓存问题，导致识别不到新安装的类型声明。尝试重启IDE，或者清理IDE的缓存，然后再次打开项目。



> 是的，如果你在`node_modules`目录中删除了`element-plus`依赖，并重新运行`npm install`或`yarn install`重新安装依赖，有时候IDE（如VSCode）可能会缓存之前的类型信息，导致在VSCode中依然显示找不到`element-plus`模块或其相应的类型声明。
>
> 在这种情况下，可以尝试以下方法来解决问题：
>
> 1. 在VSCode中尝试重启IDE，以便刷新缓存，有时候这个简单的操作就能解决问题。
>
> 2. 在VSCode中尝试执行"清除缓存并重启"操作。在VSCode的命令面板中（按下`Ctrl + Shift + P`或`Cmd + Shift + P`），输入"Reload Window"，选择"Developer: Reload Window"来重启VSCode，并清除缓存。
>
> 3. 确保你的VSCode已经安装了TypeScript插件，并且是最新版本。有时候，TypeScript插件的更新可能会修复一些问题。
>
> 4. 确保你的项目根目录下包含了正确的`tsconfig.json`文件，并且其中配置了正确的类型声明文件路径。
>
> 5. 确保你的项目中已经正确安装了`@types/element-plus`类型声明包。
>
> 6. 尝试关闭VSCode，删除项目根目录下的`node_modules`目录和`package-lock.json`（或`yarn.lock`）文件，然后重新运行`npm install`或`yarn install`重新安装依赖。
>
> 如果你尝试了上述方法仍然无法解决问题，可以尝试在VSCode中打开另一个TypeScript文件，然后再切换回你的目标文件，有时候这样能够刷新缓存并解决问题。
>





