export default interface AuthInterface {

    login(RouterContext: any): Promise<void>;
    
    logout(RouterContext: any): Promise<void>;

}