# Student Management System Frontend

This is the frontend application for the Student Management System, built with React and Vite.

## Features

- User authentication (login/register)
- Dashboard with statistics and charts
- Student management (CRUD operations)
- Profile management
- Settings configuration
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running on http://localhost:8000

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add the following:
```
VITE_API_URL=http://localhost:8000
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts
│   ├── pages/         # Page components
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies
```

## Technologies Used

- React 18
- React Router v6
- Vite
- Bootstrap 5
- Chart.js
- Axios
- Font Awesome

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 