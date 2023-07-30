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





## 使用vueX 接收信息-  组件触发事件

使用了vuex ， vuex所在文件夹 store, 建立子文件夹去对应所要开发的组件（store）， 在组件中将信息发送出去， 触发patch， 子模块的actions函数

```ts
import { Module } from 'vuex'
// 表示为 vuex的子模块

// import { IAccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'

// 第一个参数为此模块的state数据类型， 第二个为根模块的state数据类型
const loginModule: Module<ILoginState, IRootState>
```

**// 第一个参数为此模块的state数据类型， 第二个为根模块的state数据类型**
**const loginModule: Module<ILoginState, IRootState>**





## 组件响应绑定

```ts
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
```



currentTab 默认设置为account, 需要为每个tab设置name属性， el-plus内部为我们识别当前tab，并绑定当前所在页面， 每个组件的tab下的文本框都绑定来了一个ref相应属性，获得该实例对象



需对其进行类型声明， 并获得该实例组件对象

```ts
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
```



通过结合currentTab当前值，去触发不同的逻辑

```ts
    const handleLoginClick = () => {
      // 判断当前 currentTab 是哪个标签
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phoneRef调用loginAction')
      }
    }
```



## 💓🐟 转换策略 -  直接看视频 跟代码- 

### 原码 比对-  学会逻辑   35-	1:30





### 设置全局接口的办法

<img src="vue3-CMS.assets/image-20230725025331630.png" alt="image-20230725025331630" style="zoom:67%;" />



## 登录逻辑的异步处理



```ts
async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
```



> 在这个代码片段中，使用`await`关键字是因为`accountLoginRequest(payload)`是一个异步函数。在JavaScript中，使用`async/await`是一种处理异步操作的便捷方式，它可以帮助我们更清晰地编写和处理异步代码。
>
> `async/await`是ES2017引入的一种异步编程模型。通过将`async`关键字添加到函数声明前，函数就变成了一个异步函数，表示这个函数可能包含异步操作，其中的某些操作需要等待结果。
>
> 在这个例子中，`accountLoginAction`函数是一个异步函数，它执行登录逻辑。在这个函数中，调用`accountLoginRequest(payload)`发起登录请求，这是一个异步操作，会返回一个Promise对象。
>
> 通过使用`await`关键字，可以等待`accountLoginRequest`异步操作的结果。当使用`await`关键字调用一个返回Promise对象的函数时，JavaScript会暂停函数的执行，直到Promise对象状态变为`resolved`（已解决）或`rejected`（已拒绝）。一旦Promise对象状态变为已解决，`await`表达式就会返回Promise对象的解决值。
>
> 在这里，`await accountLoginRequest(payload)`会等待登录请求的结果，并将结果赋值给`loginResult`变量。然后，通过`loginResult.data`获取登录结果的数据，包括`id`和`token`，并将`token`存储到Vuex store中，以及使用`localCache`工具将`token`缓存到本地。
>
> 使用`async/await`可以使异步代码看起来更像同步代码，增强代码的可读性和可维护性。它避免了回调地狱（callback hell）的问题，并使错误处理更加直观。



## proxy代理绕过  同源策略

```ts
module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
```

> 在这个代码片段中，使用了代理来绕过同源策略。同源策略是一种安全机制，限制了一个网页上的脚本如何与另一个源（域、协议或端口）的资源进行交互。同源策略的目的是防止恶意网站获取用户的敏感数据或进行未经授权的操作。
>
> 然而，有时候我们需要在前端代码中访问不同源的服务器接口，这就会受到同源策略的限制。为了绕过同源策略，可以使用代理来将前端请求转发到目标服务器，并在代理服务器上处理跨域请求。
>
> 在这个代码片段中，使用了webpack的`devServer`配置中的`proxy`选项来设置代理规则。具体解析如下：
>
> 1. `'^/api'`: 这是一个正则表达式，用来匹配请求URL中以`/api`开头的部分。例如，对于请求`/api/login`，这个规则就会匹配上。
>
> 2. `target: 'http://152.136.185.210:5000'`: 这是目标服务器的地址，所有匹配到的请求将被转发到该地址。也就是说，所有以`/api`开头的请求都会被转发到`http://152.136.185.210:5000`这个服务器上。
>
> 3. `pathRewrite: { '^/api': '' }`: 这是对请求路径进行重写的设置。在这里，将请求路径中的`/api`部分替换为空字符串，即将`/api`从请求路径中移除。例如，对于请求`/api/login`，经过重写后变为`/login`，这样请求就不再带有`/api`前缀了。
>
> 4. `changeOrigin: true`: 这是一个布尔值，用于控制是否改变请求头中的`Host`字段为目标服务器的域名。设置为`true`表示将请求头中的`Host`字段修改为目标服务器的域名，这在某些情况下可能是必要的。
>
> 通过以上配置，当前端发起一个以`/api`开头的请求时，Webpack Dev Server会将该请求转发到`http://152.136.185.210:5000`这个服务器上，并且将请求路径中的`/api`前缀去掉。这样就绕过了同源策略，从而可以在前端代码中访问不同源的服务器接口。



**Request - 内 config.ts  =>  BASE_URL = /API**



### 异步逻辑处理

login定义- 类型

```ts
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
```



### 封装请求Login 请求并返回

```ts
import hyRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}


```

表示post<IDataType<ILoginResult>>， 接受的对象类型， 将用户表信息发送



## 请求标识代码解析

```ts
export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

```



```ts
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
```

**post<IDataType<ILoginResult>>** 表示返回参数内置 声明参数， 传入时，声明所得到的data的数据类型





类型 json-ts， 将类型转化为类型， 用于ts提前声明， 如不同用户具有不同信息





## 使用枚举保存常量- type.ts文件

可以直接使用，作为请求的路径， 变量添加的形式

```ts
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
```



## 登录逻辑实现完毕

一个点击， 通过网络接口获取该用户的信息， 权限信息， 用户菜单， 再调到登录界面， 同时设置localStorage缓存

```ts
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
```



## 根路径设置为main路径，再添加路由守卫

```ts

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

```

如果没有token时， 返回主页面，进行账户登录





