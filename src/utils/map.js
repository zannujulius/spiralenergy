import axios from "axios";

export const mapURL = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api",
});
