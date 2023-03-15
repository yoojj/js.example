import * as mod from "dotenv";



if(Deno.env.get(EnvNames.DENO_ENV) !== "production") {
  await mod.config({
    export: true,
  });
}

const config = {
  base_url: Deno.env.get(EnvNames.BASE_URL) || "http://localhost:8000",
};

export default config;
