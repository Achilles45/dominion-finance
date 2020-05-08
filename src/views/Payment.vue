<template>
    <div class="dashboard">
        <div class="dashboard__wrapper">
           <div class="dashboard__left" id="dashboard__left">
            <div class="heading text-center pt-3">
                    <img src="../assets/images/user.png" class="user__img" alt=""><br>
                       <small>{{id}}</small><br><br>
                       <!-- <h4>{{ first_name }} {{ last_name }}</h4> -->
                         <small>Please refresh the page if no data was loaded as we depend on strong internet connection. Or contact support if you have any issue</small>
            </div>
            <br /><br />
            <ul>
               <li><router-link to="/dashboard/overview"><i class="fa fa-cubes icons"></i>&nbsp;&nbsp; Overview</router-link></li><hr> 
                <li><router-link to="/dashboard/profile"><i class="fa fa-users icons"></i>&nbsp;&nbsp; Profile</router-link></li><hr>
                 <li><router-link to="/dashboard/payment"><i class="fa fa-credit-card icons"></i>&nbsp;&nbsp; Deposit</router-link></li><hr> 
                 <li><router-link to="/dashboard/withdrawal"><i class="fa fa-clone icons"></i>&nbsp;&nbsp; Make Withdrawal</router-link></li><hr> 
               <li @click="logOut()" class="logout"><i class="fa fa-database icons"></i>&nbsp;&nbsp; Logout</li><hr>
            </ul>
            <br><br><br><br>
           </div>
           <div class="dashboard__right">
               <div class="dashoard__heading d-none d-md-block">
                 <div class="heading__content d-flex justify-content-between">
                      <div class="toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <div class="email__holder">
                      <h6>{{email}}</h6>
                  </div>
                 </div>
               </div>
              <div class="right__wrapper">
                  <div class="heading d-flex justify-content-between">
                  <div class="content">
                   <!-- <h5>Welcome Back!</h5> -->
                    <h5>Make Payment</h5>
                         <h4>{{ name }}</h4>
                  </div>
                    <div @click.prevent="show()" class="navbar__toggler">
                      <i class="fa fa-bars"></i>
                  </div>
                  <hr>
              </div>
              <div id="dashboard">
             <small>You can make your deposit with any of the following methods immediately.</small>
             <hr>
               <div>
                  <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/tickers/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX_IDC%3AEURUSD%22%7D%2C%7B%22description%22%3A%22GBP%2FUSD%22%2C%22proName%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22description%22%3A%22USD%2FJPY%22%2C%22proName%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22description%22%3A%22NZD%2FUSD%22%2C%22proName%22%3A%22FX%3ANZDUSD%22%7D%2C%7B%22description%22%3A%22AUD%2FUSD%22%2C%22proName%22%3A%22FX%3AAUDUSD%22%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A72%2C%22utm_source%22%3A%22cryptomorefx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%7D" style="box-sizing: border-box; height: 72px; width: 100%;"></iframe>
              </div>
              <div class="alert alert-success">
                  Please, contact admin for payment details or call 09066367012
              </div>
                  <div class="summary__wrapper">
                  <div class="summary__card two pt-4">
                     <!-- <i class="fa fa-home"></i> -->
                     <div class="content pl-4">
                         <!-- <h6>Bank Accounts</h6> -->
                         <h6>Bank Name: {{ bank_name}}</h6>
                         <hr>
                         <h6>Account Number:  {{ account_number }}</h6>
                         <h6>Account Name:  {{ account_name }}</h6>
                     </div>
                  </div>
                    <!-- <div class="summary__card three pt-4">
                     <i class="fa fa-cubes"></i>
                     <div class="content pl-4">
                         <h6>Invetment Lifecycle</h6>
                         <p>Your capital and returns would be paid back after a minimum of 4 days after your payment has been confirmed.</p>
                     </div>
                  </div> -->
                  <div class="summary__card four pt-4">
                     <!-- <i class="fa fa-home"></i> -->
                     <div class="content pl-2">
                         <!-- <h6>Bank Accounts</h6> -->
                         <h6>Bitcoin Payment</h6>
                         <hr>
                         <h6>Wallet Address: {{ wallet_address }}</h6>
                         <!-- <h6>Account Name:  Usuoyibo Achilles Ewomamena</h6> -->
                     </div>
                  </div>
              </div>
              </div>
              <hr>
              <div></div>
              <p>After making paymen, please send a message to to customer care using the live chat or email to info@dynamicinvestment.net so your payment can be immediately approved.</p>
              </div>
            <!--End of Dashboard
            =========================-->
              <br>
           </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    data(){
        return{
            email:null,
            name:null,
            plan:null,
            id:null,
            bank_name: null,
            account_number:null,
            account_name:null,
            wallet_address:null
        }
    },
    computed:{
        investmentReturns(){
            return this.plan * 0.15
        }
    },
     methods:{
          show:function(){
            const navLeft = document.querySelector('#dashboard__left')
            navLeft.classList.toggle('navLeft')
        },
        //Remove the left section of the dashbord
        shiftLeft(){
            const navLeft = document.querySelector('#dashboard__left')
            const toggler = document.querySelector('.toggler');
            toggler.addEventListener('click', ()=>{
                navLeft.classList.remove()
            })

        },
         //Function for the user to logout
        logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Signin'})
           })
        },
    },
        mounted(){
        //Get current user that just logged in
        let user = firebase.auth().currentUser

        //Now check the database to fetch the details
        db.collection('users').where("user_id", "==", user.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.name = doc.data().name,
                this.email = doc.data().email,
                this.plan = doc.data().plan,
                this.id = doc.data().user_id
                this.bank_name = doc.data().bank_name
                this.account_number = doc.data().account_number
                this.account_name = doc.data().account_name
                this.wallet_address = doc.data().wallet_address
            })
        })
    }
    }
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.dashboard{
    width: 100vw;
    .dashboard__wrapper{
    display: grid;
    grid-template-columns:  260px 1fr;
    // grid-gap: 30px;
    .dashboard__left{
        background: #252525;
        padding: 1rem 2rem;
        color:#fff;
        height: 100% !important;
        small{
            opacity: .6;
            font-size: .75rem;
        }
        .user__img{
            max-width: 80px;
            height: auto;
            margin-bottom: 2rem;
        }
        
        h5{
            opacity: .8;
            font-size: 1.1rem;
            // padding-bottom: .5rem;
        }
        ul{
            li a, .logout{
                cursor: pointer !important;
                // border-bottom: 1px solid #ccc;
                line-height: 3;
                font-size: .85rem;
                opacity: .7;
                color: #fff;
                text-decoration: none !important;
                .icons{
                    margin-right: 1rem !important;
                }
            }
        }
    }
    .dashboard__right{
        background: #F4F6F9;
        // padding: 3rem 2.5rem;
        .right__wrapper{
              padding: 1rem 2rem;
        }
        h4{
           font-weight: 400;
        }
       small{
            color:#627081;
           font-size: .8rem;
           font-weight: bold;
           opacity: .8;
       }
       .dashoard__heading{
           background-color: #FBAE1C;
           padding: 1.2rem 2rem;
           display: flex;
           justify-content: space-between;
       }
        .summary__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 30px;
            margin-top: 1rem;
            .summary__card{
                display: flex;
                padding: 1rem 1rem;
                border-radius: 4px;
                // font-size: .9rem;
                color:#fff !important;
                margin-bottom: 2rem;
                p{
                    color:#fff !important;
                    padding-top: 0rem;
                    opacity: .9;
                    font-size: .7rem;
                    line-height: 1.4rem;

                }
                h5{
                    color:#fff;
                    font-size: 1rem;
                }
            }
            .one{
                    background: #00C292;
                }
                .two{
                    background: #757afc;
                }
                .three{
                    background: #EF5350;
                }
                .four{
                    background: #251F68;
                   
                }
                
        }
         p{
                        color: red;
                    }
            //REQUEST FORM
            form{
                 box-shadow: 0px 6px 60px -7px rgba(69,77,89,0.15);
                 padding: 2rem;
                 margin: 2rem 0;
                 h4{
                     font-weight: bold;
                     font-size: 1rem;
                     color:#454545;
                 }
                 small{
                     color:#545454;
                     font-weight: bold;
                     opacity: .7;
                     font-size: .8rem;
                 }
                 label{
                     font-size: .8rem;
                     font-weight: bold;
                     color:#545454;
                     opacity: .7;
                 }
                 input, select{
                     height: 2.8rem;
                     box-shadow: none;
                     border-radius: 0px;
                     font-size: .9rem;
                 }
                 .request__btn{
                     background: #251F68;
                     color:#fff;
                     margin-top: 1.5rem;
                     border-radius: 3px;
                     padding: 1rem 3rem;
                     border: none;
                     font-size: .9rem;
                 }
                 .alert{
                     font-size: .9rem;
                 }
            }
        .invest__img{
            max-height: 50vh;
            width: 100vw;
        }
        h5{
            color:#454545;
            font-weight: bold;
            padding-bottom: 1.2rem;
            padding-top: 1rem;
        }
        p{
            padding-top:1rem;
            color:#545454;
            font-size: .9rem;
        }
    }
}
}
.navbar__toggler{
    display: none
}

.navLeft{
    display: block !important;
    transition: all ease-in-out .5s;
    width: 64%;
    position: absolute;
    z-index: 100;
    bottom: 0 !important;
    top: 0 !important;
}

//MEDIA QUERIES FOR SMALLER SCREENS
@media only screen and (max-width: 600px){
    .dashboard{
        // grid-template-columns: 1fr;
        position: relative;
    }
    .dashboard__left{
        background: #252525 !important;
        display: none;
    }
.dashboard__right{
    width: 100vw !important;
    padding: 3rem 1.2rem !important;
     .right__wrapper{
              padding: 1rem .5rem !important;
        }
}
.summary__wrapper{
    grid-gap: 5px !important;
}
.navbar__toggler{
    display: block !important;
}
}
.loader{
    max-width: 150px;
    height: auto;
}
</style>