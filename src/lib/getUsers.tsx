import axios from 'axios';

export const GetUsers = async(): Promise<Users> => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;

    } catch (error) {
        console.error(`Failed to fetch users: ${error}`);
        throw error;
    }
}