如果页面已经进入main路径， 用户使用了刷新， vueX已保存的信息会消失

在Store根模块，将此函数导出（子模块定义的函数）



```ts

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

```

在vueX封装此函数， 在main.ts,导入， 当用户刷新时自动执行，



## 刷新 本地Local数据提取 - 详细函数

```ts
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
```

在网页进行刷新后， 防止vueX的数据消失， Action重新提取LocalStorage信息， 触发mutations，相当于重新设置VueX , 从本地提取，一般有token的情况下，就有其它类似数据





# 🔺✨ day26 -  15点20分



# 进度六



## vueX  优化- 

vueX 对Ts支持较差， 如果直接使用useStore，里面类型不可取，无法取到子模块的state类型，所以为了让子模块- 登录获取的state内部信息可取

```ts
import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule

```

> 在Vuex中，如果你使用TypeScript（Ts）来定义和管理状态（state），可能会遇到一些类型推断方面的挑战，特别是涉及到子模块的状态类型。使用`useStore`时，其类型定义可能无法直接获取子模块的状态类型。
>
> 为了解决这个问题，你可以使用`IRootWithModule`和`IStoreType`这部分代码。让我们逐步解释：
>
> 1. `IRootState`: 这是定义根模块（Root Module）的状态类型的接口。在这里，你定义了`name`和`age`两个属性的类型。
>
> 2. `IRootWithModule`: 这是定义包含子模块的根状态类型的接口。在这里，你引入了一个名为`login`的子模块，并将其状态类型定义为`ILoginState`。这样，`IRootWithModule`接口包含了`login`子模块的状态类型。
>
> 3. `IStoreType`: 这是整个Vuex store的状态类型的合并接口。通过使用`IRootState & IRootWithModule`，将根模块的状态类型和子模块的状态类型合并成一个完整的状态类型。这样，`IStoreType`可以同时访问根模块和子模块的状态类型，从而让你能够获取子模块的状态信息。
>
> 例如，假设你有一个名为`login`的子模块，它有一个名为`userInfo`的状态属性。通过使用`IStoreType`，你就可以在使用`useStore`获取store实例时，访问和获取`login`子模块的`userInfo`状态的类型，而不会出现类型错误。
>
> 总的来说，使用`IRootWithModule`和`IStoreType`这部分代码是为了让子模块的状态类型在使用`useStore`时可取，并解决VueX对TypeScript支持较差的问题，从而更好地利用TypeScript的类型推断和类型安全性。



## -vueX 模块 代码解析

```ts
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

```

导入两个types的作用， 第一个为声明根模块 state类型声明， 第二个为导入定制的useVuxStore方法， 这个作用是访问store时， 在main组件进行访问store时， 可以访问到根组件信息， 也能访问到 login组件的state信息， 因为IstoreType相当于做了一个类型合并， 将根模块和login子模块组件的state数据合并



**export type IStoreType = IRootState & IRootWithModule**

相当于对store类型进行重构， state的类型为IrootState, 内部类型为 login: ILoginState类型， 所以在访问数据时， 会有类型提示



> 你的说法是正确的，让我们来对代码进行解析：
>
> 1. `import { IRootState, IStoreType } from './types'`: 这行代码导入了你之前定义的`IRootState`和`IStoreType`，这两个类型在上面的代码片段中已经解释过了。`IRootState`用于声明父组件的状态类型，而`IStoreType`是通过合并根模块和子模块的状态类型得到的最终的Vuex store的状态类型。
>
> 2. `const store = createStore<IRootState>({...})`: 这行代码创建了一个VueX的store实例。在`createStore`函数中，你传入了一个泛型参数`IRootState`，用于指定根模块的状态类型。在`state()`方法中，你定义了根模块的初始状态，包含了`name`和`age`属性。
>
> 3. `modules: { login }`: 这里通过`modules`选项将`login`子模块添加到了根模块中。
>
> 4. `export function setupStore() {...}`: 这是一个辅助函数，用于在Vue应用程序启动时调用，来执行一些初始化操作。在这里，你调用了`store.dispatch('login/loadLocalLogin')`，这个操作可能是为了加载本地缓存中的登录信息。由于你使用了模块化的store结构，所以需要通过子模块的namespace来调用对应的action，即`login/loadLocalLogin`。
>
> 5. `export function useStore(): Store<IStoreType> {...}`: 这是一个自定义的`useStore`函数，它返回一个经过泛型指定为`Store<IStoreType>`类型的`vuex` store实例。在这里，`useVuexStore()`是VueX提供的原生函数用于获取store实例。通过在`useStore`函数中指定返回类型为`Store<IStoreType>`，你确保了在Vue组件中使用`useStore`时，可以访问到根模块和子模块的状态信息，从而能够获取到完整的状态类型。
>
> 总的来说，这些代码确保了在Vue组件中使用`useStore`函数获取的store实例的类型是经过合并的，包含了根模块和子模块的状态信息。这样，在使用store时，你可以访问到父组件和子组件的状态信息，从而更方便地管理和操作全局状态。



## 对菜单信息进行获取

```ts
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'


setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
```





## Pinia（Vue3 状态管理库）

> Pinia是一个状态管理库，是为Vue 3开发的下一代状态管理解决方案。它由Vue.js核心团队推荐，并且旨在为Vue开发者提供更简单、更强大和更类型安全的状态管理工具。
>
> 与传统的Vue状态管理库（如Vuex）相比，Pinia在设计上有一些不同之处：
>
> 1. 基于Vue 3：Pinia是专门为Vue 3设计的，充分利用了Vue 3的新特性和生态系统。因此，使用Pinia需要在Vue 3项目中使用，无法在Vue 2项目中使用。
>
> 2. 更简单的API：Pinia的API设计非常简洁和直观，易于学习和使用。它提供了一组清晰的API，使状态的定义、修改和访问变得更加直观和自然。
>
> 3. 更强大的类型支持：Pinia是完全支持TypeScript的，它提供了更强大的类型定义和类型推断功能。这使得在使用TypeScript开发Vue应用时，可以更轻松地定义和管理状态的类型，从而提高代码的安全性和可维护性。
>
> 4. 状态分割：Pinia支持将状态划分为多个模块，使得大型应用程序的状态管理变得更加灵活和可扩展。
>
> 5. 插件系统：Pinia具有灵活的插件系统，允许开发者轻松地扩展其功能，并与其他库进行集成。
>
> 总的来说，Pinia旨在提供一个优雅而强大的状态管理解决方案，使Vue开发者能够更轻松地管理和共享状态，并提供更好的开发体验。如果你使用Vue 3，并且希望拥有更好的状态管理功能和类型支持，那么Pinia是一个值得考虑的选择



