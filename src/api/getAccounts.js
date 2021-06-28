import axios from 'axios';

const link = process.env.REACT_APP_LINKS;
const authorization = process.env.REACT_APP_AUTHORIZATION;
const URL = process.env.REACT_APP_BASE_URL + '/api/accounts/';

export const getAccounts = async () => {
    const { data } = await axios.get(URL, {
        params: {
            link: link
        },
        headers: { 
            'Authorization': authorization
          }
    });
    
    return data;
}