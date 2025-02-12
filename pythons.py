import tensorflow as tf
import keras
from tensorflow.keras import layers
from tensorflow.keras.preprocessing.image import ImageDataGenerator
#test
# Build the CNN model
model = keras.Sequential([
    # First Convolution + Pooling Layer
    layers.Conv2D(32, (3,3), activation='relu', input_shape=(128, 128, 3)),
    layers.MaxPooling2D(2,2),

    # Second Convolution + Pooling Layer
    layers.Conv2D(64, (3,3), activation='relu'),
    layers.MaxPooling2D(2,2),

    # Third Convolution + Pooling Layer
    layers.Conv2D(128, (3,3), activation='relu'),
    layers.MaxPooling2D(2,2),

    # Flatten the layers and add dense layers
    layers.Flatten(),
    layers.Dense(512, activation='relu'),
    layers.Dense(1, activation='sigmoid')  # 1 output neuron for binary classification
])

# Compile the model
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# View model summary
model.summary()


# Define paths
train_dir = "/Users/gurupavan/Documents/SERPENTAI/dataset"
val_dir = "/Users/gurupavan/Documents/SERPENTAI/dataset"

# Data augmentation & normalization
train_datagen = ImageDataGenerator(rescale=1./255, rotation_range=20, zoom_range=0.2, horizontal_flip=True)
val_datagen = ImageDataGenerator(rescale=1./255)


# Load images from directories
train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(128, 128),  
    batch_size=32,
    class_mode='binary'  # Binary classification (venomous vs. non-venomous)
)

val_generator = val_datagen.flow_from_directory(
    val_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='binary'
)



# Train the model
history = model.fit(
    train_generator,
    validation_data=val_generator,
    epochs=10,  # You can increase if needed
    steps_per_epoch=len(train_generator),
    validation_steps=len(val_generator)
)


loss, accuracy = model.evaluate(val_generator)
# After training your model
model.save('snake_venomous_model.h5')  # Save the model in HDF5 format

print(f"Validation Accuracy: {accuracy * 100:.2f}%")



