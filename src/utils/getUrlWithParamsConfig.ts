import config from "../config";

function getUrlWithParamsConfig(endPointConfig: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    }
  }
  return url
}

export default getUrlWithParamsConfig;
