<template>
    <b-container>
        <template v-if="option === 'projects'">
            <b-card-group deck>
                <b-card
                    border-variant="secondary"
                    bg-variant="light"
                    header="Workout Tracker Android App"
                    class="font-weight-bold"
                    >   
                    <b-img src="https://i.ibb.co/JCtyqbS/Workout-Tracker-Home.png"
                    fluid
                    width="200%"
                    ></b-img>
                    <template v-slot:footer>
                         <b-button variant="outline-dark" class="align-bottom" href="https://github.com/JessieSmit01/COSC195FInalProject">Link to Github</b-button>
                    </template>

                    
                </b-card>
                
                <b-card
                    border-variant="secondary"
                    bg-variant="light"
                    header="Reversi Assignment"
                    class="font-weight-bold"
                    >   
                    <b-img src="https://i.ibb.co/F5ZXDQn/Screenshot-20200217-135117-com-example-cst142cst112assign1.jpg"
                    fluid
                    width="200%"
                    ></b-img>
                    <template v-slot:footer>
                        <b-button variant="outline-dark" class="align-bottom" href="https://github.com/JessieSmit01/cst112cst142Assignment2">Link to Github</b-button>
                    </template>
                    
                    
                </b-card>
               
            </b-card-group>
        </template>
        
    </b-container>
</template>
<script>
export default {
    name: "CardSection",
    props:{
        option: String
    }
    
}
</script>
