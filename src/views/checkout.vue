<template>
    <div class="container">
<div class="row">
    <div class="col-sm">
         <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Name</th>
       
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in checkout" :key="index">
        <td>{{item.name}}</td>
      
        <td>{{item.price}}</td>
        <td>{{item.qty}}</td>
      </tr>
     
     
    </tbody>
  </table>
    </div>
</div>
  <div col-md6>
      <h2>Total Price : $ {{total}}</h2>
 
  </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
            total : 0
        }
    },
    methods : {
        ...mapActions([
            "getCheckout"
        ]),
        getTotal(){
            let totalPrice = localStorage.getItem('total')
            this.total = totalPrice
        }
    },
    computed :{
        ...mapState([
            "checkout"
        ]),
        allitem : {
            get(){
                return this.$store.checkout
            },
            set(value){
                this.$store.commit('setCheckout',value)
            }
        }
    },
    mounted(){
        this.getCheckout()
        this.getTotal()
    }
}
</script>
