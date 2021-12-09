'use strict';

window.onload = (event) => {

    const serverUrl = 'http://127.0.0.1:9000';

    const endpointsList = [
        '/201',
        '/200/delay/1000',
        '/200/delay/2000',
        '/200/delay/3000',
        '/200/delay/5000',
        '/500',
        '/202/delay/9000',
        '/401/delay/2000'
    ];

    let generator = function*(arr) {
        while (true) {
            for (let i = 0; i < arr.length; i++) {
                yield arr[i];
            }
        }
    }

    //instead of using a loop, I'm creating an iterator for endpoints array, that can be called with next() method in order to get subsequent items
    //const endpointIterator = endpointsList[Symbol.iterator]();
    const endpointIterator = generator(endpointsList); //default iterator cannot be reset, so tryin to create a custom one

    const orderedList = document.querySelectorAll('ol')[0];

    document.querySelectorAll('button').forEach((button) => {
        let buttonCaptionPlaceholder = button.innerText;
        button.onclick = (e) => {
            console.log(e);
            e.target.innerText = "...";
            let listItem = orderedList.appendChild(document.createElement('li'));
            listItem.innerText = `${new Date().toISOString()} call added`;
            fetch(serverUrl + endpointIterator.next().value) //use of iterator instead of a loop, neat!
                .then(res => {
                    console.log(res);
                    return res.text();
                })
                .then((data) => {
                    e.target.parentNode.querySelectorAll('h2')[0].innerText = data;
                    listItem.remove();
                    e.target.innerText = buttonCaptionPlaceholder;
                })
                .catch(err => console.log(`promise catch error: ${err}`));
        }
    });

}