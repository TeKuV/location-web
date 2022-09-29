import React from 'react';
import axios from "axios";

class CallApi {
    async listing() {
        return await axios.get("https://lekwatt.com/location/public/api/locations")
    }
    async getTypeOfLocation() {
        return await axios.get("https://lekwatt.com/location/public/api/types-locations")
    }
    async getHot() {
        return await axios.get("https://lekwatt.com/location/public/api/locations-hot-announces")
    }
}

export default new CallApi();