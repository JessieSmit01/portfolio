<template>

    <v-container>
        <v-btn @click="HandleEmail">Email Me</v-btn>
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