const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "i5ukqt9n",
  dataset: "production",
  useCdn: true 
})

module.exports = client;