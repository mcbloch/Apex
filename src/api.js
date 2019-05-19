const types = Object.freeze({list: Table});
import Table from './components/Table';


const base_url = "https://jsonplaceholder.typicode.com";

const api = [
    {
        path: "/todos",
        name: "Todo's",
        component: types.list,
        schema: [
            {name: "userId"},
            {name: "id"},
            {name: "title"}
        ]
    },
    {
        path: "/users",
        name: "Users",
        component: types.list
    }
];

export {base_url, api};