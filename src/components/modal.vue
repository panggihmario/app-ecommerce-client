<template>
    
      <v-dialog v-model="dialog" max-width="500px">
        <main>
         <v-btn flat class="black--text" slot="activator">Cart</v-btn>
        <v-card>
            
        
         <table>
  <tr >
    <th>Name</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Inc</th>
    <th>Dec</th>
  </tr>
  <tr v-for="(item,index) in cart" :key="index">
    <td> {{item.name}}</td>
    <td>{{item.qty}}</td>
    <td>$ {{item.price}}</td>
    <td>
      <button v-on:click="inc(item)">Add</button>
    </td>
    <td>

      <button v-on:click="dec(item)">Min</button>
    </td>
  </tr>
  
</table>

            <small>*indicates required field</small>
        
          <v-card-actions>
            <v-spacer> Total :$ {{total}}</v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1"  flat   v-on:click="checkout(cart)">Checkout</v-btn>
            <!-- <router-link to="/checkout" v-on:click="checkout(cart)">checkout</router-link> -->
          </v-card-actions>
        </v-card>
        </main>
      </v-dialog>

</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    computed :{
      dialog : {
        get(){
          return this.$store.state.dialog
        },
        set(){
          this.$store.commit('setDialog',false)
        }
      },
        ...mapState([
            'total','cart'
        ]),
    },
    methods : {
      ...mapActions([
        "addToCart","inc","dec","checkout"
      ])
    },
    data(){
      return {
     

      }
    }
   
}
</script>

<style scoped>
main {
  background-color: white
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>

