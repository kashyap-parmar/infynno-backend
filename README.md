# Properties Listing Backend

This repository contains the backend for the Properties Listing application. It provides a simple API to search for properties based on various parameters.

## Setup Instructions

To set up the project locally, follow the steps below:

### 1. Clone the repository
Clone the repository to your local machine:
```bash
git clone https://github.com/kashyap-parmar/infynno-backend.git
```

### 2. Install dependencies
Navigate to the project directory and install the dependencies:
```bash
cd <project-directory>
npm install
```
This will install all the required dependencies for the project.

### 3. Start the server
After installing the dependencies, you can start the server using

```bash
npm start
```
This will start the server, and it should be accessible locally on http://localhost:5000 (or another port, if specified).

## API Details

Endpoint: GET /api/v1/properties

This API endpoint allows you to search for properties based on various query parameters.

### query parameters.

| Parameter | Type   | Description                                      | Example Value |
|-----------|--------|--------------------------------------------------|---------------|
| search    | string | Search keyword (e.g., city, neighborhood, etc.)  | sac           |
| type      | string | Property type (e.g., "Mieten", "Kaufen")         | Mieten        |
| category  | string | Property category (e.g., "Haus", "Wohnung")        | Haus          |
| minPrice  | number | Minimum price for the property                   | 1000          |
| maxPrice  | number | Maximum price for the property                   | 1500000       |
| minArea   | number | Minimum area in square meters                    | 30            |
| maxArea   | number | Maximum area in square meters                    | 200           |
| room      | number | Minimum number of rooms                          | 6             |
| page      | number | Page number for pagination                       | 1             |
| limit     | number | Number of results per page                       | 9             |


### Example Request:

GET https://properties-listing-backend.onrender.com/api/v1/properties?search=sac&type=Mieten&category=Haus&minPrice=1000&maxPrice=1500000&minArea=30&maxArea=200&room=6&page=1&limit=9

## Deployment

The Properties Listing Backend is deployed and can be accessed online.

**Deployed API URL**:  

[https://properties-listing-backend.onrender.com](https://properties-listing-backend.onrender.com)

You can make requests to the API directly through the deployed link.