import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class LoaderService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading$$.asObservable();

  setLoading(isLoading: boolean) {
    this.isLoading$$.next(isLoading);
  }
}
