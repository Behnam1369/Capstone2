import commentsCount from '../modules/commentCount.js';

describe('Testing commentsCount function', () => {
  let comments = [];
  test('An empty array of comments should return message "No comment yet". ', () => {
    // Arrange
    comments = [];

    // act
    const result = commentsCount(comments);

    // Assert
    expect(result).toBe('No comment yet');
  });

  test('An array containing one comment should return 1. ', () => {
    // Arrange
    comments.push({ comment: 'Soooooooo goooooood', username: 'Xavi Moreno', creation_date: '2022-03-10' });

    // act
    const result = commentsCount(comments);

    // Assert
    expect(result).toBe(1);
  });

  test('An array containing two comment should return 2. ', () => {
    // Arrange
    comments.push({ comment: 'Perfect', username: 'Alex', creation_date: '2022-03-11' });

    // act
    const result = commentsCount(comments);

    // Assert
    expect(result).toBe(2);
  });
});
