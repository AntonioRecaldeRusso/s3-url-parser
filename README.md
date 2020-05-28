### S3 URL PARSER
When you configure your bucket as a static website,
the website is available at the AWS Region-specific website endpoint of the bucket.
Website endpoints are different from the endpoints where you send REST API requests.

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

For more information: 
When you configure your bucket as a static website, the website is available at the
AWS Region-specific website endpoint of the bucket. Website endpoints are different
from the endpoints where you send REST API requests

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
