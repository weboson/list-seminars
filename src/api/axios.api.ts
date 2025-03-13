import axios from "axios";

// url json-serever
export const instance = axios.create({
    baseURL: 'http://localhost:3000/', // /seminars в src\services\seminares.services.ts
  });