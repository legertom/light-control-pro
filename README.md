# LightControlPro

LightControlPro is a simple React app that allows you to control your Philips Hue lights. The app connects to your Hue Bridge, enabling you to manage your Hue light settings easily.

## Installation & Setup

To get started with LightControlPro, follow these steps:

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/legertom/light-control-pro.git
   ```

2. Change to the `light-control-pro` directory and install the dependencies:

   ```bash
   cd light-control-pro
   npm install
   ```

3. Create a `.env` file in the project's root directory to store your Hue Bridge IP address and username:

   ```
   REACT_APP_IP_ADDRESS='192.168.1.1'
   REACT_APP_USERNAME='nxjwo34234nfoiuh32423'
   ```

   Replace the example values with your actual Hue Bridge IP address and username. To obtain these credentials, follow the steps in the "Getting Your Hue Credentials" section below.

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the LightControlPro app.

## Getting Your Hue Credentials

To get your Hue Bridge IP address and to obtain a username for your Hue Bridge, follow [Philips Hue's official guide](https://developers.meethue.com/develop/get-started-2/) on creating a new username.

## Contributing

LightControlPro is an open-source project, and we welcome your contributions, ideas, and feedback. Feel free to fork the repository, create issues, or submit pull requests. We appreciate your support in making the LightControlPro app better for everyone.

## Support & Feedback

If you have any questions or feedback about this app, please visit the author's portfolio website at [http://tomleger.dev](http://tomleger.dev) and use the contact form to get in touch.

Thank you for using LightControlPro, and happy coding!