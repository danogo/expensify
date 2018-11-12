const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(5, 8);
  expect(result).toBe(13);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Daniel');
  expect(result).toBe('Hello Daniel!');
});

test('should generate greeting with no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
})


