<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="用户名"
      name="username"
      :rules="[{ required: true, message: '请输入你的用户名!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入你的密码!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-button type="primary" html-type="submit">登录</a-button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a-button type="primary" @click="register" >注册</a-button>
  </a-form>
</template>
<script setup>
import { defineComponent, reactive } from 'vue';
import axios from 'axios'
import { message } from 'ant-design-vue'

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const onFinish = values => {
  console.log('Success:', values);

  axios.get('http://localhost:3000/auth/checkUser',{
    params: {
      username: formState.username,
      password: formState.password
    }
  }).then(r=>{
    console.log(r)
    message.success('登录成功')
  }).catch(err=>{
    message.error(err.response.data.message);
  })

};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const register = () => {
  axios.get('http://localhost:3000/auth/register',{
    params: {
      username: formState.username,
      password: formState.password
    }
  }).then(r=>{
    console.log(r)
    message.success('注册成功')
  }).catch(err=>{
    message.error(err.response.data.message);
  })
}
</script>