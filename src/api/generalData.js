import axios from 'axios';

const links = process.env.REACT_APP_LINKS;
const authorization = process.env.REACT_APP_AUTHORIZATION;
const URL = process.env.REACT_APP_BASE_URL + '/api/links/';

export const generalData = async () => {
    const { data } = await axios.get(URL, {
        params: {
            links: links
        },
        headers: { 
            'Authorization': authorization
          }
    });
    
    return data;
}