const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tLVd7tb0BQpHYLFSGTqK/likes';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
export const getLikes = async () => {
  try {
    const response = await fetch(likesUrl);
    return await response.json();
  } catch (err) {
    return err;
  }
};

export const addLikes = async (e) => {
  const element = e.target.parentNode.children[1].id;
  const fetchLikes = await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: element,
    }),
    headers: header,
  });
  return fetchLikes;
};