<template>

    <v-container>
        <v-card flat>
            <h1 style="margin-left: 10px">Contact Me</h1>
            <v-btn  style="margin: 10px;" @click="HandleEmail" dark color="blue" fab><v-icon large>mdi-email</v-icon></v-btn>
        </v-card>
        
    </v-container>
    
</template>

<script>


export default {
    name: "EmailForm",
    data: () => {
        return{
            form: {
                email: '',
                message: '',
            }
        }
            
    },
    methods:{
        HandleEmail:() => {
            window.location ='mailto:jessie.smit01@gmail.com';
        }
    },
    created: function () {
       document.getElementById("toolbar").innerText = "Contact";
    }
    
    
}

</script>