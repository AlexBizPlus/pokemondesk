import config from "../config";

function getUrlWithParamsConfig(endPointConfig: string) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri
  }
  return url
}

export default getUrlWithParamsConfig;
