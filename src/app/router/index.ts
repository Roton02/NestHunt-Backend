import { Router } from 'express'
import listingRouter from '../modules/rentalListing/listing.routes'
import userRouter from '../modules/auth/user.routes'

const router = Router()

const routers = [
  {
    path: '/listing',
    router: listingRouter,
  },
  {
    path: '/',
    router: userRouter,
  },
]

routers.forEach((route) => router.use(route.path, route.router))

export default router
