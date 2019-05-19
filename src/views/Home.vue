<template>
    <v-container>
        <v-layout text-xs-center
                  wrap>
            <v-flex xs12>
                <v-img :src="require('../assets/logo.svg')"
                       class="my-3"
                       contain
                       height="200">
                </v-img>
            </v-flex>

            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to Api Explorer.
                </h1>
                <p class="subheading font-weight-regular">
                    By configuring the api config file you can specify the available endpoints.
                    <br>
                    If you don't specify a schema, the app will show all properties available in the api.
                    <br>
                    <br>
                    Current available data structures
                </p>
            </v-flex>
        </v-layout>
        <v-layout text-xs-left>
            <v-flex>
                <p>List of objects, visualized in a table</p>
                <p>More coming soon</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    //import HelloWorld from '../components/HelloWorld'

    //export default {
    //    components: {
    //        HelloWorld
    //    }
    //}
</script>

<style lang="scss">

</style>
