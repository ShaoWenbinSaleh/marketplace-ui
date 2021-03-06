import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

import {Headers, RequestOptions} from '@angular/http';

import {MarketplaceService} from './marketplace.service';

@Injectable()
export abstract class BaseService {

    constructor(protected marketplaceService: MarketplaceService, protected http: Http) {
    }

    options(): RequestOptions {
		return this.marketplaceService.requestOptions(true);
    }

}