##  vuex - typescript  => pinia

> 在你的提问中，你提到了从Vuex到Pinia的迁移，从TypeScript到Pinia。让我解释一下：
>
> 1. Vuex到Pinia的迁移：Vuex是Vue.js官方推荐的状态管理库，而Pinia是由Vue.js核心团队推荐的下一代状态管理库。Pinia提供了更简单、更强大和更类型安全的状态管理解决方案，同时它也支持Vue 3的新特性和生态系统。如果你正在从Vuex迁移到Pinia，你可以按照Pinia的官方文档和迁移指南来进行迁移，以便更好地利用Vue 3和Pinia的优势。
>
> 2. TypeScript到Pinia：在Vue 3中，由于其使用了TypeScript来重写代码，对于使用TypeScript的开发者来说，与Vue 2相比，Vue 3提供了更好的类型支持和类型推断。而Pinia作为Vue 3的状态管理库，天然支持TypeScript，并且提供了更强大的类型定义和类型推断，使得在使用TypeScript开发Vue应用时，能够更轻松地定义和管理状态的类型，从而提高代码的安全性和可维护性。
>
> 总的来说，从Vuex到Pinia的迁移可以带来更好的性能和开发体验，而TypeScript对于Vue 3和Pinia的使用也提供了更强大的类型支持，让你在开发过程中更加舒心和自信。在迁移过程中，确保按照官方文档和指南进行操作，以确保平稳完成迁移，并充分利用Pinia和TypeScript的优势来优化你的Vue应用





## 💓🐟测试- 用postMen 想学 并进行测试 



## 能导入i标签跟elementplus- index.tss有关系

```ts
main.ts
import 'element-plus/lib/theme-chalk/index.css'

//在main组件中
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
```







## 🔺✨  使用el-plus的界面布局设计

采取的布局是- 左侧边栏， 右头部， 下部内容

aside- 侧边栏 - header-右头部- container内容

并导入子组件，分别位于aside（功能权限  对应菜单渲染）， header有执行侧边栏收缩按钮



主要逻辑 ： header图标可点击， emit触发父组件信息，emit再将布尔值传入侧边栏， 通过此布尔值，侧边栏组件进行接收collapse, collapse 默认为false(不折叠)， 菜单属性有collapse这个属性， 当传入为true时，收缩



菜单细节问题：需要为每个菜单赋予index值（需是字符串，为number时需要为其加“ ”拼接转换为 字符串）， 标识为唯一，能正确识别当前所处菜单， 才可对其样式进行处理，如选中时高亮等其他处理



userMenus此为登录时已经返回的菜单信息， 已被存储于 vueX-login下的state中， 此部分也代表着 用户的功能权限，在组件中 用 computed属性导入（响应式）

 const userMenus = computed(() => store.state.login.userMenus)





```ts
   <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <!-- 传入折叠布尔值 -  -->
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">悟律的后台冲冲</el-main>
      </el-container>
    </el-container>
```







## RBAC， 角色访问控制

> RBAC（Role-Based Access Control）是一种**基于角色的访问控制模型**，用于管理和控制系统中的资源访问权限。在RBAC模型中，权限控制是根据用户的角色来进行的，而不是直接给予每个用户具体的权限。这样可以简化权限管理，并提高系统的安全性和可维护性。
>
> RBAC模型包含以下几个核心概念：
>
> 1. 角色（Role）：角色是一组相同权限的用户的集合。每个角色代表了一类用户，例如管理员、普通用户、访客等。
>
> 2. 用户（User）：用户是系统中的具体个体，每个用户可以被分配到一个或多个角色。
>
> 3. 权限（Permission）：权限是对系统资源的访问权限，例如访问某个功能、查看某个页面等。
>
> 4. 分配（Assignment）：分配是将用户与角色关联起来，即将某个角色分配给某个用户，从而赋予用户相应的权限。
>
> 5. 继承（Inheritance）：继承是指角色之间可以相互关联并继承权限。例如，一个角色可以继承另一个角色的权限。
>
> RBAC模型的核心思想是将权限的管理从用户层面抽象到角色层面，通过给角色分配权限，再将角色分配给用户，来实现对用户访问权限的控制。这样做的好处是可以简化权限管理，降低系统复杂性，并且在需要修改权限时，只需要调整角色与权限的关系，而不必逐个修改每个用户的权限。
>
> RBAC模型在许多系统中广泛应用，特别是在企业级应用和系统中，用于管理复杂的用户权限和访问控制需求。它是一种成熟且高效的访问控制策略，有助于保护系统的安全性和完整性。





## 🔺✨ 添加路由三种方法   36-   2:20 -2:30

<img src="vue3-CMS.assets/image-20230725231533893.png" alt="image-20230725231533893" style="zoom:80%;" />



第一种是为main组件添加所有子组件，写死，或许界面能隐藏部分组件显示按钮， 但是当用户在url直接进行输入，能看到未属于自身该有的权限 组件



第二种添加方式： 如枚举方式， 为角色添加对应组件映射

vue-router加载， 这种保证角色获得的组件唯一， 但是有缺陷  当新增角色时， 需要生成枚举类型



第三种： （两种）

- 一种是后端给出的数据中，菜单属性中有对应的加载 组件名称，需要求前端编写时， 以这种匹配时要保持名称路径的一致
- 另外一种- 课程所应用的为： url，每个菜单含有对应的url属性， 通过在路由中通过路由



## coder_why老师 自动化生成代码

组件和路由映射快速生成

<img src="vue3-CMS.assets/image-20230726000148404.png" alt="image-20230726000148404" style="zoom:67%;" />



会自动生成- views下  路径/组件，再将此路径匹配到routers 添加映射关系



