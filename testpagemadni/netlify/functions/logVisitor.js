exports.handler = async (event, context) => {
    const message = "Visitor details logged successfully!";
    console.log("Visitor accessed the site on", new Date().toISOString());
    return {
        statusCode: 200,
        body: JSON.stringify({ message }),
    };
};
