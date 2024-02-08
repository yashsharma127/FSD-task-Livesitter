from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/overlaydb'  # Update with your MongoDB URI
mongo = PyMongo(app)

@app.route('/overlay', methods=['POST'])
def save_overlay():
    data = request.json
    content = data.get('content')
    media = data.get('media')

    if not content or not media:
        return jsonify({'error': 'Content and media are required'}), 400

    # Save overlay data to MongoDB
    overlay_id = mongo.db.overlays.insert_one({'content': content, 'media': media}).inserted_id
    return jsonify({'overlay_id': str(overlay_id)}), 201

@app.route('/overlay/<overlay_id>', methods=['GET'])
def get_overlay(overlay_id):
    overlay = mongo.db.overlays.find_one({'_id': overlay_id})
    if overlay:
        return jsonify(overlay), 200
    else:
        return jsonify({'error': 'Overlay not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
