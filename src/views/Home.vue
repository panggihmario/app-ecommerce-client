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
                              <v-text-field name ="email" label="email" id="email" type="email" v-model="inputEmail">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                           <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="password" label="password" id="password" v-model="inputPassword" type="password">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                                <v-layout row>
                                  <v-flex xs 6>
                                    <div>
                                   <v-btn round color="primary" dark v-on:click="loginUser">Sign In </v-btn>
                                </div>
                                  </v-flex>
                                <v-flex xs 6>
                                    <div>
                                   <v-btn round color="primary" dark v-on:click="moveToRegister">Register</v-btn>
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
import router from '../router'
import {mapActions,mapState} from 'vuex'
import modal from '@/components/modal.vue'
export default {
 
    components :{
        modal
    },
    methods :{
      moveToRegister(){
        router.push('/register')
      },
      ...mapActions([
            "login"
      ]),
      loginUser(){
   
        this.login()
      }
    },
      computed :{
        ...mapState([
            'email','password'
        ]),
            inputEmail :{
                get(){
                    return this.$store.state.email
                },
                set(value){
                    this.$store.commit('setEmail',value)
                }
            },
            inputPassword : {
                get(){
                    return this.$store.state.password
                },
                set(value){
                    this.$store.commit('setPassword',value)
                }
            }
    }
}
</script>


<style lang="scss" scoped>

.v-card {
    display: block;
    border-radius: 10px;
    margin-top : 190px;
    border: solid 2px;  
    min-width: 0;
    position: relative;
    text-decoration: none;
    -webkit-box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    box-shadow: 5px 5px;

.application--wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 0px;
    max-width: 100%;
    position: relative;
}


}
</style>


