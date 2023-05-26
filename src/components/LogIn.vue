<template>
<img class="logo" src="../assets/Logo5.jpg"/>
    <h1>Log In</h1>
    <div class="LogIn">
        <input type="text" v-model="phoneNumber" placeholder="Phone Number" />
        <input type="text" v-model="propertyID" placeholder="propertyID" />
        <button v-on:click="LogIn">Log In</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div></template>

<script>
    import axios from 'axios'
    export default
    {
        name:'LogIn',
        data()
        {
            return {
                phoneNumber:'',
                propertyID:''
            }
        },
        methods:{
            async LogIn()
            {
                let result = await axios.get(
                    `http://localhost:3000/users?phoneNumber=${this.phoneNumber}&propertyID=${this.propertyID}`
                )

                if(result.status==200 && result.data.length>0)
                    {
                        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                        this.$router.push({name:'Home'})
                        
                        
                    }
                console.warn(result)
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
    };
</script>