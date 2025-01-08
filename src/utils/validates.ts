/**
 * Created For: validates 表单验证
 * Author: Yeoman.
 * Date: 2020/9/30 17:42
 */
// 手机号校验 由以1开头的11位数字组成
export const validateMobile = (msg = '请输入以“1”开头的11位手机号') => (
  rule: any,
  value: any,
  callback: any
) => {
  const reg = /^1[3-9]\d{9}$/
  if (value) {
    if (!reg.test(value)) {
      callback(new Error(msg))
    } else {
      callback()
    }
  } else {
    callback(new Error('请输入手机号'))
  }
}

// 邮箱
export const validateEmaile = (msg = '邮箱格式不正确') => (
  rule: any,
  value: any,
  callback: any
) => {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (value) {
    if (!reg.test(value)) {
      callback(new Error(msg))
    } else {
      callback()
    }
  } else {
    callback(new Error('请输入邮箱'))
  }
}

// 验证码校验 6位数字
export const validateSMS = (msg = '验证码错误') => (
  rule: any,
  value: any,
  callback: any
) => {
  const reg = /^\d{4}$/
  if (value) {
    if (!reg.test(value)) {
      callback(new Error(msg))
    } else {
      callback()
    }
  } else {
    callback(new Error('请输入验证码'))
  }
}

// 正整数校验，且小于0-999999
export const validateIntNum = (msg = '请填写0-999999之间的整数') => (
  rule: any,
  value: any,
  callback: any
) => {
  const reg = /^[0-9]\d{0,5}$/
  if (value && !reg.test(value)) {
    callback(new Error(msg))
  } else {
    callback()
  }
}

// 正整数校验，且小于 1-999999
export const validateIntNumTwo = (msg = '请填写1-999999之间的整数') => (
  rule: any,
  value: any,
  callback: any
) => {
  const reg = /^[1-9]\d{0,5}$/
  if (value && !reg.test(value)) {
    callback(new Error(msg))
  } else {
    callback()
  }
}

// 校验密码：只能输入8-20个字母、数字、下划线
export const validatePassword = (
  msg = '请输入8-20个字母、数字或特殊字符组合的密码',
  typeMsg = '密码必须包含字母、数字、特殊字符其中两种!'
) => (rule: any, value: any, callback: any) => {
  const reg = /^[\w`~!@#$%^&*()_+-<>?:"{},.;']{8,20}$/
  if (!reg.test(value)) {
    callback(new Error(msg))
  } else if (/^[0-9]{8,20}$/.test(value)) {
    callback(new Error(typeMsg))
  } else if (/^[a-zA-Z]{8,20}$/.test(value)) {
    callback(new Error(typeMsg))
  } else if (/^[_]{8,20}$/.test(value)) {
    callback(new Error(typeMsg))
  } else {
    callback()
  }
}

// 客服电话校验
export const validatePhone = (msg = '请填写正确的客服电话！') => (
  rule: any,
  value: any,
  callback: any
) => {
  if (
    !value ||
    /^400[0-9]{7}/.test(value) ||
    /^800[0-9]{7}/.test(value) ||
    /^1[3-9]\d{9}$/.test(value) ||
    /^0\d{2,3}-?\d{7,8}/.test(value)
  ) {
    callback()
  } else {
    callback(new Error(msg))
  }
}

// 应用倒序排列
export const sortByKey = (array: any,key: any) => {
  return array.sort(function(a: any,b: any){
      var x=a[key];
      var y=b[key];
      return x>y?-1:x<y?1:0;
  });
}
