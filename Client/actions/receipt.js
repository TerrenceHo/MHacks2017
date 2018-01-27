import axios from 'axios';

export function parseReceipt(imgFile) {
	return dispatch => {
		return axios.get('/api/receipt', imgFile);
	};
}  