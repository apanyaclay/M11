<template>
    <div>
        <div class="field">
            <label for="name" class="label">User Name</label>
            <div class="control">
                <input type="text" class="input" placeholder="User Name" v-model="userName">
            </div>
        </div>
    </div>

    <div class="field">
        <label for="email" class="label">User Email</label>
        <div class="control">
            <input type="email" class="input" placeholder="User Email" v-model="userEmail">
        </div>
    </div>

    <div>
        <div class="field">
            <label for="address" class="label">User Address</label>
            <div class="control">
                <input type="text" class="input" placeholder="User Address" v-model="userAddress">
            </div>
        </div>
    </div>

    <div>
        <div class="field">
            <label for="phone" class="label">User Phone</label>
            <div class="control">
                <input type="text" class="input" placeholder="User Phone" v-model="userPhone">
            </div>
        </div>
    </div>
    <div class="control">
        <button class="button is-success" @click="saveUser">SAVE</button>
    </div>
</template>

<script>
// import axios
import axios from "axios";

export default{
    name: "UserAdd",
    data(){
        return {
            userName: "",
            userEmail: "",
            userAddress: "",
            userPhone: "",
        }
    },

    methods: {
        // Create New product
        async saveUser(){
            try {
                await axios.post("http://localhost:9999/api/users", {
                    user_name: this.userName,
                    user_email: this.userEmail,
                    user_address: this.userAddress,
                    user_phone: this.userPhone,
                })

                this.userName = ""
                this.userEmail = ""
                this.userAddress = ""
                this.userPhone = ""
                this.$router.push("/")
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>