<img src="vue3-CMS.assets/image-20230726000649025.png" alt="image-20230726000649025" style="zoom:80%;" />



### 路由路径生成- 代码解析



```ts
const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')
export default {
  path: '/main/analysis/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: []
}

```

**这是一个路由routes, 可在主路径中，添加此routes，相当于拥有此路径， 动态权限组件， 就是进行匹配，将url同这个path进行匹配， 有该url就对当前组件进行注册**



> 是的，你理解得很正确！
>
> 这个路由配置代码表示一个路由对象，它描述了一个路径为 `/main/analysis/dashboard` 的路由。在 Vue Router 中，路由配置对象用于描述页面的路径、名称以及对应的组件。
>
> 具体解释如下：
>
> 1. `const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')`：这里使用动态导入的方式来引入 `dashboard` 组件。动态导入的语法是 `() => import('组件路径')`，它是异步加载组件的方式，可以实现按需加载，提高应用的性能。
>
> 2. `export default { ... }`：这是一个默认导出的对象，表示一个 Vue Router 的路由配置。在这里，它描述了一个路径为 `/main/analysis/dashboard` 的路由。
>
> 3. `path: '/main/analysis/dashboard'`：表示这个路由对应的路径是 `/main/analysis/dashboard`。
>
> 4. `name: 'dashboard'`：给这个路由设置一个名称为 `dashboard`，可以在代码中使用这个名称来进行路由导航。
>
> 5. `component: dashboard`：表示这个路由对应的组件是 `dashboard`，即上面动态导入的组件。
>
> 6. `children: []`：这个路由没有子路由，所以是一个空数组。
>
> 在主路径中添加这个路由配置，相当于告诉 Vue Router，当用户访问 `/main/analysis/dashboard` 这个路径时，要渲染 `dashboard` 组件。同时，你可以根据后端提供的菜单数据来动态生成类似这样的路由配置，从而实现根据菜单权限来动态加载组件和配置路由。这样做可以实现前端的权限控制，使用户只能访问具有权限的页面。



# day27 - 18点20分

# 进度七



## 面试要领

候机法则-   聊天- 沟通 -  技巧-  扩展



##    所有路由组件导入

```ts

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
```



这里使用require.context获取一个上下文对象，并且内部有keys()放回，返回的所匹配到的模块路径, 这个路径是相对路径，如在main下, 会显示为 **./ system/xx.ts**, 所以在这里要以spilit对其进行分割， 并取下标为1的 xx， 再进行拼接，获取模块

再将各模块规则进行导入（routes），用push导入， 相当于现在的allRoutes获得了所有main下的组件routes， 如果此时将规则增加给 vue-router则拥有所有访问权限



