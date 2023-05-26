<template>
    <img class="logo" src="../assets/Logo5.jpg"/>
    <h1>Sign In</h1>
    <div class="Register">
        <input type="text" v-model="name" placeholder="name" />
        <input type="text" v-model="phoneNumber" placeholder="Phone Number" />
        <input type="text" v-model="propertyID" placeholder="propertyID" />
        <button v-on:click="SignUp">Register</button>
        <p>
            <router-link to="/log-in">LogIn</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue';

 export default {
    name: 'SignUp',
    data() 
    {
        return {
            name:'',
            phoneNumber:'',
            propertyId:''
        }
    },
    methods:{
        async SignUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                phoneNumber:this.phoneNumber,
                propertyID:this.propertyID

            });
            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
                
                
            }
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }
 }
</script>

