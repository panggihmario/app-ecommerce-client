import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      name :  '',
      email : '',
      password : '',
      items : [],
      total : 0,
      cart :[],
      dialog : false
  },
  mutations: {
    setTotal(state,payload){
      state.total += payload
    },
    setName(state,payload){
      state.name = payload
    },
    setEmail(state,payload){
      state.email = payload
    },
    setPassword(state,payload){
      state.password =payload
    },
    setItems(state,payload){
      state.items = payload
    },
    setDialog(state,payload){
      state.dialog = payload
    }
    // setCart(state,payload){
    //   state.cart.push(payload)
    // }
  },
  actions: {
    adduser(context){
      axios.post('http://localhost:3000/users/register',{
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
      })
      .then(dataUser=>{
        console.log("berhasil register",dataUser)
        // console.log(dataUser.data.token)
        localStorage.setItem('tokenUser',dataUser.data.token)
        router.push('/lobby')
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
        localStorage.setItem('tokenUser',dataUser.data.token)
        router.push('/lobby')
      })
      .catch(err=>{
        console.log(err)
      })
    },
    logout(){
        var token = localStorage.getItem('tokenUser')
        if(token){
          localStorage.clear()
          router.push('/')
        }
    },
    allItem(context){
      axios.get('http://localhost:3000/item/listitem')
      .then(dataItem=>{
        // console.log(dataItem)
        let result = dataItem.data
        context.commit('setItems',result)
        // console.log(result)
      })
    },
    addToCart(context,item){
      console.log(item)
      // console.log(index)
      // // this.state.total +=index
      context.commit('setTotal',item.price)
      // context.commit('setCart',item.name)
      var found = false
      for(let i=0;i<this.state.cart.length;i++){
        if(this.state.cart[i].id == item._id){
          found =true
            this.state.cart[i].qty++
        }
      }
      if(!found){

        this.state.cart.push({
          id : item._id,
          name : item.name,
          qty : 1,
          price : item.price
        })
      }
    },
    openModal({commit}){
      commit('setDialog',true)
    }
  }
})

