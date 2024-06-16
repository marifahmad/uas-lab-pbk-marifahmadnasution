<template>
  <div class="contact-page" >
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>Get in touch with us.</p>
    </div>
    <div class="contact-form">
      <form>
        <div class="form-group">
          <label for="name" class="form-label">Name:</label>
          <input type="text" id="name" name="name" required class="form-input">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" name="email" required class="form-input">
        </div>
        <div class="form-group">
          <label for="message" class="form-label">Message:</label>
          <textarea id="message" name="message" rows="4" required class="form-input"></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button><br><br>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  text-align: center;
  color: #0da960;
  
  background:transparent;
    border: 2px solid rgb(255, 255, 255, .2);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    width: 700px;justify-content: center;
      align-items: center;
      margin-left: 230px
}

.contact-header {
  margin-bottom: 30px;
  
}
.contact-header h1{
  color: rgb(51, 224, 12);
  text-shadow: #fff;
}
.contact-header p{
  color: rgb(51, 224, 12);
  text-shadow: #fff;
}

.contact-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  color: #007bff; /* Warna label */
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #007bff; /* Warna border input */
  border-radius: 5px;
}

textarea {
  resize: vertical;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
