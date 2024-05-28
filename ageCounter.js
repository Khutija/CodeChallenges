const https = require('https');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) =>
{
    let data = '';
    resp.on('data', (chunk) =>
    {
        data += chunk;
    });
    resp.on('end', () =>
    {
        let parsedData = JSON.parse(data.toString());
        let arr = parsedData.data.split(', ');
        let counter = 0;
        for (let i = 0; i < arr.length; i++)
        {
            let pair = arr[i].split('=');
            if (pair[0] == 'age')
            {
                if (pair[1] >= 50) counter++;
            }

        }
        console.log(counter);
    });
});
