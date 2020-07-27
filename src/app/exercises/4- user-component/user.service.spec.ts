import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/Observer';

describe('EXERCISES 4 SERVICE',()=>{
    describe('UserService', () => {
        let service: UserService;
        let http: HttpClient;
        let users;
        let url = '';
    
        beforeEach(() => {
            http = new HttpClient(null);
            service = new UserService(http);
            users = [ 1, 2, 3 ];
        });
    
        it('returns the list of users from the server', () => {
            const spy = spyOn(http, 'get').and.returnValue(users);
    
            const result = service.getUsers();
    
            expect(spy).toHaveBeenCalled();
            expect(result).toBe(users);
        });
    
        it('adds the user to the server', () => {
            const user = '1';
            const spy = spyOn(http, 'post').and.returnValue(of(user));
    
            const result$ = service.addUser(1);
            let result;
    
            const subscription = result$.subscribe(value => {
                result = value;
            });
    
            subscription.unsubscribe();
    
            expect(spy).toHaveBeenCalledWith(service._url, user);
            expect(result).toEqual(user);
        });
    
       it('deletes the user from the server', () => {
            const deleteUser = 1;
            const spy = spyOn(http, 'delete').and.returnValue(of(empty));
    
            service.deleteUser(deleteUser);
    
            expect(spy).toHaveBeenCalledWith(`${service._url}/${deleteUser}`);
        });
      xit('updates the user in the server', () => {
            const updateUser = '1';
            const spy = spyOn(http, 'put').and.returnValue(of(`${service._url}/${updateUser}`,updateUser));
    
           const result$ = service.updateUser(1);
           let result;
    
            const subscription = result$.subscribe(value => {
                result = value;
            });
    
            subscription.unsubscribe();
    
            expect(spy).toHaveBeenCalledWith(`${service._url}/${updateUser}`,updateUser);
            expect(result).toEqual(updateUser);
        });
    });
    
});
