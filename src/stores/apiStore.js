import { defineStore } from 'pinia';
import $ from 'jquery';
import Cookies from 'js-cookie';  // 引入 js-cookie

const API_PATH = import.meta.env.VITE_API_PATH;

export const useApiStore = defineStore('api', {
  state: () => ({
    data: null,
    token: Cookies.get('token') || '',  // 預設從 cookies 取得 token
    loading: false,
    error: null,
    userData: {
      username: '尚未輸入',
      password: '尚未輸入'
    },
    isLoggedIn: false,  // 用來追蹤是否已登入
  }),

  actions: {
    async fetchData(url) {
      this.loading = true;
      this.error = null;
      try {
        const response = await $.get(url);
        this.data = response.products;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },

    // 登入 API
    async loginApi(url, data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await $.ajax({
          url: url,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(data),
        });

        // 更新 userData 為回應的使用者資料
        this.userData = response.userData;

        // 儲存 token 到 cookies
        if (response.token) {
          this.token = response.token;
          Cookies.set('token', response.token, { expires: 1 }); // 儲存 1 天
          this.isLoggedIn = true;  // 登入成功後更新狀態
        }
        alert('登入成功');
      } catch {
        alert("登入失敗，請檢查帳號密碼")
      } finally {
        this.loading = false;
      }
    },

    // 登出 API
    logout() {
      this.token = '';
      this.userData = {
        username: '尚未輸入',
        password: '尚未輸入'
      };
      Cookies.remove('token');  // 移除 cookies 中的 token
      this.isLoggedIn = false;  // 登出後更新狀態
      alert('成功登出');
    }
  },
});
