Phase1:
"# shop-API" 
Summary: It is a demonstration of REST functionality using a full stack opertation that is a server responding to clients/browsers HTTP request by performing CRUP operations on Schema Objects in database and returning those objects in JSON format.

Setup: 
The Script Logic is Performed using NodeJS with the help of Body-Parser, Express Libraries installed via npm. Database connectivity to MongoDB is managed via Mongoose.

Functions:

Database:
A NoSQL database build using MongoDB consisting of 2 models/Schema 
1) products: 
  * attributes : id, version, price, title, likes, image url
2) Wishlist: list of products.id


Operation:
Client/Browser :can request for list of products stored in database using GET url : /products
               :can update/add a product to database using POST request to server.
               :can add favourite products to wishlist using PUT
               :can return products in wishlist using GET
               
Test:
All the URLs were successfully tested using POSTMAN and return JSON output.
Server listens for request on port 3007.

Phase2: React App creation for modularizing the functionality and giving it a proper UI.



