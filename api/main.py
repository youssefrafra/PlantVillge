from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import os

app = FastAPI()

os.environ['CUDA_VISIBLE_DEVICES'] = '-1'
MODEL = tf.keras.models.load_model("../models/1")
CLASS_NAMES = ['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']


def read_image(data: bytes) -> dict:
    img = np.array(Image.open(BytesIO(data)).resize((256, 256)))
    return img


@app.get("/test")
async def ping():
    return "Hello"


@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    img = read_image(await file.read())
    img_batch = np.expand_dims(img, axis=0)
    prediction = MODEL.predict(img_batch)
    predicted_class = CLASS_NAMES[np.argmax(prediction[0])]
    confidence = np.max(prediction[0])
    return {
        "class": predicted_class,
        "confidence": float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
