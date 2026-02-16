export const LOGO="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
export const USER_AVATAR="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const Netflix_Bg="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg";
export const API_Options={
  method: "GET",
  headers: {
    Authorization: "Bearer "+process.env.REACT_APP_OPENAI_API_KEY,
    accept: "application/json",
  },
};
export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780";
export const Supported_Languages=[
  { code: "en", name: "English" },
  { code: "hindi", name: "Hindi" },
  { code: "spanish", name: "Spanish" },
];