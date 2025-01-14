# Gallery Application

This project is a React-based image gallery application built with TypeScript.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:
```bash
npm run dev
```
This will launch the application in development mode. Open [http://localhost:5173](http://localhost:5173) in your browser to view it.

## Building the Application

To build the application for production:
```bash
npm run build
```
The compiled output will be in the `dist` folder.

## Testing

To run tests:
```bash
npm run test
```
This will execute Jest tests defined in the `src` directory.

## Folder Structure

```plaintext
.
├── src
│   ├── components
│   │   └── gallery
│   │       ├── index.tsx    # Main gallery component
│   │       ├── index.css    # Styles for the gallery
│   │       └── index.test.tsx  # Tests for the gallery component
│   └── constants
│       └── images.ts        # Image data for the gallery
├── public                   # Static assets
├── package.json             # Project configuration and dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```
![gallery](https://github.com/user-attachments/assets/e094b7d3-966e-4f19-94f4-33af6d60c960)
