module.exports = function s3ParseUrl(url) {
  const decodedUrl = decodeURIComponent(url);

  let result = null;

  // http://s3.amazonaws.com/bucket/key1/key2
  let match = decodedUrl.match(/^https?:\/\/s3.amazonaws.com\/([^\/]+)\/?(.*?)$/);
  if (match) {
    result = {
      bucket: match[1],
      key: match[2],
      region: '',
    };
  }

  // http://s3-aws-region.amazonaws.com/bucket/key1/key2
  match = decodedUrl.match(/^https?:\/\/s3-([^.]+).amazonaws.com\/([^\/]+)\/?(.*?)$/);
  if (match) {
    result = {
      bucket: match[2],
      key: match[3],
      region: match[1],
    };
  }

  // http://bucket.s3.amazonaws.com/key1/key2
  match = decodedUrl.match(/^https?:\/\/([^.]+).s3.amazonaws.com\/?(.*?)$/);
  if (match) {
    result = {
      bucket: match[1],
      key: match[2],
      region: '',
    };
  }

  // http://bucket.s3-aws-region.amazonaws.com/key1/key2 or,
  // http://bucket.s3.aws-region.amazonaws.com/key1/key2
  match = decodedUrl.match(/^https?:\/\/([^.]+).(?:s3-|s3\.)([^.]+).amazonaws.com\/?(.*?)$/);
  if (match) {
    result = {
      bucket: match[1],
      key: match[3],
      region: match[2],
    };
  }

  return result;
}
