# Vue 3 企业级项目模板

基于 Vue 3 + TypeScript + Vite 构建的现代化前端项目模板，集成了 Element Plus、Pinia、Vue Router、Tailwind CSS 等主流技术栈，开箱即用。

## 技术栈

- **核心框架**: Vue 3.5+ (Composition API + `<script setup>`)
- **开发语言**: TypeScript 5.8+
- **构建工具**: Vite 6.3+
- **UI 组件库**: Element Plus 2.10+
- **状态管理**: Pinia 3.0+ (支持持久化)
- **路由管理**: Vue Router 4.5+
- **CSS 方案**: Tailwind CSS 4.1+ / SCSS
- **HTTP 请求**: Axios 1.10+
- **代码规范**: ESLint + Prettier + Husky + Lint-staged

## 项目特性

- ✨ 最新的 Vue 3 Composition API 和 `<script setup>` 语法
- 🚀 Vite 极速开发体验，HMR 热更新
- 📦 自动导入 Vue API 和组件，无需手动 import
- 🎨 Element Plus 组件按需自动导入
- 🎯 TypeScript 严格类型检查
- 💾 Pinia 状态持久化支持
- 🌈 Tailwind CSS 原子化 CSS
- 📡 Axios 封装，统一请求拦截处理
- 🔧 多环境配置支持 (dev/test/prod)
- 📝 ESLint + Prettier 代码规范
- 🪝 Git Hooks 自动化代码检查
- 🎭 图标自动导入 (unplugin-icons)

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0

## 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 环境配置

项目支持多环境配置，根据需要修改对应的环境变量文件：

- `.env` - 开发环境默认配置
- `.env.test` - 测试环境配置
- `.env.prod` - 生产环境配置

```bash
# .env 示例
VITE_BASE_URL=https://api.example.com
VITE_BUCKET_URL=https://cdn.example.com
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用

### 构建生产版本

```bash
# 开发环境构建
npm run build:dev

# 测试环境构建
npm run build:test

# 生产环境构建
npm run build:prod
```

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
├── public/                 # 静态资源目录
├── src/
│   ├── assets/            # 资源文件
│   │   └── style/         # 样式文件
│   │       ├── element/   # Element Plus 样式定制
│   │       ├── index.scss # 全局样式入口
│   │       ├── reset.css  # 样式重置
│   │       └── resetElement.scss
│   ├── components/        # 公共组件
│   │   └── Message/       # 自定义消息组件
│   ├── router/            # 路由配置
│   ├── service/           # API 服务
│   │   ├── api/          # API 接口定义
│   │   └── http/         # HTTP 请求封装
│   │       ├── request.ts      # Axios 实例
│   │       └── interceptors.ts # 拦截器
│   ├── utils/             # 工具函数
│   ├── App.vue            # 根组件
│   └── main.ts            # 应用入口
├── .env                   # 环境变量
├── .env.test              # 测试环境变量
├── .env.prod              # 生产环境变量
├── .editorconfig          # 编辑器配置
├── .prettierrc            # Prettier 配置
├── eslint.config.js       # ESLint 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── package.json           # 项目依赖
```

## 开发指南

### 自动导入

项目配置了自动导入功能，无需手动 import：

```vue
<script setup lang="ts">
// Vue API 自动导入
const count = ref(0)
const doubled = computed(() => count.value * 2)

// Element Plus 组件自动导入
// <el-button> 可直接使用

// 图标自动导入
// <icon-ep-edit /> 可直接使用
</script>
```

### 路径别名

使用 `@` 作为 `src` 目录的别名：

```typescript
import { request } from '@/service'
import MyComponent from '@/components/MyComponent.vue'
```

### API 请求

使用封装好的 Axios 实例：

```typescript
import { POST, GET, PUT } from '@/service'

// GET 请求
const data = await GET('/api/users')

// POST 请求
const result = await POST('/api/users', { name: 'John' })
```

### 状态管理

使用 Pinia 进行状态管理，支持持久化：

```typescript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: null
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    }
  },
  persist: true // 开启持久化
})
```

### 消息提示

项目封装了全局消息提示方法：

```typescript
// 在组件中使用
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()!
proxy.$success('操作成功')
proxy.$error('操作失败')
proxy.$warning('警告信息')
proxy.$info('提示信息')

// 或直接导入
import { success, error, warning, info } from '@/components/Message'
success('操作成功')
```

### 代码规范

项目配置了 ESLint 和 Prettier，提交代码前会自动格式化：

```bash
# 手动检查代码
npx eslint src/**/*.{ts,vue,js}

# 自动修复
npx eslint src/**/*.{ts,vue,js} --fix
```

### 构建优化

生产构建时会自动：
- 移除 console 和 debugger
- 代码压缩和混淆
- 静态资源分类输出
- 文件名添加 hash 指纹

## IDE 推荐配置

推荐使用 VS Code 并安装以下插件：

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 语言支持
- [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - Vue 文件 TS 支持
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind 智能提示

### Volar Takeover 模式

为了获得更好的性能，可以启用 Volar 的 Takeover 模式：

1. 在 VS Code 命令面板中运行 `Extensions: Show Built-in Extensions`
2. 找到 `TypeScript and JavaScript Language Features`
3. 右键选择 `Disable (Workspace)`
4. 重新加载 VS Code 窗口

## 常见问题

### 端口被占用

修改 `vite.config.ts` 中的端口配置：

```typescript
export default defineConfig({
  server: {
    port: 3000 // 修改为其他端口
  }
})
```

### 类型声明问题

如果遇到类型声明问题，尝试重新生成类型文件：

```bash
# 删除自动生成的类型文件
rm src/auto-imports.d.ts src/components.d.ts

# 重新启动开发服务器
npm run dev
```

## License

MIT
