const prodConfig = {
  strapiApi: "http://localhost:4000"
};

const devConfig = {
  strapiApi: "http://localhost:4000"
};

export default process.env.NODE_ENV === "production" ? prodConfig : devConfig;
