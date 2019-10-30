import fetch from "isomorphic-unfetch";
import config from "../config";

export const getPages = async () => {
  const res = await fetch(`${config.strapiApi}/pages`);
  return await res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${config.strapiApi}/categories`);
  return await res.json();
};

export const getPosts = async () => {
  const res = await fetch(`${config.strapiApi}/posts`);
  return await res.json();
};
