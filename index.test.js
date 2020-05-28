var s3ParseUrl = require('./index');

test('parse format http://s3.amazonaws.com/bucket/key1/key2', () => {
  const result = s3ParseUrl('http://s3.amazonaws.com/my-bucket/my-key');
  expect(result).toEqual({ bucket: 'my-bucket', key: 'my-key', region: '' });
});

test('parse format http://s3-aws-region.amazonaws.com/bucket/key1/key2', () => {
  const result = s3ParseUrl('http://s3-us-west-2.amazonaws.com/my-bucket/my-key');
  expect(result).toEqual({ bucket: 'my-bucket', key: 'my-key', region: 'us-west-2' });
});

test('parse format http://bucket.s3.amazonaws.com/key1/key2', () => {
  const result = s3ParseUrl('http://my-bucket.s3.amazonaws.com/my-key');
  expect(result).toEqual({ bucket: 'my-bucket', key: 'my-key', region: '' });
});

test('parse format http://bucket.s3-aws-region.amazonaws.com/key1/key2', () => {
  const result = s3ParseUrl('http://my-bucket.s3-us-west-2.amazonaws.com/my-key');
  expect(result).toEqual({ bucket: 'my-bucket', key: 'my-key', region: 'us-west-2' });
});

test('parse format http://bucket.s3.aws-region.amazonaws.com/key1/key2', () => {
  const result = s3ParseUrl('http://my-bucket.s3.us-west-2.amazonaws.com/my-key');
  expect(result).toEqual({ bucket: 'my-bucket', key: 'my-key', region: 'us-west-2' });
});
