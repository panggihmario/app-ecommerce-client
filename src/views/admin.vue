<template>
   
   <v-app id="inspire">
      <v-container>
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container >
                        <form>
                            <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="email" label="name" v-model="inputItemname" type="name">
                              
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="email" label="category" v-model="inputCategory" type="name" >
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                           <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="email" label="price" v-model="inputPrice" type="name" >
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                           <v-layout row>
                            <v-flex xs12>
                                 <div class="form-group">
                                    
                                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" v-on:change="changeImage($event)">
                                    <small id="fileHelp" class="form-text text-muted"></small>
                                </div>
                            </v-flex>
                          </v-layout>
                                <v-layout row>
                                <v-flex xs 12>
                                    <div>
                                   <v-btn round color="primary" dark v-on:click="upload">Submit</v-btn>
                                </div>
                                
                                  </v-flex>
                                </v-layout>      
                        </form>
                    </v-container>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
 </v-app>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods :{
        ...mapActions([
            "changeImage","upload"
        ])
    },
    computed :{
         ...mapState([
            'itemname','category','price','url'
        ]),
           inputItemname: {
                get () {
                    return this.$store.state.itemname
                },
                set (value) {
                    this.$store.commit('setItemname', value)
                }
            },
            inputCategory :{
                get(){
                    return this.$store.state.category
                },
                set(value){
                    this.$store.commit('setCategory',value)
                }
            },
            inputPrice : {
                get(){
                    return this.$store.state.price
                },
                set(value){
                    this.$store.commit('setPrice',value)
                }
            },
             inputUrl : {
                get(){
                    return this.$store.state.url
                },
                set(value){
                    this.$store.commit('setUrl',value)
                }
            }
    }
}
</script>
