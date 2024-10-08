This repository contains backend code for menu management, including operations for categories, subcategories, and items. The routes and data models for Category, Subcategory, and Item were created and handled accordinly

- Live link of backend deployed on vercel: https://menu-management-five.vercel.app/

### Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB as Database**


## How to Run Locally

To run the application locally, follow these steps:

- **1. Clone the repository:**

```
git clone https://github.com/FelixFelicis555/Menu-ManageMent.git

```
- **2. Navigate to the project directory:**
```
cd Menu-Management
```

- **3. Install dependencies using npm:**
```
npm install
```

- **4 Set up your MongoDB database &  Update the MongoDB URI in the .env file.**

- **5. Start the server:**
```
npm start
```
- ** Now the sever will run on specified port locally**

## API Endpoints
  
## Categories

### Post a Category

- **Endpoint**: `/category`
- **Description**: Create a new category with provided details.
- **Request Body**
```json Object
{
    "categoryName": "Indian",
    "image": "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png",
    "description": "Indian Food Originates from Asian Nation India, known for its diverse culture",
    "taxApplicability": true,
    "tax": 18,
    "taxType": "GST"
}
```
- **Response**: Returns the created category object.

### Get All Categories

- **Endpoint**: `/category`
- **Description**: Retrieve all categories available in the system.
- **Response**: Returns an array of category objects.

### Get Category by Name

- **Endpoint**: `/category/:categoryName`
- **Description**: Retrieve a category by its unique name.
- **Response**: Returns the category object with the specified name.

### Update Category

- **Endpoint**: `/category/:categoryName`
- **Description**: Update attributes of a specific category.
- **Request Body**: JSON object with attributes to update.
  ``` Json Object
  {
    
    "description": "Indian Food Originates from Asian Nation India",
    "tax": 9,
  }
  ```

- **Response**: Returns the updated category object.

### Delete Category

- **Endpoint**: `/category/:categoryName`
- **Description**: Delete a category by its unique name.
- **Response**: Returns a message indicating successful deletion.

## Subcategories

### Post a Subcategory

- **Endpoint**: `/subcategories`
- **Description**: Create a new subcategory under a specified category.
- **Request Body**: JSON object with attributes: subcategoryName, categoryName.
```
{
    "categoryName":"Japnese",
    "subcategoryName":"Rice & Bread",
     "image":"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png",
    "description":"Originates from Japan",
    "taxApplicability":true,
    "tax":18,
    "taxType":"GST"
}
```
- **Response**: Returns the created subcategory object.

### Get All Subcategories

- **Endpoint**: `/subcategories`
- **Description**: Retrieve all subcategories available in the system.
- **Response**: Returns an array of subcategory objects.

### Get Subcategories by Category

- **Endpoint**: `/subcategories/:categoryName`
- **Description**: Retrieve all subcategories under a specific category.
- **Response**: Returns an array of subcategory objects.

### Get Subcategory by Name

- **Endpoint**: `/subcategory/:subcategoryName`
- **Description**: Retrieve a subcategory by its unique name.
- **Response**: Returns the subcategory object with the specified name.

### Update Subcategory

- **Endpoint**: `/subcategories/:subcategoryName`
- **Description**: Update attributes of a specific subcategory.
- **Request Body**: JSON object with attributes to update.
```
{
    "description":"Punjabi Food Originates from a Indian state Punjab where sikh population resides in high numbers",
    "tax":9
}
```
- **Response**: Returns the updated subcategory object.

### Delete Subcategory

- **Endpoint**: `/subcategories/:subcategoryName`
- **Description**: Delete a subcategory by its unique name.
- **Response**: Returns a message indicating successful deletion.

## Items

### Post an Item

- **Endpoint**: `/items`
- **Description**: Create a new item under a specified subcategory.
- **Request Body**: JSON object with attributes: itemName, image, categoryName, subcategoryName, description, taxApplicability, tax, baseAmount, discount.
```
{
    "itemName":"Punjabi Masala chole",
    
    "subcategoryName":"Punjabi",
    "description":"Punjabis take pride in their lassi, and it is made in every household and every restaurant in Punjab. Originally, lassi consumed in Punjab is sweet and creamy, with a generous serving of malai (cream) on top.",
    "taxApplicability":true,
    "tax":18,
    "baseAmount":100,
    "discount":10
}
```
- **Response**: Returns the created item object.

### Get All Items

- **Endpoint**: `/items`
- **Description**: Retrieve all items available in the system.
- **Response**: Returns an array of item objects.

### Get Items by Category

- **Endpoint**: `/items/category/:categoryName`
- **Description**: Retrieve all items under a specific category.
- **Response**: Returns an array of item objects.

### Get Items by Subcategory

- **Endpoint**: `/items/subcategory/:subcategoryName`
- **Description**: Retrieve all items under a specific subcategory.
- **Response**: Returns an array of item objects.

### Search Items

- **Endpoint**: `/items/search?name={partialName}`
- **Description**: Search items by partial name match.
- **Response**: Returns an array of item objects matching the partial name.

### Get Item by Name

- **Endpoint**: `/items/:itemName`
- **Description**: Retrieve an item by its unique name.
- **Response**: Returns the item object with the specified name.

### Update Item

- **Endpoint**: `/items/:itemName`
- **Description**: Update attributes of a specific item.
- **Request Body**: JSON object with attributes to update.
```
{
    "description":"Chole bhature is punjabi food. It tastes really good and its also famous in New Delhi.",
    "tax":9
}
```
- **Response**: Returns the updated item object.


### Delete Item

- **Endpoint**: `/items/:itemName`
- **Description**: Delete an item by its unique name.
- **Response**: Returns a message indicating successful deletion.

## Answer's to the questions asked.

### Which database have you chosen, and why?

- **Used MongoDB because of its flexible and documented-based schema, which helped in manipulating data easily with nested JSON object structures.**

- **I also used it because MongoDB doesn't have a fixed schema like the other relational databases and offers horizontal scalability.**

-  **Additionally,MongoDB's built-in replication ensures high availability, which is crucial for maintaining uptime in production environments.**
  
  

### 3 things that you learned from this assignment?

- **learned to resolve conflicts and errors by debugging and exploring what's going wrong.**
- **learned to write cleaner code and learned to design REST APIs in a better way.**
- **learned to model and manage one-to-many relationships b/w categories,subcategories & items in MongoDB.Also,explored new api-testing tools apart from PostMan such as Insomnia,ThunderClient.**

### What was the most difficult part of the assignment?

- **One of the difficult parts was designing the model schema where a category can have subcategories, which in turn has a couple of items in it.**

### What would you have done differently, given more time?

- **I would have added authentication part to the backend part and worked on building the basic frontend part.**
- **I would like to introduce more sophisticated error-handling middleware to handle different types of error.**
- ** Love to focus on Performance Optimization and Refactor the Codebase.**
