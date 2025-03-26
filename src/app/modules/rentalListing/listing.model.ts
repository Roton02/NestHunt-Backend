import { model, Schema } from 'mongoose'
import ILinting from './listing.interface'

const blogSchema = new Schema<ILinting>(
  {
    landLoardId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rentAmount: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const listing = model<ILinting>('listing', blogSchema)
