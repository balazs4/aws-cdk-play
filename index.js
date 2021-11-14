exports.handler = (event) => {
  console.log(JSON.stringify(event, null, 2));
  return 'Hello from CDK Lambda!';
};
