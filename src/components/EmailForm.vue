<template>

    <v-container>
        <v-card flat>
            <h1 style="color: #2196f3">Contact Me</h1>
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
    }
    
    
}

</script>