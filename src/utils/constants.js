export const LOGO="https://cdn-icons-png.flaticon.com/512/2503/2503508.png";
export const USER_AVATAR="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
export const Netflix_Bg="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80";
export const API_Options={
  method: "GET",
  headers: {
    Authorization: "Bearer " + (process.env.REACT_APP_TMDB_API_KEY || process.env.REACT_APP_OPENAI_API_KEY),
    accept: "application/json",
  },
};
export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780";
export const Supported_Languages=[
  { code: "en", name: "English" },
  { code: "hindi", name: "Hindi" },
  { code: "spanish", name: "Spanish" },
];