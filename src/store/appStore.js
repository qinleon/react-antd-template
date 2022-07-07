import { observable, action } from 'mobx';
import { isAuthenticated, authenticateSuccess, logout } from '../utils/Session';
import { loginAPI } from '../api/login';

class AppStore {
  @observable isLogin = !!isAuthenticated(); //利用cookie来判断用户是否登录，避免刷新页面后登录状态丢失
  @observable users = []; //模拟用户数据库
  @observable loginUser = {}; //当前登录用户信息

  @action actionLogin(params) {
    return new Promise((resolve, reject) => {
      loginAPI(params)
        .then(response => {
          const { data } = response;
          console.log(this);
          this.toggleLogin(true, data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  @action toggleLogin(flag, token) {
    if (flag) {
      authenticateSuccess(token);
      this.isLogin = true;
    } else {
      logout();
      this.isLogin = false;
    }
  }
  @action initUsers() {
    const localUsers = localStorage['users'] ? JSON.parse(localStorage['users']) : [];
    this.users = [{ username: 'admin', password: 'admin' }, ...localUsers];
  }
}

export default new AppStore();
