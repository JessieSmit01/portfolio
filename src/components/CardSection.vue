<template>
    <b-container>
        <template v-if="option === 'projects'">
            <b-card-group deck>
                <b-card
                    title="Workout Tracker">
                    <b-card-text>
                        screenshot coming soon.
                    </b-card-text>
                    
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