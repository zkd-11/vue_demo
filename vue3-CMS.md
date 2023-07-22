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







