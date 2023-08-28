# Personal-Budget-Project
This project is a simple API for managing personal budget envelopes. It allows you to create, update, delete, transfer funds between envelopes, and retrieve envelope information.
## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone the repository: git clone https://github.com/meletioskorres/personal-budget-project.git

2. Navigate to the project directory: cd personal-budget-project

3. Install the required dependencies: npm install

4. Start the server: npm start

## Usage

### Endpoints

- **GET /envelopes**: Retrieve all envelopes.
- **GET /envelopes/:id**: Retrieve envelope by ID.
- **POST /envelopes**: Create a new envelope.
- **PUT /envelopes/:id**: Update envelope by ID.
- **DELETE /envelopes/:id**: Delete envelope by ID.
- **POST /envelopes/transfer/:from/:to**: Transfer funds between envelopes.

### Examples

- Retrieve all envelopes:
GET http://localhost:3000/envelopes

- Create a new envelope:
POST http://localhost:3000/envelopes
Body: { "title": "Groceries", "budget": 200 }

- Update envelope by ID:
PUT http://localhost:3000/envelopes/1
Body: { "title": "Updated Groceries", "budget": 250 }

- Delete envelope by ID:
DELETE http://localhost:3000/envelopes/1


- Transfer funds between envelopes:
POST http://localhost:3000/envelopes/transfer/1/2
Body: { "budget": 50 }
