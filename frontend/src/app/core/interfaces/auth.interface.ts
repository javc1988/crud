export interface Token {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
  }
  
  export interface LoginData {
    username: string;
    password: string;
    scope?: string;
  }
  
  export interface RegisterData {
    first_name: string;
    last_name: string;
    name: string;
    email: string;
    password: string;
  }

  export interface User {
    email: string;
    password: string;
    grant_type?: string;
    client_id?: string;
    client_secret?: string;
    scope?: string;
  }