import { environment } from "src/environments/environment"


export const APP = {
  API_ROOT: `${environment.url_api}`,
  API: `${environment.url_api}/api`
}

export const ROUTES_AUTH = {
  LOGIN: `${APP.API}/login`
}