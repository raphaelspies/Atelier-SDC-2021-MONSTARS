import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  http.get('0.0.0.0/products');
  sleep(1);
}