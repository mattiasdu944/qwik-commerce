import axios from "axios";

const storeDb = axios.create({
    baseURL: `${ import.meta.env.PUBLIC_API_URL }/api`
});

export default storeDb;