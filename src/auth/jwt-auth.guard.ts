import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";


export class JwtAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        throw new Error("Method not implemented.");
    }
        
}