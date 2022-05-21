# cloudflare-r2
Read and write objects to Cloudflare R2 using fetch()

## Install
```
$ npm install cloudflare-r2
```

## Usage
```javascript
var R2 = require('cloudflare-r2')
global.fetch = require('node-fetch')

var r2 = new R2({
    accessKey: '<private accessKey>',
    secretKey: '<private secretKey>',
    accountId: '<account id>',
    region: 'auto'
});

(async function() {
    try {

        let bucket = 'testbucket';
        let key = 'a/test/file.txt';
        let body = 'test file contents';

        let putResponse = await r2.putObject({bucket, key, body})

        console.log(`put status: ${putResponse.status}`)
        console.log(`put response body: '${await putResponse.text()}'`)

        let getResponse = await r2.getObject({bucket, key});

        console.log(`get status: ${getResponse.status}`)
        console.log(`get response body: '${await getResponse.text()}'`)

        let delResponse = await r2.deleteObject({bucket, key});

        console.log(`del status: ${delResponse.status}`)
        console.log(`del response body: '${await delResponse.text()}'`)
    }
    catch (ex) {
        console.log(ex)
    }
}());
```

## License
MIT license; see [LICENSE](./LICENSE).
