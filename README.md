# MedPlug: A Comprehensive Pharmacy E-commerce Platform

**MedPlug** is an innovative e-commerce platform designed to streamline the process of buying medications online. The platform ensures a secure, efficient, and user-friendly experience for customers, while providing robust tools for administrators to manage products, orders, and sales analytics.

This project is built using modern web technologies with a focus on performance, security, and intuitive design.

---

## Features and Functionality

### **1. User Authentication and Security**
- **Sign Up and Login**: Create and manage user accounts securely.
- **Forgot Password**: Reset passwords through an easy-to-follow process.
- **Social Login Integration**: Log in using social media accounts for ease of access.
- **User Profile Management**: Edit and update personal details within a secure profile section.
- **Email Verification**: Verify user accounts through OTP-based email confirmation.
- **JSON Token Authorization**: Secure authentication for enhanced security and SEO.
- **Personalized Dashboards**: Tailored dashboards for users and administrators.

---

### **2. Product Catalog**
- **Search Functionality**: Find medications by name or category effortlessly.
- **Product Descriptions**: Detailed information about each product to help users make informed decisions.
- **Filter by Price and Category**: Seamless filtering of products based on price range or categories.
- **Payment Validation**: Ensure user location and authentication before proceeding to payment.

---

### **3. Order and Checkout**
- **Add to Cart**: Users can save items for later purchase with a convenient cart feature.
- **Payment and Checkout**: Support for multiple payment methods to enhance user convenience.
- **Coupon Codes**: Special discounts applied through unique coupon codes.

---

### **4. Admin Panel**
- **Product Management**: Create, update, and delete products with ease.
- **Category Management**: Manage categories for better organization of products.
- **Order Management**: Track and manage orders efficiently.
- **Customer Order History**: Access detailed records of past customer orders.
- **Sales Analytics**: Visualize sales data and identify top-performing products through charts.

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB/MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: AWS/Heroku

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/medplug.git
   cd medplug
   ```

2. **Install Dependencies**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set Up Environment Variables**:
   Create `.env` files for both frontend and backend with the necessary configurations.

4. **Run the Development Servers**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the Application**:
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## License
This project is licensed under the MIT License. Contributions and feedback are welcome! 🎉

For more details, feel free to raise an issue or contact us.
