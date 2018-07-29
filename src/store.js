import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      name :  '',
      email : '',
      password : ''
  },
  mutations: {
    setName(state,payload){
      state.name = payload
    },
    setEmail(state,payload){
      state.email = payload
    },
    setPassword(state,payload){
      state.password =payload
    }
  },
  actions: {
    adduser(context){
      // console.log(payload)
      // console.log(this.state.name)
      axios.post('http://localhost:3000/users/register',{
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
      })
      .then(dataUser=>{
        console.log("berhasil register",dataUser)
        console.log(dataUser.data.token)
      })
    },
    login(context){
      // console.log('tes')
      axios.post('http://localhost:3000/users/login',{
        email : this.state.email,
        password : this.state.password
      })
      .then(dataUser=>{
        console.log("berhasil login",dataUser)
      })
    }
  }
})
