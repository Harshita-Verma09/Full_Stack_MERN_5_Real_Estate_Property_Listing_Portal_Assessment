# Real Estate Property Listing Portal

## Name

Real Estate Property Listing Portal

## Features

- Property listing with Add / Edit / Delete operations
- Search across properties (search implemented in frontend; can call backend for server-side search)
- Pagination for listings to handle large result sets
- Toast notifications for user feedback (uses `react-toastify`)
- Responsive UI with property cards and property details

## Workflow

1. User opens the Home page to view paginated property listings.
2. User uses the search/filter input to narrow results; results and pagination update.
3. User clicks a property to open the Property Details page.
4. Authenticated users (if enabled) can add or edit properties via Add / Edit pages.
5. Frontend uses Axios to call backend API; backend persists data to MongoDB via Mongoose.
6. Toasts show success/error messages for create/edit/delete actions.

## Technology

- Backend: Node.js, Express, MongoDB (Mongoose), dotenv, CORS, Morgan
- Frontend: React, Vite, React Router, Axios, react-toastify
- Dev tools: nodemon (backend), Vite dev server (frontend)

## System Design Diagrams (placeholder images)

Replace these placeholder links with your real images later:

- Architecture diagram: https://example.com/architecture-diagram.png
- Data flow / Sequence diagram: https://example.com/dataflow-diagram.png

## Folder Structure

Backend (server):

```
backend/
  package.json
  server.js
  config/
    db.js
  controllers/
    propertyController.js
  middleware/
    errorMiddleware.js
  models/
    Property.js
  routes/
    propertyRoutes.js
```

Frontend (client):

```
frontend/
  package.json
  index.html
  vite.config.js
  public/
  src/
    main.jsx
    App.jsx
    components/
      Navbar.jsx
      PropertyCard.jsx
      Pagination.jsx
      SearchFilter.jsx
      Loader.jsx
    pages/
      Home.jsx
      AddProperty.jsx
      EditProperty.jsx
      PropertyDetails.jsx
    services/
      api.js
```

## Notes

- Toast notifications are implemented using `react-toastify` in the frontend.
- Pagination and search features are implemented in frontend components and may use backend endpoints for server-side filtering if desired.

## Run (Local Development)

1) Backend

```bash
cd backend
npm install
# copy .env.example to .env and set MONGO_URI
npm run dev
```

2) Frontend

```bash
cd frontend
npm install
npm run dev
```

## Images / Uploads

At the end you wanted to upload two images: update the System Design Diagrams links above with your real image URLs or upload files and I can update these links for you.
