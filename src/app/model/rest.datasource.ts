import {Injectable} from '@angular/core';
import {Http, Request, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Product} from './product.model';
import {Order} from './order';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    console.log(this.baseUrl);
  }

  authenticate(user: string, password: string): Observable<boolean> {
    return this.http.request(new Request({
      method: RequestMethod.Post,
      url: this.baseUrl + 'login',
      body: {name: user, password: password}
    })).map(response => {
      const res = response.json();
      this.auth_token = res.success ? res.token : null;
      return res.success;
    });
  }

  getProducts(): Observable<Product[]> {
    return this.sendRequest(RequestMethod.Get, 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.sendRequest(RequestMethod.Post, 'orders', order);
  }

  private sendRequest(verb: RequestMethod, url: string, body?: Product | Order, auth: boolean = false): Observable<Product | Order> {

    const request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });

    if (auth && this.auth_token !== null) {
      request.headers.set('Authorization', `Bearer<${this.auth_token}>`);
    }
    return this.http.request(request).map(response => response.json());
  }
}
