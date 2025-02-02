from tensorflow.keras.preprocessing import image
import keras
import numpy as np

# Load the trained model (assuming you've saved it)
model = keras.models.load_model('snake_venomous_model.h5')

# Load an image to test
img_path = 'sp.jpg'  # Update with the path to the new image
img = image.load_img(img_path, target_size=(128, 128))

# Convert image to array and preprocess
img_array = image.img_to_array(img)  # Convert image to numpy array
img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
img_array /= 255.0  # Normalize image pixels to [0, 1]

# Predict the class
prediction = model.predict(img_array)

# Convert prediction to readable output
if prediction[0] > 0.5:
    print("The snake is venomous.")
else:
    print("The snake is non-venomous.")
