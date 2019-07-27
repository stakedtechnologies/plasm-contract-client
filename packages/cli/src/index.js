const {Form} = require('enquirer')

const prompt = new Form({
  name: 'endpoints',
  message: 'Please endpoints the following information:',
  choices: [
    { name: 'parent_endpoint', message: 'Parent Endpoint', initial: "x" },
    { name: 'child_endpoint', message: 'Child Endpoint', initial: "default_c_endpoint" },
  ]
});

prompt.run()
   .then(async value => {
     console.log(value.parent_endpoint,value.child_endpoint);
   })
   .catch(console.error);
   
