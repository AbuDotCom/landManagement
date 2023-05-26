<template>
    <Header />
    <h1 style="color:black; font-weight:bold;">hello {{name}}, welcome to the home page</h1>
    <table>
        <tr v-for="item in properties" :key="item.id">
            <td>
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{item.id}}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{{item.name}}</h6>
    <p class="card-text">Contact:  {{item.contact}}</p>
    <p class="card-text">Price: {{item.price}}</p>
    <p class="card-text">Address: {{item.address}}</p>
    <p class="card-text"><router-link :to="'/update/'+item.id">Edit: </router-link></p>
    <button class="btn btn-danger" v-on:click="deleteProperties(item.id)">Delete</button>

  </div>
</div>
</td>        
</tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: 'Home',
    data(){
        return {
            name:'',
            properties:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteProperties(id)
        {
            let result =await axios.delete("http://localhost:3000/properties/"+id);
            console.warn(result)
            if(result.status==200)
            {
                this.loadData()
            }
        },
        async loadData()
        {
            let user= localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        let result =await axios.get("http://localhost:3000/properties");
        console.warn(result)
        this.properties=result.data;
        }
    },
    async mounted() 
    {
        this.loadData()
    }
};

</script>

<style>
 .card{
    margin-bottom: 10px;
    margin-left: 500px;
 }
</style>