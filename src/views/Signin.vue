<template>
  <div class="signup">
        <div class="form__wrapper">
           <h4>Welcome Back!</h4>
           <P>Sigin to continue to your dashboard</P>
           <hr><br>
           <form @submit.prevent="signin()">
                <div class="form-group">
                   <input type="email" class="form-control" placeholder="Enter your email address" v-model="email">
               </div>
               <div class="form-group">
                   <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
               </div>
               <div v-if="err" class="alert alert-danger animated slideInRight">
                   {{ err }}
               </div>
                <div v-if="loading" class="loading text-center">
                              <img src="../assets/images/loader.gif" class="loader" alt="">
                          </div>
               <button type="submit" class="signup__btn">LOGIN</button>
               <div class="bottom text-center pt-4">
                   <p>Yet to have an account? <router-link to="/signup">Sign Up</router-link></p>
               </div>
           </form>
        </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            email: null,
            password: null,
            err:null,
            loading: false
        }
    },
    methods:{
        signin(){
            this.loading = true
            //Check if the user has filled in the email and password
            if(!this.email || !this.password){
                this.loading = false
                this.err = 'Please provide your credentials and try again!'
            }else{
                //Sign in the user here
                this.loading = false
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(()=>{
                    this.$router.push({name: 'dashboard'})
                })
                .catch(err=>{
                    this.err = err.message
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signup{
    background: #E9E9E9;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form__wrapper{
        background: #fff;
        border-radius: 4px;
        padding: 2rem;
        width: 400px;
        margin: 4rem 1rem;
         h4{
                font-weight: bold;
                color: #000;
            }
            p{
                padding-bottom: 1rem;
            }
        form{
            input, select{
                height: 3rem;
                border-radius: 0px;
                box-shadow: none;
                border:1px solid #000;
                &::placeholder{
                    text-transform: uppercase;
                    font-size: .7rem;
                    color: #000;
                }
            }
            .small{
                color: #000 !important;
                font-weight: bold !important;
            }
            .loader{
                // max-width: 250px;
                height: 100px;
            }
            .signup__btn{
                background: $secondary-color;
                color: #000;
                padding: .8rem 2rem;
                border: none;
                width: 100%;
            }
        }
    }
}
</style>