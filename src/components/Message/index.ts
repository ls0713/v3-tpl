import { ElMessage } from "element-plus"

export const warning = (msg: string) => {
  if (!msg)  return
  ElMessage({
    type: 'warning',
    message: msg
  })
}

export const error = (msg: string) => {
  if (!msg)  return
  ElMessage({
    type: 'error',
    message: msg
  })
}

export const info = (msg: string) => {
  if (!msg) return
  ElMessage({
    type: 'info',
    message: msg
  })
}

export const success = (msg: string) => {
  if (!msg)  return
  ElMessage({
    type: 'success',
    message: msg
  })
}
