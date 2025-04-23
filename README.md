[Babel](https://babeljs.io/) 

# Lawyer Appointment Booking Web App – React Project

This is a fully functional React-based Lawyer Appointment Booking Web App that allows users to browse lawyer profiles, view availability, book appointments, and manage their bookings. The application emphasizes user experience with dynamic routing, localStorage persistence, loading states, toast notifications, and visual data representation using charts.


🔧 Key Features & Functionality
🏠 Home Page
    1. Displays 12 lawyer profiles in total.

    2. Initially loads only 6 profiles, with a “Show All” button to reveal all 12.

    3. Each lawyer is presented in a Card layout with:

        *Image, Name, Specialization, Experience, License Number

        * A “View Details” button for dynamic navigation to the single lawyer detail page.

👤 Single Lawyer Detail Page (/lawyer/:id)
    1. Dynamically loads lawyer details using URL parameters.

    2. Displays:

        * Lawyer's name, image, fee, experience, availability days

    3. Availability logic:

       * If today is not among the lawyer’s available days, shows “Lawyer is not available today”.

    4. Includes a “Book Appointment” button:

        * If already booked (from localStorage): Shows Toastify warning.

        * If not booked: Saves to localStorage, shows Toastify success, and redirects to the Bookings page.

📅 Bookings Page
    1. Displays all booked appointments from localStorage.

    2. Each appointment shows:

        * Name, Specialization, Fee, and a “Cancel Appointment” button.

        * Canceling removes the appointment from localStorage and shows a Toastify notification.

    3. If no appointments exist:

        * Shows a “Book Appointment” button to redirect to the homepage.

    4. Integrates Recharts to visualize lawyer fees for booked appointments.

        * If no appointments: Chart is hidden.

❌ 404 Page (Error Route Handling)
    1. If user visits a wrong route, a custom 404 error page is shown.

    2. Includes a redirect button to the Home page.

⚠️ Invalid Lawyer ID
    1. If a dynamic route is accessed using an invalid ID (not in database), a message “No Lawyer Found!!” is shown.

    2. A “View All Lawyer” button lets users return to the home page.

🚀 Technical Highlights
    * React Router DOM: for multi-page navigation and dynamic routes.

    * LocalStorage: to persist booking data across sessions.

    * Toastify: for stylish success and error notifications.

    * Recharts: to visually display lawyer fees on the Bookings page.

    * React CountUp: animated stats on the homepage.

    * Custom Loaders: shown on every page during route transitions and data loading.