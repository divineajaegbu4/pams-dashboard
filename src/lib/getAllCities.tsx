import axios from "axios";

export const  getAllCities = async () => {
    const res = await axios.get("https://countriesnow.space/api/v0.1/countries/population/cities");

    const responseData = res.data.data;

    if (!responseData?.ok) throw new Error("Failed to load data!");

    return responseData?.json();

}
