<template>
    <div>
        <router-link :to="{name: 'Create'}" class="button is-success" style="margin-top:10px">Add New</router-link>
    </div>

    <table class="table is-striped is-bordered mt-3 is-fullwidth" style="margin: 10px auto;">
        <thead>
            <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Address</th>
                <th>User Phone</th>
                <th class="has-text-centered">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.user_id">
                <td>{{ item.user_name }}</td>
                <td>{{ item.user_email }}</td>
                <td>{{ item.user_address }}</td>
                <td>{{ item.user_phone }}</td>
                <td class="has-text-centered">
                    <router-link :to="{name:'Edit', params: {id: item.user_id}}" class="button is-warning is-small">Edit</router-link>
                    <a class="button is-danger is-small" style="margin-left: 5px;" @click="deleteUser(item.user_id)">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    name: "UserList",
    data(){
        return {
            items: []
        }
    },

    created(){
        this.getUsers();
    },

    methods:{
        // Get All Products
        async getUsers(){
            try{
                const response = await axios.get("http://localhost:9999/api/users")
                // this.items = response.data;
                this.items = response.data.response
            }catch(err){
                console.log(err)
            }
        },

        // Delete Product
        async deleteUser(id){
            try{
                await axios.delete(`http://localhost:9999/api/users/${id}`)
                this.getUsers()
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>