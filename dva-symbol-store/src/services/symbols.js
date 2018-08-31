import request from '../utils/request';

export function listSymbol() {
    return request('http://localhost:8080/list');
  }
  
  export function deleteSymbol(data) {
    return request('http://localhost:8080/del', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  
  export function enableSymbol(data) {
    return request('http://localhost:8080/enable', {
      method: 'POST',
      body: JSON.stringify({ enable: data }),
    });
  }
  
  export function isenableSymbol(data) {
    return request('http://localhost:8080/enable', {
      method: 'GET'
    });
  }
  