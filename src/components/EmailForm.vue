<template>

    <b-container class="bg-light" border-variant="secondary">
            <h1><b>Contact Me</b></h1>
            <b-form class="form">
                <b-row >
                    <b-col>
                        <b-form-group
                    label="Email"
                    label-for="email"
                    horizontal="start"
                    lg="4"
                    >
                        <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    </b-col>
                    <b-col lg="8">
                        <b-form-group
                        label="Message">
                            <b-form-textarea>
                            </b-form-textarea>
                        </b-form-group>
                    </b-col>
            </b-row>
            <b-row>
                <b-col >
                        <b-button block size="lg" @click="handleEmail" type="submit" variant="outline-primary">Send</b-button>
                </b-col>
            </b-row>
             </b-form>
        
    </b-container>
    
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
        handleEmail:() => {
            return;
        }
    }
    
}
</script>