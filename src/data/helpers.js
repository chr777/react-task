const fetchWithHeaders = async (fetchUrl, options) => {
  const optionsWithAuth = {
    ...options,
  };
  return fetch(fetchUrl, optionsWithAuth);
};

export default fetchWithHeaders;
