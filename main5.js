//task5

let communication = {
    success: true,
    payload: {
        message: {
            text: "Please send biscuits!",
            priority: "URGENT",
        },
    },
};

//let read = communication.payload.message.text;
//console.log(read);

let read = communication.payload.message.priority;
if (read === "URGENT") {
    console.log(read);
};