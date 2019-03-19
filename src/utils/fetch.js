// const getData = url => {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => error)
// }

async function getData(url)
        {
           let response = await fetch(url);
           let data = await response.json()
            return data;
        }

export default getData;
