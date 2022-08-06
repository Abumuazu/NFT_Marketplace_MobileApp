export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
   {
    name: "name" ,
    tyoe: "string",
    title: "Restaurant name",
   },
   {
    name: "short_description" ,
    tyoe: "string",
    title: "short description",
   },
   {
    name: "image" ,
    tyoe: "image",
    title: "image of the Restaurant",
   },
   {
    name: "long" ,
    tyoe: "number",
    title: "longitude of the restaurant",
   },
   {
    name: "lat" ,
    tyoe: "number",
    title: "latitude of the restaurant",
   },
   {
    name: "address" ,
    tyoe: "string",
    title: "Restaurant address",
   },
   {
    name: "ratings" ,
    tyoe: "number",
    title: "Enter a rating from 1 and 5",
   },
   {
    name: "type" ,
    title: "Category",
    type: "reference", 
    to: [{type: "category"}]
   }, 
   {
    name: "dishes" ,
    title: "Dishes",
    type: "array", 
    to: [{type: "category"}],
    type: [{type: "reference", to: [{type: "dish"}]}]
   }
    
  ],
}
