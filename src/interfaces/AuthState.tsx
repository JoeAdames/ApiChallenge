export default interface AuthState {
    user: {name: string; email:string} | null;
    login: (name: string, email: string) =>  void;
    logout: () => void;
 };