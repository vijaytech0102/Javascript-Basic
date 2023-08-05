let p= new Promise( (resolve, reject)=>{
    let age=12;
    if(age>=18)
    {
        resolve("Eligible for voting"+ age);
    }
    else
    
        reject("Failed:"+(age));
});
p.then((message)=>{
    console.log(".then executed,message");
})
.catch((message)=>{
    console.log("rejceted:"+message)
})
// // chained promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });
  
//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);

    
// fat arrow function:


// Creating a promise

const myPromise = new Promise((resolve, reject) => {
// Simulate an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Fulfill the promise
        } else {
            reject("The number is too small."); // Reject the promise
        }
    }, 5000); // Wait for 5 second
});
//Using the promise....
// 
myPromise.then(    
    (fulfillmentValue) => {
        console.log("Promise fulfilled with:",fulfillmentValue);
    },
    (rejectionReason) => {
        console.error("Promise rejected with:",rejectionReason);
    }
);

// Simulating a function to fetch data from an API
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                id: 1,
                name: "John Doe",
                email: "john@example.com"
            };
            if(data.id!=1)
            resolve(data); // Simulate successful data retrieval

            // reject("Failed to fetch data"); // Simulate data retrieval failure
            if(data.id!=2)
            reject(data);
        }, 1500);
    });
}

// Using the fetchDataFromAPI function with promises
fetchDataFromAPI()
    .then((data) => {
        console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Simulating a function to place an order
function placeOrder(product){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderId = Math.floor(Math.random() * 1000);
            console.log(`Order placed for ${product}. Order ID: ${orderId}`);
            resolve(orderId);
        }, 2000);
    });
}

// Simulating a function to check order status
function checkOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = Math.random() > 0.5 ? 'shipped' : 'pending';
            console.log(`Order ${orderId} status: ${status}`);
            resolve(status);
        }, 1500);
    });
}
// Using async/await to perform the operations
async function orderProduct(product) {
    try {
        const orderId = await placeOrder(product);
        const status = await checkOrderStatus(orderId);
        console.log(`Order ${orderId} is ${status}`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
// Ordering a product and checking its status 
orderProduct("Smartphone");
