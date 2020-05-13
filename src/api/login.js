import request from '@/utils/request'/**
 * Created by Administrator on 2020/5/13 0013.
 */
export function login(id){
  return request({
    url:'/pt/information/'+id,
    method:'get',
  })
}
//获取验证码
export function getCodeImg(){
  return request({
    url:'/captchaImage',
    method:'get'
  })
}
