module.exports = function s3ParseUrl(url) {
  var _decodedUrl = decodeURIComponent(url);

  var _result = null;

  // http://s3.amazonaws.com/bucket/key1/key2
  var _match = _decodedUrl.match(/^https?:\/\/s3.amazonaws.com\/([^\/]+)\/?(.*?)$/);
  if (_match) {
    _result = {
      bucket: _match[1],
      key: _match[2],
      region: '',
    };
  }

  // http://s3-aws-region.amazonaws.com/bucket/key1/key2
  _match = _decodedUrl.match(/^https?:\/\/s3-([^.]+).amazonaws.com\/([^\/]+)\/?(.*?)$/);
  if (_match) {
    _result = {
      bucket: _match[2],
      key: _match[3],
      region: _match[1],
    };
  }

  // http://bucket.s3.amazonaws.com/key1/key2
  _match = _decodedUrl.match(/^https?:\/\/([^.]+).s3.amazonaws.com\/?(.*?)$/);
  if (_match) {
    _result = {
      bucket: _match[1],
      key: _match[2],
      region: '',
    };
  }

  // http://bucket.s3-aws-region.amazonaws.com/key1/key2 or,
  // http://bucket.s3.aws-region.amazonaws.com/key1/key2
  _match = _decodedUrl.match(/^https?:\/\/([^.]+).(?:s3-|s3\.)([^.]+).amazonaws.com\/?(.*?)$/);
  if (_match) {
    _result = {
      bucket: _match[1],
      key: _match[3],
      region: _match[2],
    };
  }

  return _result;
}
