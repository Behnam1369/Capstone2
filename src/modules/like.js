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
