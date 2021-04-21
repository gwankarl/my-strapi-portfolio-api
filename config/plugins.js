module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production'){
    return {
      upload:{
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('drqrlhfue'),
          api_key: env('472125493755398'),
          api_secret: env('XmrCAH0eVutQPey58zT_GuMcUv4'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      }
    }
  }
  
  return {

  }
}