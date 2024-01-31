## Orange Farming

The goal is to efficiently reduce the dataset size while preserving key patterns through adaptive sampling & Display it in a user-friendly manner through a Graph.

## Features

- **Adaptive Sampling Algorithm**: The application implements a custom adaptive sampling algorithm that dynamically identifies significant changes or fluctuations in the time vs profit% data, resulting in a compressed dataset that captures essential patterns.

- **Node.js Backend**: The backend is implemented in Node.js, handling data processing and adaptive sampling.

- **React**: The frontend provides a simple user interface to visualize the orange farming dashboard and the downsampled data displayed as a area chart.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NitinJuyal1610/orangeFarming
   cd orangeFarming
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

   The application will be accessible at [https://nj-orange-farming.vercel.app/](https://nj-orange-farming.vercel.app/).
   server will be accessible at [https://samplingserver.onrender.com/api/getData](https://samplingserver.onrender.com/api/getData).

## Customization

- **Algorithm Parameters:** Adjust the parameters of the adaptive sampling algorithm in the `sampling` function to fine-tune the downsampling process.
