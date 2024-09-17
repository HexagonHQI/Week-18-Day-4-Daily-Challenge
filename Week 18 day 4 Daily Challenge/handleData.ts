// Define the types
type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

// Create the handleData function
function handleData(data: (User | Product | Order)[]): string[] {
    return data.map(item => {
        if (isUser(item)) {
            return `Hello ${item.name}, you are ${item.age} years old.`;
        } else if (isProduct(item)) {
            return `Product ID: ${item.id}, Price: $${item.price.toFixed(2)}`;
        } else if (isOrder(item)) {
            return `Order ID: ${item.orderId}, Amount: $${item.amount.toFixed(2)}`;
        } else {
            return 'Unknown type';
        }
    });
}

// Type guard for User
function isUser(item: any): item is User {
    return item.type === 'user';
}

// Type guard for Product
function isProduct(item: any): item is Product {
    return item.type === 'product';
}

// Type guard for Order
function isOrder(item: any): item is Order {
    return item.type === 'order';
}

// Test cases
const mixedData: (User | Product | Order)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'XYZ123', amount: 99.99 },
    { type: 'unknown', data: 'example' } // An unexpected case
];

// Call handleData and log the results
const results = handleData(mixedData);
console.log(results);
// Output:
// [
//   'Hello Alice, you are 30 years old.',
//   'Product ID: 101, Price: $29.99',
//   'Order ID: XYZ123, Amount: $99.99',
//   'Unknown type'
// ]