allRoutes.push(route） 和 ..(route.defalut)， 二者没区别， 但是常用语route.default更直观表示了模块的默认导出



**context内部结构**

> 在使用 `require.context` 时，会得到一个上下文对象，这个对象内部包含了匹配到的模块信息。上下文对象具有以下属性：
>
> 1. `resolve`：一个函数，用于获取模块的绝对路径。
> 2. `keys`：一个函数，用于获取所有匹配到的模块的路径数组。
> 3. `id`：一个字符串，表示上下文模块的唯一标识符。
> 4. `default`：一个函数，用于获取默认导出的模块。
> 5. `context`：一个函数，用于获取匹配到的模块。
> 6. 匹配到的模块路径：作为上下文对象的属性，每个匹配到的模块路径都指向对应的模块。
>
> 举个例子：
>
> 假设在目录 `./modules` 下有两个文件：`a.ts` 和 `b.ts`。我们使用 `require.context` 来获取这两个文件：
>
> ```javascript
> const context = require.context('./modules', true, /\.ts/)
> ```
>
> 上下文对象 `context` 的结构如下：
>
> ```javascript
> {
>   resolve: Function,
>   keys: Function,
>   id: './modules sync \\.ts$',
>   default: Function,
>   context: Function,
>   './a.ts': ModuleA,
>   './b.ts': ModuleB
> }
> ```
>
> 其中，`ModuleA` 和 `ModuleB` 表示分别匹配到的模块内容。这些模块内容会根据匹配到的路径作为属性，存放在上下文对象内部。这样，在使用 `keys()` 方法时，就能够根据路径获取对应的模块。例如，`context('./a.ts')` 将返回 `ModuleA`，`context('./b.ts')` 将返回 `ModuleB`。





## 💓🐟bug 重现 - 一级路径需要命名

添加动态路由时

```ts
  {
    // 路径需要为其添加名字
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  
  
 const routes = mapMenusToRoutes(userMenus)
     //逐一遍历添加进规则- mainChildren
   routes.forEach((route) => {
   router.addRoute('main', route)
  })
```

​	

**添加路由时， children， 一个参数为路径名， 如在main下添加其children， 标识子路径，路径需要存在 且命名， 否则会识别为根路径直接跳转， demo中已犯过这次错误**



## 🔺✨ 动态路由权限配置- 思路理清

定义函数， 将所有组件（最高权限时所拥有的配置，全部功能模块）路由加载规则，全部注册在RouteRecordRaw



### **mapMenusToRoutes 函数 - 动态分配路由权限**

1.找到所有路由路径配置模块 并进行注册

使用到require这个函数，webPack自带函数，require.context去指定路径递归查找，三个参数（路径， 递归查找（boolean）, / \\.ts /(文件类型- 正则表达式) ），返回对象， 通过keys() 获取所匹配到 包含模块路径的数组， 但是路径是 相对路径，需要用split对其进行分割， 拼接为完整路径， 用require导入所有模块， 最后将模块规则放入allRoutes中

```ts
 // 先加载默认所有routes
  const allRoutes: RouteRecordRaw[] = []
  // 这里使用webpack的require方法执行context 返回上下文
  //  参数解析： 路径， 递归查找（设置为true）， 正则表达式， \转义
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 返回所有路径的方法， 但是需要对相对路径进行分跟 ./system/xx.ts ,以. 分割
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
```



2. **为用户赋值 匹配权限**

根据传入的menus进行匹配 ，遍历，menu路径与已保存Allroutes的进行匹配， 使用find方法， const route = allRoutes.find((route) => route.path === menu.url), 再将匹配到的进行返回， 当为多级菜单时， 进行递归调用

```ts
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        //  应该提前注册所有组件， 一般不可能出现匹配不了的情况
        //  但是当路径写错， 后端新增menu， 前端未更新会导致false
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
```





### 在登陆逻辑处理时匹配用户权限并进行注册组件

使用mapMenusToRoutes， 并对路径规则数组，遍历后注册

​	-有坑， 一级路径需要命名， 否则变成路径跳转

```ts
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 注册动态路由组件
      console.log('注册动态路由组件')
      // 将userMenus -> routes， 数组
      const routes = mapMenusToRoutes(userMenus)
      //逐一遍历添加进规则- mainChildren
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
```



**不能直接赋予整个数组是routes，不进行遍历**

> 你是对的，`router.addRoute` 函数需要将每个路由规则逐个添加，而不是将整个数组直接赋给 `router.main.children`。这是因为 `router.addRoute` 是用来**动态添加单个路由规则**的方法。
>
> 在你的代码中，`routes` 是一个包含多个路由规则的数组，你需要逐个将每个路由规则添加到路由器中。所以你使用了 `forEach` 遍历 `routes`，对每个路由规则都调用了 `router.addRoute('main', route)` 来添加到名为 `'main'` 的路由配置下。
>
> 如果直接将整个数组赋给 `router.main.children`，Vue Router 不会正确解析它，并将其视为单独的路由规则。因此，你需要遍历数组，并将每个路由规则逐个添加到路由器中，确保每个路由规则都被正确解析和添加。这样，当用户点击菜单时，路由器就会根据配置的路由规则正确显示相应的组件。



### 为每个子孙 菜单绑定点击事件 修改Url

功能实现完毕



```
     <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
```

并将当前的subItem传入， 菜单信息进行传入



点击事件： 修改Url, 当前url不存在/未定义时 时， 则not-found

```ts
    //  使用路由
    const router = useRouter()

    // 触发事件， 将当前所点击的菜单信息获取，并修改url
    const handleMenuItemClick = (item: any) => {
      console.log('------')
      router.push({
        path: item.url ?? '/not-found'
      })
    }
```



### 补充 - 优化用户体验

可将默认路径，重定向至main， 当用户登录过，有了缓存数据后（token）， 可直接进入主界面，无需重回登录界面

定义导航守卫， 对初次登录用户（无token）return 至login界面， 当用户手动输入 /main/不存在的路径时， 将其返回至users界面

```ts
//  添加导航守卫
router.beforeEach((to) => {
  if (to.path !== './login') {
    const token = localCache.getCache('token')
    if (!token) {
      return './login'
    }
  }

  console.log(router.getRoutes())
  console.log(to)

  // 这里主要实现 当去达路径 在main下- 当不存在时将其返回user界面
  if (to.path.indexOf('/main') !== -1) {
    if (to.name === 'notFound') {
      to.name = 'user'
    }
  }
})
```



## 37-	1：30核心知识



## "Ant Design Pro"（蚂蚁设计专业版）

> "Ant Design Pro"（蚂蚁设计专业版）很可能是指"Ant Design Pro"（蚂蚁设计专业版），这是一个由蚂蚁金服开发的流行设计系统和前端UI框架。Ant Design Pro 提供了一组预设计的组件、布局和样式，开发人员可以使用它们来构建高效和专业外观的Web应用程序。
>
> Ant Design Pro 基于 Ant Design 系统，后者是由阿里巴巴集团的关联公司蚂蚁金服创建的一种综合性设计语言和组件库。它遵循简约、一致和易用的原则，使开发人员能够轻松创建视觉上吸引人且用户友好的应用程序。
>
> 使用 Ant Design Pro 的一些关键特点和优势包括：
>
> 1. 预设计的组件：Ant Design Pro 提供了大量预先设计的组件，如表单、表格、图表等，大大加快了开发过程。
>
> 2. 自适应布局：该框架提供了自适应布局，可以适应不同的屏幕尺寸和设备，确保在桌面和移动设备上都能实现无缝的用户体验。
>
> 3. 内置主题：Ant Design Pro 提供多种主题和样式，使开发人员可以自定义应用程序的外观和风格，以匹配其品牌或设计偏好。
>
> 4. 集成数据可视化：该框架包括各种数据可视化组件和库，便于创建交互式和信息丰富的图表和图形。
>
> 5. 国际化支持：Ant Design Pro 支持国际化，使开发人员可以构建易于翻译成多种语言的应用程序。
>
> 6. 代码生成：Ant Design Pro 配备了一套命令行工具，用于自动生成页面、组件和路由的代码，进一步简化开发流程。
>
> 总体而言，Ant Design Pro 是一个功能强大且功能丰富的设计系统，可以显著提升构建 Web 应用程序的开发工作流程和用户体验。它在 Web 开发社区中被广泛使用，并拥有庞大和活跃的开发人员和贡献者社区。



## 引用类型需要使用箭头函数return返回

组件设置-  当子组件的props接收数据时， 设置默认值时，需要使用return返回， 防止  ->     当不设置return（重新生成实例）， 如果在一个父组件对该属性进行修改时， 会修改所有引用该组件的组件

 

```ts
    itemStyle: {
      type: Object,
      // 对象或数组类型 使用默认值 需要使用箭头函数- 否则会出问题
      default: () => ({ padding: '10px 40px' })
    },
```



> 在 Vue 组件中，如果 `props` 的默认值是一个对象或数组，使用箭头函数作为默认值是为了避免在多个组件实例之间共享同一个对象或数组的引用。
>
> 考虑以下情况：
>
> 假设有两个父组件，分别使用了相同的子组件，并且在使用子组件时，没有显式地传递 `itemStyle` 属性：
>
> ```html
> <!-- 父组件1 -->
> <template>
>   <div>
>     <my-form />
>   </div>
> </template>
> 
> <!-- 父组件2 -->
> <template>
>   <div>
>     <my-form />
>   </div>
> </template>
> ```
>
> 子组件 `MyForm` 声明了一个 `itemStyle` 的 `props`，默认值为一个对象：
>
> ```javascript
> props: {
>   itemStyle: {
>     type: Object,
>     default: () => ({ padding: '10px 40px' })
>   }
> }
> ```
>
> 由于默认值是一个函数，每次创建新的 `MyForm` 实例时，都会调用该函数来创建一个新的对象作为 `itemStyle` 的默认值。这样，每个 `MyForm` 实例都会拥有自己独立的 `itemStyle` 对象，不会共享同一个引用。
>
> 如果默认值是一个普通对象而不是函数，那么多个 `MyForm` 实例之间将共享同一个对象引用。这可能导致一个实例修改了 `itemStyle` 对象，其他实例的 `itemStyle` 也会受到影响，从而引发意外的错误和副作用。
>
> 因此，使用箭头函数作为 `props` 默认值，能够保证每个组件实例拥有独立的对象或数组，避免不必要的副作用和错误。



## v-bind, 语法糖，传入为对象或属性内部处理

如果传入的是对象，可以直接使用语法糖，要赋值的属性名一致时

**v-bind = "collapse",   等价于   :collapse = "collapse"**



如果传入的是对象， 内部会自动解析， 一 一赋值 

v-bind="item.otherOptions"

> 对的，你说得没错。在 Vue 中，使用 `v-bind` 或简写的 `:` 时，可以将一个对象作为参数传递，Vue 会自动解析这个对象，并将其属性一一赋值给对应的组件属性。
>
> 在代码片段中的这个地方：
>
> ```html
> <el-input
>   :placeholder="item.placeholder"
>   v-bind="item.otherOptions"
>   :show-password="item.type === 'password'"
> />
> ```
>
> `v-bind="item.otherOptions"` 将会将 `item.otherOptions` 这个对象中的所有属性都传递给 `el-input` 组件。这样做的好处是可以简化代码，避免手动一个个属性进行赋值。如果 `item.otherOptions` 包含了 `el-input` 组件所需的所有属性，那么可以直接传递整个对象。
>
> 这样的语法非常方便，尤其在传递大量配置选项时，可以让代码更简洁易读。不过需要确保 `item.otherOptions` 的属性和 `el-input` 组件的属性是匹配的，否则可能会导致意外的错误。



### 遍历元素， 需使用动态绑定

能理解为如果遍历中 ， 使用普通绑定， 只能使用第一次传入得值， 是因为静态绑定的值在初次传递时已经固定无法更改

​	

> 是的，你的理解是正确的。
>
> 在遍历中使用普通绑定，会导致静态绑定的值在初次传递时已经固定，无法更改。这是因为在遍历时，每个子组件会复用同一个 prop 值，而不会根据遍历项的不同来动态更新。所以，所有子组件都会使用第一次传递的 prop 值，导致它们之间的数据相互覆盖，无法实现独立的数据绑定。
>
> 而使用动态绑定 `:propName="item.data"`，会使每个子组件根据当前遍历项的值动态生成不同的 `propName` 值，从而确保每个子组件都有自己独立的数据绑定。这样，子组件之间的数据就不会相互影响，每个子组件都可以独立地维护自己的数据状态。





## 高级组件封装

主要思路： 对搜索表格进行一个封装



这部分内容， 对搜索表单进行一个抽取， 作为一个模板组件， 接收由父组件（使用者）传递而来的数据（config），内部进行解析

1. labelWidth， 文本宽度
2.  colLayout   单行分布数， 24/x ， 有默认值， 为相应数据- 识别像素分布
3. 最基本的label ， 表格类型- input password  select datepicker, 在遍历中， 内部设置多个template进行  逻辑判断渲染



涉及面经特点：父组件- 再次进行组件封装- , 将配置信息抽取出去， 在直接以import形式导入



### Config:   配置文件

> ```ts
> // 使用联合联合类型声明
> 
> type IFormType = 'input' | 'password' | 'select' | 'datepicker'
> 
> export interface IFormItem {
>   type: IFormType
>   label: string
>   rules?: any[]
>   placeholder?: any
>   // 针对select
>   options?: any[]
>   // 针对特殊的属性
>   otherOptions?: any
> }
> 
> export interface IForm {
>   formItems: IFormItem[]
>   labelWidth?: string
>   colLayout: any
>   itemLayout: any
> }
> 
> ```
>
> 



### 代码解析

```ts
    formItems: {
      // vue3兼容性- 为prop属性设置 proType- 类型断言
      type: Array as PropType<IFormItem[]>,
      // 默认需要使用函数返回， 使得父组件引用为 专属的实例对象
      default: () => []
    },
```

默认： default 函数导出， 懂~ 	

​    type: Array as PropType<IFormItem[]>

​	类型断言： **声明数组类型**



### 函数-	加下划线_， 表示意义

 // 加下划线_表示内部辅助函数_ 内有递归处理，不适用于外部



# day28   7.28  - 20点

# 进度八



## 💓🐟进度七遗留bug



正确顺序：

刷新后 - 

 **先setup去重注册Router（**刷新重新注册路由， path路径恢复 ）**App.use(Router)（ **  **匹配路由**  所有已注册完毕）



> 刷新后， 页面跳转至 notFound， 跟 setupStore函数调用顺序有关
>
> 原先为app.use(Router),  排序在setup前（刷新重新获取数据- 并去触发方法  注册路由）
>
>  需要 将注册路由（动态权限） 提前在useStore前， route的正确转发 ， 需要路由注册完毕， 才能实现跳转



<img src="vue3-CMS.assets/image-20230728201323942.png" alt="image-20230728201323942" style="zoom:67%;" />





## 混淆概念- Router- route

Router: 为路由实例（将所有route路由串联者）， 可通过其进行编程导航， 导航至指定Route

Route： 当前所在路由， 能获取当前路由信息， params, path等信息



> 您的理解是基本正确的，但我稍作补充：
>
> 1. Router（路由器）：
>    - 路由器是 Vue Router 的核心部分，负责整个路由的管理和控制。
>    - 它包含了所有定义的路由规则（Route）和路由状态，是所有 Route 的管理者。
>    - 通过 Router，您可以进行编程式导航，例如使用 `router.push` 或 `router.replace` 等方法导航到指定的路由。
>
> 2. Route（路由）：
>    - 路由是 Vue Router 中的一个重要概念，表示当前所在的路由。
>    - 每当 URL 发生变化时，路由器会根据配置的路由规则匹配到相应的 Route，并将其激活，然后在组件中进行渲染。
>    - 路由包含了当前路由的信息，例如路由路径（path）、参数（params）、查询参数（query）等。
>    - 在组件中，您可以通过 `useRoute` Composition API 函数访问当前 Route 的信息。
>
> 综上所述，Router 是路由的管理者，负责整个路由的配置和导航控制；而 Route 则是当前所在的路由，包含了当前路由的信息，可以在组件中访问和利用这些信息。使用 Router 的导航方法，您可以将应用程序导航到指定的 Route，实现页面的跳转和切换。

### useRouter - useRoute

> `useRoute` 和 `useRouter` 是 Vue Router 提供的两个 Composition API 函数，用于在 Vue 3 中更方便地访问当前路由信息和路由实例。
>
> 1. `useRoute`：
>    - `useRoute` 函数用于在组件中访问当前路由的信息。
>    - 它返回一个包含当前路由信息的响应式对象，包括 `path`、`params`、`query`、`hash` 等路由信息。
>    - 当前路由信息会随着路由的变化而更新，因此组件中使用的数据会自动响应路由的变化。
>    - 使用示例：
>      ```javascript
>      import { useRoute } from 'vue-router';
>           
>      export default {
>        setup() {
>          const route = useRoute();
>           
>          // 使用当前路由信息
>          console.log('当前路由路径：', route.path);
>          console.log('当前路由参数：', route.params);
>          console.log('当前路由查询参数：', route.query);
>           
>          return {};
>        },
>      };
>      ```
>
> 2. `useRouter`：
>    - `useRouter` 函数用于在组件中访问路由实例，可以通过该实例进行编程式导航。
>    - 它返回当前路由的路由实例，通过这个实例，我们可以使用诸如 `push`、`replace` 等方法进行页面导航。
>    - 使用示例：
>      ```javascript
>      import { useRouter } from 'vue-router';
>           
>      export default {
>        setup() {
>          const router = useRouter();
>           
>          // 编程式导航示例
>          const handleButtonClick = () => {
>            router.push('/some-route'); // 导航至 '/some-route'
>          };
>           
>          return {
>            handleButtonClick,
>          };
>        },
>      };
>      ```
>
> 使用这两个 Composition API 函数可以让我们更方便地在 Vue 3 中处理路由相关的逻辑，并且能够更好地利用 Composition API 的特性来组织和管理代码。 





# 💓🐟侧边栏 刷新优化

## 刷新  重定向至原访问菜单

主要思路： 

nav-Bar组件中， 不能将default-active写死，导致默认重定向固定

 需要使用动态传入， 为每个菜单赋予其特有 Menu.id值（后端已提供）



### 为 菜单 绑定 特定的Menu ID



1.  **获取当前菜单**

对二级菜单的递归查询， type为1 

 currentPath传入， 遍历路由，进行url比对 获取对应的Menu

出口为 type === 2, url&&CurrentPath比对成功返回

​		**递归**多级菜单-> 从内部到外层 

menu.children ?? []  当传入的menu无Children， 将空数组赋值，匹配不上



```ts

export function pathMapToMenu(userMenus: any, currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      // 进行遍历获取匹配， 将当前路径与菜单信息 进行比对
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    }
    // 此部分是为 无子菜单的  菜单逻辑判断，返回本身，
    // 在此案例中，作为递归的调用出口
    //  遍历至子菜单时， 将菜单Menu 进行返回
    else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

```



2. **对应ID 绑定，为每个子菜单绑定 default-active**

```ts

<el-menu  :default-active="defaultValue"   el-menu>

    // 路由规则
    const route = useRoute()
    const currentPath = route.path

    // data , 传入时 应将ref属性的value值传入
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')
    
    return {
    	...
    	defaultValue
    }

```





## 解决Main刷新  页面显示失败-  无ID

因为为菜单绑定了MenuId, 但是当直接访问main路径时， 会先进行渲染 Nav-menu, 但是当前的path- 是在main路径下，  并不存在 Menu，会报错



因为刷新  与初次 无选菜单一致， currenPath都为 Main, 它无法进行匹配，menu.id

​		此时 的 default active 无值， 侧边栏显示不出  页面无显示 （报错）

> ```ts
> const currentPath = route.path
> 
>   // data , 传入时 应将ref属性的value值传入
> 
>   const menu = pathMapToMenu(userMenus.value, currentPath)
> 
>   const defaultValue = ref(menu.id + '') //需为字符串形式
> ```



### 为to- Main, 重定向至第一个子菜单

FirstMenu的获取， 在初次赋予权限（组件）时，进行逻辑判断赋值

>   **map-menus**   遍历赋值初始子菜单

> ```ts
> 
> 	const _recurseGetRoute = (menus: any[]) => {
>     for (const menu of menus) {
>       if (menu.type === 2) {
>         const route = allRoutes.find((route) => route.path === menu.url)
>         //  应该提前注册所有组件， 一般不可能出现匹配不了的情况
>         //  但是当路径写错， 后端新增menu， 前端未更新会导致false
> 
>         if (route) routes.push(route)
> 
>         // 将首个Menu进行赋值， 解除main刷新无法导向
>         if (!firstMenu) {
>           firstMenu = menu
>         }
>       } else {
>         _recurseGetRoute(menu.children)
>       }
>     }
>   }
> 
> ```





### 为main重定向至 首个子菜单

```ts
  if (to.path === '/main') {
    return firstMenu.url
  }
```





## 面包屑的封装使用

菜单文本有序获取， 需用到map-menus， 复合函数使用， 将原函数添加剂第三选项参数

（面包屑参数）

获得当前所处的菜单 的父子菜单文本 和 path路径



> 上级菜单 不传入path, 因为其没有 path路径， 当前所处子菜单不生效进行跳转是因为，路径一致所以页面不会重新加载， 可使用window.reload方法进行刷新， 但一般处于当前页面没必要执行刷新功能



​	为原先菜单绑定   后端数据菜单函数中，添加可选参数，面包屑对象数组， 在目标菜单时，进行面包屑文本的获取，使用push添加了上级菜单  和 当前所处菜单的文本和path

```ts

// 为注册映射函数 进行扩展功能， 直接在面包屑函数 进行调用即可
//  获得面包屑文本数组
// 获取面包屑 文本 路径文本
export function pathMapBreadcrumbs(userMenus: any, currentPath: string): any {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any,
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
```



### 面包屑组件的封装使用

```ts
<template>
  <div class="nav-breadcrumb">
    <!-- 面包屑封装
      为遍历面包屑数组，文本 不同组件对应不同文本/aa/xx
    -->
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
})
</script>

<style scoped></style>

```





### 面包屑的使用- computed实现动态变化

这里主要应用到的为： computed返回 breadMenus对象类型数组， 并且它会随路径变化去进行更新

```ts
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      // return 返回为： 面包屑 菜单对象（名字 、 path）
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
```



## 💓🐟38 -  1：30 - 1：43 

讲 v-model， 不建议直接传引用 ， 建议保留单向数据流， 举例子-， 不直接修改父组件

 例子中都为： 父组件传进reactive对象属性， 通过filed识别对应的表格进行赋值， 从而使得id进行绑定， 各数据进行绑定成功 ， 但这种方法都是直接修改父组件，直接修改引用值  进行同步   

比较重点  暂时听 = 度过



## model-value

> `modelValue` 是一个常见的 Vue 组件 props 名称，通常用于实现自定义的双向绑定。在 Vue 3 中，组件可以通过 `v-model` 指令与父组件进行双向数据绑定。当父组件更新 `v-model` 绑定的属性时，子组件的 `modelValue` 属性会自动更新为父组件传递的值；反之，当子组件修改了 `modelValue` 的值时，父组件绑定的数据也会随之更新。
>
> 在使用 `v-model` 进行双向绑定时，可以通过自定义 `modelValue` 和 `update:modelValue` 两个 props 来实现数据的传递和更新。以下是一个使用 `modelValue` 的示例：
>
> ```vue
> // ChildComponent.vue
> <template>
>   <div>
>     <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
>   </div>
> </template>
> 
> <script setup>
> import { defineProps } from 'vue'
> 
> const { modelValue } = defineProps(['modelValue'])
> </script>
> ```
>
> ```vue
> // ParentComponent.vue
> <template>
>   <div>
>     <child-component v-model="value" />
>     <p>Parent Value: {{ value }}</p>
>   </div>
> </template>
> 
> <script setup>
> import { ref } from 'vue'
> 
> const value = ref('')
> </script>
> ```
>
> 在上述代码中，`ChildComponent.vue` 中的 `<input>` 元素使用了 `:value` 绑定 `modelValue`，并在输入时通过 `@input` 事件将新的值传递给父组件，父组件使用 `v-model` 来接收子组件的更新，并更新自己的 `value` 属性。
>
> 总结来说，`modelValue` 是一个用于接收父组件传递数据并实现双向绑定的常见 props 名称。在实际使用中，可以根据需要将其重命名为其他名称，但需要保持 `v-model` 和 `:value` 的对应关系，以确保双向绑定正常工作。







## 违背数据单向流危害

> 直接修改 `props` 可能会导致以下问题：
>
> 1. **数据不同步：** 在 Vue 中，父组件传递给子组件的 `props` 是单向数据流，意味着子组件不能直接修改 `props` 中的数据。如果子组件直接修改了 `props` 的值，可能会导致父组件和子组件之间的数据不同步，破坏了数据的单向流动，使得数据变得不可预测。
>
> 2. **不可追踪变化：** 当组件层级较深时，直接修改 `props` 可能会导致数据变化的来源不可追踪。通过 `props` 和 `emit` 实现双向绑定可以更好地追踪数据的变化和传递，方便调试和维护。
>
> 3. **性能问题：** Vue 中的响应式系统会自动追踪数据的变化并更新 DOM，但是直接修改 `props` 会绕过响应式系统，可能导致组件的更新不被触发，从而引发性能问题。
>
> 4. **可维护性差：** 直接修改 `props` 可能会使代码变得难以维护。在大型应用中，很难跟踪到哪个组件在哪里修改了 `props` 的值，从而增加了代码维护的难度。
>
> 通过使用 `props` 和 `emit`，可以确保数据在父子组件之间保持单向流动，避免了上述问题，并使代码更易于理解、调试和维护。另外，`props` 和 `emit` 遵循了 Vue 的设计原则，使得组件之间的通信更加清晰和可预测。
>
> 



## 展开运算符间接修改父组件数据



父组件传入子组件为对象， 通过新增field标识， Form接收config的类型

```ts
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
```



父组件使用v-model将对象传入， 子组件props接收后使用展开运算符，重新生成对象，将对象转化为响应式后， 赋值给每个标签， 再用watch监听值变换， 再将新值触发传递给父组件， 相等于是自身对象属性（拷贝父组件传递的数据）的变化值传递出去， 从而让父组件的信息改变



**接受父组件传递信息**

```ts
  props: {
    modelValue: {
      type: Object,
      required: true
    },
```



展开运算符，转化为自身对象属性，为各模板表格赋值，

```ts
 emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
     
    return {
      formData
    }
```



为各模板标签赋值， 对象[属性名] 取值  如id， 则取出id: '空字符串'， 与此值双向绑定

```ts
  v-model="formData[`${item.field}`]"
```

 



## 很顶的组件封装

user组件中， 不断抽取而出， 从传入配置， 绑定双向Value， 设置搜索框的顶部文本， 底部按钮， 最后抽取封装为 只需传入配置， 封装为 page - seach,

**组件封装**： 组件复用思想， 相当于 套模板

```ts
<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search-form-config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
```



### 复用组件- Page-Search

使用了 插槽， template 具名插槽

```ts
<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return {
      formData
    }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

```





## hyTable

2.15  -- 3:17



对table一个抽取封装， 封装用户表

​	封装 request 请求， 去请求表单数据 post{ 内可加限制  偏移量 个数 - 分页器}

​		重新生成一个 系统store, 提取数据 并放入其中 并注册    

表格设置

表格数据处理， 插槽- 作用域插槽-  具名插槽 - 属性， 去个性化某一列  



