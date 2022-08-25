import axios from 'axios';

export function createInstance(baseURL = '') {
	return axios.create({
		baseURL,
	});
}

export default createInstance('http://localhost:8000');
