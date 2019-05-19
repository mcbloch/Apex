<template>
    <div>
        <h1 class="display-2 font-weight-bold mb-3">{{name}}</h1>
        <v-data-table
                :headers="headers"
                :items="items"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td v-for="col in headers" class="text-xs-left">{{ prettify(props.item[col.text]) }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import {base_url} from "../api";

    export default {
        name: "Table",
        props: {
            name: String,
            path: String,
            schema: Array,
        },
        data() {
            return {
                headers: [],
                items: []
            }
        },
        created() {
            fetch(base_url + this.$props.path)
                .then(response => response.json())
                .then(json => {
                    this.items = json;
                    if (this.items.length > 0) {
                        if (this.$props.schema === undefined || this.$props.schema.length === 0) {

                            this.headers = Object.keys(this.items[0]).map(name => {
                                return {text: name, value: name}
                            });
                        } else {
                            this.headers = this.$props.schema.map(col => {
                                return {text: col.name, value: col.name}
                            });
                        }
                    }
                });
        },
        methods: {
            prettify: function (item) {
                if (item instanceof Object) {
                    let keys = Object.keys(item);
                    return keys.map(key => {
                        return key + ": " + this.prettify(item[key])
                    }).join("; ")
                } else {
                    return item
                }
            }
        }
    }

</script>

<style scoped>

</style>