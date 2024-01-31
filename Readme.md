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

   The server will be accessible at [https://samplingserver.onrender.com/api/getData](https://samplingserver.onrender.com/api/getData).

## Customization

- **Algorithm Parameters:** Adjust the parameters of the adaptive sampling algorithm in the `sampling` function to fine-tune the downsampling process.

## Steps

1. **Initialize:**

   - Start with the first data point as the initial reference.

2. **Moving Window:**

   - Maintain a moving window of profit percentage values.
   - For each new data point, add it to the window and remove the oldest value to keep the window size constant.

3. **Variance Calculation:**

   - Calculate the variance of profit percentage values within the moving window.

4. **Threshold Comparison:**

   - Compare the calculated variance to a threshold value.

5. **Change Detection:**

   - If the variance exceeds the threshold, consider the current data point as representing a significant change.

6. **Compression:**

   - Retain the data point representing a significant change in the compressed dataset.

7. **Continue:**
   - Continue the process for each subsequent data point.
