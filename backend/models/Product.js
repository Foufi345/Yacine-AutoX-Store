import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  images: {  
    type: [String],
    required: [true, 'At least one image is required'],
    validate: {
      validator: (images) => images.length > 0,
      message: 'At least one image is required'
    }
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0.01, 'Price must be at least 0.01'],
    get: (price) => parseFloat(price).toFixed(2) 
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Lighting', 'Wheels', 'Electronics', 'Interior', 'Exterior'],
      message: '{VALUE} is not a valid category'
    }
  }
}, { 
  timestamps: true,
  toJSON: { getters: true }, 
  toObject: { getters: true } 
});

const Product = mongoose.model('Product', productSchema);
export default Product;