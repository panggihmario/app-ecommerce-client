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
      dialog : false,
      url :'',
      itemname : '',
      category : '',
      price : null,
      checkout :[]
  },
  mutations: {
    setCheckout(state,payload){
      state.checkout = payload
    },
    setItemname(state,payload){
      state.itemname = payload
    },
    setCategory(state,payload){
      state.category = payload
    },
    setPrice(state,payload){
      state.price = payload
    },
    setUrl(state,payload){
      state.url = payload
    },
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
      // console.log(item.name)
      // localStorage.setItem('nama',item.name)
    },
    openModal({commit}){
      commit('setDialog',true)
    },
    inc(context,item){
      // console.log(item.name)
      item.qty++
      this.state.total+=item.price
    },
    dec(context,item){
      item.qty--
      this.state.total-=item.price
      if(item.qty<=0){
        for(let i=0;i<this.state.cart.length;i++){
              this.state.cart.splice(i,1)
              break
        }
      }
    },
    changeImage(context,data){
      console.log(data.target.files[0])
      this.state.url = data.target.files[0]
    },
    upload(context){
      let formData = new FormData()
      formData.append('item',this.state.url)
      axios.post('http://localhost:3000/upload',formData)
      .then(result=>{
          console.log('========',result)
          console.log('success')
          axios.post('http://localhost:3000/item/addItem',{
              name : this.state.itemname,
              category : this.state.category,
              price : this.state.price,
              url : result.data.link
          })
          .then(data=>{
              console.log(data)
          })
          .catch(err=>{
              console.log(err)
          })
      })
      .catch(err=>{
          console.log(err)
      })
    },
    getCategory(context,category){
      console.log(category)
      let self = this
      axios.get(`http://localhost:3000/item/filter/${category}`)
      .then(function(data){
        console.log(data.data)
        self.state.items = data.data
      })
    },
    checkout(context,data){
      console.log(data)
      localStorage.setItem('allChart',JSON.stringify(data))
      localStorage.setItem('total',this.state.total)
      router.push('/checkout')
    },
    getCheckout(context){
      var data =localStorage.getItem('allChart')
      
      console.log(data)
      this.state.checkout= JSON.parse(data)
      
    }
  }
})

