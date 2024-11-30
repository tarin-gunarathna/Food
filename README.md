<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Food Delivery App</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  
</head>

<style>
    body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(120deg, #fdfbfb, #ebedee);
  color: #333;
}

.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

header h1 {
  font-size: 2.5rem;
  color: #ff5722;
  margin: 0 0 10px;
  text-align: center;
  animation: fade-in 2s ease-out;
}

header .subheader {
  text-align: center;
  font-size: 1rem;
  color: #666;
}

section {
  margin-top: 30px;
}

h2 {
  color: #ff5722;
  margin-bottom: 10px;
}

ul, ol {
  padding-left: 20px;
}

ul li, ol li {
  line-height: 1.8;
}

pre {
  background: #f4f4f4;
  padding: 10px;
  border-left: 4px solid #ff5722;
  border-radius: 4px;
  overflow-x: auto;
}

pre code {
  font-family: 'Courier New', Courier, monospace;
  color: #555;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 2s ease-out;
}

.animate-slide-in {
  animation: slide-in 2s ease-out;
}

</style>

<body>
  <div class="container">
    <header>
      <h1 class="animate-fade-in">🍔 Food Delivery App</h1>
      <p class="subheader animate-slide-in">
        Seamlessly connect users with their favorite meals through cutting-edge technology and an intuitive UI.
      </p>
    </header>

    <section class="features">
      <h2>🌟 Features</h2>
      <ul>
        <li>🌈 User-Friendly Interface</li>
        <li>⚡ Real-Time Updates</li>
        <li>🔒 Secure Backend</li>
        <li>💾 Scalable Database</li>
        <li>📱 Cross-Platform Experience</li>
        <li>🎨 Responsive Design</li>
      </ul>
    </section>

    <section class="tech-stack">
      <h2>🛠️ Tech Stack</h2>
      <p><strong>Frontend:</strong> React Native, JavaScript, CSS</p>
      <p><strong>Backend:</strong> Java (Hibernate framework)</p>
      <p><strong>Database:</strong> MySQL</p>
      <p><strong>API Communication:</strong> Fetch API</p>
    </section>

    <section class="key-modules">
      <h2>🎯 Key Modules</h2>
      <ol>
        <li>User Authentication</li>
        <li>Restaurant Listing</li>
        <li>Food Categories</li>
        <li>Cart Management</li>
        <li>Order Tracking</li>
        <li>Payment Integration</li>
      </ol>
    </section>

    <section class="how-to-run">
      <h2>🚀 How to Run the Project</h2>
      <pre>
<code>
1. Clone the repository:
   git clone https://github.com/your-username/food-delivery-app.git
   cd food-delivery-app

2. Install dependencies:
   npm install

3. Set up the backend:
   - Configure MySQL database.
   - Run the Hibernate-based Java backend.

4. Start the app:
   npx expo start

5. Enjoy the experience on your emulator or physical device!
</code>
      </pre>
    </section>
  </div>
</body>
</html>
