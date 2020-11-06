import { BehaviorSubject } from "rxjs";

const url = "https://api.thecatapi.com/v1/images/search";

class CatService {

    _CatBh = new BehaviorSubject({});
    CatObs = this._CatBh.asObservable();

    getCat(){
        return fetch(url)
        .then(resp=>resp.json())
        .then(cat=>this._CatBh.next(cat[0]))
    }

}

export default Object.freeze(new CatService());