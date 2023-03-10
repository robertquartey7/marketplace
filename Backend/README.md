# marketplace
# skycart
## Buy everything under the sun

## Authentication:

### The API should have an authentication endpoint that allows developers to obtain an access token or API key to access protected endpoints.

## Product Catalog:

### The API should provide endpoints to retrieve the product catalog, including products, categories, and product details. The endpoints should allow filtering, sorting, and searching based on various criteria.

## Cart Management:

### The API should provide endpoints to manage the user's shopping cart, including adding or removing items, updating quantities, and retrieving the cart contents.

## Checkout:

### The API should provide endpoints to handle the checkout process, including submitting orders, applying discounts, calculating taxes and shipping costs, and processing payments.

## User Management:

### The API should provide endpoints to manage user accounts, including creating new accounts, updating user profiles, resetting passwords, and retrieving order history.

## Search and Filtering:

### Users can search for products and services using keywords and filters such as category, price range, and location.

## Reviews and Ratings:

### The API should provide endpoints to allow users to leave reviews and ratings for products, retrieve reviews and ratings for a specific product, and manage reviews and ratings.

## Order Management:

### The API should provide endpoints to manage orders, including retrieving orders, updating order status, canceling orders, and generating invoices.

## Notifications:

### The API should provide endpoints to allow users to subscribe to notifications, including order status updates, shipment tracking, and product availability.

<!-- Support: The API should provide endpoints to allow developers to report issues, request technical assistance, and access documentation and resources. -->

<!-- routes

Marketplace API
Public Routes
Able to list store items
store{
    id int
    
   store -- all items[
    item1, items2, item3
   ]
    type iphone
}

item{
    id
    name
    imageUrl
    description
    category home
    price 
    review
    

}

cart {
cart - user
cart - -  items
}
user{
    id 
    first
    last
    username 
    email
    password
}

array.find( type == iphone)

items-> iphone mac imac ...
Get an item by ID (or a different type of unique identifier)
Get items that exist in a certain category (electronics, home appliances, utensils)
Get items that belong to a store
Protected routes
User can create a store

store{

}
User can create an item (or create many items) for their store
User can edit an item from their store
User can delete an item (or many items from their store)


 -->
