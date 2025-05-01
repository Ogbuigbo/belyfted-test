# Belyfted Dashboard UI

A responsive Next.js implementation of the Belyfted financial dashboard, developed as part of a frontend assessment.

![Belyfted Dashboard Screenshot](https://i.imgur.com/placeholder.jpg)

## Project Overview

This project is a pixel-perfect implementation of the Belyfted dashboard UI design from Figma. It's built with Next.js and TypeScript, with custom CSS styling (no frameworks like Tailwind or Bootstrap as per requirements). The UI is fully responsive across desktop, tablet, and mobile devices.

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Recharts**: Used for implementing the transaction bar chart
- **CSS Modules**: For component-scoped styling without CSS frameworks
- **Responsive Design**: Media queries for optimal display across all device sizes

## Features Implemented

1. **Dashboard Overview**: 
   - Account balance display with currency selection
   - Ledger balance, locked balance, and rolling reserve information
   - Transaction summary with visual representation

2. **Navigation**:
   - Sidebar with navigation links
   - Active state indicators

3. **Transaction Visualization**:
   - Monthly transaction bar chart using Recharts
   - Payin/Payout toggle functionality
   - Transaction amount highlighting

4. **User Management**:
   - User table with sorting and pagination
   - Status indicators with appropriate styling

5. **Action Cards**:
   - "Make Payout" and "Request Virtual Account" cards with CTAs

## Project Structure

```
belyfted-dashboard/
├── components/
│   ├── BalanceCard/
│   ├── Sidebar/
│   ├── PaymentChart/
│   ├── UserTable/
│   └── ...
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   └── ...
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   └── ...
├── public/
│   ├── images/
│   └── ...
├── types/
│   └── index.ts
├── utils/
│   └── ...
├── README.md
└── package.json
```

## Implementation Details

### Responsive Design

The dashboard is fully responsive with three major breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px 
- Desktop: > 1024px

CSS media queries were used to adjust layouts, font sizes, and component dimensions across different screen sizes.

### Custom Components

- **BalanceCard**: Displays account balances with currency selection dropdown
- **TransactionChart**: Interactive bar chart showing monthly transaction data
- **SummaryDoughnut**: Circular visualization of Payin/Payout distribution
- **UserTable**: Sortable and paginated user management table
- **Sidebar**: Collapsible navigation sidebar that transforms to bottom navigation on mobile


### Custom Styling

All styling was implemented with CSS Modules without relying on any CSS frameworks, as per the requirements. The styling closely follows the Figma design specifications, including:
- Color schemes
- Typography
- Spacing
- Animations and transitions

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/belyfted-dashboard.git
cd belyfted-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Future Improvements

- Implement dark/light theme toggle
- Add animations for better user experience
- Connect to a backend API for real data
- Implement user authentication
- Add more interactive features to the charts
- Implement filtering and search functionality for the table

