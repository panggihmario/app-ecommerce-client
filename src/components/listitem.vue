<template>
     <v-container grid-list-md text-xs-center> 
         <v-layout row wrap>
        <v-flex  xs3  v-for="(item,index) in allitem" :key=index >
           <v-card >
          <v-card-media
            :src="item.url"
            height="190px"
          ></v-card-media>
          <v-card-title primary-title>
            <div>
              <h4 class="headline mb-0">{{item.name}}</h4>
              <div>{{item.category}}<br>$ :{{item.price}}</div>
              
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn outline color="indigo" v-on:click="addToCart(item)">Add to Cart</v-btn>
            
          </v-card-actions>
        </v-card>
        </v-flex>
          
        
       
         </v-layout>
    </v-container>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
      data(){
    return {
    //   allitem : []
            }
   
  },
    methods:{
           ...mapActions([
            "allItem","addToCart"
      ]),
    
    // getAllItem(){
    // axios.get('http://localhost:3000/item/listitem')
    //   .then(dataItem=>{
    //     // console.log(dataItem)
    //     let result = dataItem.data
    //     console.log(result)
    //     this.allitem = result
    //     // console.log(this.allitem[0])
    //   })
    // }
    },
      mounted(){
    this.allItem()
    // this.getAllItem()
    
  },
       computed :{
        ...mapState([
            'items','total','cart'
        ]),
            allitem :{
                  get(){
                    return this.$store.state.items
                },
                
                set(value){
                    this.$store.commit('setItems',value)
                }
            },
            // allTotal : {
            //   get(){
            //     return this.$store.state.total
            //   },
            //   set(value){
            //     this.$store.commit('setTotal',value)
            //   }
            // }
        
    },
}
</script>

<style lang="scss">



.v-card {
    display: block;
    border-radius: 5px;

    border: solid 2px;  
    min-width: 0;
    position: relative;
    text-decoration: none;
    
    

}
</style>