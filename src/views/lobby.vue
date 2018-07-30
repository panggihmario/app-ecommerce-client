<template>
<div >
   <Navbar/>
   
    <modal/>
    
     <listitem/>
    <v-footer
      dark
      height="auto"
       
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="orange darken-2">
          <strong class="subheading">Get connected with us on social networks!</strong>
  
          <v-spacer></v-spacer>
  
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
</div>
</template>

<script>
import router from '../router'
import {mapActions,mapState} from 'vuex'
import Navbar from '@/components/navbar.vue'
import listitem from '@/components/listitem.vue'
import footer from '@/components/footer.vue'
import modal from '@/components/modal.vue'
export default {
  name : 'lobby',
  components : {
    Navbar,listitem,footer,modal
  },
  data(){
    return {
         icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
            }
        },
        computed :{
        ...mapState([
            'items'
        ]),
            allitem :{
                set(value){
                    this.$store.commit('setItems',value)
                }
            },
    },
}
</script>

