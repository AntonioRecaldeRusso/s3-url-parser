## Attention
I haven't been able to work on this for a while. There are some formats that are not supported

### S3 URL PARSER
This library helps you extract the following information from S3 urls of any format:
- bucket name
- region
- key

Formats:
- http://s3.amazonaws.com/bucket/key1/key2
- http://s3-aws-region.amazonaws.com/bucket/key1/key2
- http://bucket.s3.amazonaws.com/key1/key2
- http://bucket.s3-aws-region.amazonaws.com/key1/key2
- http://bucket.s3.aws-region.amazonaws.com/key1/key2


### Usage
```javascript
import s3ParseUrl from 's3-url-parser';

const sampleUrl = 'http://my-bucket.s3.us-west-2.amazonaws.com/key-to-my-s3-object';
const { bucket, region, key } = s3ParseUrl(sampleUrl);

/*
  bucket = 'my-bucket'
  region = 'us-west-2'
  key = 'key-to-my-s3-object'
 */
```
