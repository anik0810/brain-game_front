import axios from 'axios';

export async function signIn(userBody) {
    axios
        .post('http://65.0.74.234:8989/signIn', userBody)
        .then(({ data }) => {
            return data
        });
}



