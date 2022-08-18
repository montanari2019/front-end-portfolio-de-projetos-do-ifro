export interface Iuser {
    email?: string;
    token?: string;
}

export interface IContext extends Iuser {
    authenticated:  (email:string, password:string) => Promise<void>;
    loginCheck: () => boolean | null;
    logout: () =>void
}

export interface IAuthProvider {
    children: JSX.Element
}