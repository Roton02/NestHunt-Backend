import { Router } from 'express'
import { blogControllers } from './blog.controller'
import { BlogValidation } from './blog.validation'
import zodValidator from '../../middleware/validator'
import auth from '../../middleware/auth'

const listingRouter = Router()
// listingRouter.patch(
//   '/:id',
//   auth('user'),
//   zodValidator(BlogValidation.blogUpdateValidation),
//   blogControllers.updateBlog
// )
// listingRouter.delete('/:id', auth('user', 'admin'), blogControllers.deleteBlog)

listingRouter.post(
  '/',
  auth('user'),
  zodValidator(BlogValidation.blogCreateValidation),
  blogControllers.createBlog
)

// listingRouter.get('/', blogControllers.getAllBlog)

export default listingRouter
///api/blogs/:id
