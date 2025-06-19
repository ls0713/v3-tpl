import love from 'eslint-config-love'

export default love({
  vue: true,            // 启用 Vue 3 支持
  typescript: true,     // 启用 TypeScript 支持
  environments: ['browser', 'es2021'], // 原 env 中配置
  rules: {
    // 如果你有自定义规则可以放在这里
    // 'no-console': 'warn',
    // 'vue/multi-word-component-names': 'off'
  }
})
