const commentsCount = (comments) => (comments.length === 0 || comments.error ? 'No comment yet' : comments.length);

export default commentsCount;