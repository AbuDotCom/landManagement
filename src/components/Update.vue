<template>
    <Header />
    <h1>hello user, welcome to the Update page</h1>
    <form class="add">
        <input type="text"  placeholder="name" v-model="properties.name" />
        <input type="text"  placeholder="Contact" v-model="properties.contact" />
        <input type="text"  placeholder="Price" v-model="properties.price" />
        <input type="text"  placeholder="Address" v-model="properties.address" />
        <button type="button" v-on:click="updateProperties">Update</button>
    </form>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'Update',
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
        async updateProperties()
        {
            const result = await axios.put("http://localhost:3000/properties/"+this.$route.params.id,{
                name:this.properties.name,
                contact:this.properties.contact,
                price:this.properties.price,
                address:this.properties.address,
            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'})
            }
        }
    },
    
    async mounted() 
    {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get('http://localhost:3000/properties/'+this.$route.params.id)
        console.warn(result)
        this.properties=result.data
    }
};

</script>