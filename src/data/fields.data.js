import fetchWithHeaders from './helpers';

const apiHost = 'http://localhost:3000';

/**
 * method: GET,
 * response: [
 *    {
 *        id: string,
          type: string,
          details: object,
 *    }
 * ]
 */

   export async function fetchAllFields() {
      const fetchUrl = `${apiHost}/fields`;
      const response = await fetchWithHeaders(fetchUrl)
        .then((res) => res.json())
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('Unable to get fields', err);
        });
          
      return response;
  }

/**
 * method: DELETE,
 * response: [
 *    {
 *        id: number,
 *    }
 * ]
 */

export async function deleteFieldById(id) {
  const fetchUrl = `${apiHost}/fields/${id}`;
  const response = await fetchWithHeaders(fetchUrl, { method: 'DELETE' }).catch(
    (err) => {
      // eslint-disable-next-line no-console
      console.log('Unable to delete the field', err);
    },
  );

  // console.log('field delete response is: ', response);

  return response;
}

/**
 * method: PUT,
 * body: {
 *    id: number,
 *    data: string,
 * }
 * response: {
 *   field: object
 * }
 */
export async function editField(id, data) {
  const fetchUrl = `${apiHost}/fields/${id}`;
  const options = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const result = await fetchWithHeaders(fetchUrl, options)
    .then((res) => res.json())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Unable to edit field', err);
    });

  return result;
}

/**
 * method: POST,
 * body: {
      fields
 * }
 * response: {
 *   field: object
 * }
 */
export async function createField(fields) {
  const fetchUrl = `${apiHost}/fields`;
  const options = {
    method: 'POST',
    body: JSON.stringify(fields),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const field = await fetchWithHeaders(fetchUrl, options)
    .then((res) => res.json())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Unable to add field', err);
    });
  return field;
}
