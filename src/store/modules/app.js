const app = {
  state: {
    navs: [
      { text: '首页', path: '/', active: false },
      { text: '关于', path: '/about', active: false }
    ]
  },
  mutations: {
    CHANGE_NAV: (state, to) => {
      state.navs.forEach((nav) => {
        nav.active = to.path === nav.path
      })
    }
  },
  actions: {

  }
}

export default app
