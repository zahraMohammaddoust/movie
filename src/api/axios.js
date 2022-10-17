import axios from 'axios';

export default {
    data() {

        let url = "http://moviesapi.ir/api/v1/movies"

        return axios({
            method: "GET",
            url: url,

        }).then(response => {
            return response;
        })

    },
    dataPage2(id) {
        let url = 'http://moviesapi.ir/api/v1/movies/' + id.id

        return axios({
            method: "GET",
            url: url,

        }).then(response => {
            return response;
        })

    },


}