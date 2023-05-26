<template>
    <Header />
    <h1 style="color:black; font-weight:bold;" >Please Add Property Details Below</h1>
    <form class="add">
        <input type="text"  placeholder="name" v-model="properties.name" />
        <input type="text"  placeholder="Contact" v-model="properties.contact" />
        <input type="text"  placeholder="Price" v-model="properties.price" />
        <input type="text"  placeholder="Address" v-model="properties.address" />
        <button type="button" v-on:click="addProperty">Register</button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
export default {
    name: 'Add',
    components: {
        Header
    },
    data()
    {
        return {
            properties: {
                name: '',
                contact: '',
                price: '',
                address:'',
            }
        }
    },
    methods:{
        async addProperty()
        {
            console.warn(this.properties)
            const result = await axios.post("http://localhost:3000/properties",{
                name:this.properties.name,
                contact:this.properties.contact,
                price:this.properties.price,
                address:this.properties.address,
            });
            if(result.status==201)
            {
                this.$router.push({name:'Home'})
            }
            console.warn("result", result)
        }
    },
    mounted() 
    {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
};

</script>